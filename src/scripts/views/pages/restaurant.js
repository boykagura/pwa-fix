import RestaurantSource from '../../data/therestodb';
import { createRestaurantItemTemplate } from '../templates/restotemplates';
const restaurant = {
    async render() {
      return `
      <div class="content">
        <h2 class="content__heading">Restoran kami yang selalu sedia</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },
   
    async afterRender() {
      const restaurants = await RestaurantSource.listRestaurants();
      const restaurantsContainer = document.querySelector('#movies');
  
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    },
  };
  
  export default restaurant;