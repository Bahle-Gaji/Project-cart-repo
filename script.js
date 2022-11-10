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

