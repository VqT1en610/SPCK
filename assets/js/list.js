let container = document.getElementById("container");
let productStorage = [];
fetch("./assets/js/source.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.mov);
    productStorage = data.mov;
    productStorage.forEach((mov) => {
      let div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
      <div class="top">
        <img src="${mov.imgLink}" alt=""/>
        <h2>${mov.name}</h2>
      </div>
      <div class="bot">
        <div class="in4">
          <div class="qual"><h5>${mov.quality}</h5></div>
          <div class="time"><h5>${mov.time}</h5></div>
        </div>
        <div class="ticket"><button></button><h3>Get ticket</h3></button></div>
      </div>
    </div>`;
      container.append(div);
    });
  });
