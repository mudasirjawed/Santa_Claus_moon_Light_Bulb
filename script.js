let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");
let santa = document.querySelector(".santa");

let flag = 0;

btn.addEventListener("click", function () {
    if (flag === 0) {
        bulb.style.backgroundColor = "rgb(240, 245, 255)";

        bulb.style.boxShadow = `
    0 0 30px 15px rgba(230, 235, 255, 0.8),   /* core glow */
    0 0 60px 30px rgba(200, 210, 255, 0.6),   /* mid glow */
    0 0 120px 60px rgba(180, 200, 255, 0.4)   /* soft outer halo */`;

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