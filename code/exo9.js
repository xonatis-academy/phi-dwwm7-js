let tab = [23, 4, 2, 543, 34];

/*
resultat <- 1000
@PourChaque h @Dans tab
    @DebutBloc
    @Si h < resultat
        @DebutBloc
        resultat <- h
        @FinBloc
    @FinBloc
*/

let resultat = 1000;
for (const h of tab)
{
    if (h < resultat)
    {
        resultat = h;
    }
}

let element = document.getElementById('text-tres-canon');
element.innerHTML = resultat;