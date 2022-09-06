// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear
alert("yo!!")
const getElement = (selector) =>{
    const element = document.querySelector(selector)
    if(element) return element
    throw Error(
        `please note check your class names, there is no ${selector} class`
    )
}

const links = getElement('.nav-links');
const navBtnDom = getElement('.nav-btn');

navBtnDom.addEventListener('click', ()=>{
    links.classList.toggle("show-link")
})


const date = getElement("#date");
const currentYear = new Date().getFullYear()
date.textContent = currentYear;