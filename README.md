# Middle-earth Genealogy

Interactive family trees of the Elves, Men, Dwarves and Hobbits of Middle-earth, based on *The Hobbit*, *The Lord of the Rings* (with Appendices) and *The Silmarillion*.

- Open `index.html` in a browser; no server or internet connection needed.
- All data lives in `js/data/*.js` (one file per people). Each person is `{ id, n: name, t: title, aka, b: born, d: died, bio }`; hobbit dates are stored in Shire Reckoning (`S.R.`) and converted automatically.
- Trees are nested nodes: `{ p: personId, s: spouseId, kids: [...] }`, `{ p, u: [{ s, kids }] }` for several marriages, `{ gap: "text", kids }` for omitted generations, `ref: true` for someone shown in full elsewhere, and `link: "treeId"` for an explicit "continue in" badge.

Unofficial fan project; not affiliated with the Tolkien Estate.
