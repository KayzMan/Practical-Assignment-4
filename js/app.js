let menusCloseBtn = document.querySelector('.closeBtn');
let menusShowBtn = document.querySelector('#menuHeader')
let allBtn = document.querySelector('#all')
let breakfastBtn = document.querySelector('#breakfast')
let lunchBtn = document.querySelector('#lunch')
let shakesBtn = document.querySelector('#shakes')
let dinnerBtn = document.querySelector('#dinner')
let food_items_div = document.querySelector('.food-items')
let all_food_items = document.querySelectorAll('.food-items .food-item')

menusCloseBtn.addEventListener('click', () => {
    food_items_div.classList.add('hide')
})
menusShowBtn.addEventListener('click', () => {
    food_items_div.classList.remove('hide')
});

allBtn.addEventListener('click', loadAll);
breakfastBtn.addEventListener('click', loadBreakfast);
lunchBtn.addEventListener('click', loadLunch);
shakesBtn.addEventListener('click', loadShakes);
dinnerBtn.addEventListener('click', loadDinner);

// the food images array
let img_array = [
    {
        tag: 'breakfast',
        pic: './food/assorted_breakfast_stuff.jpg',
        name: 'sweet tooth breakfast',
        price: '$19.99',
        description: "I'm a sweet tooth pancakes with honey, soup, grapes, strawberries, blackberries, blueberries, orange slices, kiwi, broccoli, tea and milk."
    },
    {
        tag: 'breakfast',
        pic: './food/bananas_bread.jpg',
        name: 'Banana Sandwich',
        price: '$9.99',
        description: "I'm a banana sandwich coated with honey and surrounded with blueberries and sprinkled with vanilla"
    },
    {
        tag: 'lunch',
        pic: './food/beef_in_soup.jpg',
        name: 'Beef Stew',
        price: '$5.99',
        description: "I'm a beef stew with some tomatoes, apple cubes and leaves."
    },
    {
        tag: 'lunch',
        pic: './food/cake_strawberry.jpg',
        name: 'Strawberry Vanilla Cream Cake',
        price: '$5.99',
        description: "I'm a sweet tooth vanilla cream cake with strawberries. You get the strawberries for free"
    },
    {
        tag: 'dinner',
        pic: './food/egg_salad.jpg',
        name: 'Egg Salad',
        price: '$17.99',
        description: "I'm an egg salad with beef, tomato slices, green peas, maize, cabbage, beetroot and shallots"
    },
    {
        tag: 'breakfast',
        pic: './food/fruits.jpg',
        name: 'Oranges and Lemons',
        price: '$3.99',
        description: "I'm dessert consisting of orange and lemon slices in various shapes."
    },
    {
        tag: 'shakes',
        pic: './food/ice_cream.jpg',
        name: 'Ice Cream',
        price: '$1.99',
        description: "I'm a vanilla and strawberry ice cream"
    },
    {
        tag: 'breakfast',
        pic: './food/pancakes.jpg',
        name: 'Pan Cakes',
        price: '$8.99',
        description: "I'm pancakes with banana slices toppings, lavender and marple syrup 😛"
    },
    {
        tag: 'lunch',
        pic: './food/pizza.jpg',
        name: 'Pepperoni Pizza',
        price: '$4.99',
        description: "I'm a one slice of sweet pepperoni pizza, with a free cup of milkshake 💯"
    },
    {
        tag: 'dinner',
        pic: './food/pizza2.jpg',
        name: 'Chilli 🌶 Vegetarian Pizza',
        price: '$15.99',
        description: "I'm a vegetarian Pizza with a cheese crust and lavender 🍃"
    },
    {
        tag: 'lunch',
        pic: './food/pizza3.jpg',
        name: 'Beef Cheese Pizza',
        price: '$18.99',
        description: "I'm a Cheesy Crust Pizza with pieces of beef, onions and mushrooms."
    },
    {
        tag: 'breakfast',
        pic: './food/pizza4.jpg',
        name: 'Potato Beetroot Pizza',
        price: '$14.99',
        description: "I'm a Potato Pizza with beetroot, onions, lavender, chicken fillings, tomato sauce"
    },
    {
        tag: 'dinner',
        pic: './food/pizza5.jpg',
        name: 'Pepperoni Cheese Pizza',
        price: '$10.99',
        description: "I'm a pepperoni pizza with a cheesy crust. 🧀"
    },
    {
        tag: 'breakfast',
        pic: './food/pizza6.jpg',
        name: 'Egg Crust Pizza',
        price: '$12.99',
        description: "I'm an egg crust pizza with little tomatoes and rosemary."
    },
    {
        tag: 'lunch',
        pic: './food/pizza7.jpg',
        name: 'Chilli 🌶 Spice Pizza',
        price: '$19.99',
        description: "I'm a chilly pizza with various spices and a coke for free."
    },
    {
        tag: 'breakfast',
        pic: './food/pizza8.jpg',
        name: 'Hot 🔥 Sauce Pizza',
        price: '$16.99',
        description: "I'm a hot sauce pizza."
    },
    {
        tag: 'lunch',
        pic: "./food/roasted_chicken_beef.jpg",
        name: 'Roasted Beef and Chicken',
        price: '$24.99',
        description: "I'm roasted beef and chicken with red pepper, six kinds of essence, coco and broccoli."
    },
    {
        tag: 'breakfast',
        pic: "./food/salad_orange_juice.jpg",
        name: 'Salad',
        price: '$13.99',
        description: "I'm a salad with beetroot, carrot fillings, onions, cabbage, banana cubes, orange slices and a free glass orange juice"
    },
    {
        tag: 'breakfast',
        pic: './food/toasted_bread_eggs.jpg',
        name: 'Boiled Eggs Toast',
        price: '$8.99',
        description: "I'm toasted bread with boiled eggs, spices, lavender, leaves and rosemary."
    },
    {
        tag: 'dinner',
        pic: './food/veggie_beef.jpg',
        name: 'Vegetarian Beef',
        price: '$13.99',
        description: "I'm a vegetarian beef serving with cabbage, red onions, and spice coated chicken cubes."
    },
    {
        tag: 'breakfast',
        pic: './food/wasa_biscuits.jpg',
        name: 'Wasa Rosemary Biscuits',
        price: '$9.99',
        description: "I'm rosemary wasa sesam biscuits with avocado."
    },
    {
        tag: 'lunch',
        pic: './food/wasa-sesam.jpg',
        name: 'Wasa Sesam',
        price: '$12.99',
        description: "I'm wasa sesam cream with peanuts and waffles."
    }
];

