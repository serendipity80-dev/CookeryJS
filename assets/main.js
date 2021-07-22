const menu = [
    {
        id:1,
        title:"Baked Vegetable with Egg",
        category:"breakfast",
        img:"./assets/img/02.jpg",
        desc:"With 11 grams of protein in each serving, this recipe is great for breakfast. Start preparation the day before and chill overnight for minimal work in the morning.",
    },
    {
        id:2,
        title:"Crispy Chicken Wings",
        category:"lunch",
        img:"./assets/img/03.jpg",
        desc:"These Crispy Buffalo Chicken Wings are exactly what they claim to be. C.R.I.S.P.Y. Without deep frying? WHAT IS THIS MADNESS! Using a special ingredient you have in your kitchen pantry already! Tossed in a delicious Buffalo Sauce, these wings are a hit and a reader favourite!",
    },
    {
        id:3,
        title:"Blueberry Toast",
        category:"breakfast",
        img:"./assets/img/04.jpg",
        desc:"Thick slices of banana yeast bread soaked in a spiced custard mixture and cooked on a griddle until golden brown. This Blueberry Banana French Toast is the ultimate homemade breakfast!",
    },
    {
        id:4,
        title:"Salad",
        category:"dinner",
        img:"./assets/img/05.jpg",
        desc:"A fresh and easy tossed garden salad is the perfect side salad for any meal! Or enjoy it with some protein like chicken or salmon to create a complete meal.",
    },
    {
        id:5,
        title:"Healthy Dinner",
        category:"dinner",
        img:"./assets/img/06.jpg",
        desc:"How to get through the week with healthy but satisfying meals that will make you feel good as well as virtuous? With these 60 healthy, fast recipes.rem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id:6,
        title:"Pancakes",
        category:"breakfast",
        img:"./assets/img/07.jpg",
        desc:"SIMPLE. EASY. QUICK. FLUFFY. The Best Fluffy Pancakes recipe you will fall in love with. Full of tips and tricks to help you make the best pancakes…ever!",
    },
    {
        id:7,
        title:"Pork with Potatoes",
        category:"dinner",
        img:"./assets/img/08.jpg",
        desc:"If you're looking for a down-home one dish dinner that can be easily made on a weeknight, then this recipe is for you.",
    },
    {
        id:8,
        title:"Pumpkin Soup",
        category:"lunch",
        img:"./assets/img/09.jpg",
        desc:"This is a classic, easy pumpkin soup made with fresh pumpkin that is very fast to make. Thick, creamy and full of flavour, this is THE pumpkin soup recipe you will make now and forever!",
    },
    {
        id:9,
        title:"Pesto Pasta",
        category:"lunch",
        img:"./assets/img/10.jpg",
        desc:"Anyone can make a Pesto Pasta, but not everyone knows how to make a pesto pasta that’s slick with plenty of pesto sauce without adding tons of extra oil! Here’s how I make it.Try this with homemade pesto. It’s amazing!",
    },
    {
        id:10,
        title:"Blueberry Toast",
        category:"dinner",
        img:"./assets/img/11.jpg",
        desc:"Thick slices of banana yeast bread soaked in a spiced custard mixture and cooked on a griddle until golden brown. This Blueberry Banana French Toast is the ultimate homemade breakfast!", 
    },
    {
        id:11,
        title:"Fried Chicken Burger",
        category:"lunch",
        img:"./assets/img/12.jpg",
        desc:"My tried and tested Crispy Chicken Burger with Honey Mustard Coleslaw is the best you're going to eat (did I tell you I worked in a fried chicken shop for many years when I was younger?). Using my secret recipe for making the perfect Crispy Chicken, served on a toasted brioche bun, with jalapenos, homemade honey-mustard coleslaw and crunchy lettuce. Way better than takeout!",
    },
    {
        id:12,
        title:"Rumpsteak",
        category:"lunch",
        img:"./assets/img/13.jpg",
        desc:"Try our perfect method for cooking a simple rump steak with these easy, foolproof steps. Serve with golden brown chips for an indulgent dinner for two.",
    },
];
const cards = document.querySelector('.row');
const btnContainer = document.querySelector('.btn-container');
window.addEventListener('DOMContentLoaded', ()=>{
 displayMenuItems(menu);
 displayBtns();
 
});


const displayMenuItems = (menuItem) => {
    let displayItems = menuItem.map( (item) =>{
        return `
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img src=${item.img}>
              <span class="card-title activator white-text text-darken-4">${item.title}</span>
              </div>
              <div class="card-content">
              <p class="card-title activator grey-text text-darken-4"><a href="notFound.html">Read More</a><i class="material-icons right">more_vert</i></p>
            </div>
            <div class="card-reveal">
            <span class="card-title  white-text text-darken-4">${item.title}
            <i class="material-icons right">close</i>
            </span>
              <p>${item.desc}</p>
            </div>
            
            
          </div>
      `;
    });
    displayItems = displayItems.join("");
    cards.innerHTML = displayItems;
}
const displayBtns = () =>{
    const categories = menu.reduce((values,item) =>{
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']
    );
    const categoryBtn = categories.map((category) =>{
        return ` <button id="filter-btn" class="btn waves-effect waves-light btn-small" data-id=${category} type="button">${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtn;
    const btns = document.querySelectorAll('#filter-btn');
  // filter items
  btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
       const category = e.currentTarget.dataset.id;
       const menuCategory = menu.filter((menuItem) =>{
           if (menuItem.category === category) {
              return menuItem ;
           }
       });
       if (category === 'all') {
           displayMenuItems(menu);
       }else{
           displayMenuItems(menuCategory);
       }
    });
});
}
 