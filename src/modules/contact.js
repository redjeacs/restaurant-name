import facebookIcon from '../assets/facebook-f-brands-solid.svg';
import instagramIcon from '../assets/instagram-brands-solid.svg';
import inlineIcon from '../assets/link.png';

const createContactPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');


  const title = document.createElement('h1');
  title.classList.add('contact');
  title.textContent = 'Contact';
  pageContent.appendChild(title);


  const medias = document.createElement('div');
  medias.classList.add('medias');
  const facebookLink = document.createElement('a');
  facebookLink.classList.add('facebook-link');
  facebookLink.target = '_blank';
  facebookLink.href= 'https://www.facebook.com/ushihana.taipei/';
  const facebook = document.createElement('img');
  facebook.classList.add('icons', 'facebook');
  facebook.src = facebookIcon;
  facebookLink.appendChild(facebook);
  medias.appendChild(facebookLink);

  const instagram = document.createElement('img');
  instagram.classList.add('icons', 'instagram');
  const instagramLink = document.createElement('a');
  instagramLink.classList.add('instagram-link');
  instagramLink.target = '_blank';
  instagramLink.href= 'https://www.instagram.com/yakiniku_ushihana/?hl=en';
  instagram.src = instagramIcon;
  instagramLink.appendChild(instagram);
  medias.appendChild(instagramLink);

  const inline = document.createElement('img');
  inline.classList.add('icons', 'inline');
  const inlineLink = document.createElement('a');
  inlineLink.classList.add('inline-link');
  inlineLink.target = '_blank';
  inlineLink.href= 'https://inline.app/booking/-NhUrramwyA6XHOZmxr2:inline-live-3/-NhUrrnAmvMIkxfkMbYp?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdUdWdjNNSTVhUElGS0JWagEeHkOSwmhaXkC_8A8KsDg2vBxb6tQQ-P3Tl545RSLfDR0tNOYKjKxN5rik724_aem_vjxCV5LaWPsWQmyZPcjWWw';
  inline.src = inlineIcon;
  inlineLink.appendChild(inline);
  medias.appendChild(inlineLink);

  pageContent.appendChild(medias);


  const restaurantNumber = document.createElement('p');
  restaurantNumber.classList.add('restaurant-number');
  restaurantNumber.textContent = '02 2718 0285';
  pageContent.appendChild(restaurantNumber);




  content.appendChild(pageContent);
}


export default createContactPage;