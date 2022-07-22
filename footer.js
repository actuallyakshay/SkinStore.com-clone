// connect folder

let connect_arr = [
  {
    image: "https://img.icons8.com/cute-clipart/2x/facebook-new.png",
    link:"https://www.facebook.com/SkinStore"
  },
  {
    image: "https://img.icons8.com/dusk/2x/instagram-new--v2.gif",
    link:"https://www.instagram.com/skinstore/"
  },
  {
    image: "https://img.icons8.com/color/2x/twitter--v2.gif",
    link:"https://twitter.com/skinstore_cs"
  },
  {
    image: "https://img.icons8.com/color/2x/pinterest--v3.gif",
    link:"https://www.pinterest.com/skinstore/"
  },
  {
    image: "https://img.icons8.com/color/2x/snapchat-circled-logo--v2.gif",
    link:"https://www.snapchat.com/add/SkinStoreUS"
  },
];

connectfunc(connect_arr);
function connectfunc(connect_arr) {
  connect_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    image.style.cursor="pointer";
    image.addEventListener("click", function(){
      event.preventDefault();
      window.location.href=elem.link;
    })
    box.append(image);
    document.querySelector("#connect").append(box);
  });
}

let help_arr = [
  {
    image: "https://img.icons8.com/ios/2x/service.png",
    para: "Customer Service",
  },
  {
    image: "https://img.icons8.com/ios-filled/2x/delivery--v2.gif",
    para: "Delivery Information",
  },
  {
    image:
      "https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-refund-black-friday-flaticons-flat-flat-icons.png",
    para: "Retun & Refund",
  },
  {
    image: "https://img.icons8.com/ios-glyphs/2x/help.png",
    para: "Help Center",
  },
  {
    image: "https://img.icons8.com/ios-glyphs/2x/marker--v2.gif",
    para: "Track my Order",
  },
  {
    image: "https://img.icons8.com/ios/2x/accessibility2.png",
    para: "Accessibility",
  },
  {
    image: "https://img.icons8.com/ios/2x/biscuits.png",
    para: "Cookies Settings",
  },
];

helpfunc(help_arr);
function helpfunc(help_arr) {
  help_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let para = document.createElement("p");
    para.innerText = elem.para;
    box.append(image, para);
    document.querySelector("#help").append(box);
  });
}

//about section

let about_arr = [
  {
    para: "KeyWorkers Discount",
  },
  {
    para: "About Us",
  },
  {
    para: "Affiliate Program",
  },
  {
    para: "Brand Directery",
  },
  {
    para: "Coupan Codes",
  },
  {
    para: "Refer A Friend",
  },
  {
    para: "Student Discount",
  },
  {
    para: "Join SkinStore Experts",
  },
];
aboutfunc(about_arr);
function aboutfunc(about_arr) {
  about_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let para = document.createElement("p");
    para.innerText = elem.para;
    box.append(para);
    document.querySelector("#about").append(box);
  });
}

// legel part

let legal_arr = [
  {
    para: "Cookie Information",
  },
  {
    para: "Privacy policy",
  },
  {
    para: "Terms & Conditions",
  },
  {
    para: "Modern Slavery Statement",
  },
];

legalfunc(legal_arr);
function legalfunc(legal_arr) {
  legal_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let para = document.createElement("p");
    para.innerText = elem.para;
    box.append(para);
    document.querySelector("#legal").append(box);
  });
}

// contact us part

let contact_us_arr = [
  {
    para: "Message Us",
  },
  {
    para: "Free Beauty Consultations",
  },
];
contact_usfunc(contact_us_arr);
function contact_usfunc(contact_us_arr) {
  contact_us_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let para = document.createElement("p");
    para.innerText = elem.para;
    box.append(para);
    document.querySelector("#contact_us").append(box);
  });
}
