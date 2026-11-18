/* HOBBITS — dates are stored in Shire Reckoning (S.R.) and shown by Age on the cards (T.A. = S.R. + 1600). */
ME.add("hobbits", [
  /* Baggins of Hobbiton */
  { id: "balbo", n: "Balbo Baggins", b: "S.R. 1167", bio: "The earliest Baggins in the family tree recorded in the Red Book." },
  { id: "berylla", n: "Berylla Boffin", t: "Wife of Balbo" },
  { id: "mungo", n: "Mungo Baggins", b: "S.R. 1207", d: "S.R. 1300", bio: "Eldest son of Balbo and grandfather of Bilbo." },
  { id: "laura", n: "Laura Grubb", t: "Wife of Mungo" },
  { id: "pansy", n: "Pansy Baggins", b: "S.R. 1212", bio: "Married Fastolph Bolger." },
  { id: "fastolph", n: "Fastolph Bolger" },
  { id: "ponto1", n: "Ponto Baggins", b: "S.R. 1216", d: "S.R. 1311" },
  { id: "mimosa", n: "Mimosa Bunce", t: "Wife of Ponto" },
  { id: "largo", n: "Largo Baggins", b: "S.R. 1220", d: "S.R. 1312", bio: "Youngest son of Balbo and great-grandfather of Frodo." },
  { id: "tanta", n: "Tanta Hornblower", t: "Wife of Largo" },
  { id: "lily-b", n: "Lily Baggins", b: "S.R. 1222", d: "S.R. 1312", bio: "Married Togo Goodbody." },
  { id: "togo", n: "Togo Goodbody" },
  { id: "bungo", n: "Bungo Baggins", b: "S.R. 1246", d: "S.R. 1326", bio: "A thoroughly respectable hobbit who built the luxurious smial of Bag End under the Hill, partly with his wife Belladonna's money." },
  { id: "belba", n: "Belba Baggins", b: "S.R. 1256", d: "S.R. 1356", bio: "Married Rudigar Bolger." },
  { id: "rudigar", n: "Rudigar Bolger" },
  { id: "longo", n: "Longo Baggins", b: "S.R. 1260", d: "S.R. 1350", bio: "Father of Otho Sackville-Baggins." },
  { id: "camellia", n: "Camellia Sackville", t: "Wife of Longo", bio: "Her family name produced the double-barrelled Sackville-Baggins." },
  { id: "linda", n: "Linda Baggins", b: "S.R. 1262", d: "S.R. 1363", bio: "Married Bodo Proudfoot, and so is grandmother of the Proudfoots who attended Bilbo's party." },
  { id: "bodo", n: "Bodo Proudfoot" },
  { id: "bingo", n: "Bingo Baggins", b: "S.R. 1264", d: "S.R. 1360", bio: "Married Chica Chubb." },
  { id: "chica", n: "Chica Chubb" },
  { id: "bilbo", n: "Bilbo Baggins", t: "Ring-bearer; author of the Red Book", b: "S.R. 1290", d: "sailed West S.R. 1421", bio: "A comfortable hobbit of Bag End with an adventurous streak from his Took mother. Gandalf chose him as burglar for Thorin's company. In the Misty Mountains he found the One Ring. After his famous eleventy-first birthday party he left the Shire, wrote his memoirs in Rivendell, and at a hundred and thirty-one sailed West with Frodo." },
  { id: "otho", n: "Otho Sackville-Baggins", b: "S.R. 1310", d: "S.R. 1412", bio: "Expected to inherit Bag End until Bilbo returned alive from his adventure, and later adopted Frodo as his heir." },
  { id: "lobelia", n: "Lobelia Sackville-Baggins", b: "S.R. 1318", d: "S.R. 1420", bio: "Bilbo's sharp-tongued cousin-in-law, notorious for coveting Bag End and its silver spoons. She stood up to Sharkey's ruffians with her umbrella and was jailed. Afterwards she left her money to help hobbits made homeless in the troubles." },
  { id: "lotho", n: "Lotho Sackville-Baggins", aka: "Pimple", t: "The Chief", b: "S.R. 1364", d: "S.R. 1419", bio: "Bought up land and businesses in the Shire with Saruman's help, and made himself Chief Shirriff. He was murdered by Gríma Wormtongue at Bag End." },
  { id: "rosa-b", n: "Rosa Baggins", b: "S.R. 1256", bio: "Daughter of Ponto, who married into the Tooks." },
  { id: "polo", n: "Polo Baggins", bio: "Son of Ponto." },
  { id: "posco", n: "Posco Baggins", b: "S.R. 1302" },
  { id: "gilly", n: "Gilly Brownlock", t: "Wife of Posco" },
  { id: "ponto2", n: "Ponto Baggins", b: "S.R. 1346" },
  { id: "porto", n: "Porto Baggins", b: "S.R. 1348" },
  { id: "peony", n: "Peony Baggins", b: "S.R. 1350", bio: "Married Milo Burrows." },
  { id: "milo", n: "Milo Burrows", bio: "A guest at Bilbo's farewell party, known for never answering letters." },
  { id: "angelica", n: "Angelica Baggins", b: "S.R. 1381", bio: "A young hobbit who received a convex mirror from Bilbo as a parting gift, a pointed joke about her vanity." },
  { id: "mosco", n: "Mosco Burrows", b: "S.R. 1387" },
  { id: "moro", n: "Moro Burrows", b: "S.R. 1391" },
  { id: "myrtle", n: "Myrtle Burrows", b: "S.R. 1393" },
  { id: "minto", n: "Minto Burrows", b: "S.R. 1396" },
  { id: "fosco", n: "Fosco Baggins", b: "S.R. 1264", d: "S.R. 1360", bio: "Son of Largo and grandfather of Frodo." },
  { id: "ruby-bolger", n: "Ruby Bolger", t: "Wife of Fosco" },
  { id: "dora", n: "Dora Baggins", b: "S.R. 1302", d: "S.R. 1406", bio: "Frodo's aunt, a tireless writer of advice letters. Bilbo left her a waste-paper basket." },
  { id: "drogo", n: "Drogo Baggins", b: "S.R. 1308", d: "S.R. 1380", bio: "Frodo's father. He and his wife Primula drowned in a boating accident on the Brandywine, which some in the Shire thought odd behaviour for hobbits." },
  { id: "dudo", n: "Dudo Baggins", b: "S.R. 1311", d: "S.R. 1409" },
  { id: "daisy-b", n: "Daisy Baggins", b: "S.R. 1350", bio: "Married Griffo Boffin." },
  { id: "griffo", n: "Griffo Boffin" },
  { id: "frodo", n: "Frodo Baggins", t: "Ring-bearer", b: "S.R. 1368", d: "sailed West S.R. 1421", bio: "Orphaned as a child and adopted by his cousin Bilbo, who left him Bag End and the One Ring. He carried the Ring from the Shire to Mount Doom, where at the last he could not give it up, and it was destroyed when Gollum seized it. Wounded in body and spirit, he sailed into the West with Bilbo and the Elves." },
  { id: "odo", n: "Odo Proudfoot", b: "S.R. 1304", d: "S.R. 1405", bio: "The hobbit at Bilbo's party who cried ‘Proudfeet!’ when Bilbo got his name wrong." },
  { id: "olo", n: "Olo Proudfoot", b: "S.R. 1346", d: "S.R. 1435" },
  { id: "sancho", n: "Sancho Proudfoot", b: "S.R. 1390", bio: "Caught digging in the pantry at Bag End looking for Bilbo's treasure after the party." },

  /* Took of Great Smials */
  { id: "isengrim2", n: "Isengrim II", t: "Thain of the Shire", b: "S.R. 1020", d: "S.R. 1122", bio: "The tenth Took Thain, who began the excavation of the Great Smials at Tuckborough." },
  { id: "isumbras3", n: "Isumbras III", t: "Thain of the Shire", b: "S.R. 1066", d: "S.R. 1159" },
  { id: "bandobras", n: "Bandobras ‘Bullroarer’ Took", b: "S.R. 1104", d: "S.R. 1206", bio: "Placed here as in the family tree of the Appendices; the Prologue instead calls him a son of Isengrim II. Big enough to ride a horse, he led the hobbits to victory at the Battle of Greenfields. According to legend, he knocked the goblin-king's head off with a club, and it sailed a hundred yards into a rabbit hole, inventing the game of golf." },
  { id: "ferumbras2", n: "Ferumbras II", t: "Thain of the Shire", b: "S.R. 1101", d: "S.R. 1201" },
  { id: "fortinbras1", n: "Fortinbras I", t: "Thain of the Shire", b: "S.R. 1145", d: "S.R. 1248" },
  { id: "gerontius", n: "Gerontius Took", aka: "the Old Took", t: "Thain of the Shire", b: "S.R. 1190", d: "S.R. 1320", bio: "Lived to a hundred and thirty, a record until Bilbo surpassed it. He was a friend of Gandalf, who gave him magic diamond studs and famous fireworks. He had twelve children." },
  { id: "adamanta", n: "Adamanta Chubb", t: "Wife of the Old Took" },
  { id: "isengrim3", n: "Isengrim III", t: "Thain of the Shire", b: "S.R. 1232", d: "S.R. 1330", bio: "Eldest son of the Old Took. He died without children, so the Thainship passed to his brother." },
  { id: "hildigard", n: "Hildigard Took", bio: "A child of the Old Took who died young." },
  { id: "isumbras4", n: "Isumbras IV", t: "Thain of the Shire", b: "S.R. 1238", d: "S.R. 1339" },
  { id: "hildigrim", n: "Hildigrim Took", b: "S.R. 1240", d: "S.R. 1341" },
  { id: "hildifons", n: "Hildifons Took", b: "S.R. 1244", bio: "Went off on a journey and never returned, one of the Tooks with a reputation for adventure." },
  { id: "isembold", n: "Isembold Took", b: "S.R. 1247", d: "S.R. 1346" },
  { id: "belladonna", n: "Belladonna Took", b: "S.R. 1252", d: "S.R. 1334", bio: "One of the three remarkable daughters of the Old Took, and Bilbo's mother. Bilbo's adventurous side was credited to her Took blood." },
  { id: "donnamira", n: "Donnamira Took", b: "S.R. 1256", d: "S.R. 1348", bio: "Married Hugo Boffin." },
  { id: "hugo", n: "Hugo Boffin" },
  { id: "isembard", n: "Isembard Took", b: "S.R. 1256", d: "S.R. 1356" },
  { id: "mirabella", n: "Mirabella Took", b: "S.R. 1260", d: "S.R. 1360", bio: "Youngest daughter of the Old Took. She married Gorbadoc Brandybuck and was Frodo's grandmother." },
  { id: "fortinbras2", n: "Fortinbras II", t: "Thain of the Shire", b: "S.R. 1278", d: "S.R. 1380" },
  { id: "lalia", n: "Lalia Clayhanger", aka: "Lalia the Great", t: "Wife of Fortinbras II", bio: "Wife of Thain Fortinbras II and mother of Ferumbras III." },
  { id: "ferumbras3", n: "Ferumbras III", t: "Thain of the Shire", b: "S.R. 1316", d: "S.R. 1415", bio: "Thain at the time of Bilbo's farewell party. He never married, and the Thainship passed to his cousin Paladin." },
  { id: "adalgrim", n: "Adalgrim Took", b: "S.R. 1280", d: "S.R. 1382" },
  { id: "paladin", n: "Paladin Took II", t: "Thain of the Shire", b: "S.R. 1333", d: "S.R. 1434", bio: "Pippin's father. He refused to recognise Lotho as Chief and held Tookland against the ruffians." },
  { id: "eglantine", n: "Eglantine Banks", t: "Wife of Paladin" },
  { id: "esmeralda", n: "Esmeralda Took", b: "S.R. 1336", bio: "Daughter of Adalgrim, who married Saradoc Brandybuck and was Merry's mother." },
  { id: "pearl", n: "Pearl Took", b: "S.R. 1375" },
  { id: "pimpernel", n: "Pimpernel Took", b: "S.R. 1379" },
  { id: "pervinca", n: "Pervinca Took", b: "S.R. 1385" },
  { id: "pippin", n: "Peregrin Took", aka: "Pippin", t: "Thain of the Shire; Knight of Gondor", b: "S.R. 1390", bio: "The youngest member of the Fellowship. He looked into the palantír of Orthanc, swore service to Denethor, saved Faramir from the pyre, and killed a troll at the Black Gate. He became Thain, and in old age went to Gondor with Merry, where they died and were laid to rest beside Aragorn." },
  { id: "diamond", n: "Diamond of Long Cleeve", t: "Wife of Pippin" },
  { id: "faramir-took", n: "Faramir Took", b: "S.R. 1430", bio: "Pippin's son, named after Faramir of Gondor, who became Thain after his father." },

  /* Brandybuck of Buckland */
  { id: "gorhendad", n: "Gorhendad Oldbuck", t: "First Master of Buckland", bio: "Crossed the Brandywine and began the great burrow of Brandy Hall, changing his family's name from Oldbuck to Brandybuck." },
  { id: "gorbadoc", n: "Gorbadoc Brandybuck", aka: "Broadbelt", t: "Master of Buckland", b: "S.R. 1260", d: "S.R. 1363", bio: "Remembered for his generous table. Frodo's parents drowned after dining at his hall." },
  { id: "rorimac", n: "Rorimac Brandybuck", aka: "Old Rory", t: "Master of Buckland", b: "S.R. 1302", d: "S.R. 1408", bio: "A wealthy hobbit who enjoyed his food. Frodo lived at Brandy Hall under his care after Drogo and Primula died." },
  { id: "menegilda", n: "Menegilda Goold", t: "Wife of Rorimac" },
  { id: "amaranth", n: "Amaranth Brandybuck", bio: "Daughter of Gorbadoc." },
  { id: "saradas", n: "Saradas Brandybuck", bio: "Son of Gorbadoc." },
  { id: "dodinas", n: "Dodinas Brandybuck", bio: "Son of Gorbadoc." },
  { id: "dinodas", n: "Dinodas Brandybuck", bio: "Son of Gorbadoc." },
  { id: "primula", n: "Primula Brandybuck", b: "S.R. 1320", d: "S.R. 1380", bio: "Frodo's mother, drowned with her husband Drogo in a boating accident." },
  { id: "asphodel", n: "Asphodel Brandybuck", b: "S.R. 1313", d: "S.R. 1412", bio: "Married Rufus Burrows." },
  { id: "rufus", n: "Rufus Burrows" },
  { id: "saradoc", n: "Saradoc Brandybuck", aka: "Scattergold", t: "Master of Buckland", b: "S.R. 1340", d: "S.R. 1432", bio: "Merry's father, so free with his money that he was called Scattergold." },
  { id: "merimac", n: "Merimac Brandybuck", b: "S.R. 1342", d: "S.R. 1430" },
  { id: "berilac", n: "Berilac Brandybuck", b: "S.R. 1380" },
  { id: "merry", n: "Meriadoc Brandybuck", aka: "Merry; Holdwine", t: "Master of Buckland; Knight of the Mark", b: "S.R. 1382", bio: "Frodo's cousin and friend, who organised the conspiracy that saw him safely out of the Shire. He swore service to Théoden, rode secretly to the Pelennor with Éowyn, and helped her slay the Witch-king. He later became Master of Buckland and a scholar of herb-lore and history." },
  { id: "estella", n: "Estella Bolger", t: "Wife of Merry", bio: "Sister of Fredegar ‘Fatty’ Bolger." },

  /* Gamgee */
  { id: "hamfast-gw", n: "Hamfast of Gamwich", b: "S.R. 1160", bio: "The earliest ancestor in Sam's family tree, from the village of Gamwich." },
  { id: "wiseman", n: "Wiseman Gamwich", b: "S.R. 1200" },
  { id: "hob", n: "Hob Gammidge", aka: "the Roper", b: "S.R. 1246", bio: "The first of the family to take up rope-making, which gave the Ropers their name." },
  { id: "hobson", n: "Hobson ‘Roper’ Gamgee", b: "S.R. 1285" },
  { id: "andwise", n: "Andwise ‘Andy’ Roper", b: "S.R. 1323", bio: "Carried on the rope-walk at Tighfield. Sam had learned about ropes from him." },
  { id: "anson", n: "Anson Roper", bio: "Son of Andy Roper, who carried on the rope-making trade." },
  { id: "gaffer", n: "Hamfast ‘Gaffer’ Gamgee", aka: "the Gaffer", b: "S.R. 1326", d: "S.R. 1428", bio: "Bilbo's gardener at Bag End, an authority on potatoes and on the doings of the neighbourhood. He was turned out of Bagshot Row during the troubles." },
  { id: "bell", n: "Bell Goodchild", t: "Wife of the Gaffer" },
  { id: "may-g1", n: "May Gamgee", b: "S.R. 1328" },
  { id: "halfred-o", n: "Halfred of Overhill", b: "S.R. 1332" },
  { id: "halfast", n: "Halfast of Overhill", bio: "Sam's cousin Hal, who claimed to have seen a walking tree-giant in the Northfarthing." },
  { id: "hamson", n: "Hamson Gamgee", b: "S.R. 1365", bio: "Sam's eldest brother, who worked with his uncle Andy as a roper at Tighfield." },
  { id: "halfred", n: "Halfred Gamgee", b: "S.R. 1369", bio: "Sam's brother, who moved to the Northfarthing." },
  { id: "daisy-g1", n: "Daisy Gamgee", b: "S.R. 1372", bio: "Sam's elder sister." },
  { id: "may-g2", n: "May Gamgee", b: "S.R. 1376", bio: "Sam's elder sister." },
  { id: "sam", n: "Samwise Gamgee", aka: "Sam Gardner", t: "Mayor of the Shire; Ring-bearer", b: "S.R. 1380", d: "sailed West S.R. 1482", bio: "Frodo's gardener and loyal companion all the way to Mount Doom. For a time he carried the Ring himself, and fought off Shelob. Home again, he replanted the Shire with Galadriel's gift and married Rose Cotton. He served seven terms as Mayor. When Rose died, he passed the Red Book to his daughter Elanor and, as the last Ring-bearer, sailed into the West." },
  { id: "rose", n: "Rose Cotton", aka: "Rosie", t: "Wife of Sam", b: "S.R. 1384", d: "S.R. 1482", bio: "Daughter of Farmer Cotton of Bywater. She waited for Sam to come home and married him in the spring after the War of the Ring. They had thirteen children." },
  { id: "marigold", n: "Marigold Gamgee", b: "S.R. 1383", bio: "Sam's younger sister, who married Tom Cotton, Rose's brother." },
  { id: "tolman-c", n: "Tolman ‘Farmer’ Cotton", bio: "A farmer of Bywater who stood up to Lotho's ruffians and helped Merry and Pippin lead the Battle of Bywater." },
  { id: "lily-brown", n: "Lily Brown", t: "Wife of Farmer Cotton" },
  { id: "tom-c", n: "Tom Cotton", aka: "Tolman", bio: "Eldest son of Farmer Cotton, who married Sam's sister Marigold." },
  { id: "jolly-c", n: "Jolly Cotton", aka: "Wilcome", bio: "Son of Farmer Cotton, who fought in the Battle of Bywater." },
  { id: "nick-c", n: "Nick Cotton", aka: "Bowman", bio: "Son of Farmer Cotton." },
  { id: "nibs-c", n: "Nibs Cotton", aka: "Carl", bio: "Youngest son of Farmer Cotton." },
  { id: "elanor", n: "Elanor the Fair", t: "Maid of Queen Arwen; keeper of the Red Book", b: "S.R. 1421", bio: "Sam's eldest child, named after a golden star-flower of Lothlórien. She was said to look more like an Elf-maid than a hobbit. She married Fastred of Greenholm, and their descendants, the Fairbairns of the Towers, kept the Red Book." },
  { id: "fastred-g", n: "Fastred of Greenholm", t: "Warden of Westmarch" },
  { id: "elfstan", n: "Elfstan Fairbairn", bio: "Son of Elanor and Fastred, the first of the Fairbairns of the Towers." },
  { id: "frodo-g", n: "Frodo Gardner", b: "S.R. 1423", bio: "Sam's eldest son, named after Frodo Baggins. His descendants were the Gardners of the Hill." },
  { id: "rose-g", n: "Rose Gardner", b: "S.R. 1425" },
  { id: "merry-g", n: "Merry Gardner", b: "S.R. 1427" },
  { id: "pippin-g", n: "Pippin Gardner", b: "S.R. 1429" },
  { id: "goldilocks", n: "Goldilocks Gardner", b: "S.R. 1431", bio: "Sam's daughter, who married Faramir Took, Pippin's son." },
  { id: "hamfast-g", n: "Hamfast Gardner", b: "S.R. 1432" },
  { id: "daisy-g2", n: "Daisy Gardner", b: "S.R. 1433" },
  { id: "primrose", n: "Primrose Gardner", b: "S.R. 1435" },
  { id: "bilbo-g", n: "Bilbo Gardner", b: "S.R. 1436" },
  { id: "ruby-g", n: "Ruby Gardner", b: "S.R. 1438" },
  { id: "robin-g", n: "Robin Gardner", b: "S.R. 1440" },
  { id: "tolman-g", n: "Tolman ‘Tom’ Gardner", b: "S.R. 1442", bio: "Youngest of Sam and Rose's thirteen children." }
]);

