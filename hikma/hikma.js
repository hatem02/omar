
var tab=document.querySelectorAll(".card");
var fleche1=document.querySelector(".img-svg1");
var fleche2=document.querySelector(".img-svg2");
var slide=document.querySelector(".slide");
var indice_carte_milieu=1;
function augmenter(variable) {
        variable.style="z-index:2;transform: scale(2);width:calc(4*100%);";
}
function diminuer(variable) {
    variable.style="transform: scale(1); z-index=1";
    
}

window.onload=()=>{
    augmenter(tab[indice_carte_milieu]);
}

fleche1.onclick=()=>{
    if(indice_carte_milieu!=1){
    diminuer(tab[indice_carte_milieu]);
    console.log(tab[indice_carte_milieu].width);
    augmenter(tab[indice_carte_milieu-1]);
    slide.scrollBy(-210,0);
    indice_carte_milieu=indice_carte_milieu-1;
    }
 }

fleche2.onclick=()=>{
   if(indice_carte_milieu!=11){
   
    diminuer(tab[indice_carte_milieu]);
    augmenter(tab[indice_carte_milieu+1]);
    slide.scrollBy(210,0);
    indice_carte_milieu=indice_carte_milieu+1;
   }
   
   
}
 