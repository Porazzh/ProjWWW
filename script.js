document.addEventListener("DOMContentLoaded", function() {
  const locations = document.querySelectorAll('.location');
  const popup = document.getElementById('guide-popup');
  const closeBtn = document.getElementById('close-btn');
  const title = document.getElementById('guide-title');
  const description = document.getElementById('guide-description');
  const link = document.getElementById('guide-link');
  const guideLinkTitle = document.getElementById('guide-link-title');

  
  const guides = {
    "1": {
      title: "The Lab",
      description: "1. Przygotowanie: Zabierz broń szybkostrzelna (np. MP7), pancerz klasy 4 (6B43), apteczki (Grizzly, Smarteca) i NVG. 2. Wrogowie: Główne zagrożenie to inni gracze oraz silni NPC (Raiders). 3. Kluczowe miejsca: Zlokalizuj punkty ewakuacji i laboratoria z cennym lootem. 4. Strategia: Skradaj się, unikaj hałasu, bądź czujny na kamery. 5. Ewakuacja: Wybierz punkt ewakuacji, np. drzwi bezpieczeństwa lub kapsułę ewakuacyjną. Uważaj na szturmową strefę po uruchomieniu urządzeń. Podsumowanie: The Lab to wymagająca mapa, wymagająca planowania, ostrożności i precyzyjnych działań.",
      link: "the_lab.html", 
      wiki: "https://escapefromtarkov.fandom.com/wiki/The_Lab" 
    },
    "2": {
      title: "Customs",
      description: "1. Przygotowanie: Broń: AK-74M lub M4A1, pancerz klasy 4 (Paca, 6B3TM), medykamenty: Grizzly, bandaże, hemostatyki, Smartec. 2. Wrogowie: Gracze PvP, Scavy (szczególnie w magazynach, biurach). 3. Kluczowe miejsca: Punkty ewakuacji: Zapasowy punkt, Stacja BP. 4. Strategia: Skradanie się, unikanie otwartych przestrzeni, obserwacja wrogów. 5. Ewakuacja: Sprawdzaj punkty ewakuacji w odpowiednim czasie. Podsumowanie: Customs to średniej wielkości mapa z intensywnymi walkami PvP i trudnymi elementami; bądź ostrożny i dobrze zaplanuj ewakuację.",
      link: "customs.html", 
      wiki: "https://escapefromtarkov.fandom.com/wiki/Customs" 
    },
    "3": {
      title: "Interchange",
      description: "Interchange to duża mapa z centralnym punktem – centrum handlowym Ultra. Zanim wejdziesz na mapę, przygotuj się na intensywne walki PvP oraz PvE. Misje na Interchange często wymagają zdobycia przedmiotów w określonych sklepach lub strefach, więc warto znać mapę, aby nie zabłądzić. Pamiętaj o odpowiednim wyposażeniu – nocne misje mogą sprawić, że widoczność będzie bardzo ograniczona. Główne punkty zainteresowania: Ultra (centrum handlowe) – To serce mapy. Pełne niebezpiecznych przeciwników i cennych przedmiotów. Często odbywają się tu intensywne walki z innymi graczami. Uważaj na pułapki i zasadzki. Stacja benzynowa – Znajduje się na południu mapy i jest jednym z punktów, gdzie można znaleźć zasoby oraz sprzęt. ",
      link: "interchange.html", 
      wiki: "https://escapefromtarkov.fandom.com/wiki/Interchange" 
    },
    "4": {
      title: "Woods",
      description: "Woods to rozległy, leśny teren z licznymi wzgórzami, bunkrami, stacją kolejową i obozami; kluczowe punkty to Skier’s Camp, Bunkier, stacja kolejowa, środkowy las i skrzynie z ładunkiem; aby przeżyć, należy skradzać się, unikać otwartych przestrzeni, kontrolować wyższe punkty, dobrze przygotować się do PVP, znać extracty (np. Zarośla, stacja kolejowa, Bunkier) oraz zachować ostrożność przy misjach i walce z innymi graczami.",
      link: "woods.html",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Woods"
    },
    "5": {
      title: "Factory",
      description: "Factory to mała, intensywna mapa z wąskimi korytarzami, magazynami, biurami i wieloma poziomami, gdzie gracze muszą szybko podejmować decyzje, korzystając z broni krótkiego zasięgu i strategii skradania się, by przetrwać brutalne starcia PvP i uciec przez wyjścia, takie jak Brama 1 i Brama 3.",
      link: "factory.html",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Factory",
    },
    "6": {
      title: "Reserve",
      description: "Mapa Reserve  to rozległa wojskowa baza z bunkrami, wieżami, podziemnymi tunelami i zewnętrznymi terenami, oferująca intensywne starcia PvP, możliwość zdobywania cennych przedmiotów oraz strategiczne wyzwania, wymagające monitorowania wyjść, skradania się, i zbierania kluczy do bunkrów i pomieszczeń z zasobami.",
      link: "reserve.html",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Reserve",
    },
    "7": {
      title: "Lighthouse",
      description: "Lighthouse to średniej wielkości mapa w Escape from Tarkov, oferująca intensywne starcia PvP w otwartych przestrzeniach, bunkrach i na wzgórzach, z ważnymi punktami jak latarnia, bunkry i tereny zewnętrzne, gdzie kluczowe jest skradanie się, kontrolowanie wysokości oraz monitorowanie wyjść, a także walka na średnim zasięgu.",
      link: "lighthouse.html",
      wiki: "https://escapefromtarkov.fandom.com/wiki/Lighthouse"
    }
  };

  
  function showPopup(locationId) {
    const guide = guides[locationId];
    

    guideLinkTitle.textContent = guide.title;
    guideLinkTitle.setAttribute('href', guide.wiki);  

    description.textContent = guide.description;

   
    if (guide.link) {
      link.setAttribute('href', guide.link);  
      link.style.display = 'inline-block';    
      link.textContent = 'Zobacz więcej';     
    } else {
      link.style.display = 'none';            
    }

    popup.style.display = "flex";  
  }

  
  locations.forEach(location => {
    location.addEventListener("click", function() {
      const locationId = this.dataset.location;
      showPopup(locationId);
    });
  });

 
  closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
  });


  window.addEventListener("click", function(event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
