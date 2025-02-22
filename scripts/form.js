const year = document.querySelector("#year");
const short = document.querySelector("#lastModified");

const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

year.innerHTML = `&copy${today.getFullYear()}</span>`;
short.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat("en-US",
{
    dateStyle: "short"
}
).format(today)} ${hours}:${minutes}:${seconds}</span>`;

const options = document.querySelector('#product')

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function displayList(item) {
    let option = document.createElement('select');
    option.textContent = item.name;
    option.value = item.name;
    options.append(option);
}

products.forEach(product => {
    displayList(product);
})