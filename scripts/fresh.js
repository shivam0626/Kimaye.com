let freshData = [
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_360x.png?v=1613364164",
        title : "Pomegranates Seeds (Aril Cup ) 125g",
        price : 55,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_360x.png?v=1611811509",
        title : "Grated Coconut Punnet",
        price : 51,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_360x.png?v=1611811511",
        title : "Coconut Chunks Cup (100g)",
        price : 51,
    },  {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_360x.png?v=1614324446",
        title : "Kimaye Arils-Coco Cup (125g)",
        price : 55,
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
        price.innerText = "₹" + el.price;
        price.setAttribute("class","price_para");

        cartBtn.append(icon);
        imgdiv.append(image,cartBtn);
        box.append(imgdiv,name,price);
        container.append(box);
    });
};
appendData(freshData);

let addToCart = (el) =>{
    data.push(el);
    console.log(data);
    alert("item added to cart");
    localStorage.setItem("kimaye-cart",JSON.stringify(data));

}
