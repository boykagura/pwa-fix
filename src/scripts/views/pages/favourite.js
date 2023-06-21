import RestaurantSource from '../../data/therestodb';
import FavoriteRestaurantIdb from '../../data/restoidb';
import { createRestaurantItemTemplate } from '../templates/restotemplates';
const fav = {
    async render() {
      return `
      <div class="content">
      <h2 class="content__heading">Favorite Restaurant</h2>
      <div id="movies" class="list-restaurant">
      </div>
    </div>
  `;
    },
   
    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantsContainer = document.querySelector('.list-restaurant');
    
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      },
    };
   
  export default fav;