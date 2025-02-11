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

const reveal = document.querySelector("#reveal");
reveal.textContent = `🎉 Congratulations! You are having a <strong>hi</strong>!`;