//creating constructore function so that we can collect data from the product page---------------------------------------

// function mensdata(i, t, p, m, r, rw) {
//     this.image = i;
//     this.title = t;
//     this.price = p;
//     this.mrp = m;
//     this.rating = r;
//     this.review = rw;
// }

// //creating dataarray to store the data of the product page---------------------------------------------------------------

// var dataarr = []

// var mensdata1 = new mensdata("https://images.meesho.com/images/products/41926322/xyhny_512.jpg", "Stylish Elegant Men Shirts", 496, 546, 3.9, 11)
// dataarr.push(mensdata1)

// var mensdata2 = new mensdata("https://images.meesho.com/images/products/20572316/60c95_512.jpg", "Trendy Designer Men Tshirts", 234, 334, 3.9, 7)
// dataarr.push(mensdata2)

// var mensdata3 = new mensdata("https://images.meesho.com/images/products/41582767/3fsm7_512.jpg", "Comfy Fashionista Men Tshirts", 456, 556, 4.0, 21)
// dataarr.push(mensdata3)

// var mensdata4 = new mensdata("https://images.meesho.com/images/products/13401562/3d2d9_512.jpg", "Free Mask Fancy Latest Men Tshirts", 306, 404, 4.1, 13)
// dataarr.push(mensdata4)

// var mensdata5 = new mensdata("https://images.meesho.com/images/products/28771673/hqkug_512.jpg", "Classic Fashionista Men Tshirts", 170, 242, 3.8, 5)
// dataarr.push(mensdata5)

// var mensdata6 = new mensdata("https://images.meesho.com/images/products/21139356/fcca4_512.jpg", "Casual Men Vest", 456, 556, 4.2, 10)
// dataarr.push(mensdata6)

// var mensdata7 = new mensdata("https://images.meesho.com/images/products/22109016/22a24_512.jpg", "Fabulous Men Tshirts", 666, 766, 4.2, 9)
// dataarr.push(mensdata7)

// var mensdata8 = new mensdata("https://images.meesho.com/images/products/33882314/i8guz_512.jpg", "Pack of 4 Classic Fashionista Men Tshirts", 194, 277, 3.5, 7)
// dataarr.push(mensdata8)

// var mensdata9 = new mensdata("https://images.meesho.com/images/products/3580116/1_512.jpg", "New Comfy Cotton Printed Men's T-Shir", 388, 488, 3.7, 5)
// dataarr.push(mensdata9)

// var mensdata10 = new mensdata("https://images.meesho.com/images/products/42233024/umkgm_512.jpg", "Pretty Fabulous Men Tshirts", 191, 272, 3.8, 5)
// dataarr.push(mensdata10)

// var mensdata11 = new mensdata("https://images.meesho.com/images/products/42624649/uvb7y_512.jpg", "Trendy Sensational Men Tshirts", 301, 401, 3.5, 14)
// dataarr.push(mensdata11)

// var mensdata12 = new mensdata("https://images.meesho.com/images/products/34090379/byymt_512.jpg", "Pretty Fashionista Men Shirts", 297, 397, 4.2, 9)
// dataarr.push(mensdata12)

// var mensdata13 = new mensdata("https://images.meesho.com/images/products/30701831/vamkb_512.jpg", "Urbane Retro Men Tshirts", 306, 406, 3.8, 11)
// dataarr.push(mensdata13)

// var mensdata14 = new mensdata("https://images.meesho.com/images/products/40404411/0ikdy_512.jpg", "Trendy Elegant Men Tshirts", 175, 249, 3.8, 4)
// dataarr.push(mensdata14)

// var mensdata15 = new mensdata("https://images.meesho.com/images/products/40124938/modkc_512.jpg", "Urbane Elegant Men Shirt Fabric", 316, 416, 3.9, 5)
// dataarr.push(mensdata15)

// var mensdata16 = new mensdata("https://images.meesho.com/images/products/33882317/exeup_512.jpg", "Urbane Designer Men Tshirts", 249, 349, 4.0, 4)
// dataarr.push(mensdata16)

// var mensdata17 = new mensdata("https://images.meesho.com/images/products/42730806/pk0xw_512.jpg", "Trendy Fashionable Men Tshirts", 252, 352, 3.5, 17)
// dataarr.push(mensdata17)

// var mensdata18 = new mensdata("https://images.meesho.com/images/products/41607236/zrc0m_512.jpg", "Fancy Ravishing Men Shirts", 232, 332, 3.7, 4)
// dataarr.push(mensdata18)

