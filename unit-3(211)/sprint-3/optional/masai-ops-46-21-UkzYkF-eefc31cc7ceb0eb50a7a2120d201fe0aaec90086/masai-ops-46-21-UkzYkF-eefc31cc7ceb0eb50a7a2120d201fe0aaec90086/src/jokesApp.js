function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
};
let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
};
window.onload = function () {
  // add click event to button
  // add change event to select tag
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
