var light = document.querySelector("#mode")
var btn = document.querySelector("#btn")
var statuss = document.querySelector("h2")
var page = document.querySelector("html")
var fr = document.querySelector("#frame")
var love = document.querySelector("i")
var image = document.querySelector("img")

var lightCnt = 0
light.addEventListener("click", function() {
    if(lightCnt == 0) {
        light.innerHTML = "Day Mode"
        light.style.backgroundColor = "Black"
        light.style.color = "White"
        page.style.backgroundColor = "Black"
        btn.style.color = "White"
        btn.style.backgroundColor = "Black"
        fr.style.backgroundColor = "Black"
        lightCnt = 1
    } else {
        light.innerHTML = "Night Mode"
        light.style.backgroundColor = "White"
        light.style.color = "Black"
        page.style.backgroundColor = "White"
        btn.style.color = "Black"
        btn.style.backgroundColor = "white"
        fr.style.backgroundColor = "White"
        lightCnt = 0
    }
})
var stat = 0
btn.addEventListener("click", function() {
    if(stat == 0) {
        btn.innerHTML = "Remove"
        statuss.innerHTML = "Friends"
        statuss.style.color = "Green"
        stat = 1
    } else {
        btn.innerHTML = "Add Friend"
        statuss.innerHTML = "Stranger"
        statuss.style.color = "Red"
        stat = 0
    }  
})

image.addEventListener("dblclick", function(){
    if(love.style.color == "white") {
        love.style.color = "yellow"
        love.style.opacity = 1;
    }else {
        love.style.color = "white"
        love.style.opacity = 1;
    }
})


