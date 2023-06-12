const favNumber = 7;
const url = `http://numbersapi.com/${favNumber}?json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.text); // Display the fact about the favorite number
  })
  .catch(error => {
    console.log('Error:', error);
  }
);


const favoriteNumbers = [7, 42, 99];
const frequests = favoriteNumbers.map(number => {
  const url = `http://numbersapi.com/${number}?json`;
  return fetch(url).then(response => response.json());
});

Promise.all(frequests)
  .then(data => {
    for (const fact of data) {
      console.log(fact.text);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  }
);


const favoriteNumber = 7;
const requests = [];

for (let i = 0; i < 4; i++) {
  const durl = `http://numbersapi.com/${favoriteNumber}?json`;
  requests.push(fetch(durl));
}

Promise.all(requests)
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    for (const fact of data) {
      console.log(fact.text);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  }
);
