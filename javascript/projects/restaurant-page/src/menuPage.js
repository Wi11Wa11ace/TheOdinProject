const menuHeader = document.createElement('h1');
menuHeader.textContent = 'Menu';

const menuDescription = document.createElement('p');
menuDescription.textContent = 'Explore our delicious menu featuring a variety of dishes to satisfy your cravings.';

const menuList = document.createElement('ul');
const dishes = [
    'Spaghetti Carbonara',
    'Margherita Pizza',
    'Caesar Salad',
    'Grilled Salmon',
    'Tiramisu',
    'Caprese Salad',
    'Beef Lasagna',
    'Chicken Alfredo',
    'Vegetable Stir Fry',
    'Chocolate Mousse'
]; 

dishes.forEach(dish => {
    const listItem = document.createElement('li');
    listItem.textContent = dish;
    menuList.appendChild(listItem);
});

export { menuHeader, menuDescription, menuList };