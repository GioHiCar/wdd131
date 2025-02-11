const menuButton = document.querySelector("#hamburger")
const mainnav = document.querySelector('.navigation')
const title = document.querySelector("header h1")
const home = document.querySelector("#home")
const old = document.querySelector("#old")
const newFilter = document.querySelector("#new")
const large = document.querySelector("#large")
const small = document.querySelector("#small")

menuButton.addEventListener('click', () => {
    mainnav.classList.toggle('no-show');
    menuButton.classList.toggle('open');
    title.classList.toggle('no-show');
})

old.addEventListener('click', ()=>{
    let templesFiltered = temples.filter(temple => parseInt(temple.dedicated.substring(0,4)) < 1900)
    console.log(temples[0].dedicated.substring(0,3))
    renderCards(templesFiltered)
})
home.addEventListener('click', ()=>{
    renderCards(temples);
})
newFilter.addEventListener('click', ()=>{
    let templesFiltered = temples.filter(temple => parseInt(temple.dedicated.substring(0,4)) > 2000)
    renderCards(templesFiltered)
})
large.addEventListener('click', ()=>{
    let templesFiltered = temples.filter(temple => temple.area > 90000)
    renderCards(templesFiltered)
})
small.addEventListener('click', ()=>{
    let templesFiltered = temples.filter(temple => temple.area < 10000)
    renderCards(templesFiltered)
})

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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil Ecuador",
        dedicated: "1999, August 2",
        area: 45000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/guayaquil-ecuador-temple/guayaquil-ecuador-temple-43504.jpg"
    },
    {
        templeName: "Sydney Australia",
        location: "Sydney, Australia",
        dedicated: "1984, September 23",
        area: 30067,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-16035.jpg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima Peru",
        dedicated: "1986, January 12",
        area: "9600",
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-16035.jpg"
    }
  ];

  function cardTemplate(temple){
    return `<figure>
                <figcaption>
                    <h2>${temple.templeName}</h2>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Size: ${temple.area} sq ft</p>
                </figcaption>
                <img src=${temple.imageUrl} alt="${temple.Name}" loading="lazy">
            </figure>`;
  }
  function renderCards(temples){
    const html = temples.map(cardTemplate);
    document.querySelector(".container").innerHTML = html.join("");
  }
  renderCards(temples);