// var mensdata19 = new mensdata("https://images.meesho.com/images/products/28956475/7a8c8_512.jpg", "Trendy Ravishing Men Tshirts", 287, 387, 3.7, 9)
// dataarr.push(mensdata19)

// var mensdata20 = new mensdata("https://images.meesho.com/images/products/39307094/x9iml_512.jpg", "Comfy Glamorous Men Shirts", 222, 316, 3.8, 5)
// dataarr.push(mensdata20)


let url = `http://127.0.0.1:3000/mens` ; // this url will be of backend Server
async function fetchAPI(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        appenddata(data);
        console.log(data);
    } catch (error) {
        console.log("error : ",error);
    }
}

// lets call below fetchAPI.
fetchAPI();


// appenddata(dataarr)

function appenddata(data) {
    data.forEach((el) => {

        var product_div = document.createElement("div")
        product_div.setAttribute("id", "product_div")
        product_div.addEventListener("click", function () {
            product_description(el);
        })


        var product_img = document.createElement("img");
        product_img.src = el.image;

        var product_title = document.createElement("p")
        product_title.setAttribute("id", "product_title")
        product_title.innerText = el.title;

        //creating a div to store product price-------------------------------------------

        var product_price_div = document.createElement("div")
        product_price_div.setAttribute("id", "product_price_div")

        var product_price = document.createElement("p");
        product_price.setAttribute("id", "product_price")
        product_price.innerText = `₹${el.price}`;

        var mrp = document.createElement("p")
        mrp.setAttribute("id", "mrp");
        mrp.innerText = `₹${el.mrp}`;

        var per_discount = document.createElement("p")
        per_discount.setAttribute("id", "per_discount")
        per_discount.innerText = `${Math.round(Math.random() * (50 - 20) + 20)}% off`;

        product_price_div.append(product_price, mrp, per_discount)

        //creating a div to store extra discount------------------------------------------------------------------------

        var ext_discount = document.createElement("div")
        ext_discount.setAttribute("id", "ext_discount")

        var discount_img = document.createElement("img")
        discount_img.setAttribute("id", "discount_img")
        discount_img.src = "https://i.postimg.cc/Kzk9hV5x/discount-3.png"

        var text = document.createElement("p")
        text.setAttribute("id", "text")
        text.innerText = `₹100 discount on 1st order`

        ext_discount.append(discount_img, text)


        //creating a div to store the free delivery--------------------------------------------------------------------

        var delivery = document.createElement("div")
        delivery.setAttribute("id", "delivery")

        var product_delivery = document.createElement("p")
        product_delivery.setAttribute("id", "product_delivery")
        product_delivery.innerText = "Free Delivery"

        delivery.append(product_delivery);

        //creating a div to store the product rating and product review-----------------------------------------------------

        var product_rating_div = document.createElement("div");
        product_rating_div.setAttribute("id", "product_rating_div")


        product_rating_container = document.createElement("div")
        product_rating_container.setAttribute("id", "product_rating_container")


        var product_rating = document.createElement("p")
        product_rating.setAttribute("id", "product_rating")
        product_rating.innerText = `${el.rating}⋆`;

        product_rating_container.append(product_rating);

        var product_review = document.createElement("p");
        product_review.setAttribute("id", "product_review")
        product_review.innerText = `${el.review} Reviews`

        product_rating_div.append(product_rating_container, product_review)

        product_div.append(product_img, product_title, product_price_div, ext_discount, delivery, product_rating_div)

        document.querySelector("#container").append(product_div)
    });
}

<<<<<<< HEAD

=======
//creating sort functionality for the products--------------------------------------------------------------------
>>>>>>> 1f116f6926cfa9ace027ce89a265b5f901ed55bc
async function handleprice() {

    var shortv = document.querySelector("#select_tag").value
    let res = await fetch(url);
    let data = await res.json();

    let res = await fetch(url);
    let data = await res.json();

    if (shortv == "high") {
        data.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
        });
    }
    if (shortv == "low") {
        data.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
        });
    }
    if (shortv == "rating") {
        data.sort(function (a, b) {
            return Number(b.rating) - Number(a.rating)
        })
    }
    document.querySelector("#container").innerHTML = "";
    appenddata(data);
<<<<<<< HEAD
    console.log("yes")
=======
>>>>>>> 1f116f6926cfa9ace027ce89a265b5f901ed55bc
}

function product_description(el) {
    data = JSON.stringify(el)
    localStorage.setItem("product_detail", data)
    window.location.href = 'product_description.html'
}
