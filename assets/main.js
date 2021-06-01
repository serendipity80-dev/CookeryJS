const menu = [
    {
        id:1,
        title:"Baked Vegetable with Egg",
        category:"lunch",
        img:"./assets/img/02.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:2,
        title:"Crispy Chicken Wings",
        category:"lunch",
        img:"./assets/img/03.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:3,
        title:"Blueberry Toast",
        category:"breakfast",
        img:"./assets/img/04.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:4,
        title:"Salad",
        category:"dinner",
        img:"./assets/img/05.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:5,
        title:"Healthy Dinner",
        category:"dinner",
        img:"./assets/img/06.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:6,
        title:"Pancakes",
        category:"breakfast",
        img:"./assets/img/07.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:7,
        title:"Pork with Potatoes",
        category:"lunch",
        img:"./assets/img/08.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:8,
        title:"Pumpkin Soup",
        category:"lunch",
        img:"./assets/img/09.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:9,
        title:"Pesto Pasta",
        category:"lunch",
        img:"./assets/img/10.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:10,
        title:"Blueberry Toast",
        category:"dinner",
        img:"./assets/img/11.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:11,
        title:"Fried Chicken Burger",
        category:"lunch",
        img:"./assets/img/12.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
    },
    {
        id:12,
        title:"Rumsteak",
        category:"lunch",
        img:"./assets/img/13.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate amet ut soluta reiciendis odio minus ipsam eos, veritatis eligendi.",
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
            <div class="card-image">
              <img src=${item.img}>
              <span class="card-title">${item.title}</span>
             
            </div>
            <div class="card-content">
              <p>${item.desc}</p>
            </div>
            <div class="card-action">
              <a href="#">Read More</a>
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
