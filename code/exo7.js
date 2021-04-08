let tab = [23, 4, 2, 543, 34];

/*
resultat <- 0
@PourChaque a @Dans tab
    @DebutBloc
    resultat <- resultat + a
    @FinBloc
*/

let resultat = 0;
for (const a of tab)
{
    resultat = resultat + a;
}

let element = document.getElementById('text-tres-canon');
element.innerHTML = resultat;