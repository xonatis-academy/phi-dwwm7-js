let tab = [23, 4, 2, 543, 34];

/*
la_somme_plus_elevee <- 0
@PourChaque h @Dans tab
    @DebutBloc
    @Si h > la_somme_plus_elevee
        @DebutBloc
        la_somme_plus_elevee <- h
        @FinBloc
    @FinBloc
resultat <- la_somme_plus_elevee
*/

let la_somme_plus_elevee = 0;
for (const h of tab)
{
    if (h > la_somme_plus_elevee)
    {
        la_somme_plus_elevee = h;
    }
}
let resultat = la_somme_plus_elevee;

let element = document.getElementById('text-tres-canon');
element.innerHTML = resultat;