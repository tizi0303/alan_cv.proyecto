


document.getElementById("btn_primario").onclick = 
function secundario(){
    var x = document.getElementById("texto_primario");
    if (x.style.display === "none") {
      x.style.display = "block", btn_primario.innerHTML = "Menos Informacion" ;
    } else {
      x.style.display = "none", btn_primario.innerHTML = "Mas Informacion" ;
    }
}

document.getElementById("btn_sec").onclick = 
function secundario(){
    var x = document.getElementById("texto_sec");
    if (x.style.display === "none") {
      x.style.display = "block", btn_sec.innerHTML = "Menos Informacion" ;
    } else {
      x.style.display = "none", btn_sec.innerHTML = "Mas Informacion" ;
    }
}
  
document.getElementById("btn_terciario").onclick = 
function terciario(){
    var x = document.getElementById("texto_terciario");
    if (x.style.display === "none") {
      x.style.display = "block", btn_terciario.innerHTML = "Menos Informacion" ;
    } else {
      x.style.display = "none", btn_terciario.innerHTML = "Mas Informacion" ;
    }
}

document.getElementById("btn_cita").onclick = 
function cita(){
    var x = document.getElementById("cita_laboral");
    if (x.style.display === "none") {
      x.style.display = "block", btn_cita.innerHTML = "Atras" ;
    } else {
      x.style.display = "none", btn_cita.innerHTML = "click aqui" ;
    }
}
