let cuestionario = document.getElementById("cuestionario");


const encuesta = () => {
    let nombreU = prompt("Digite por favor su nombre")
    if (nombreU == null || nombreU == "") {
        alert("Por favor ingrese su nombre o no puede continuar")
    } else {
        pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Scrum solo sirve para realizar trabajos individuales")
        pre2 = pre1.toLowerCase();
        if (pre2 === "falso") {
            pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Con javascript se le den los diseños dinamicos a las paginas")
            pre2 = pre1.toLowerCase();
            if (pre2 === "verdadero") {
                pre1 = prompt("Ingresa solo verdadero o falso a las siguientes preguntas \n Los scrum se deben realizar solo uno a la semana.")
            pre2 = pre1.toLowerCase();
            if (pre2 === "falso") {
                alert("Felicidades " + nombreU + " acertaste en todas estas en buen camino hacia la programación")
            } else {
                alert("Lo siento estas equivocado por favor intenta de nuevo")  
            }
            } else {
                alert("Lo siento estas equivocado por favor intenta de nuevo")  
            }
        } else {
            alert("Lo siento estas equivocado por favor intenta de nuevo")
        }
    }
}       


cuestionario.onclick = function () {
    encuesta();
}