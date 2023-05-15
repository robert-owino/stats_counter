
//first method
const items = [...document.querySelectorAll(".number")];

function updateCount(el) {
  const value = parseInt(el.dataset.value);
  const increament = Math.ceil(value / 1000);
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    initialValue += increament;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
    }
    el.textContent = `${initialValue}+`;
  }, 1);
}

items.forEach((item) => {
  updateCount(item);
});



//alternative method
// const numbers = document.querySelectorAll('.number')

// function countUp(){
// numbers.forEach((number)=>{
//    const targetValue = +number.getAttribute('data-value')
//    const currentValue = +number.textContent
//    const increament = Math.ceil(targetValue/100)

//    if(currentValue < targetValue){
//     number.textContent = Math.min(currentValue + increament, targetValue)
//    }

// })
// }

// window.addEventListener('DOMContentLoaded',()=>{
//     setInterval(countUp, 10);
// })
