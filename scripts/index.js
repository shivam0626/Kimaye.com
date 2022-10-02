import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

let recommendData = [
    {
        poster :"https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_670x.png?v=1614338437",
        title : "ALL FRUITS",
        desc : "Pick and choose from a wide range of delicious fruits",
    },
    {
        poster :"https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730",
        title : "FRESH CUTS",
        desc : "We want to spoon-feed you… quite literally",
    },
    {
        poster :"https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080",
        title : "FRUIT COMBOS",
        desc : "Indulge in fruit combinations created by us",
    },
    {
        poster :"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_670x.jpg?v=1631516874",
        title : "GIFTS BY KIMAYE",
        desc : "Healthy & memorable gifts for your loved ones",
    },
];

let appendData = (data) =>{
    let container = document.getElementById("recommend-box");
    data.forEach((el)=>{
        let box = document.createElement("div");
        box.setAttribute("id","box-div");

        let name = document.createElement("h1");
        name.innerText = el.title;

        let image = document.createElement("img");
        image.src = el.poster;

        let description = document.createElement("p");
        description.innerText = el.desc;

        let btn = document.createElement("a");
        btn.innerText = "Shop Now";
        btn.setAttribute("class","shop-btn");
        if(el.title==="ALL FRUITS"){
            btn.href = "./allfruit.html";
        }
        else if(el.title==="FRESH CUTS"){
            btn.href = "./fresh.html";
        }
        else if(el.title==="FRUIT COMBOS"){
            btn.href ="./combos.html";
        }
        else if(el.title ==="GIFTS BY KIMAYE"){
            btn.href = "./gifts.html";
        }
    
        box.append(image,name,description,btn);
        container.append(box);
    });
};
appendData(recommendData);