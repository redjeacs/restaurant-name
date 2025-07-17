// restaurant.js
import restaurantImg from '../assets/front-page-img.jpg';

const createRestaurantHomePage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = '牛花USHIHANA';
  pageContent.appendChild(restaurantName);

  const frontPageImage = document.createElement('img');
  frontPageImage.classList.add('front-page-img');
  frontPageImage.src = restaurantImg;
  frontPageImage.alt = 'front page image';
  pageContent.appendChild(frontPageImage);

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = `With a seasonal set menu and a Chef's Table Yakiniku experience, 
  牛花USHIHANA is an exclusive omakase course with innovative and creative cuisine.`;
  pageContent.appendChild(description);

  content.appendChild(pageContent);
}


export default createRestaurantHomePage;