//menu mobile

class MobileNavbar{
    constructor(mobileMenu, navLista, navLinks ){
        this.mobileMenu= document.querySelector(mobileMenu);
        this.navLista= document.querySelector(navLista);
        this.navLinks= document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
      
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }
    

        handleClick(){
            this.navLista.classList.toggle(this.activeClass);
            this.mobileMenu.classLista.toggle(this.activeClass);
            this.animateLinks();
        }
    
    addClickEvent(){
        this.mobileMenu.addEventListener("click",this.handleClick);
    }
    
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar= new MobileNavbar(
 ".mobile-menu",
 ".nav-lista",
 ".nav-list li",
);
mobileNavbar.init();

//Parte do sobre

var sobreNos = {
    "Missão":"Temos como misssão, fazer projetos inovadores, pensando no meio ambiente, utilizando os melhores materiais de forma consciente.",
    "Visão": "Ser reconhecida como a contrutora número 1 da América Latina, que precocupa em fazer construções sem impactar o meio ambiente.",
    "Valores": "<ul><li>Ecológicamente Correta</li><li>Ecológicamente Correta</li><li>pensamos na saúde e segurança de nossos funcionários</li><li>Ajudamos instituições de caridade</li><li>Ética profissional</li></ul>"
};

var unselected_color = "#9b9898";
var selected_color ="#696969";

var sobre_topicos = document.getElementsByClassName("menu-sobre-nos");

for( var a = 0; a < sobre_topicos.length; a++) {
  
    sobre_topicos[a].onclick = function(){

        for( var b = 0; b < sobre_topicos.length; b++) {
            sobre_topicos[b].style['background-color'] = unselected_color;
            sobre_topicos[b].style['font-weight'] ="normal";
        }
        this.style['background-color'] = selected_color;
        this.style['font-weight'] = "bold";

     var selecionado = this.innerHTML;
     document.getElementById("texto-menu-sobre-nos").innerHTML = sobreNos[selecionado]

    };
}


//Parte de Serviços

var slideInicio= 1;
começoSlides(slideInicio);

// Next/previous controls
function grandeSlides(n) {
  começoSlides(slideInicio += n);
}

// Thumbnail image controls
function pequenosSlide(n) {
    começoSlides(slideInicio= n);
}

function começoSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var pont = document.getElementsByClassName("images");
  var captionText = document.getElementById("principal");
  if (n > slides.length) {slideInicio = 1}
  if (n < 1) {slideInicio = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < pont.length; i++) {
    pont[i].className = pont[i].className.replace(" active", "");
  }
  slides[slideInicio-1].style.display = "block";
  pont[slideInicio-1].className += " active";
  captionText.innerHTML = pont[slideInicio-1].alt;
}

//Nossos Projetos

// Open the Modal
function openModal() {
    document.getElementById("minhaModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("minhaModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("primeiro-Slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("principio");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  //Formulário

  var submitButton = document.getElementById("submit_form");
  var form = document.getElementById("email_form");
  form.addEventListener("submit", function (e) {
      setTimeout(function () {
          submitButton.value = "Enviando...";
          submitButton.disabled = true;
      }, 1);
  });


  //Footer

   var ano_atual= new Date;
   ano_atual= ano_atual.getFullYear();
   document.getElementById("current_year").innerHTML= ano_atual