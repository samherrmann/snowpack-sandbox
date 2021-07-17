import axios from 'axios';
import Alpine from 'alpinejs';

Alpine.data('myComponent', () => ({
  
  message: '',

  async init() {
    try {
      const res = await axios.get('/api.json');
      this.message = res.data.message;
    } catch (err) {
      this.message = 'Failed to get API data.'
    }
  }
}))

Alpine.start()
