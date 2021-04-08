let tab = [23, 4, 2, 543, 34];

/*
A <- tab[0]
tab[0] <- tab[1]
tab[1] <- A
*/

let A = tab[0];
tab[0] = tab[1];
tab[1] = A;

let element = document.getElementById('text-tres-canon');
element.innerHTML = tab[0];