const date = new Date();
let annee = date.getFullYear();

console.log(annee);
function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(bisextile(annee));