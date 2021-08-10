module.exports = {
  materijaliSidebar: {
    'Uvod': ['sadrzaj', 'preduvjeti', 'savjeti'].map(title => 'uvod/' + title),
    'Osnovni pojmovi': ['tipicni-program', 'tipovi-podataka', 'osnovna-matematika'].map(title => 'osnovni-pojmovi/' + title),
    'O dobrim algoritmima': ['dobar-algoritam', 'asimptotska-slozenost'].map(title => 'o-dobrim-algoritmima/' + title),
    'Bitne strukture podataka': ['vector', 'set', 'map', 'iteratori', 'ostale-strukture', 'primjeri'].map(title => 'bitne-strukture-podataka/' + title),
    'Sortiranje i pretraživanje': ['sortiranje', 'binarno-pretrazivanje', 'ternarno-pretrazivanje', 'primjeri'].map(title => 'sortiranje-i-pretrazivanje/' + title),
    '3. Potpuno pretraživanje i pohlepni pristupi': ['uvod', 'meet-in-the-middle'].map(title => 'potpuno-pretrazivanje-i-pohlepni-pristupi/' + title),
    'Dinamičko programiranje': ['sto-je-dinamicko-programiranje', 'primjeri'].map(title => 'dinamicko-programiranje/' + title),
    'Upiti nad intervalima': ['upiti-nad-statickim-poljima', 'fenwickovo-stablo', 'segmentno-stablo', 'primjeri'].map(title => 'upiti-nad-intervalima/' + title),
    // 'Matematika': [].map(title => 'matematika/' + title),
    // 'Vjerojatnost': [].map(title => 'vjerojatnost/' + title),
    // 'Osnove teorije grafova': [].map(title => 'osnove-teorije-grafova/' + title),
    // 'Napredni algoritmi nad grafovima': [].map(title => 'napredni-algoritmi-nad-grafovima/' + title),
    // 'Stabla': [].map(title => 'stabla/' + title),
    // 'Stringovi': [].map(title => 'stringovi/' + title),
    // 'Što dalje': [].map(title => 'sto-dalje/' + title),
  },
  doprinosSidebar: {
    'Doprinos ovim materijalima': ['kako-napisati-clanak', 'kako-napisati-blog', 'prijava-pogreske', 'upute-za-markdown', 'autori'].map(title => 'doprinos-ovim-materijalima/' + title)
  }
};
