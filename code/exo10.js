let tab = [23, 4, 2, 543, 34];

/*
resultat <- 0
@PourChaque a @Dans tab
    @DebutBloc
    @Si a >= 500
        @DebutBloc
        resultat <- a
        @Stop
        @FinBloc
    @FinBloc
*/

let resultat = 0;
for (const a of tab)
{
    if (a >= 500)
    {
        resultat = a;
        break;
    }
}

let element = document.getElementById('text-tres-canon');
element.innerHTML = resultat;