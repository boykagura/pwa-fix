import restaurant from '../views/pages/restaurant';
import fav from '../views/pages/favourite';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': restaurant, // default page
  '/restaurant': restaurant,
  '/favorite': fav,
  '/detail/:id': Detail,
};
 
export default routes;