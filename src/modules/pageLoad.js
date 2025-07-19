import createRestaurantHomePage from './home'
import createContactPage from './contact';
import createMenuPage from './menu';
import createTabs from './website';


function initialLoad() {
  createTabs();
  createRestaurantHomePage();
}

export default initialLoad; //the default function to be imported by index.js