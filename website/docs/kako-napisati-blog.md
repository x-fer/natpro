---
title: Kako napisati blog?
---

Proces objavljivanja blog objava je gotovo isti kao i za članke.

U svaku blog objavu na početku treba kopirati sadržaj datoteke `sablona-blog.md` te urediti navedene parametre.

```markdown
---
title: Naslov velikim slovom
author: Ime Prezime
author_title: Titula @ Ustanova
author_url: GitHub ili tako neki URL
author_image_url: URL neke lijepe slike
tags: [oznake, odvojene, zarezima]
---

Ovdje ide tekst
```

Osim toga, imena datoteka moraju biti u obliku `YYYY-MM-DD-naslov-malim-slovima.md` s tim da za naslov vrijede ista ograničenja kao i za članke. Datoteke blog objava se dodaju u mapu `blog`.

_Forkanje_, _kloniranje_ i _pull requestovi_ se obavljaju na isti način kao i za članke.

