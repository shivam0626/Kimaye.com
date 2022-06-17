let comboData = [
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/litchi--_-keasr_360x.jpg?v=1654850892",
        title : "Kimaye Litchi-Keshar Combo",
        price: 393,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_360x.jpg?v=1654851019",
        title : "Kimaye Cherry-Blueberry Combo",
        price: 491,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/peach--_-litchi_360x.jpg?v=1654850921",
        title : "Kimaye Litchi Peach Combo",
        price: 277,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/peach--_-Plum_360x.jpg?v=1654851067",
        title : "Kimaye Plum-Peach Combo",
        price: 120,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Plum_BB_360x.jpg?v=1621068661",
        title : "Kimaye Plum-Blueberries Combo",
        price: 498,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kesar_BB_360x.jpg?v=1623393336",
        title : "Kimaye Keshar Blueberries Combo",
        price: 609,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MangoBlueberry_1_360x.png?v=1618035441",
        title : "Kimaye Alphonso-Blueberries Combo",
        price: 619,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/FL-Sharad_Combo_360x.png?v=1652163520",
        title : "Kimaye Sharad-Flame Grapes Combo",
        price: 333,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_1_360x.jpg?v=1649415923",
        title : "Kimaye Summer Combo",
        price: 388,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_360x.jpg?v=1618497683",
        title : "Kimaye Wholesome Combo",
        price: 831,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_360x.png?v=1642492575",
        title : "Kimaye Three Grapes Combo",
        price: 152,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/GPS-BB_360x.png?v=1642492910",
        title : "Kimaye Blueberry-Green Grapes Combo",
        price: 403,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_360x.png?v=1617983685",
        title : "Kimaye Kiwi-Blueberries Combo",
        price: 564,
    },
    {
        poster : "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_360x.png?v=1641883595",
        title : "Kimaye Green & Black Grapes Combo (250g & 250g)",
        price: 95,
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
appendData(comboData);