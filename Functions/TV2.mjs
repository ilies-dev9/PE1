function seriePlaats(serie){
    let loc;
    switch(serie){
        case 'Batman':
            loc = 'Gotham City';
            break;
        case 'Spider-man':
            loc = 'New York City';
            break;
        case 'One Piece':
            loc = 'Road to Laughtale';
            break;
        case 'Kaiju 8':
        case 'Jujutsu Kaisen':
            loc = 'Japan';
            break;
        default:
            return 'Sorry, ik weet niet waar de serie ' + serie + ' zich afspeelt.';
    }
    return 'Je gekozen TV-serie vind plaats in ' + loc
}

