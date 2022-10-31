const days = document.getElementById('day')
const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const ampm = document.getElementById('ampm')

showTime()



function showTime(){

    let date = new Date()
    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let hour = date.getHours()
    let minute = date.getMinutes()
    let day = date.getDay()

    hour = hour % 12
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    day = dayNames[day]
    days.innerHTML = day
    hours.innerHTML = hour
    minutes.innerHTML = minute
    ampm.innerHTML = date.getHours() < 12 ? 'AM' : 'PM'
    

    

}