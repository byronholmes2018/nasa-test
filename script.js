const getAsteroid = async () => {
  const response = await fetch(
    'https://ssd-api.jpl.nasa.gov/sbdb.api?des=73P&alt-des=1&cd-epoch=1',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
};

getAsteroid()
  .then((data) => console.log('data', data))
  .catch((err) => console.log('err ', err));