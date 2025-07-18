import createRestaurantHomePage from './home'
import createContactPage from './contact';
import createMenuPage from './menu';


function initialLoad() {
  createMenuPage();
}

export default initialLoad; //the default function to be imported by index.js