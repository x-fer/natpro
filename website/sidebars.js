module.exports = {
  materijaliSidebar: {
    'Uvod': ['sadrzaj', 'preduvjeti', 'savjeti'].map(title => 'uvod/' + title),
    'Osnovni pojmovi': ['tipicni-program', 'tipovi-podataka', 'osnovna-matematika'].map(title => 'osnovni-pojmovi/' + title),
    'O dobrim algoritmima': ['dobar-algoritam', 'asimptotska-slozenost'].map(title => 'o-dobrim-algoritmima/' + title),
    'Bitne strukture podataka': ['vector', 'set', 'map', 'iteratori', 'ostale-strukture'].map(title => 'bitne-strukture-podataka/' + title),
    'Sortiranje i pretraživanje': ['sortiranje', 'binarno-pretrazivanje', 'ternarno-pretrazivanje', 'primjeri'].map(title => 'sortiranje-i-pretrazivanje/' + title),
    'Pohlepni algoritmi': ['sto-su-pohlepni-algoritmi', 'primjeri'].map(title => 'pohlepni-algoritmi/' + title),
    'Potpuno pretraživanje': ['podskupovi', 'permutacije', 'pretrazivanje-unatrag', 'skracivanje-pretrazivanja', 'meet-in-the-middle', 'primjeri'].map(title => 'potpuno-pretrazivanje/' + title),
    'Dinamičko programiranje': ['sto-je-dinamicko-programiranje', 'primjeri'].map(title => 'dinamicko-programiranje/' + title),
    'Upiti nad intervalima': ['upiti-nad-statickim-poljima', 'fenwickovo-stablo', 'segmentno-stablo', 'primjeri'].map(title => 'upiti-nad-intervalima/' + title),
    // 'Matematika': [].map(title => 'matematika/' + title),
    // 'Vjerojatnost': [].map(title => 'vjerojatnost/' + title),
    // 'Osnove teorije grafova': [].map(title => 'osnove-teorije-grafova/' + title),
    // 'Napredni algoritmi nad grafovima': [].map(title => 'napredni-algoritmi-nad-grafovima/' + title),
    // 'Stabla': [].map(title => 'stabla/' + title),
    // 'Stringovi': [].map(title => 'stringovi/' + title),
    // 'Što dalje': [].map(title => 'sto-dalje/' + title),
    // 'Doprinos ovim materijalima': ['kako-napisati-clanak', 'kako-napisati-blog', 'upute-za-markdown', 'autori'].map(title => 'doprinos-ovim-materijalima/' + title)
  },
  doprinosSidebar: {
    'Doprinos ovim materijalima': ['kako-napisati-clanak', 'kako-napisati-blog', 'prijava-pogreske', 'upute-za-markdown', 'autori'].map(title => 'doprinos-ovim-materijalima/' + title)
  }
};
