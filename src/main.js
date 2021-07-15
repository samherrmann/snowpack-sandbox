import axios from 'axios';

const h1 = document.querySelector('h1');

try {
  const res = await axios.get('/api.json');
  h1.innerHTML = res.data.message;
} catch (err) {
  h1.innerHTML = 'Failed to get API data.'
}
