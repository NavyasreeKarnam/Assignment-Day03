fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        return response.json();
    })
    .then(countryDetails => {
        console.log(countryDetails.length);
        countryDetails.forEach(element => {
            console.log("Flag: "+element.flags.svg)
            console.log("Name: "+element.name.common)
            console.log("Region: "+element.region)
            console.log("SubRegion: "+element.subregion)
            console.log("Population: "+element.population)
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });