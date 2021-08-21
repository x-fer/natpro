module.exports = {
  materijaliSidebar: {
    '0. O materijalima': ['sadrzaj', 'preduvjeti', 'savjeti'].map(title => 'o-materijalima/' + title),
    '1. Osnove natjecateljskog programiranja': ['osnovni-pojmovi', 'o-dobrim-algoritmima', 'bitni-containeri'].map(title => 'osnove-natjecateljskog-programiranja/' + title),
    '2. Sortiranje i pretraživanje': ['sortiranje', 'binarno-pretrazivanje', 'ternarno-pretrazivanje', 'primjeri'].map(title => 'sortiranje-i-pretrazivanje/' + title),
    '3. Potpuno pretraživanje i pohlepni pristupi': ['uvod', 'meet-in-the-middle', 'pruning', 'zadatci-potpuno', 'pohlepni-pristupi', 'poslovi', 'zadatci-pohlepni'].map(title => 'potpuno-pretrazivanje-i-pohlepni-pristupi/' + title),
    '4. Dinamičko programiranje': ['sto-je-dinamicko-programiranje', 'problem-razmjene-novca', 'najdulji-rastuci-podniz', 'knapsack', 'tiling' ,'primjeri'].map(title => 'dinamicko-programiranje/' + title),
    'Upiti nad intervalima ': ['upiti-nad-statickim-poljima', 'fenwickovo-stablo', 'segmentno-stablo', 'primjeri'].map(title => 'upiti-nad-intervalima/' + title),
    // 'Matematika': [].map(title => 'matematika/' + title),
    // 'Vjerojatnost': [].map(title => 'vjerojatnost/' + title),
    // 'Osnove teorije grafova': [].map(title => 'osnove-teorije-grafova/' + title),
    // 'Napredni algoritmi nad grafovima': [].map(title => 'napredni-algoritmi-nad-grafovima/' + title),
    // 'Stabla': [].map(title => 'stabla/' + title),
    // 'Stringovi': [].map(title => 'stringovi/' + title),
    // 'Što dalje': [].map(title => 'sto-dalje/' + title),
  },
  doprinosSidebar: {
    'Doprinos ovim materijalima': ['kako-napisati-clanak', 'prijava-pogreske', 'upute-za-markdown', 'autori'].map(title => 'doprinos-ovim-materijalima/' + title)
  }
};
