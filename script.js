const dataHolder = document.querySelector('.data-holder');

const getAsteroid = async () => {
  const response = await fetch('http://localhost:3000/smallBody');
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};

const postAsteroid = async () => {
  const response = await fetch('http://localhost:3000/testPost', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ myKey: 'myVal' }),
  });

  const data = await response.json();
  return data;
};

console.log('changes');

// getAsteroid()
//   .then((data) => console.log(data))
//   .catch((err) => console.log('err ', err));

postAsteroid()
  .then((data) => console.log('response from server, data', data))
  .catch((err) => console.log('error ', err));
