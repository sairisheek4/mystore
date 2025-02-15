  //let products=["apple","mango","banana"];
        //frst value and second will be index
        // products.forEach((value,index,arr)=>
        // {
        //     console.log(value,index,arr)
        // });
        // let scores=[32,43,22,54,P
        // const products=[
        //     {id:1,name:"p1",price:40},
        //     {id:2,name:"p2",price:50},
        //     {id:3,name:"p3",price:60},
        // ];

        let products = []

   fetch("products.json")
  .then((response) => response.json()) 
  .then((data) => (showproducts(data))) 



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
            let count=Object.keys(cart).length
            items.innerHTML=count;
            showtotal();
            let str=""
        products.map((value)=>{
            if(cart[value.id]){
                let totalPrice = cart[value.id] * value.price;
            str+=`<div id="cart">
            ${value.id}-${value.name}-${value.price}-
            <button onclick="decrement(${value.id})">-</button>
            ${cart[value.id]}<button onclick="increment(${value.id})">+</button> 
            -${totalPrice}- <button onclick="deletefun(${value.id})">delete</button>
            </div>`
            }
        })
        divcart.innerHTML=str
        }

        // const showproducts=()=>{
        //      let str=""
        //     products.forEach((value) => {
        //       str+=`<div id="product">${value.id}-${value.name}-${value.price}-<button onclick="addtocart(${value.id})">Add</button></div>`
        //     });
        //  divproducts.innerHTML=str;
        // };

        
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
    cart[id] -= 1; // decrease the quantity for that id
  } else {
    cart[id]=0; // if quantity reaches 1, delete cart of that id
  }
  showcart(); // show  the cart after doing
}
  const deletefun=(id)=>{
        delete cart[id];
        showcart();
  }
const showtotal=()=>{
      let total=products.reduce((sum,value)=>{
       return sum + value.price *(cart[value.id] ? cart[value.id]:0)
    },0)
     order.innerHTML=total
}

const displaycart =()=>{
    cartbox.style.display="block"
    productbox.style.display="none"
}

const hidecart=()=>{
     cartbox.style.display="none"
     productbox.style.display="block"
}

const showproducts = (data) => {
    products = data
    let str = "<div class='row'>"
    products.map((value) => {
      str += `
      <div class='box'> 
      <img src='${value.url}'>
      <h3>${value.name}</h3>
      <p>${value.desc}</p>
      <h4>$${value.price}</h4>
      <button onclick='addtocart(${value.id})'>Add to Cart</button>
      </div>
      `;
    });
    divproducts.innerHTML=str+"</div>";
  };

  const displayproducts=()=>{
    productbox.style.display="block"
  }