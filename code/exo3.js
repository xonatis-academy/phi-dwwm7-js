let age = 25;

/*
resultat <- Faux
@Si age >= 18
    @DebutBloc
    resultat <- Vrai
    @FinBloc
*/

let resultat = false;
if (age >= 18)
{
    resultat = true;
}

let element = document.getElementById('text-tres-canon');
element.innerHTML = premier;