/* ELVES (and the Half-elven) */
ME.add("elves", [
  /* House of Finwë */
  { id: "finwe", n: "Finwë", t: "High King of the Noldor", bio: "Leader of the Noldor on the Great Journey to Aman and first of the three Elf-lords to see the light of the Two Trees. He was the first Elf slain in the Blessed Realm, killed by Morgoth at Formenos when the Silmarils were stolen." },
  { id: "miriel", n: "Míriel", aka: "Serindë", t: "First wife of Finwë", bio: "A Noldorin woman renowned for weaving and embroidery. Bearing Fëanor drained her spirit so completely that she passed to the halls of Mandos and would not return to life." },
  { id: "indis", n: "Indis", t: "Second wife of Finwë", bio: "A fair Vanyarin lady, kin of Ingwë, High King of all the Elves. She married Finwë after Míriel's death, and Fëanor never accepted her or her sons." },
  /* House of Fëanor */
  { id: "feanor", n: "Fëanor", aka: "Curufinwë", t: "Maker of the Silmarils", d: "F.A. 1", bio: "The most gifted of the Noldor. He made the three Silmarils, which held the light of the Two Trees. After Morgoth stole them he swore a terrible oath with his seven sons and led the Noldor out of Aman. He died of wounds from Balrogs soon after reaching Middle-earth." },
  { id: "nerdanel", n: "Nerdanel", t: "Wife of Fëanor", bio: "Daughter of the smith Mahtan, and a sculptor of great skill. She was wise and patient, but grew estranged from Fëanor and did not follow him into exile." },
  { id: "maedhros", n: "Maedhros", t: "The Tall; eldest son of Fëanor", bio: "Captured and chained to a cliff of Thangorodrim, he was rescued by Fingon and lost his right hand. He gave the kingship to Fingolfin's house to heal the feud among the Noldor, and organised the Union of Maedhros. At the end of the First Age he took a Silmaril, but it burned him, and in despair he threw himself and the jewel into a fiery chasm." },
  { id: "maglor", n: "Maglor", t: "The mighty singer", bio: "Second son of Fëanor and the greatest minstrel of the Noldor after Daeron. He fostered Elrond and Elros, and at the last threw his Silmaril into the sea. Afterwards he wandered the shores of Middle-earth, singing in grief." },
  { id: "celegorm", n: "Celegorm", t: "The Fair", d: "F.A. 506", bio: "A huntsman and friend of Oromë, and once master of the hound Huan. He treacherously held Lúthien captive in Nargothrond, and was slain by Dior in the attack on Doriath." },
  { id: "caranthir", n: "Caranthir", t: "The Dark", d: "F.A. 506", bio: "The harshest and quickest to anger of Fëanor's sons. He ruled Thargelion and dealt with the Dwarves, and was slain in the sack of Doriath." },
  { id: "curufin", n: "Curufin", t: "The Crafty", d: "F.A. 506", bio: "The son most like Fëanor in skill and temper. Together with Celegorm he plotted to seize Nargothrond, and he was slain in Doriath." },
  { id: "amrod", n: "Amrod", t: "Twin son of Fëanor", bio: "One of the youngest sons of Fëanor, twin of Amras. The twins held the lands in East Beleriand, and both fell in the attack on the Havens of Sirion." },
  { id: "amras", n: "Amras", t: "Twin son of Fëanor", bio: "Twin of Amrod. He fell with his brother in the attack on Elwing's people at the Mouths of Sirion." },
  { id: "celebrimbor", n: "Celebrimbor", t: "Lord of Eregion", d: "S.A. 1697", bio: "Son of Curufin. He rejected his father's deeds and stayed in Nargothrond. In the Second Age he was the greatest smith of Eregion, made the Three Rings, and was tortured and killed by Sauron." },
  /* House of Fingolfin */
  { id: "fingolfin", n: "Fingolfin", t: "High King of the Noldor", d: "F.A. 456", bio: "Eldest son of Finwë and Indis. Abandoned by Fëanor, he led his people across the Grinding Ice into Middle-earth. After the Battle of Sudden Flame he rode alone to Angband, challenged Morgoth to single combat, and wounded him seven times before he fell." },
  { id: "fingon", n: "Fingon", t: "The Valiant; High King of the Noldor", d: "F.A. 472", bio: "Eldest son of Fingolfin. He healed the rift with the house of Fëanor by rescuing Maedhros from Thangorodrim. He was slain by Gothmog in the Battle of Unnumbered Tears." },
  { id: "gil-galad", n: "Gil-galad", aka: "Ereinion", t: "Last High King of the Noldor in Middle-earth", d: "S.A. 3441", bio: "Called the son of Fingon in The Silmarillion. He ruled in Lindon through the Second Age, kept the ring Vilya, and formed the Last Alliance with Elendil. He fell in the final duel with Sauron at the end of the siege of Barad-dûr." },
  { id: "turgon", n: "Turgon", t: "King of Gondolin", d: "F.A. 510", bio: "Second son of Fingolfin. Guided by Ulmo, he built the hidden city of Gondolin and kept it secret for centuries. When it fell through Maeglin's treachery, he died in the ruin of his tower." },
  { id: "elenwe", n: "Elenwë", t: "Wife of Turgon", bio: "A Vanyarin lady who followed Turgon into exile. She was lost in the crossing of the Helcaraxë, and Turgon barely saved their daughter Idril." },
  { id: "idril", n: "Idril", aka: "Celebrindal, the Silver-foot", t: "Daughter of Turgon", bio: "Wise and far-sighted, she distrusted Maeglin and secretly prepared an escape path out of Gondolin. She married Tuor, a mortal Man, and after the city fell she led the survivors to the Mouths of Sirion. Later she sailed into the West with Tuor." },
  { id: "aredhel", n: "Aredhel", aka: "Ar-Feiniel, the White Lady of the Noldor", t: "Daughter of Fingolfin", bio: "A restless lady who left Gondolin and became lost in the dark forest of Nan Elmoth. There she was wedded to Eöl. When she fled back to Gondolin with their son, she was struck by Eöl's poisoned dart and died." },
  { id: "eol", n: "Eöl", t: "The Dark Elf", bio: "A Sindarin smith who shunned the sun and dwelt in Nan Elmoth. He was a friend of the Dwarves and forged the black swords Anglachel and Anguirel. Turgon had him cast from the walls of Gondolin after he killed Aredhel." },
  { id: "maeglin", n: "Maeglin", t: "Lord of the House of the Mole", d: "F.A. 510", bio: "Son of Eöl and Aredhel. He rose high in Gondolin but coveted Idril. Captured by Morgoth's servants, he betrayed the hidden city, and Tuor threw him from the walls during its fall." },
  /* House of Finarfin */
  { id: "finarfin", n: "Finarfin", t: "King of the Noldor in Aman", bio: "Youngest son of Finwë, and gentle and wise. He turned back after the Kinslaying and ruled the Noldor who stayed in Aman. He led the host of the Valar's allies in the War of Wrath." },
  { id: "earwen", n: "Eärwen", t: "Swan-maiden of Alqualondë", bio: "Daughter of Olwë, King of the Teleri. Through her, Finarfin's children were close kin of Thingol, which gave them a welcome in Doriath." },
  { id: "finrod", n: "Finrod Felagund", aka: "Friend of Men", t: "King of Nargothrond", d: "F.A. 465", bio: "Eldest son of Finarfin, and founder of the great cave-city of Nargothrond with help from the Dwarves. He was the first Elf to meet Men in Beleriand. Keeping his oath to Barahir, he went with Beren on the Quest of the Silmaril, and died in Sauron's dungeons saving Beren from a werewolf." },
  { id: "orodreth", n: "Orodreth", t: "King of Nargothrond", d: "F.A. 495", bio: "Took the crown of Nargothrond after Finrod. He was slain when the city was sacked by Glaurung's army." },
  { id: "finduilas-n", n: "Finduilas", t: "Daughter of Orodreth", d: "F.A. 495", bio: "Beloved by Gwindor, she came to love Túrin instead. She was taken captive in the fall of Nargothrond and killed by Orcs at the Crossings of Teiglin." },
  { id: "angrod", n: "Angrod", t: "Son of Finarfin", d: "F.A. 455", bio: "With his brother Aegnor he guarded the highlands of Dorthonion facing Angband. Both brothers fell in the Battle of Sudden Flame." },
  { id: "aegnor", n: "Aegnor", t: "Son of Finarfin", d: "F.A. 455", bio: "Fierce in war, he held the northern slopes of Dorthonion with Angrod. He died when the fires of the Dagor Bragollach broke the Siege of Angband." },
  { id: "galadriel", n: "Galadriel", aka: "Artanis, Nerwen", t: "Lady of Lothlórien", bio: "Only daughter of Finarfin. She was proud and strong, and joined the rebellion of the Noldor out of a wish for lands of her own. She lived in Doriath, where she met Celeborn, and through the later Ages ruled Lothlórien with the ring Nenya. After refusing the One Ring she was allowed to return West at the end of the Third Age." },
  { id: "celeborn", n: "Celeborn", t: "Lord of Lothlórien", bio: "A Sindarin lord of Doriath and kinsman of Thingol, husband of Galadriel. He stayed in Middle-earth for a time after she sailed, and lived in Rivendell with Elrond's sons." },
  { id: "celebrian", n: "Celebrían", t: "Lady of Rivendell", bio: "Daughter of Galadriel and Celeborn, and wife of Elrond. She was captured and tormented by Orcs in the passes of the Misty Mountains. Her sons rescued her, but she could find no peace in Middle-earth and sailed into the West." },
  /* Teleri and Sindar */
  { id: "thingol", n: "Thingol", aka: "Elwë Singollo, Greycloak", t: "King of Doriath", d: "F.A. 503", bio: "One of the three ambassadors of the Elves to Valinor. On the Great Journey he fell under the spell of Melian in the forest of Nan Elmoth and never reached Aman. He became king of the Sindar in Doriath. He was slain by Dwarves of Nogrod in a quarrel over the Nauglamír and the Silmaril." },
  { id: "melian", n: "Melian", t: "The Maia, Queen of Doriath", bio: "A Maia of the court of the Valar who took bodily form for love of Thingol. Her enchantment, the Girdle of Melian, protected Doriath. After Thingol's death she left Middle-earth in grief." },
  { id: "olwe", n: "Olwë", t: "King of the Teleri at Alqualondë", bio: "Brother of Elwë. He led the Teleri onward to Aman when Elwë was lost, and became lord of the Swan-haven. His people were killed and their ships seized by the Noldor in the First Kinslaying." },
  { id: "luthien", n: "Lúthien Tinúviel", t: "Fairest of the Children of Ilúvatar", d: "F.A. 503", bio: "Daughter of Thingol and Melian. She loved the mortal Beren and went with him to Angband, where she sang Morgoth to sleep so they could cut a Silmaril from his crown. When Beren died, she won from Mandos the choice of mortality and a second life with him." },
  /* Half-elven */
  { id: "dior", n: "Dior Eluchíl", t: "Thingol's Heir, King of Doriath", b: "F.A. 470", d: "F.A. 506", bio: "Son of Beren and Lúthien, of Men, Elves and Maiar together. He inherited the Silmaril and went to rule Doriath, and was killed when the sons of Fëanor attacked to claim the jewel." },
  { id: "nimloth", n: "Nimloth", t: "Wife of Dior", d: "F.A. 506", bio: "A Sindarin lady, kinswoman of Celeborn. She died with Dior in the Second Kinslaying." },
  { id: "elured", n: "Eluréd", t: "Son of Dior", bio: "Elder twin son of Dior. Servants of Celegorm abandoned him and his brother in the forest to die, and they were never found." },
  { id: "elurin", n: "Elurín", t: "Son of Dior", bio: "Younger twin son of Dior, lost with his brother in the woods after the sack of Doriath." },
  { id: "elwing", n: "Elwing the White", t: "Daughter of Dior", bio: "Escaped the ruin of Doriath with the Silmaril and married Eärendil at the Mouths of Sirion. When Fëanor's sons attacked again, she threw herself into the sea, and Ulmo turned her into a white bird to carry the jewel to her husband at sea." },
  { id: "earendil", n: "Eärendil the Mariner", t: "The Evening Star", b: "F.A. 503", bio: "Son of Tuor and Idril. Bearing the Silmaril, he sailed to Valinor and pleaded with the Valar for the help of Elves and Men. They set him to sail the heavens with the jewel, where it shines as a star of hope." },
  { id: "elrond", n: "Elrond Half-elven", t: "Lord of Rivendell", b: "F.A. 532", bio: "Son of Eärendil and Elwing. He chose to be counted among the Elves, served Gil-galad, founded Rivendell in the Second Age, and kept the ring Vilya. He held the Council that sent the Fellowship on its way, and sailed West at the end of the Third Age." },
  { id: "elros", n: "Elros Tar-Minyatur", t: "First King of Númenor", b: "F.A. 532", d: "S.A. 442", bio: "Twin brother of Elrond. He chose to be counted among Men, and was given a lifespan of five hundred years. He founded the royal line of Númenor, from which the kings of Arnor and Gondor later descended." },
  { id: "elladan", n: "Elladan", t: "Son of Elrond", bio: "Elder twin son of Elrond. With his brother he hunted Orcs relentlessly after their mother's torment, and rode with the Grey Company along the Paths of the Dead." },
  { id: "elrohir", n: "Elrohir", t: "Son of Elrond", bio: "Younger twin son of Elrond. He fought beside his brother, the Rangers and Aragorn in the War of the Ring." },
  { id: "arwen", n: "Arwen Undómiel", aka: "Evenstar of her people", t: "Queen of Gondor and Arnor", b: "T.A. 241", d: "F.O. 121", bio: "Daughter of Elrond, said to be the likeness of Lúthien returned. She gave up the immortality of the Elves to marry Aragorn. After his death she went alone to the empty land of Lothlórien and died there." },
  /* Woodland realm */
  { id: "thranduil", n: "Thranduil", t: "Elvenking of Mirkwood", bio: "Sindarin king of the Silvan Elves of northern Mirkwood. He imprisoned Thorin's company in The Hobbit and later joined in the Battle of Five Armies." },
  { id: "legolas", n: "Legolas", aka: "Greenleaf", t: "Prince of Mirkwood", bio: "Son of Thranduil and the Elves' member of the Fellowship of the Ring. He became a firm friend of Gimli the Dwarf, and in the Fourth Age sailed over the Sea taking Gimli with him." }
]);

