
const createMenuPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const menu = document.createElement('h1');
  menu.classList.add('menu');
  menu.textContent = 'Menu';
  pageContent.appendChild(menu);

  const section1 = document.createElement('div');
  pageContent.appendChild(section1);
  const alaCarte = document.createElement('h2');
  alaCarte.textContent = 'Ala Carte';
  section1.appendChild(alaCarte);
  const alaCarteList = document.createElement('ul')
  section1.appendChild(alaCarteList);
  const alaCarteitem1 = document.createElement('p');
  alaCarteitem1.textContent = 'Beef Tartare | 320';
  alaCarteList.appendChild(alaCarteitem1);
  const alaCarteitem2 = document.createElement('p');
  alaCarteitem2.textContent = 'Wagyu Sea Urchin Sushi | 420';
  alaCarteList.appendChild(alaCarteitem2);
  const alaCarteitem3 = document.createElement('p');
  alaCarteitem3.textContent = 'Slated Green Onions White Rice | 110';
  alaCarteList.appendChild(alaCarteitem3);
  const alaCarteitem4 = document.createElement('p');
  alaCarteitem4.textContent = 'Wagyu Wonton Noodles | 380';
  alaCarteList.appendChild(alaCarteitem4);

  const section2 = document.createElement('div');
  pageContent.appendChild(section2);
  const meat = document.createElement('h2');
  meat.textContent = 'Meat & Viscera';
  section2.appendChild(meat);
  const meatList = document.createElement('ul')
  section2.appendChild(meatList);
  const meatItem1 = document.createElement('p');
  meatItem1.textContent = 'Choice Lean Beef | 780';
  meatList.appendChild(meatItem1);
  const meatItem2 = document.createElement('p');
  meatItem2.textContent = 'Choice Marbled Beef | 980';
  meatList.appendChild(meatItem2);
  const meatItem3 = document.createElement('p');
  meatItem3.textContent = 'Premium Marbled Beef | 1280';
  meatList.appendChild(meatItem3);
  const meatItem4 = document.createElement('p');
  meatItem4.textContent = 'Thick Cut Beef Tongue | 280';
  meatList.appendChild(meatItem4);
  const meatItem5 = document.createElement('p');
  meatItem5.textContent = 'Australian Hanger Steak | 420';
  meatList.appendChild(meatItem5);

  const section3 = document.createElement('div');
  pageContent.appendChild(section3);
  const drinks = document.createElement('h2');
  drinks.textContent = 'Drinks';
  section3.appendChild(drinks);
  const drinksList = document.createElement('ul')
  section3.appendChild(drinksList);
  const drinksItem1 = document.createElement('p');
  drinksItem1.textContent = 'Mix Pairing 5 glasses | 1800';
  drinksList.appendChild(drinksItem1);
  const drinksItem2 = document.createElement('p');
  drinksItem2.textContent = 'Sake 4 glasses | 1350';
  drinksList.appendChild(drinksItem2);
  const drinksItem3 = document.createElement('p');
  drinksItem3.textContent = 'Rocooco Tokyo White Beer | 580';
  drinksList.appendChild(drinksItem3);
  const drinksItem4 = document.createElement('p');
  drinksItem4.textContent = 'Yebisu Beer | 200';
  drinksList.appendChild(drinksItem4);
  const drinksItem5 = document.createElement('p');
  drinksItem5.textContent = 'Plum Wine | 320';
  drinksList.appendChild(drinksItem5);
  




  content.appendChild(pageContent);
}

export default createMenuPage;