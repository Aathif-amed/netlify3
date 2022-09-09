// var color = prompt("Enter the color!!!!");
// var p1 = new Promise((resolve, reject) => {
//     if (color == "red")
//         setTimeout(() => resolve("True"), 5000);
//     else
//         reject("False");
// })
// console.log(p1);
// p1.then((data) => console.log(data + "data")).catch((err) => console.log(err + "err"));

let countries_data = fetch("https://restcountries.com/v2/all");
countries_data.then((data) => data.json()).then((details) => {
    for (let i = 0; i < details.length; i += 3) {
        var div = document.createElement("div");
        div.innerHTML = `
        <div class="container-fluid" id="about">
        <div class="row p-5 ">
            <div class="col-12">
        <div class="card-deck">
        <div class="card">
          <img src="${details[i].flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${details[i].name}</h5>
            <p class="card-text">${details[i].capital}</p>
          </div>
        </div>
        <div class="card">
          <img src="${details[i+1].flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${details[i+1].name}</h5>
            <p class="card-text">${details[i+2].capital}</p>
          </div>
        </div>
        <div class="card">
          <img src="${details[i+2].flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${details[i+2].name}</h5>
            <p class="card-text">${details[i+2].capital}</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>`;
        document.body.append(div);
    }

}).catch((err) => console.log("Error Occured"));
