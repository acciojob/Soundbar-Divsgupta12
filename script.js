//your JS code here. If required.
let sound=["applause.mp3","boo.mp3","gasp.mp3","tada.mp3","victory.mp3","wrong.mp3"];
let btns=document.getElementsByClassName("btn");
let stop=document.getElementByClassName("stop")
let audio;
console.log(btns);
for(i =0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        audio=new Audio(`sounds/${sound[i]}`)
        audio.play();
    });
}
stop.addEventListener("click",()=>{
    audio.pause();
});