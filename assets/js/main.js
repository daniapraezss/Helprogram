let testB = document.getElementById("bootstraptest");
let pantallaBootstrap = document.getElementById("pantallaBootstrap");


const fnBoostrap = () => {
  let nombreU = prompt("Digite por favor su nombre");
  if (nombreU == null || nombreU == "") {
    alert("Por favor ingrese su nombre o no puede continuar");
  } else {
    let pregunta1 = prompt(
      "Primera pregunta, ¿Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web? verdadero(v) o falso(f)"
    );
    pregunta1 = pregunta1.toLowerCase();
    let pregunta2 = prompt(
      "Segunda pregunta, ¿Bootstrap está constituido por una serie de archivos CSS y JavaScript? verdadero(v) o falso(f)"
    );
    pregunta2 = pregunta2.toLowerCase();
    if (pregunta1 === "v" && pregunta2 === "v") {
      pantallaBootstrap.innerHTML += "Aprobaste el examen " + nombreU;
    } else {
      pantallaBootstrap.innerHTML +=
        "No aprobaste el examen, por favor intentalo de nuevo";
    }
  }
};


testB.onclick = function () {
  fnBoostrap();
};
