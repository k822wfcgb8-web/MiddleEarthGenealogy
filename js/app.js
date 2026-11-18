(function () {
  "use strict";
  var ME = window.ME;
  var P = ME.people;
  var TREES = {};
  ME.trees.forEach(function (t) { TREES[t.id] = t; });

  var app = document.getElementById("app");
  var dlg = document.getElementById("bio");
  var dlgBody = document.getElementById("bio-body");

  /* ---------- Index: appearances and relationships ---------- */
  var REL = {};   // id -> {parents:Set, spouses:Set, children:Set, main:[treeIds], any:[treeIds]}
  function rel(id) {
    if (!REL[id]) REL[id] = { parents: new Set(), spouses: new Set(), children: new Set(), main: [], any: [] };
    return REL[id];
  }
  function appear(id, tree, kind) {
    if (!P[id]) { console.warn("Unknown person id in tree " + tree.id + ": " + id); return; }
    var r = rel(id);
    if (r.any.indexOf(tree.id) < 0) r.any.push(tree.id);
    if (kind === "main" && r.main.indexOf(tree.id) < 0) r.main.push(tree.id);
  }
  function unionsOf(node) {
    if (node.u) return node.u;
    return [{ s: node.s || null, kids: node.kids || [] }];
  }
  function walk(node, tree, parents) {
    if (node.p) {
      appear(node.p, tree, node.ref ? "ref" : "main");
      if (parents) parents.forEach(function (par) {
        if (!par) return;
        rel(par).children.add(node.p);
        rel(node.p).parents.add(par);
      });
      unionsOf(node).forEach(function (un) {
        if (un.s) {
          appear(un.s, tree, "spouse");
          rel(node.p).spouses.add(un.s);
          rel(un.s).spouses.add(node.p);
        }
        (un.kids || []).forEach(function (k) { walk(k, tree, [node.p, un.s]); });
      });
    } else {
      (node.kids || []).forEach(function (k) { walk(k, tree, null); });
    }
  }
  ME.trees.forEach(function (t) { t.roots.forEach(function (n) { walk(n, t, null); }); });

  function homeTree(id) {
    var r = REL[id];
    if (!r) return null;
    return r.main[0] || r.any[0] || null;
  }

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function srToAge(y) {
    y = +y;
    return y <= 1421 ? "T.A. " + (y + 1600) : "F.O. " + (y - 1421);
  }
  function fmtDate(s) {
    return s ? String(s).replace(/S\.R\. (\d+)/g, function (m, y) { return srToAge(y); }) : "";
  }
  function dateLine(p) {
    var b = fmtDate(p.b), d = fmtDate(p.d);
    if (b && d) return b + " – " + d;
    if (b) return "b. " + b;
    if (d) return "d. " + d;
    return "";
  }
  function norm(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  function sectionName(id) {
    for (var i = 0; i < ME.sections.length; i++) if (ME.sections[i].id === id) return ME.sections[i].name;
    return id;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- Navigation ---------- */
  var nav = document.getElementById("main-nav");
  nav.innerHTML = ME.sections.map(function (s) {
    return '<a href="#/s/' + s.id + '" data-sec="' + s.id + '" class="sec-' + s.id + '">' + esc(s.name) + "</a>";
  }).join("");

  var current = { view: null, tree: null };

  function route() {
    var h = location.hash.replace(/^#\/?/, "").split("/");
    var personId = null;
    if (h[0] === "t" && TREES[h[1]]) {
      if (h[2] === "p" && P[h[3]]) personId = h[3];
      if (current.view !== "tree" || current.tree !== h[1]) renderTree(TREES[h[1]]);
      current.view = "tree"; current.tree = h[1];
      highlight(personId);
      if (personId) openBio(personId); else closeBio(true);
      setNav(TREES[h[1]].sections[0]);
      return;
    }
    closeBio(true);
    if (h[0] === "s" && sectionById(h[1])) {
      renderSection(sectionById(h[1]));
      current.view = "section:" + h[1]; current.tree = null;
      setNav(h[1]);
    } else {
      renderHome();
      current.view = "home"; current.tree = null;
      setNav(null);
    }
    window.scrollTo(0, 0);
  }
  function sectionById(id) {
    return ME.sections.filter(function (s) { return s.id === id; })[0];
  }
  function setNav(sec) {
    Array.prototype.forEach.call(nav.children, function (a) {
      a.classList.toggle("active", a.getAttribute("data-sec") === sec);
    });
  }
  function goPerson(id) {
    var t = (current.view === "tree" && REL[id] && REL[id].any.indexOf(current.tree) >= 0) ? current.tree : homeTree(id);
    if (!t) return;
    location.hash = "#/t/" + t + "/p/" + id;
  }

  /* ---------- Home ---------- */
  function renderHome() {
    var html = '<section class="hero"><h1>Middle-earth Genealogy</h1>' +
      '<p class="lede">Family trees of the Elves, Men, Dwarves and Hobbits, from the Elder Days to the Fourth Age. ' +
      'Choose a people to begin, or search for a name above. Select anyone in a tree to read a short biography.</p></section>' +
      '<section class="section-grid">';
    ME.sections.forEach(function (s) {
      var trees = ME.trees.filter(function (t) { return t.sections.indexOf(s.id) >= 0; });
      var people = new Set();
      trees.forEach(function (t) {
        Object.keys(REL).forEach(function (id) { if (REL[id].any.indexOf(t.id) >= 0) people.add(id); });
      });
      html += '<a class="section-card sec-' + s.id + '" href="#/s/' + s.id + '">' +
        '<h2>' + esc(s.name) + '</h2><p>' + esc(s.blurb) + '</p>' +
        '<span class="meta">' + trees.length + ' trees · ' + people.size + ' people</span></a>';
    });
    html += "</section>" + legendHtml();
    app.innerHTML = html;
  }

  /* ---------- Section ---------- */
  function renderSection(s) {
    var trees = ME.trees.filter(function (t) { return t.sections.indexOf(s.id) >= 0; });
    var html = '<div class="crumbs"><a href="#/">Home</a> › ' + esc(s.name) + '</div>' +
      '<section class="section-head sec-' + s.id + '"><h1>' + esc(s.name) + '</h1><p class="lede">' + esc(s.blurb) + '</p></section>' +
      '<ol class="tree-list">';
    trees.forEach(function (t, i) {
      var shared = t.sections.length > 1 && t.sections[0] !== s.id;
      html += '<li><a class="tree-card sec-' + t.sections[0] + '" href="#/t/' + t.id + '">' +
        '<span class="num">' + (i + 1) + '</span>' +
        '<span class="tc-body"><strong>' + esc(t.title) + '</strong>' +
        (shared ? ' <span class="shared">also in ' + esc(sectionName(t.sections[0])) + '</span>' : '') +
        '<span class="tc-desc">' + esc(t.desc) + '</span>' +
        (t.key ? '<span class="tc-key">Includes ' + t.key.map(function (k) { return esc(P[k] ? P[k].n : k); }).join(", ") + '</span>' : '') +
        '</span></a></li>';
    });
    html += "</ol>";
    app.innerHTML = html;
  }

  /* ---------- Tree ---------- */
  var zoom = 1;
  function renderTree(t) {
    var sec = sectionById(t.sections[0]);
    app.innerHTML = "";
    var head = el("div", "tree-head");
    head.innerHTML = '<div class="crumbs"><a href="#/">Home</a> › <a href="#/s/' + sec.id + '">' + esc(sec.name) + '</a> › ' + esc(t.title) + '</div>' +
      '<h1 class="sec-' + sec.id + '">' + esc(t.title) + '</h1>' +
      '<p class="lede">' + esc(t.desc) + '</p>' +
      (t.see && t.see.length ? '<p class="see">Related trees: ' + t.see.map(function (id) {
        return '<a href="#/t/' + id + '">' + esc(TREES[id].title) + '</a>';
      }).join(" · ") + '</p>' : '');
    app.appendChild(head);

    var bar = el("div", "toolbar");
    bar.innerHTML = '<button data-z="-1" aria-label="Zoom out">−</button><button data-z="0">Fit</button><button data-z="1" aria-label="Zoom in">+</button>' +
      '<span class="hint">Scroll or drag to move around the tree. Dashed boxes are shown in full in another tree.</span>';
    app.appendChild(bar);

    var wrap = el("div", "tree-wrap");
    var tree = el("div", "tree");
    var ul = el("ul", "roots");
    t.roots.forEach(function (n) { ul.appendChild(renderNode(n, t)); });
    tree.appendChild(ul);
    wrap.appendChild(tree);
    app.appendChild(wrap);
    app.insertAdjacentHTML("beforeend", legendHtml());

    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var z = +b.getAttribute("data-z");
      if (z === 0) zoom = Math.min(1, Math.max(0.3, (wrap.clientWidth - 20) / tree.scrollWidth));
      else zoom = Math.min(1.6, Math.max(0.3, zoom + z * 0.15));
      tree.style.zoom = zoom;
    });
    zoom = 1; tree.style.zoom = 1;
    enableDrag(wrap);
    requestAnimationFrame(function () {
      wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
    });
    window.scrollTo(0, 0);
  }

  function enableDrag(wrap) {
    var down = false, sx, sy, sl, st, moved;
    wrap.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; sx = e.clientX; sy = e.clientY; sl = wrap.scrollLeft; st = window.scrollY;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 6) return;
      moved = true; wrap.classList.add("dragging");
      wrap.scrollLeft = sl - dx;
      window.scrollTo(window.scrollX, st - dy);
    });
    window.addEventListener("pointerup", function () {
      if (!down) return;
      down = false;
      setTimeout(function () { wrap.classList.remove("dragging"); }, 0);
    });
    wrap.addEventListener("click", function (e) {
      if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
    }, true);
  }

  function card(id, t, opts) {
    var p = P[id];
    if (!p) return el("div", "card missing", "?" + esc(id));
    opts = opts || {};
    var c = el("div", "card sec-" + p.section + (opts.ref ? " ref" : "") + (opts.spouse ? " spouse" : ""));
    c.setAttribute("role", "button");
    c.setAttribute("tabindex", "0");
    c.setAttribute("data-id", id);
    var dl = dateLine(p);
    var html = '<span class="nm">' + esc(p.n) + '</span>' +
      (p.t ? '<span class="ti">' + esc(p.t) + '</span>' : '') +
      (dl ? '<span class="dt">' + esc(dl) + '</span>' : '');
    var links = (REL[id] ? REL[id].main : []).filter(function (x) { return x !== t.id; });
    if (opts.link && links.indexOf(opts.link) < 0) links.push(opts.link);
    if (links.length) {
      html += '<span class="go">' + links.map(function (x) {
        return '<a href="#/t/' + x + '/p/' + id + '" title="Continue in ' + esc(TREES[x].title) + '">→ ' + esc(TREES[x].short || TREES[x].title) + '</a>';
      }).join("") + '</span>';
    }
    c.innerHTML = html;
    return c;
  }

  function renderNode(node, t) {
    var li = el("li");
    if (node.gap || node.label) {
      var g = el("div", node.gap ? "gap" : "label-node", esc(node.gap || node.label));
      var fam = el("div", "family");
      fam.appendChild(g);
      li.appendChild(fam);
      appendKids(li, node.kids, t);
      return li;
    }
    var unions = unionsOf(node);
    if (node.u) {
      var f = el("div", "family");
      f.appendChild(card(node.p, t, { ref: node.ref, link: node.link }));
      li.appendChild(f);
      var uul = el("ul", "unions");
      unions.forEach(function (un) {
        var uli = el("li");
        var uf = el("div", "family");
        if (un.s) {
          uf.appendChild(el("span", "wed", "⚭"));
          uf.appendChild(card(un.s, t, { spouse: true }));
        }
        uli.appendChild(uf);
        appendKids(uli, un.kids, t);
        uul.appendChild(uli);
      });
      li.appendChild(uul);
      return li;
    }
    var fam2 = el("div", "family");
    fam2.appendChild(card(node.p, t, { ref: node.ref, link: node.link }));
    if (node.s) {
      fam2.appendChild(el("span", "wed", "⚭"));
      fam2.appendChild(card(node.s, t, { spouse: true }));
    }
    if (node.note) fam2.appendChild(el("span", "note", esc(node.note)));
    li.appendChild(fam2);
    appendKids(li, node.kids, t);
    return li;
  }
  function appendKids(li, kids, t) {
    if (!kids || !kids.length) return;
    var ul = el("ul");
    kids.forEach(function (k) { ul.appendChild(renderNode(k, t)); });
    li.appendChild(ul);
  }

  function highlight(id) {
    Array.prototype.forEach.call(app.querySelectorAll(".card.hl"), function (c) { c.classList.remove("hl"); });
    if (!id) return;
    var cards = app.querySelectorAll('.card[data-id="' + id + '"]');
    Array.prototype.forEach.call(cards, function (c) { c.classList.add("hl"); });
    var first = app.querySelector('.card[data-id="' + id + '"]:not(.ref):not(.spouse)') || cards[0];
    if (first) first.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
  }

  /* ---------- Clicks on cards ---------- */
  app.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;
    var c = e.target.closest(".card[data-id]");
    if (!c) return;
    location.hash = "#/t/" + current.tree + "/p/" + c.getAttribute("data-id");
  });
  app.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var c = e.target.closest && e.target.closest(".card[data-id]");
    if (!c) return;
    e.preventDefault();
    location.hash = "#/t/" + current.tree + "/p/" + c.getAttribute("data-id");
  });

  /* ---------- Biography popup ---------- */
  function nameList(set) {
    var ids = Array.from(set || []);
    if (!ids.length) return "";
    return ids.map(function (id) {
      return '<a href="#" data-person="' + id + '">' + esc(P[id].n) + "</a>";
    }).join(", ");
  }
  function siblings(id) {
    var s = new Set();
    var r = REL[id]; if (!r) return s;
    r.parents.forEach(function (par) {
      rel(par).children.forEach(function (c) { if (c !== id) s.add(c); });
    });
    return s;
  }
  function openBio(id) {
    var p = P[id], r = REL[id] || rel(id);
    var dl = dateLine(p);
    var sr = (/S\.R\./.test((p.b || "") + (p.d || ""))) ?
      [p.b ? "born " + p.b : "", p.d ? (/^S\.R\./.test(p.d) ? "died " + p.d : p.d) : ""].filter(Boolean).join("; ") : "";
    var rows = [
      ["Parents", nameList(r.parents)],
      ["Married", nameList(r.spouses)],
      ["Children", nameList(r.children)],
      ["Siblings", nameList(siblings(id))]
    ].filter(function (x) { return x[1]; });
    var html = '<div class="bio-head sec-' + p.section + '"><span class="bio-sec">' + esc(sectionName(p.section)) + '</span>' +
      '<h2>' + esc(p.n) + '</h2>' +
      (p.aka ? '<p class="aka">' + esc(p.aka) + '</p>' : '') +
      (p.t ? '<p class="bio-title">' + esc(p.t) + '</p>' : '') +
      (dl ? '<p class="bio-dates">' + esc(dl) + '</p>' : '') +
      (sr ? '<p class="bio-sr">Shire Reckoning: ' + esc(sr) + '</p>' : '') +
      '</div>' +
      '<p class="bio-text">' + esc(p.bio || "Little is recorded of this person beyond the family ties shown in the tree.") + '</p>' +
      (rows.length ? '<dl class="bio-rel">' + rows.map(function (x) { return "<dt>" + x[0] + "</dt><dd>" + x[1] + "</dd>"; }).join("") + "</dl>" : "") +
      (r.any.length ? '<p class="bio-trees">Appears in: ' + r.any.map(function (tid) {
        return '<a href="#/t/' + tid + '/p/' + id + '">' + esc(TREES[tid].title) + '</a>';
      }).join(" · ") + '</p>' : '');
    dlgBody.innerHTML = html;
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
  }
  function closeBio(silent) {
    if (dlg.open) dlg.close();
    if (!silent && current.view === "tree") {
      history.replaceState(null, "", "#/t/" + current.tree);
      highlight(null);
    }
  }
  document.getElementById("bio-close").addEventListener("click", function () { closeBio(false); });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) { closeBio(false); return; }
    var a = e.target.closest("a[data-person]");
    if (a) { e.preventDefault(); goPerson(a.getAttribute("data-person")); }
  });
  dlg.addEventListener("cancel", function (e) { e.preventDefault(); closeBio(false); });

  /* ---------- Search ---------- */
  var sIn = document.getElementById("search");
  var sOut = document.getElementById("search-results");
  var ALL = Object.keys(P).filter(function (id) { return REL[id]; }).map(function (id) {
    return { id: id, key: norm(P[id].n + " " + (P[id].aka || "") + " " + (P[id].t || "")) };
  });
  sIn.addEventListener("input", function () {
    var q = norm(sIn.value.trim());
    if (q.length < 2) { sOut.hidden = true; sOut.innerHTML = ""; return; }
    var hits = ALL.filter(function (x) { return x.key.indexOf(q) >= 0; })
      .sort(function (a, b) { return norm(P[a.id].n).indexOf(q) - norm(P[b.id].n).indexOf(q); })
      .slice(0, 14);
    sOut.innerHTML = hits.length ? hits.map(function (x) {
      var p = P[x.id];
      return '<li><a href="#/t/' + homeTree(x.id) + '/p/' + x.id + '"><span class="dot sec-' + p.section + '"></span>' + esc(p.n) +
        '<small>' + esc(p.t || sectionName(p.section)) + '</small></a></li>';
    }).join("") : '<li class="none">No matches</li>';
    sOut.hidden = false;
  });
  sOut.addEventListener("click", function () { sOut.hidden = true; sIn.value = ""; });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search")) sOut.hidden = true;
  });
  sIn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { var a = sOut.querySelector("a"); if (a) { a.click(); location.hash = a.getAttribute("href"); } }
    if (e.key === "Escape") { sOut.hidden = true; }
  });

  function legendHtml() {
    return '<aside class="legend"><h3>How to read the trees</h3><ul>' +
      '<li><span class="card mini">Name</span> a person; select to read their biography</li>' +
      '<li><span class="card mini ref">Name</span> shown in full in another tree</li>' +
      '<li><span class="wed">⚭</span> married to</li>' +
      '<li><span class="gap mini">⋯</span> generations left out</li>' +
      '<li><span class="go mini"><a>→ Tree</a></span> continue this line in another tree</li>' +
      '</ul><p>Dates are given by Age: <b>Y.T.</b> Years of the Trees, <b>F.A.</b> First Age, <b>S.A.</b> Second Age, <b>T.A.</b> Third Age, <b>F.O.</b> Fourth Age. ' +
      'Hobbit popups also give the Shire Reckoning year (S.R.), where T.A. = S.R. + 1600.</p></aside>';
  }

  window.addEventListener("hashchange", route);
  route();
})();
