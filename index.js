const weatherData = () => {

    // VARIABLES DECLARATION
    let cityValue = document.querySelector("#city").value;

    let countryName = document.querySelector("#countryName");
    let regionName = document.querySelector("#regionName");
    let cityName = document.querySelector("#cityName");

    let icon = document.querySelector("#icon");
    let description = document.querySelector("#description");

    let tempC = document.querySelector("#tempC");
    let tempF = document.querySelector("#tempF");


    let humidity = document.querySelector("#humidity");
    let humidityContent = document.querySelector("#humidityContent");
    let humidityIcon = document.querySelector("#humidityIcon");

    let speed = document.querySelector("#speed");
    let speedContent = document.querySelector("#speedContent");
    let speedIcon = document.querySelector("#speedIcon");


    axios.get(`http://api.weatherapi.com/v1/current.json?key=5c414875c9a84b8a96c85224231604&q=${cityValue}&aqi=yes`) //API URL
        .then(function (response) {
            // handle success

            //LOCATION DETAIL START
            let weatherLocation = response.data.location;
            countryName.innerHTML = weatherLocation.country;
            regionName.innerHTML = weatherLocation.region;
            cityName.innerHTML = weatherLocation.name;
            //LOCATION DETAIL END


            //TEMPERATURE DETAIL START
            let weatherCurrent = response.data.current;
            tempC.innerHTML = `${weatherCurrent.temp_c} °C`;
            tempF.innerHTML = `${weatherCurrent.temp_f} °F`;
            //TEMPERATURE DETAIL END


            //ICON and DESCRIPTION START
            let weatherIcon = response.data.current.condition.icon;
            let weatherText = response.data.current.condition.text;

            icon.src = weatherIcon;

            description.innerHTML = weatherText;

            //ICON and DESCRIPTION END


            //AIR AND HUMIDITY INFO START
            humidity.innerHTML = `${response.data.current.humidity} %`;
            humidityContent.innerHTML = `Humidity`;
            humidityIcon.src = `./images/humidity.png`;

            speed.innerHTML = `${response.data.current.wind_kph} km/h`;
            speedContent.innerHTML = `Wind Speed`
            speedIcon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxUlEQVR4nO2Zz29MURTHjx/xo1hY+AfUjxWJiB9JSWpDKpUqJWLFYEF3lI0QYSFsSERiIXaNEHttWNvaiDASWm0lKmJBzaTFRy63yXO8eXPfzLszd5L3Sd5iMufdc7/vnnvO/SGSk9N8gDagAAwDb4EyMAE8AfqBpRI6QDcwSTIfgD4JFeAc8As3jN1ZCQ2gB/jpKCIqZp+EBPBGdbIEXAJWAQuBlcB54FtMmLU5+jDtHAYeAiPAd+Ar8BIYNB8FWFCvkPFI58zk7qhgtxmYUmL6Hdo/AIw6jHIR2FOPkF47yc3TU8X2gnI+lGA7F7hFeq4Ac2oVM8/Rrl2HV4JtLSJmuSo+MXHMv5Qr2PUpuz+2wB1gK7AcWAJsAW7Y/3Qy6fYpZK1yOF7BrqjtgE0J7a4D3qt3XrlGSi1CrrvMEVVYp02icGh7vc1mUfb7qjczytHxCrYFGy4mlR9L4eOmav9eVp1fBGy0sa2L5khSHTHrMtc6M4udP1GKcUa7gXdkgxmZXZIxwDLl53O1wleviKNZi4iMYpQp0QBjGYgwmWSbeALoUP5exBl12T1GGkr2nfvAQW/p0ALcVf4HpdUAOmMSir+i6ANgJ/BFiXgNzJfQAVbYcH8Us6kzv3dUejHL9OubgaQvkFX69ck0cLraUGaRfn3yzFR2l5isJf36ZBJ4btdXnQ7TKifHK/hNvyW7rH8AHPK6lKGx6ddU5e2+hIzRWMxyv+BDSFcT0u8P41daBf5uiTcAt23no4ym3fIGgTn2tEuNKCekFQGuKSHD0ooAa1wO8oLH9Wi1aZhC53JSnuawu+HYy5hP9ql2/XBRCXksocD/F0Kxx0L2hF2f4Z6SgK/oysBlYLW9Wmu3I6FFTARVR6j90nSvhAYwkPIa+4wEvh34WEWECadeCR1gMXAEeGpFzdjODwEnzbVas/uYkyNu/AbwPWjRA02dmwAAAABJRU5ErkJggg==`
            //AIR AND HUMIDITY INFO END

            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

}