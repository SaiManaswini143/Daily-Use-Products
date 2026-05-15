let cart = [];
function addToCart(item_name,item_cost){
    alert(item_name+" added to Cart");
    cart.push({name: item_name,
               cost: item_cost});
}
