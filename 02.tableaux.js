var l = console.log;

var villes = ["nantes", "paris", "saint-nazaire", "anger", "le mans"];
villes.forEach(v => l(v));

var lettreADansToutesLesVilles = villes.every(v => v.includes("a"));
l("lettreADansToutesLesVilles =", lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(v => v.includes("-"));
l("auMoinsUneVilleAvecUnTiret =", auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(v => !v.includes(" ") & !v.includes("-"));
l("villesSansTiretSansEspace =", villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(v => v.endsWith("s")).map(v => v.toUpperCase());
l("villesMajusculeSeTerminantParS =", villesMajusculeSeTerminantParS);