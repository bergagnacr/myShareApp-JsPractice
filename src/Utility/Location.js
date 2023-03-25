const API_KEY = 'asda';

export const getCoordsFromAddress = async (address) => {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  return data.results[0].geometry.location;
};
