(function(d){	const l = d['pl'] = d['pl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Align center":"Wyrównaj do środka","Align left":"Wyrównaj do lewej","Align right":"Wyrównaj do prawej",Aquamarine:"Akwamaryna",Black:"Czarny","Block quote":"Cytat blokowy",Blue:"Niebieski",Bold:"Pogrubienie","Break text":"Rozbijaj tekst","Bulleted List":"Lista wypunktowana",Cancel:"Anuluj","Caption for image: %0":"Nagłówek do obrazu: %0","Caption for the image":"Nagłówek do obrazu","Centered image":"Obraz wyrównany do środka","Change image text alternative":"Zmień tekst zastępczy obrazka","Choose heading":"Wybierz nagłówek",Column:"Kolumna","Decrease indent":"Zmniejsz wcięcie","Delete column":"Usuń kolumnę","Delete row":"Usuń wiersz","Dim grey":"Ciemnoszary",Downloadable:"Do pobrania","Dropdown toolbar":"Rozwijany pasek narzędzi","Edit block":"Edytuj blok","Edit link":"Edytuj odnośnik","Editor block content toolbar":"Pasek zadań treści blokowej edytora","Editor contextual toolbar":"Kontekstowy pasek zadań edytora","Editor editing area: %0":"Obszar edycji edytora: %0","Editor toolbar":"Pasek narzędzi edytora","Enter image caption":"Wstaw tytuł obrazka","Full size image":"Obraz w pełnym rozmiarze",Green:"Zielony",Grey:"Szary","Header column":"Kolumna nagłówka","Header row":"Wiersz nagłówka",Heading:"Nagłówek","Heading 1":"Nagłówek 1","Heading 2":"Nagłówek 2","Heading 3":"Nagłówek 3","Heading 4":"Nagłówek 4","Heading 5":"Nagłówek 5","Heading 6":"Nagłówek 6","Image toolbar":"Pasek narzędzi obrazka","image widget":"Obraz","In line":"W linii","Increase indent":"Zwiększ wcięcie","Insert column left":"Wstaw kolumnę z lewej","Insert column right":"Wstaw kolumnę z prawej","Insert image":"Wstaw obraz","Insert media":"Wstaw media","Insert paragraph after block":"Wstaw akapit po bloku","Insert paragraph before block":"Wstaw akapit przed blokiem","Insert row above":"Wstaw wiersz ponad","Insert row below":"Wstaw wiersz poniżej","Insert table":"Wstaw tabelę",Italic:"Kursywa",Justify:"Wyrównaj obustronnie","Left aligned image":"Obraz wyrównany do lewej","Light blue":"Jasnoniebieski","Light green":"Jasnozielony","Light grey":"Jasnoszary",Link:"Wstaw odnośnik","Link URL":"Adres URL","Media URL":"Adres URL","media widget":"widget osadzenia mediów","Merge cell down":"Scal komórkę w dół","Merge cell left":"Scal komórkę w lewo","Merge cell right":"Scal komórkę w prawo","Merge cell up":"Scal komórkę w górę","Merge cells":"Scal komórki",Next:"Następny","Numbered List":"Lista numerowana","Open in a new tab":"Otwórz w nowej zakładce","Open link in new tab":"Otwórz odnośnik w nowej zakładce","Open media in new tab":"Otwórz media w nowej zakładce",Orange:"Pomarańczowy",Paragraph:"Akapit","Paste the media URL in the input.":"Wklej adres URL mediów do pola.","Press Enter to type after or press Shift + Enter to type before the widget":"Naciśnij Enter, aby pisać po widżecie, lub Shift + Enter, aby pisać przed widżetem",Previous:"Poprzedni",Purple:"Purpurowy",Red:"Czerwony",Redo:"Ponów","Rich Text Editor":"Edytor tekstu sformatowanego","Right aligned image":"Obraz wyrównany do prawej",Row:"Wiersz",Save:"Zapisz","Select all":"Zaznacz wszystko","Select column":"Zaznacz kolumnę","Select row":"Zaznacz wiersz","Show more items":"Pokaż więcej","Side image":"Obraz dosunięty do brzegu, oblewany tekstem","Split cell horizontally":"Podziel komórkę poziomo","Split cell vertically":"Podziel komórkę pionowo","Table toolbar":"Pasek narzędzi tabel","Text alignment":"Wyrównanie tekstu","Text alignment toolbar":"Pasek narzędzi wyrównania tekstu","Text alternative":"Tekst zastępczy obrazka","The URL must not be empty.":"Adres URL nie może być pusty.","This link has no URL":"Nie podano adresu URL odnośnika","This media URL is not supported.":"Ten rodzaj adresu URL nie jest obsługiwany.","Tip: Paste the URL into the content to embed faster.":"Wskazówka: Wklej URL do treści edytora, by łatwiej osadzić media.","Toggle caption off":"Ukryj podpis tabeli","Toggle caption on":"Pokaż podpis tabeli",Turquoise:"Turkusowy",Undo:"Cofnij",Unlink:"Usuń odnośnik","Upload failed":"Przesyłanie obrazu nie powiodło się","Upload in progress":"Trwa przesyłanie",White:"Biały","Widget toolbar":"Pasek widgetów","Wrap text":"Zawijaj tekst",Yellow:"Żółty"}	);l.getPluralForm=function(n){return (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));