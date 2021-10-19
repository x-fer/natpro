module.exports = {
  materijaliSidebar: {
    '0. O materijalima': ['sadrzaj', 'preduvjeti', 'savjeti'].map(title => 'o-materijalima/' + title),
    '1. Osnove natjecateljskog programiranja': ['osnovni-pojmovi', 'o-dobrim-algoritmima', 'bitni-containeri'].map(title => 'osnove-natjecateljskog-programiranja/' + title),
    '2. Sortiranje i pretraživanje': ['sortiranje', 'binarno-pretrazivanje', 'ternarno-pretrazivanje', 'primjeri'].map(title => 'sortiranje-i-pretrazivanje/' + title),
    '3. Potpuno pretraživanje i pohlepni pristupi': ['uvod', 'meet-in-the-middle', 'pruning', 'zadatci-potpuno', 'pohlepni-pristupi', 'poslovi', 'zadatci-pohlepni'].map(title => 'potpuno-pretrazivanje-i-pohlepni-pristupi/' + title),
    '4. Dinamičko programiranje': ['sto-je-dinamicko-programiranje', 'problem-razmjene-novca', 'najdulji-rastuci-podniz', 'knapsack', 'tiling'].map(title => 'dinamicko-programiranje/' + title),
    '5. Upiti nad intervalima 1': ['upiti-nad-statickim-poljima'].map(title => 'upiti-nad-intervalima-1/' + title),
    '6. Upiti nad intervalima 2': ['segmentno-stablo', 'offline-algoritmi'].map(title => 'upiti-nad-intervalima-2/' + title),
    '7. Algoritmi nad grafovima 1': ['zapisi-grafova', 'obilazak-grafova', 'najkraci-putovi', 'union-find-struktura', 'detekcija-ciklusa'].map(title => 'algoritmi-nad-grafovima-1/' + title),
    '8. Algoritmi nad grafovima 2': ['topolosko-sortiranje', 'kosarajuev-algoritam', '2SAT', 'LCA'].map(title => 'algoritmi-nad-grafovima-2/' + title),
    '9. Matematika': ['prosti-brojevi', 'vazne-formule', 'kineski-teorem-o-ostatcima', 'multiplikativni-inverz', 'osnove-geometrije', 'convex-hull', 'najblizi-par-tocaka'].map(title => 'matematika/' + title),
    '10. Stringovi': ['osnovni-pojmovi', 'hash', 'trie'].map(title => 'stringovi/' + title),
  },
  doprinosSidebar: {
    'Doprinos ovim materijalima': ['kako-napisati-clanak', 'prijava-pogreske', 'upute-za-markdown', 'autori'].map(title => 'doprinos-ovim-materijalima/' + title)
  }
};