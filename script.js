// weather
link ='https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5'
var request = new XMLHttpRequest()
request.open('GET', link, true)
request.onload = function () {
  var obj = JSON.parse(this.response)
  console.log(obj)

  document.getElementById('weather').innerHTML = obj.weather[0].description
  document.getElementById('location').innerHTML = obj.name
  document.getElementById('temp').innerHTML = Math.round(obj.main.feels_like - 273)

  // document.getElementById('tempicon').src ='http://openweathermap.org/img/w/' + obj.weather[0].icon + '.png'

  // image show
var cloud = obj.weather[0].id

  console.log(cloud);


  if (cloud < 300 && id > 200) {
    document.getElementById(tempicon.src = 'icon/cloud/thunderstorm.png')
  } else if (cloud < 400 && cloud > 300) {
    document.getElementById(tempicon.src = 'icon/cloud/cloud-solid.png')
  } else if (cloud < 600 && cloud > 500) {
    document.getElementById(tempicon.src = 'icon/cloud/rain.png')
  } else if (cloud < 700 && cloud > 600) {
    document.getElementById(tempicon.src = 'icon/cloud/snow.png')
  } else if (cloud < 800 && cloud > 700) {
    document.getElementById(tempicon.src = 'icon/sun/6.png')
  } else if (cloud == 800) {
    document.getElementById(tempicon.src = 'icon/sun/clouds-and-sun.png')
  }
  
  

  if (request.status >= 200 && request.status < 400) {
    var temp = obj.main.temp
  } else {
    console.log("The city doesn't exist! Kindly check")
  }
}
request.send()





// time

function display_c () {
  var refresh = 1000 // Refresh rate in milli seconds
  mytime = setTimeout('display_ct()', refresh)
}

function display_ct () {
  var x = new Date()
  var x1 = x.toLocaleTimeString() // changing the display to UTC string
  document.getElementById('ct').innerHTML = x1
  tt = display_c()
}
// test

//date

var datetime = new Date().toDateString()
console.log(datetime) // it will represent date in the console of developer tool
document.getElementById('time').textContent = datetime // represent on html page

//calender
const date = new Date()

const renderCalendar = () => {
  date.setDate(1)

  const monthDays = document.querySelector('.days')

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

  const firstDayIndex = date.getDay()

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay()

  const nextDays = 7 - lastDayIndex - 1

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  document.querySelector('.date h1').innerHTML = months[date.getMonth()]

  document.querySelector('.date p').innerHTML = new Date().toDateString()

  let days = ''

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`
    } else {
      days += `<div>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar()
})

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
})

renderCalendar()