ME.tree({
  id: "baggins", short: "Baggins", sections: ["hobbits"],
  title: "Baggins of Hobbiton",
  desc: "Descendants of Balbo Baggins: Bilbo and Frodo, the Sackville-Bagginses, and a large spread of cousins.",
  key: ["bilbo", "frodo", "lobelia", "lotho"],
  see: ["took", "brandybuck"],
  roots: [
    { p: "balbo", s: "berylla", kids: [
      { p: "mungo", s: "laura", kids: [
        { p: "bungo", s: "belladonna", kids: [ { p: "bilbo" } ] },
        { p: "belba", s: "rudigar" },
        { p: "longo", s: "camellia", kids: [ { p: "otho", s: "lobelia", kids: [ { p: "lotho" } ] } ] },
        { p: "linda", s: "bodo", kids: [ { p: "odo", kids: [ { p: "olo", kids: [ { p: "sancho" } ] } ] } ] },
        { p: "bingo", s: "chica" }
      ] },
      { p: "pansy", s: "fastolph" },
      { p: "ponto1", s: "mimosa", kids: [
        { p: "rosa-b", s: "hildigrim" },
        { p: "polo", kids: [ { p: "posco", s: "gilly", kids: [
          { p: "ponto2", kids: [ { p: "angelica" } ] },
          { p: "porto" },
          { p: "peony", s: "milo", kids: [ { p: "mosco" }, { p: "moro" }, { p: "myrtle" }, { p: "minto" } ] }
        ] } ] }
      ] },
      { p: "largo", s: "tanta", kids: [
        { p: "fosco", s: "ruby-bolger", kids: [
          { p: "dora" },
          { p: "drogo", s: "primula", kids: [ { p: "frodo" } ] },
          { p: "dudo", kids: [ { p: "daisy-b", s: "griffo" } ] }
        ] }
      ] },
      { p: "lily-b", s: "togo" }
    ] }
  ]
});

