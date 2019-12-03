function randomisation(tab){
  var j = 0;
  var exchange;
  for(let i = 0; i<tab.length; i++){
    j = Math.floor(Math.random()*tab.length);
    exchange = tab[i];
    tab[i]=tab[j];
    tab[j]=exchange;
  }
}


function giveMeMyLeprechaun(name,tab){
  if (tab.indexOf(name)=== (tab.length - 1)){
    return tab[0];
  }
  return tab[(tab.indexOf(name)) + 1];
}


document.getElementById("revelation").onclick= function(){
  var part1 = ["Florian","Sylvain","Clémence","Alba","Eve","Shane","Pierre","Maelys","Teddy"
  , "Cedric","Margot","Tristan Tison","Julie Antoine","Ludivine Da Silveira","Mathilde","Philippe","Romain Guicharousse",
  "Gael","Moran","Paul","Sofiane","Nicolas","Francesca","Flavien","Audrey","Julie Paulmaz",
  "Sabine","Marion","Ludovic","Sophie","Maude","Tristan Bonhomme","Amine","Adjmane",
  "Adele","Jonathan","Romain Gustiaux","Jimmy","Bruno","Sarah Ledra","Matenin","Christelle",
  "Samuel","Genevieve","Valery","Victoria","Coralie","Ludivine Godard","Cassandre","Dave","Manon","Kaida", "Henri", "Anissa"];
  
  var part2 = ["Dominique","Jean-Dominique","Sandrine"];

  var listeParticipants = [];
  for (let i =0; i<part1.length; i++){
    listeParticipants.push(part1[i]);
  }
  for (let i =0; i<part2.length; i++){
    listeParticipants.push(part2[i]);
  }

  var topsecret = ["ovation","truite","baignoire","mirabelle","homard","judo","postiches","couvert","paume","chanson",
  "larynx","almanach","cages","miel","rayon","drogue","barre","parade","semaines","biplan",
  "groupe","cendrier","tubercule","minute","chaussettes","dinosaure","sculpteur","agneau",
  "lutte","ensorceler","retour","catapulte","pectoral","peste","plateau","goudron","tournesol","rongeur",
  "guidon","collections","parapluie","football","joie","transpiration","alpiniste","dessous","recueillir","marais",
  "prescription","cidre","sirop","dalmatien","composer","potable","permanent","funiculaire","fraction","neige","heureux"];

  randomisation(part1);
  var participants=["Paul", "Kaida", "Julie Antoine", "Gael", "Christelle", "Philippe", "Pierre", "Jonathan", "Adele", "Dave", "Maelys", "Sarah Ledra", "Genevieve", "Henri", "Tristan Tison", "Matenin", "Marion", "Clémence", "Shane", "Bruno", "Sylvain", "Jimmy", "Florian", "Coralie", "Alba", "Margot", "Tristan Bonhomme", "Ludivine Da Silveira", "Teddy", "Anissa", "Cassandre", "Valery", "Samuel", "Maude", "Mathilde", "Francesca", "Manon", "Romain Gustiaux", "Sabine", "Flavien", "Sophie", "Cedric", "Nicolas", "Sofiane", "Victoria", "Julie Paulmaz", "Amine", "Ludivine Godard", "Adjmane", "Ludovic", "Audrey", "Eve", "Romain Guicharousse", "Moran", "Dominique", "Jean-Dominique", "Sandrine"]
  
  var selectname = document.getElementById("nom").value;
  var mdp = document.getElementById("mdp").value;
  if (listeParticipants.indexOf(selectname)===topsecret.indexOf(mdp)){
    document.getElementById("annonce").innerHTML += "Tu es le lutin de: " + giveMeMyLeprechaun(selectname,participants) + "<p> Si tu ne sais pas qui c'est, apprends le nom de tes collègues. </p>";
  }
};



