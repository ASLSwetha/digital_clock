const hele = document.getElementById("hour");
const mele = document.getElementById("min");
const sele = document.getElementById("sec");
const ampmele = document.getElementById("ampm");

function UpdateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    hele.innerText = h;
    mele.innerText = m;
    sele.innerText = s;
    ampmele.innerText = ampm;

    // To call the function every second
    setTimeout(()=>{
        UpdateClock();
    },1000)
}
UpdateClock();