ME.tree({
  id: "took", short: "Took", sections: ["hobbits"],
  title: "Took of Great Smials",
  desc: "The Thains of the Shire, from Isengrim II and Bandobras ‘Bullroarer’ Took through the Old Took and his twelve children to Peregrin.",
  key: ["bandobras", "gerontius", "belladonna", "pippin"],
  see: ["baggins", "brandybuck", "gamgee"],
  roots: [
    { p: "isengrim2", kids: [
      { p: "isumbras3", kids: [ { p: "ferumbras2", kids: [ { p: "fortinbras1", kids: [
        { p: "gerontius", s: "adamanta", kids: [
          { p: "isengrim3" },
          { p: "hildigard" },
          { p: "isumbras4", kids: [ { p: "fortinbras2", s: "lalia", kids: [ { p: "ferumbras3" } ] } ] },
          { p: "hildigrim", s: "rosa-b", kids: [
            { p: "adalgrim", kids: [
              { p: "paladin", s: "eglantine", kids: [
                { p: "pearl" }, { p: "pimpernel" }, { p: "pervinca" },
                { p: "pippin", s: "diamond", kids: [ { p: "faramir-took", s: "goldilocks" } ] }
              ] },
              { p: "esmeralda", s: "saradoc" }
            ] }
          ] },
          { p: "hildifons" },
          { p: "isembold" },
          { p: "belladonna", s: "bungo" },
          { p: "donnamira", s: "hugo" },
          { p: "isembard" },
          { p: "mirabella", s: "gorbadoc" }
        ] }
      ] } ] },
      { p: "bandobras" } ] }
    ] }
  ]
});

