import messager from '../images/1.jpg'
const image = new URL('../images/symbol-defs.svg', import.meta.url);

const cardContainer = document.querySelector('.markup');

export default function handlerLoadWindow() {

    const createdCard = () => {
   
    const card = `
   <div class='view'>
    <p class="paragraph">"I've rediscovered the joy of pain-free walks with my Dynamis massager! Not only has it alleviated my foot pain, but
       it's also brought a newfound freedom to my movements. An absolute game-changer!" - Hannah S.
       </p>
        <p class="c-rate">           
          <svg class="c-icon active" width="20px" height="20px">
            <use xlink:href='${image}#icon-star-full'></use>
          </svg>
        <svg class="c-icon active" width="20" height="20">
           <use xlink:href='${image}#icon-star-full'></use>
        </svg>
          <svg class="c-icon active" width="20" height="20">
            <use xlink:href='${image}#icon-star-full'></use>
          </svg>
        <svg class="c-icon active" width="20" height="20">
           <use xlink:href='${image}#icon-star-full'></use>
        </svg>
        <svg class="c-icon active" width="20" height="20">
           <use xlink:href='${image}#icon-star-full'></use>
        </svg>
        2304 Reviews
        </p>
        <div class='line'></div>
        <p>Name: Dynamis</p>
        <p>Price: 59.99 <span class='text-price'>199.99</span></p>
        <p>Sale price Hurry up! Offer ends soon</p>
        <div class='photo-messager'>
        <img class='photo' width='100vw' src=${messager} alt='photo messager'/> 
        </div>
        </div>
       `
        
    return card;
    }
    cardContainer.innerHTML = createdCard();
}


window.addEventListener('load', handlerLoadWindow);