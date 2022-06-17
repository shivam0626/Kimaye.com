let giftData = [
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7790_360x.jpg?v=1631346990",
        title : "Fruit Box by Kimaye (Strength)",
        price : 1800,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_360x.jpg?v=1631350656",
        title : "Fruit Box by Kimaye (Cherish)",
        price : 1400,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7807_360x.jpg?v=1631347621",
        title : "Fruit Box by Kimaye (Adore)",
        price : 2000,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/I8A9400copy_360x.jpg?v=1651844098",
        title : "Fruit Box by Kimaye (Seasonal)",
        price : 1200,
    },
];

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

import categories from "../components/categories.js";
document.getElementById("categories1").innerHTML = categories();
document.getElementById("categories2").innerHTML = categories();

let appendData = (data) => {
    let container = document.getElementById("container");
    data.forEach((el)=>{
        let box = document.createElement("div");
        box.setAttribute("class","fruit_div");

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","img-div");

        let image = document.createElement("img");
        image.src = el.poster;

        let name = document.createElement("p");
        name.innerText = el.title;
        name.setAttribute("class","title_para");

        let cartBtn = document.createElement("button");
        cartBtn.setAttribute("class","cart-btn");
        cartBtn.addEventListener("click",()=>{
            addToCart(el);
        });

        let icon = document.createElement("i");
        icon.innerText = " Choose Your Pack";
        icon.setAttribute("class","bi bi-cart-plus");

        let price = document.createElement("p");
        price.innerText = "₹ " + el.price;
        price.setAttribute("class","price_para");

        cartBtn.append(icon);
        imgdiv.append(image,cartBtn);
        box.append(imgdiv,name,price);
        container.append(box);
    });
};
appendData(giftData);

let addToCart = (el) =>{
    data.push(el);
    console.log(data);
    alert("item added to cart");
    localStorage.setItem("kimaye-cart",JSON.stringify(data));

}