ME.tree({
  id: "finwe", short: "House of Finwë", sections: ["elves"],
  title: "The House of Finwë",
  desc: "The High King of the Noldor and his two marriages. The quarrels between his sons, half-brothers by different mothers, shaped the whole history of the First Age.",
  key: ["finwe", "feanor", "fingolfin", "finarfin"],
  see: ["feanor", "fingolfin", "finarfin"],
  roots: [
    { p: "finwe", u: [
      { s: "miriel", kids: [ { p: "feanor", s: "nerdanel", link: "feanor" } ] },
      { s: "indis", kids: [ { p: "fingolfin", link: "fingolfin" }, { p: "finarfin", s: "earwen", link: "finarfin" } ] }
    ] }
  ]
});

ME.tree({
  id: "feanor", short: "House of Fëanor", sections: ["elves"],
  title: "The House of Fëanor",
  desc: "Fëanor, maker of the Silmarils, and his seven sons, who were bound by their terrible oath.",
  key: ["feanor", "maedhros", "maglor", "celebrimbor"],
  see: ["finwe", "teleri"],
  roots: [
    { p: "feanor", s: "nerdanel", kids: [
      { p: "maedhros" }, { p: "maglor" }, { p: "celegorm" }, { p: "caranthir" },
      { p: "curufin", kids: [ { p: "celebrimbor" } ] },
      { p: "amrod" }, { p: "amras" }
    ] }
  ]
});

