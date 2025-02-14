  //let products=["apple","mango","banana"];
        //frst value and second will be index
        // products.forEach((value,index,arr)=>
        // {
        //     console.log(value,index,arr)
        // });
        // let scores=[32,43,22,54,P
        const products=[
            {id:1,name:"p1",price:40},
            {id:2,name:"p2",price:50},
            {id:3,name:"p3",price:60},
        ];

        const cart={};
       // const obj={apple:4,mango:2};
       function addtocart(id) {
  if (cart[id]) {
    cart[id] += 1; // If already in the cart, increase quantity
  } else {
    cart[id] = 1; // Add product with quantity 1 if not already in cart
  }
  showcart(); // Update the cart display after adding product
}
        const showcart=()=>{
            let str=""
        products.map((value)=>{
            if(cart[value.id]){
                let totalPrice = cart[value.id] * value.price;
            str+=`<div>
            ${value.id}-${value.name}-${value.price}-
            <button onclick="decrement(${value.id})">-</button>
            ${cart[value.id]}<button onclick="increment(${value.id})">+</button> 
            -${totalPrice}
            </div>`
            }
        })
        divcart.innerHTML=str
        }

        const showproducts=()=>{
             let str=""
            products.forEach((value) => {
              str+=`<div>${value.id}-${value.name}-${value.price}-<button onclick="addtocart(${value.id})">add to cart</button></div>`
            });
         divproducts.innerHTML=str;
        };

        
        function increment(id){
            if(cart[id]){
                cart[id]+=1
            }
            else{
               cart[id]=1;
            }
            showcart();
           
        }
        function decrement(id) {
  if (cart[id] > 1) {
    cart[id] -= 1; // Decrease the quantity for the specific product
  } else {
    cart[id]=0; // If quantity reaches 1, remove from cart (or set to 0, depending on your logic)
  }
  showcart(); // Update the cart display after decrement
}