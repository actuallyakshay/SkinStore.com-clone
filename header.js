// slider part

let slider_arr = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/04/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot2-1180x450-021804.png",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/16/0701-STDCRE-38244-SS-BME-Skinstore-July-4-Assets-Shot_01-1180x450-095516.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/0712_THG0034801_SS_JUL_22_SHOT_03_1180x450-061455.jpg"
];

let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let image = document.querySelector("#crauser");
rightBtn.addEventListener("click", sliderfunc)
let i = 0;
function sliderfunc(){
  i++;
  if(i===slider_arr.length){
    i=0;
  }
  image.src = slider_arr[i];
}
setInterval(sliderfunc,2000)
leftBtn.addEventListener("click", sliderfuncn)
function sliderfuncn(){
   i--;
  if(i<0){
        i=slider_arr.length-1;
      }
  image.src = slider_arr[i];
}

let trend_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/39/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot17-600x600-053341-095839.jpg",
    head: "$21 SkinCeuticals Gifts",
    para: "SkinCenturies Retexuring  Activator 4ml(worth $21) when you spend $150 or more on thr brand.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/27/LF-EF-US-Comps-REN-380x312-091127.jpg",
    head: "25% off sun care",
    para: "Pamper your skin with 25% off select care  on skinStore",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/21/0807-STDCRE-38045-SS-AM-Photography-Shot_10-500x500-052921.jpg",
    head: "Brand of the month: Elemis + Gift",
    para: "Plus, receive an Elemis RIXO Gift Set (Worth $75) when you spend $100 or more on the brand.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/15/decorte.products-082615.jpeg",
    head: "30% off select Decorté",
    para: "Enjoy 30% off select Decorté, and experience the wisdom of traditional Japanese skincare, powered by unparalleled techno-innovation to transform your skin.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/11/original-Shop_the_Range_0002_Skincare-053111.jpg",
    head: "30% off select PÜR + Gift",
    para: "Receive a PUR Best Sellers Set (worth $24) when you spend $60 or more on the brand.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/26/SkinMedica.products-092426.jpg",
    haed: "10% off SkinMedica + extra 20% off with Auto Replenishment",
    para: "Receive a Free SkinMedica Instant Bright Eye Cream .07oz (worth $14) when you spend $130 or more on the brand. Plus, receive an EXTRA 20% off when you subscribe to your favorite SkinMedica products.",
  },
];

trendfunc(trend_arr);
function trendfunc(trend_arr) {
  trend_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.para;
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      event.preventDefault();
      window.location.href = "cart.html"
  })
    btn.innerText = "SHOP NOW";
    box.append(image, head, para, btn);
    document.querySelector("#trending").append(box);
  });
}

// category row

let cat_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png",
  },
];

catefunc(cat_arr);
function catefunc(cat_arr) {
  cat_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    image.addEventListener("click", function () {
      event.preventDefault();
      window.location.href = "cart.html"
  })
    box.append(image);
    document.querySelector("#category").append(box);
  });
}

// buying

let buying_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg",
    head: "SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml",
    price: "$169.00",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg",
    head: "	Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5oz)",
    price: "$122.00",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp//productimg/480/480/13547814-8054931654720532.jpg",
    head: " Borghese Borghese Acqua Ristorativo Hydrating Concentrate 30ml",
    price: "$96.00",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp//productimg/480/480/11523630-6274891243712913.jpg",
    head: " Elemis Pro-Collagen Cleansing Balm 100g",
    price: "$66.00",
  },
];

buyingfunc(buying_arr);
function buyingfunc(buying_arr) {
  buying_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.price;
    let btn = document.createElement("button");
    btn.innerText = "SHOP NOW";
    btn.addEventListener("click", function () {
      event.preventDefault();
      window.location.href = "cart.html"
  })
    box.append(image, head, para, btn);
    document.querySelector("#buying").append(box);
  });
}

// brand image section

let brand_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png",
  },
];
brandfunc(brand_arr);
function brandfunc(brand_arr) {
  brand_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    box.append(image);
    document.querySelector("#brand").append(box);
  });
}

// blog section

let blog_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot07-500x500-030310.jpg",
    head: "SkinCeuticals: Vitamin C Beyond the Face",
    para: "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips get in on the antioxidant action (and benefits).",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
    head: "Which TriPollar Device is Right for You?",
    para: "In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/53/2004_THG0034749_SS_MAY_2022_SHOT_33_MAIN-071653.jpg",
    head: "The HairStore at SkinStore: What Your Routine Needs",
    para: "Give your hair the same love and care you give your skin by shopping The HairStore at SkinStore.",
  },
];
blogfunc(blog_arr);
function blogfunc(blog_arr) {
  blog_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.para;
    let btn = document.createElement("button");
    btn.innerText = "READ MORE";
    box.append(image, head, para, btn);
    document.querySelector("#blog").append(box);
  });
}

// connect folder

let connect_arr = [
  {
    image: "https://img.icons8.com/cute-clipart/2x/facebook-new.png",
  },
  {
    image: "https://img.icons8.com/dusk/2x/instagram-new--v2.gif",
  },
  {
    image: "https://img.icons8.com/color/2x/twitter--v2.gif",
  },
  {
    image: "https://img.icons8.com/color/2x/pinterest--v3.gif",
  },
  {
    image: "https://img.icons8.com/color/2x/snapchat-circled-logo--v2.gif",
  },
];

connectfunc(connect_arr);
function connectfunc(connect_arr) {
  connect_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    box.append(image);
    document.querySelector("#connect").append(box);
  });
}
