import UrlParser from '../../routes/url-parser';
import  RestaurantSource from '../../data/therestodb';
import { createRestaurantDetailTemplate } from '../templates/restotemplates';
import LikeButtonInitiator from '../../utils/like-button-intiator';
const Detail = {
    async render() {
      return `
      <div id="movie" class="movie"></div>

      <div id="like-button" class="like-button"> </div>
      `;
    },
   
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurants = await RestaurantSource.detail(url.id);
        const restoContainer = document.querySelector('#movie');
        restoContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

        LikeButtonInitiator.init ({
          likeButtonContainer: document.querySelector("#like-button"),
          restaurant: {
            id: restaurants.id,
            pictureId: restaurants.pictureId,
            name: restaurants.name,
            description: restaurants.description,
            city: restaurants.city,
            rating: restaurants.rating,
          },
        })
    },
  };
   
  export default Detail;