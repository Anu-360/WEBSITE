const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "PRIDE23",
    
    colors: [
      {
        code: "black",
        img: "./img/2023.jpg",
      },
      {
        code: "black",
        img: "./img/2023.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "2010",
    
    colors: [
      {
        code: "black",
        img: "./img/2010.jpg",
      },
      {
        code: "black",
        img: "./img/2010.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "2011",
    
    colors: [
      {
        code: "black",
        img: "./img/2011.jpg",
      },
      {
        code: "black",
        img: "./img/2011.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "2018",
    
    colors: [
      {
        code: "black",
        img: "./img/2018.jpeg",
      },
      {
        code: "black",
        img: "./img/2018.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "2021",
    
    colors: [
      {
        code: "black",
        img: "./img/2021.jpg",
      },
      {
        code: "black",
        img: "./img/2021.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");

const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
   
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

