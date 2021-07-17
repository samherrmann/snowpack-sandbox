import axios from 'axios';
import Alpine from 'alpinejs';

class MyComponent {

  message = '';

  async init(): Promise<void> {
    try {
      const res = await axios.get('/api.json');
      this.message = res.data.message;
    } catch (err) {
      this.message = 'Failed to get API data.'
    }
  }
}

Alpine.data('myComponent', () => new MyComponent())
Alpine.start()
