const lugares = [
  "getsemani",
  "sanfelipe",
  "lapopa",
  "boquilla",
  "manglares",
  "bazurto",
  "torredelreloj",
  "murallas",
  "islas",
  "champeta"
];

function unlockStamp(id){

  localStorage.setItem(id, "visited");

  const card = document.getElementById(id);

  card.classList.add("completed");

  const status = card.querySelector(".status");

  status.textContent = "Visitado";

  status.classList.remove("locked");

  status.classList.add("unlocked");

  updateProgress();
}

function removeStamp(id){

  localStorage.removeItem(id);

  const card = document.getElementById(id);

  card.classList.remove("completed");

  const status = card.querySelector(".status");

  status.textContent = "No visitado";

  status.classList.remove("unlocked");

  status.classList.add("locked");

  updateProgress();
}

function loadStamps(){

  lugares.forEach(id => {

    if(localStorage.getItem(id) === "visited"){

      const card = document.getElementById(id);

      card.classList.add("completed");

      const status = card.querySelector(".status");

      status.textContent = "Visitado";

      status.classList.remove("locked");

      status.classList.add("unlocked");
    }

  });

  updateProgress();
}

function updateProgress(){

  let total = lugares.length;

  let completed = 0;

  lugares.forEach(id => {

    if(localStorage.getItem(id) === "visited"){

      completed++;
    }

  });

  const percent = (completed / total) * 100;

  document.getElementById("progress").style.width =
    percent + "%";

  document.getElementById("progress-text").textContent =
    `${completed}/${total} lugares visitados`;
}

loadStamps();

function showSupport(){

  alert(`

Ayuda y Soporte

• Problemas con un código QR

• Recuperación de sellos

• Información turística

• Reporte de errores

Contacto:
soporte@cartagena.com

  `);

}

function resetAlbum(){

  if(
    !confirm(
      "¿Deseas reiniciar todo el álbum?"
    )
  ){
    return;
  }

  const places = [

    "getsemani",
    "sanfelipe",
    "lapopa",
    "boquilla",
    "manglares",
    "bazurto",
    "torredelreloj",
    "murallas",
    "islas",
    "champeta"

  ];

  places.forEach(id => {

    localStorage.removeItem(id);

    const card =
      document.getElementById(id);

    if(card){

      card.classList.remove("completed");

      const status =
        card.querySelector(".status");

      status.textContent =
        "No visitado";

      status.classList.remove("unlocked");

      status.classList.add("locked");

    }

  });

  updateProgress();

}