ME.tree({
  id: "fingolfin", short: "House of Fingolfin", sections: ["elves"],
  title: "The House of Fingolfin",
  desc: "The High Kings of the Noldor in exile, the royal house of Gondolin, and the line that leads to Eärendil.",
  key: ["fingolfin", "fingon", "turgon", "idril", "maeglin", "gil-galad"],
  see: ["finwe", "hador", "half-elven"],
  roots: [
    { p: "fingolfin", kids: [
      { p: "fingon", kids: [ { p: "gil-galad", note: "parentage as in The Silmarillion" } ] },
      { p: "turgon", s: "elenwe", kids: [
        { p: "idril", s: "tuor", kids: [ { p: "earendil", s: "elwing", link: "half-elven" } ] }
      ] },
      { p: "aredhel", s: "eol", kids: [ { p: "maeglin" } ] }
    ] }
  ]
});

ME.tree({
  id: "finarfin", short: "House of Finarfin", sections: ["elves"],
  title: "The House of Finarfin",
  desc: "Finarfin's children were half-Telerin, which made them welcome kin in Doriath. The line runs through Galadriel to the Lady of Rivendell.",
  key: ["finarfin", "finrod", "galadriel", "celebrian"],
  see: ["finwe", "teleri", "half-elven"],
  roots: [
    { p: "finarfin", s: "earwen", kids: [
      { p: "finrod" },
      { p: "orodreth", kids: [ { p: "finduilas-n" } ] },
      { p: "angrod" },
      { p: "aegnor" },
      { p: "galadriel", s: "celeborn", kids: [
        { p: "celebrian", s: "elrond" }
      ] }
    ] }
  ]
});

