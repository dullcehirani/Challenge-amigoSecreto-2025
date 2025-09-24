let amigos = []; //Creamos una lista para almacenar los nombres


function normaliza(s) {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}


function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Agregamos un if por si el campo está vacio, y también si el nombre está repetido
  if (nombre === "") {
    alert("No ha introducido ningún nombre.");
    return;
  }
  
  const yaExiste = amigos.some((n) => normaliza(n) === normaliza(nombre));
  if (yaExiste) {
    alert("El nombre que seleccionaste ya ha sido ingresado.");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  input.value = "";
  ListaActualizada();

}

function ListaActualizada(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);  
}

}

//Creamos una función para sortear a un amigo
function sortearAmigo(){
    if (amigos.length < 2) {
    alert("Agrega al menos 2 participantes para sortear.");
    return;
    }

  const i = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[i];
  const salida = document.getElementById("resultado");
  if (salida) {
    salida.textContent = `Tu amigo secreto es: ${ganador}`;
  } else {
    alert(`Tu amigo secreto es: ${ganador}`);
  }


}