// create the breakfast food items array
// using the filter method of arrays
let breakfast_food = img_array.filter(img => {
    return img.tag === 'breakfast'
});

// create the lunch food items array
let lunch_food = img_array.filter(img => {
    return img.tag === 'lunch'
});

// create the shakes food items array
let shakes_food = img_array.filter(img => {
    return img.tag === 'shakes'
});

// create the dinner food items array
let dinner_food = img_array.filter(img => {
    return img.tag === 'dinner'
});

function loadImages(array){

    array.forEach(img => {

        // create the food-item div and the food-item-img div
        let food_item_div = document.createElement('div')
        food_item_div.classList.add('food-item')
        food_item_div.setAttribute('tag', img.tag)
        let food_item_img_div = document.createElement('div')
        food_item_img_div.classList.add('food-item-img')

        // add the food-item-img div to the food-item div
        food_item_div.appendChild(food_item_img_div)

        // create image and add it to the food-item-img div
        let image = document.createElement('img')
        image.src = img.pic
        image.alt = img.name
        food_item_img_div.appendChild(image)

        // create the food-item-details div and the food-item-details-header & food-item-details-text divs
        let food_item_details_div = document.createElement('div')
        food_item_details_div.classList.add('food-item-details')
        let food_item_details_header_div = document.createElement('div')
        food_item_details_header_div.classList.add('food-item-details-header')
        let food_item_details_text_div = document.createElement('div')
        food_item_details_text_div.classList.add('food-item-details-text')

        // add the food-item-details div to the food-item div
        food_item_div.appendChild(food_item_details_div)

        // add the food-item-details-header and food-item-details-text div to the food-item-details div
        food_item_details_div.append(food_item_details_header_div, food_item_details_text_div)

        // create the name-tag and price-tag spans and add them to the food-item-details-header div
        let name_tag_span = document.createElement('span')
        let price_tag_span = document.createElement('span')
        name_tag_span.innerText = img.name
        name_tag_span.classList.add('name-tag')
        price_tag_span.innerText = img.price
        price_tag_span.classList.add('price-tag')
        food_item_details_header_div.append(name_tag_span, price_tag_span)

        // create the description span and add it to the food-item-details-text div
        let description = document.createElement('span')
        description.innerText = img.description
        description.setAttribute('id', 'text')
        food_item_details_text_div.appendChild(description)

        // finally add the food-item div to the food-items div
        food_items_div.appendChild(food_item_div)

    })
}

// load all images by default
loadAll()

function loadAll(){
    removeAll();
    loadImages(img_array);
}

function removeAll(){
    all_food_items = document.querySelectorAll('.food-item')
    all_food_items.forEach(item => {
        item.remove();
    })
}

function hideAll(exception){
    all_food_items = document.querySelectorAll('.food-item')
    all_food_items.forEach(item => {
        if(item.attributes.item(1).value !== exception)
            item.style.display = 'none'
        else
            item.style.display = 'flex'
    })
}

function loadBreakfast(){
    hideAll('breakfast')
}

function loadLunch(){
    hideAll('lunch')
}

function loadShakes(){
    hideAll('shakes')
}

function loadDinner(){
    hideAll('dinner')
}
