const menuButton = document.querySelector("#hamburger")
const mainnav = document.querySelector('.navigation')
const title = document.querySelector("header h1")

menuButton.addEventListener('click', () => {
    mainnav.classList.toggle('no-show');
    menuButton.classList.toggle('open');
    title.classList.toggle('no-show');
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
