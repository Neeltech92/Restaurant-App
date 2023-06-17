import {menuArray} from "/data.js"

const menuSection = document.getElementById('menu-section')
const billSection = document.getElementById('bill-section')
let totalPrice = 0


document.addEventListener('click', function(e){
    e.preventDefault
    if(e.target.dataset.id){
        incrementQuantity(Number(e.target.dataset.id))
        document.querySelector('.bill-header').style.display = 'flex'
    }
    else if(e.target.id) {
        document.getElementById(e.target.id).parentElement.classList.add('remove')
    }
})

function incrementQuantity(itemId){

    // const targetItem = menuArray.filter(function(item){
    //     return item.id == itemId
    // })[0]
    
    totalPrice += menuArray[itemId].price
    menuArray[itemId].qnty++
    
    renderOrderList( menuArray[itemId])
}

function renderOrderList(_item){
    let container = ``
    menuArray.forEach(function(item){
        if(item.qnty > 0){
          container +=  `
        <div class="order-list">
            <h2>${item.qnty}</h2>
            <h2>${item.name}</h2>
            <button id=${item.id} class='remove-btn'>Remove</button>
        
            
            <h2>$ ${item.qnty * item.price}</h2>
        </div>`
        }
    })
    billSection.innerHTML = container
}
    
 
for(let item of menuArray){
    menuSection.innerHTML += `
    <div class='container'>
        <div class='item-info'>
            <div class='item-graphic'>${item.emoji}</div>
            <div class='item-desc'>
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h3>$ ${item.price}</h3>
            </div>
        </div>
        <button class='increment-btn' id='increment-btn' data-id='${item.id}'>
            &#43;
        </button>
    </div>
    `
}

