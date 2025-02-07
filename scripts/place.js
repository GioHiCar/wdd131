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

function calculateWindChill(temperature, windSpeed) {
    const temperatureF = temperature * 9/5 + 32;
    const windSpeedMPH = windSpeed * 0.621371;

    if (temperature <= 10 && windSpeed > 4.8) {
        return "N/A";
     }

     const windChillF = 35.74 + 0.6215 * temperatureF - 35.75 * Math.pow(windSpeedMPH, 0.16) + 0.4275 * temperatureF * Math.pow(windSpeedMPH, 0.16);

    const windChillC = (windChillF - 32) * 5/9;

  return Number(windChillC.toFixed(0)) + '&deg C';
}

document.querySelector('#windChill').innerHTML = calculateWindChill(19, 9)