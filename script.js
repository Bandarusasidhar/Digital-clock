function displayTime(){
    let dateTime=new Date()
    let hr=dateTime.getHours()
    let min=padzero(dateTime.getMinutes())
    let sec=padzero(dateTime.getSeconds())
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let dayname=days[dateTime.getDay()]
    let day=padzero(dateTime.getDate())
    let month=padzero(dateTime.getMonth()+1)
    let year=padzero(dateTime.getFullYear())
    
    
    
    if (hr>12){
        hr=hr-12
        ampm.innerHTML='pm' 
    } 
    document.getElementById("hours").innerHTML=padzero(hr)
    document.getElementById("mins").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
    document.getElementById("dayname").innerHTML=dayname
    document.getElementById("day").innerHTML=day
    document.getElementById("month").innerHTML=month
    document.getElementById("year").innerHTML=year
    
    
}
function padzero(num){
    return num<10?"0"+num:num

}
setInterval(displayTime,500)



