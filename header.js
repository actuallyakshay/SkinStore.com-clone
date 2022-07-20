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
    box.append(image);
    document.querySelector("#category").append(box);
  });
}
