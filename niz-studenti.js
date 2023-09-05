//pisemo niz
var studenti = [
    { ime: "Marko", 
    prezime: "Marković", 
    prosjek: 6.7 
},
    { ime: "Ana", 
    prezime: "Anić", 
    prosjek: 8.2 
},
    { ime: "Ivan", 
    prezime: "Ivanić",
     prosjek: 7.9 
    },
    { ime: "Maja", 
    prezime: "Majić", 
    prosjek: 9.7 
},
    { ime: "Petar", 
    prezime: "Petrić", 
    prosjek: 8.6 
}
  ];
  
  // iteracija kroz studente
  for (var i = 0; i < studenti.length; i++) {
    var student = studenti[i];
    if (student.prosjek > 8.5) {
      console.log(student.ime + " " + student.prezime + " (Prosjek: " + student.prosjek + ")");
    }
  }
  