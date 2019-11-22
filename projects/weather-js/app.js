// Init wather object
const weather = new Weather("San Francisco", "Ca");

// Init UI
const ui = new UI();
// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Get weather function
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.showUI(results)
      console.log(results);
    })
    .catch(err => console.log(err));
}
