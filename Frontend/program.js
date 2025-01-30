fetch("http://localhost:4000/product")
  .then((res) => res.json())
  .then((data) => {
    showData(data);
  });

function showData(data) {
  let root = document.getElementById("root");
  let codeHtml = "";
  //console.log(data);
  data.forEach((element) => {
    makeHtml(element);
    codeHtml += makeHtml(element);
    root.innerHTML = codeHtml;
  });
}
function makeHtml(element) {
  const { id, price, image } = element;
  const html = `
    <div class="col-md-4">
        <img src="${image}" class="card-img-top" alt="...">
          <h5 class="card-title">${id}</h5>
          <p class="card-text">${price}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
  return html;
}
