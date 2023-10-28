import * as data from '../db_faq.json'
const cardContainer = document.querySelector('.faq');

export default function handlerLoadWindowFAQ() {
    const createdSection = () => {
         const section = data.map((post) => {
             const li = `<li key='${post.id}' class='post'>
            <p>Q${post.id}: ${post.question}</p>
            <p>A${post.id}: ${post.answear}</p>
            </li>
        `;
            return li;
        }).join('');
        return section;
        }

const createList = createdSection();
cardContainer.insertAdjacentHTML("beforeend", createList); 

}


window.addEventListener('load', handlerLoadWindowFAQ);