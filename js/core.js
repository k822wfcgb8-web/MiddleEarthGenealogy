/* Shared data store. Data files call ME.add(...) and ME.tree(...). */
window.ME = {
  people: {},
  trees: [],
  sections: [
    { id: "elves",   name: "Elves",   blurb: "The Firstborn: the princes of the Noldor, the kings of the Teleri and Sindar, and the Half-elven who joined their line to Men." },
    { id: "men",     name: "Men",     blurb: "The Edain of the First Age, the kings of Númenor, the Dúnedain of Arnor and Gondor, the House of Eorl and the Men of the North." },
    { id: "dwarves", name: "Dwarves", blurb: "Durin's Folk, the Longbeards: the kings under the mountain and the kin of Balin, Glóin and Gimli." },
    { id: "hobbits", name: "Hobbits", blurb: "The great families of the Shire: Baggins, Took, Brandybuck and the Gamgees of Bagshot Row." }
  ],
  add: function (section, list) {
    list.forEach(function (p) {
      if (ME.people[p.id]) console.warn("Duplicate person id:", p.id);
      p.section = section;
      ME.people[p.id] = p;
    });
  },
  tree: function (t) { ME.trees.push(t); }
};
