let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");
let santa = document.querySelector(".santa");

let flag = 0;

btn.addEventListener("click", function () {
    if (flag === 0) {
        bulb.style.backgroundColor = "rgb(255, 255, 120)";
        bulb.style.boxShadow = `0 0 70px 52px rgba(255, 255, 120, 0.8)`;
        btn.innerHTML = "On";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        santa.classList.add("fly");
        flag = 1;
    } else {
        bulb.style.backgroundColor = "#111";
        bulb.style.boxShadow = "inset 0 0 40px #000";
        santa.classList.remove("fly");
        btn.innerHTML = "Off";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        flag = 0;
    }

});

