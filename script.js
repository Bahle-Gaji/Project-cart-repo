// Cart is empty in the beginning. Displays
let cart = [];  /* name price quant */


// Make list of items 
const stockItems = [
    {name:"Coke", price: 12.50, 'id': 1, count: 1},
    {name:"Kit-Kat", price: 10.50, 'id': 2, count: 1},
    {name:"Coke", price: 9.50, 'id': 3, count: 1},
];


function clearInput(){
    document.getElementById('input-el').value = '';
};


function addToCart(){

    let input = document.getElementById('input-el').value;
    let tableExists = document.getElementById('cart-table');

    if(input == 99){
        if(tableExists !== null){

            for(let i = 0; i < cart.length; i++){
                cart[i].count = 1;
            }

            cart = [];
            clearTable();
        }
        else{
            console.log(cart); /* DELETE. to check correct output*/
        };
    }
    else if(input < 0 || input > 3 || input == ''){
        alert('Please choose a valid item');
    }
    else{

        //checking if item is not in the cart
        if(!cart.includes(stockItems[input - 1])){
            
            cart.push(stockItems[input - 1]);
            
            console.log(cart); /* DELETE. To check correct output*/
            addCartTable();
            return cart;
        }
        //To update quantity of item already in the cart
        else{

            for(let i = 0; i < cart.length; i++){
                if(cart[i].id == input){

                    cart[i].count += 1
                    document.getElementById(`${cart[i].id}`).innerText = `${cart[i].count}`

                    //Trying to update the total price of multiple items of the same item ID
                    let total = cart[i].count * cart[i].price;

                    document.getElementById(`total${cart[cart.length - 1].id}`).innerHTML = `${total.toFixed(2)}`
                }
            }
        };
    }
};


function addRows(){

    let tableRow = document.createElement('tr');

    tableRow.innerHTML = `<td>${cart[cart.length - 1].id}</td>
    <td>${cart[cart.length - 1].name}</td>
    <td id="${cart[cart.length - 1].id}">${cart[cart.length - 1].count}</td>
    <td id="price">${cart[cart.length - 1].price.toFixed(2)}</td>
    <td id="total${cart[cart.length - 1].id}">${cart[cart.length - 1].price.toFixed(2)}</td>`;
    
    document.getElementById('cart-body').appendChild(tableRow); 
};


//To create table and first row when the first item is added to cart
function makeCartTable(){
    
    const tableHead = document.createElement('table');
    tableHead.setAttribute('id', 'cart-table');
    
    tableHead.innerHTML = `<thead>
    <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Total</th>
    </tr>
    </thead>
    <tbody id='cart-body'>
    </tbody>`;
    
    document.getElementById('cart').appendChild(tableHead);
};


function addCartTable(){

    //Here is where the first row is added
    if(cart.length <= 1){
        makeCartTable();
        addRows();
    }else{
        addRows();
    }
};


//When user clears table by inputting 99
function clearTable(){
    if(document.getElementById('cart-table') !== null ){
        document.getElementById('cart-table').remove();
    }
};