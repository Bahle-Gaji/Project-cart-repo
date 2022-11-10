/* Started working on UI to work with script. Unfinished. Tried to implement as much
of my current knowledge in these three files to showcase the extent of it.
 */


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
            if(tableExists == null){
                cart = [];
            }
        }
        else if(input < 0 || input > 3 || input == ''){
            alert('Please choose an item');
        }
        else{
            cart.push(stockItems[input - 1]);
            console.log(cart);
            addCartTable();
            return cart;
        }
};


function addCartTable(){

    //To create table and first row when the first item is added to cart
    let makeCartTable = function(){
        const tableHead = document.createElement('table');
        tableHead.setAttribute('id', 'cart-table');
        tableHead.innerHTML = `<thead>
        <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
        </tr>
        </thead>
        <tbody id='cart-body'>
        </tbody>`
        
        document.getElementById('cart').appendChild(tableHead);
    }

    let addRows = function (){
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${cart.name}</td>
        <td>${cart.name}</td>
        <td>${cart.count}</td>
        <td>${cart.price}</td>`

        document.getElementById('cart-body').appendChild(tableRow)
    }

    //Here is where the first row is added
    if(cart.length <= 1){
        makeCartTable();
        addRows();
       
    }else{
        addRows();
    }
}


//When user clears table by inputting 99
function clearTable(){
}