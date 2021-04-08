function chercher(tab)
{
    let resultat = 0;
    for (const a of tab)
    {
        if (a >= 500)
        {
            resultat = a;
            break;
        }
    }   
    return resultat;  
}

function ouiOuNon(response)
{
    if (response == 1)
    {
        return 'Oui';
    }
    else
    {
        return 'Non';
    }
}

function rooooot(response)
{
    return ouiOuNon(response -1)
}

let premier = rooooot(2);

let element = document.getElementById('text-tres-canon');
element.innerHTML = premier;

