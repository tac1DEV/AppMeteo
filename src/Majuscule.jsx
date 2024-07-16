export default function Majuscule(chaine) {
    let table = [];
    let words = chaine.split(' ');
    words.forEach(element => {
      let premiereLettreMajuscule = element.charAt(0).toUpperCase();
      let resteDeLaChaineEnMinuscules = element.slice(1).toLowerCase();
      let chaineMajuscule = premiereLettreMajuscule + resteDeLaChaineEnMinuscules;
      table.push(chaineMajuscule);
      return table;
    });
    return table.join(" ");
  }