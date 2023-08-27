fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.map((values) => {
      data1 += `<div class="card">
          <img class="images" src="${values.image}" alt="image">
          <h1 class="title">${values.title}</h1>
          <p class="description">${values.description}</p>
          <p class="price">${"$" + values.price}</p>
        </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
