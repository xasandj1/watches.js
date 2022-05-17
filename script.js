const hours = document.querySelector('.hours'),
    minutes = document.querySelector('.min'),
    secunds = document.querySelector('.sec'),
    hour = document.querySelector('.nuber'),
    minute = document.querySelector('.nuber1')
function watch() {
  let time = new Date,
  h = time.getHours() *30,
  m = time.getMinutes() *6,
  s = time.getSeconds() *6
  hours.style.transform = `rotate(${h}deg)`
  minutes.style.transform = `rotate(${m}deg)`
  secunds.style.transform = `rotate(${s}deg)`
  
  
  hour.innerHTML = time.getHours()
  minute.innerHTML = time.getMinutes()
  
  time.getHours() < 10 ?  hour.innerHTML = time.getHours() :  hour.innerHTML = time.getHours()
  time.getMinutes() < 10 ? minute.innerHTML = '0' + time.getMinutes() : minute.innerHTML = time.getMinutes()
  
  setTimeout(() => {
    watch()
  }, 1000);
}
watch()

const tabHead = document.querySelectorAll('.tabsItem'),
     tabHead1 = document.querySelectorAll('.tabsNav')
console.log(tabHead);
console.log(tabHead1);