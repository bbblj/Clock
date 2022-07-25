const change = document.querySelector('.change')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
let isDark = true

const hr = document.querySelector('.hour')
const mn = document.querySelector('.minute')
const sc = document.querySelector('.second')

change.addEventListener('click',function () {
  if(isDark){
    moon.style.display = 'none'
    sun.style.display = 'inline'
    document.body.style.background = '#ffffff'
    isDark = false
  }else{
    moon.style.display = 'inline'
    sun.style.display = 'none'
    document.body.style.background = '#282828'
    isDark = true
  }
})

setInterval(()=>{
  let day = new Date()
  let hh = day.getHours() * 30 //30意味着角度，12h即转满360度
  let mm = day.getMinutes() * 6
  let ss = day.getSeconds() * 6

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`

})