ME.tree({
  id: "teleri", short: "Kings of the Teleri", sections: ["elves"],
  title: "Kings of the Teleri and Sindar",
  desc: "The brothers Elwë and Olwë led the Teleri west. Elwë stayed in Middle-earth as Thingol, King of Doriath, while Olwë ruled at Alqualondë in Aman.",
  key: ["thingol", "melian", "luthien", "olwe"],
  see: ["half-elven", "finarfin", "beor"],
  roots: [
    { label: "Brothers", kids: [
      { p: "thingol", s: "melian", kids: [
        { p: "luthien", s: "beren", kids: [ { p: "dior", s: "nimloth", link: "half-elven" } ] }
      ] },
      { p: "olwe", kids: [ { p: "earwen", s: "finarfin" } ] }
    ] }
  ]
});

ME.tree({
  id: "half-elven", short: "The Half-elven", sections: ["elves", "men"],
  title: "The Half-elven",
  desc: "Elves and Men were united three times: Beren and Lúthien, Tuor and Idril, and Aragorn and Arwen. Their descendants could choose which kindred to belong to.",
  key: ["beren", "luthien", "earendil", "elrond", "elros", "arwen", "aragorn"],
  see: ["teleri", "fingolfin", "beor", "numenor", "arnor"],
  roots: [
    { p: "beren", ref: true, s: "luthien", kids: [
      { p: "dior", s: "nimloth", kids: [
        { p: "elured" }, { p: "elurin" },
        { p: "elwing", s: "earendil", kids: [
          { p: "elrond", s: "celebrian", kids: [
            { p: "elladan" }, { p: "elrohir" },
            { p: "arwen", s: "aragorn", kids: [ { p: "eldarion" } ] }
          ] },
          { p: "elros", link: "numenor" }
        ] }
      ] }
    ] }
  ]
});

ME.tree({
  id: "thranduil", short: "Woodland Realm", sections: ["elves"],
  title: "The Woodland Realm",
  desc: "The Elvenking of northern Mirkwood and his son, the Elves' member of the Fellowship.",
  key: ["thranduil", "legolas"],
  roots: [ { p: "thranduil", kids: [ { p: "legolas" } ] } ]
});
