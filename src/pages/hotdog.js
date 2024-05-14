export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: true },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

export const toggleToppings = (index) => {
        toppings[index].selected = !toppings[index].selected;
        renderToppings();
  }

export const renderToppings = () => {
  document.body.innerHTML = '';
  
  toppings.forEach((item) => {
    
      if (item.selected===true){
        document.body.innerHTML += `
        <div class="topping topping--selected">
        <h3>${item.name}</h3>
        <p>${item.price} Kč</p>
        </div>
      `;} else {
      document.body.innerHTML += `
        <div class="topping">
        <h3>${item.name}</h3>
        <p>${item.price} Kč</p>
        </div>
      `;}
  });
      const toppingElm = document.querySelectorAll(".topping");
      toppingElm.forEach((item, index) => {
        item.addEventListener("click", () => toggleToppings(index));
  })};
  