ME.tree({
  id: "brandybuck", short: "Brandybuck", sections: ["hobbits"],
  title: "Brandybuck of Buckland",
  desc: "The Masters of Buckland in Brandy Hall, Frodo's mother's family and the home of Meriadoc.",
  key: ["gorbadoc", "rorimac", "primula", "merry"],
  see: ["took", "baggins"],
  roots: [
    { p: "gorhendad", kids: [ { gap: "Masters of Buckland", kids: [
      { p: "gorbadoc", s: "mirabella", kids: [
        { p: "rorimac", s: "menegilda", kids: [
          { p: "saradoc", s: "esmeralda", kids: [ { p: "merry", s: "estella" } ] },
          { p: "merimac", kids: [ { p: "berilac" } ] }
        ] },
        { p: "amaranth" },
        { p: "saradas" },
        { p: "dodinas" },
        { p: "dinodas" },
        { p: "asphodel", s: "rufus" },
        { p: "primula", s: "drogo" }
      ] }
    ] } ] }
  ]
});

ME.tree({
  id: "gamgee", short: "Gamgee", sections: ["hobbits"],
  title: "The Longfather-tree of Master Samwise",
  desc: "Sam's ancestors, the ropers of Tighfield, and his thirteen children with Rose Cotton. The Cottons of Bywater are shown alongside.",
  key: ["gaffer", "sam", "rose", "elanor"],
  see: ["took"],
  roots: [
    { p: "hamfast-gw", kids: [ { p: "wiseman", kids: [ { p: "hob", kids: [ { p: "hobson", kids: [
      { p: "andwise", kids: [ { p: "anson" } ] },
      { p: "gaffer", s: "bell", kids: [
        { p: "hamson" }, { p: "halfred" }, { p: "daisy-g1" }, { p: "may-g2" },
        { p: "sam", s: "rose", kids: [
          { p: "elanor", s: "fastred-g", kids: [ { p: "elfstan" } ] },
          { p: "frodo-g" }, { p: "rose-g" }, { p: "merry-g" }, { p: "pippin-g" },
          { p: "goldilocks", s: "faramir-took" },
          { p: "hamfast-g" }, { p: "daisy-g2" }, { p: "primrose" }, { p: "bilbo-g" },
          { p: "ruby-g" }, { p: "robin-g" }, { p: "tolman-g" }
        ] },
        { p: "marigold", s: "tom-c" }
      ] },
      { p: "may-g1" },
      { p: "halfred-o", kids: [ { p: "halfast" } ] }
    ] } ] } ] } ] },
    { p: "tolman-c", s: "lily-brown", kids: [
      { p: "rose", ref: true, s: "sam" },
      { p: "tom-c", s: "marigold" },
      { p: "jolly-c" }, { p: "nick-c" }, { p: "nibs-c" }
    ] }
  ]
});
