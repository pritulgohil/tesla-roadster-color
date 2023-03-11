const boxes = document.querySelectorAll(".box");
const firstBox = boxes[0];

firstBox.addEventListener("click", function () {
    const img = document.getElementById("change");
    img.setAttribute("src", "images/t1.jpeg");
    firstBox.style.transform = "scale(1.5)";
    for (let i = 1; i < boxes.length; i++) {
        boxes[i].style.transform = "scale(1)";
    }
});



const oneBox = boxes[1];
const oneImg = document.getElementById("change");
const oneP = document.querySelector("p");

oneBox.addEventListener("click", function() {
    oneImg.setAttribute("src", "images/t2.jpeg");
    oneP.innerHTML = "Midnight Silver Metallic";
    oneBox.style.transform = "scale(1.5)";
    for(let i = 0; i < boxesOne.length; i++) {
        if(i !== 1) {
            boxesOne[i].style.transform = "scale(1)";
        }
    }
});



const twoBox = boxes[2];
const twoImg = document.getElementById("change");
const twoP = document.querySelector("p");

twoBox.addEventListener("click", function() {
    twoImg.setAttribute("src", "images/t3.jpeg");
    twoP.innerHTML = "Obsidian Black Metallic";
    twoBox.style.transform = "scale(1.5)";
    for(let i = 0; i < boxesTwo.length; i++) {
        if(i !== 2) {
            boxesTwo[i].style.transform = "scale(1)";
        }
    }
});




document.querySelectorAll(".box")[3].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t4.jpeg");
    document.querySelector("p").innerHTML = "Deep Blue Metallic";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});


document.querySelectorAll(".box")[4].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t5.jpeg");
    document.querySelector("p").innerHTML = "Silver Metallic";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});


document.querySelectorAll(".box")[5].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t6.jpeg");
    document.querySelector("p").innerHTML = "Pearl White Multi-Coat";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});


document.querySelectorAll(".box")[6].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t7.jpeg");
    document.querySelector("p").innerHTML = "Red Multi-Coat";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});


document.querySelectorAll(".box")[7].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t8.jpeg");
    document.querySelector("p").innerHTML = "Very Orange Multi-Coatc";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});

document.querySelectorAll(".box")[8].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t9.jpeg");
    document.querySelector("p").innerHTML = "Brilliant Yellow Multi-Coat";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});


document.querySelectorAll(".box")[9].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t10.jpeg");
    document.querySelector("p").innerHTML = "Glacier Blue Multi-Coat";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});

document.querySelectorAll(".box")[10].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t11.jpeg");
    document.querySelector("p").innerHTML = "Electric Blue Multi-Coat";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1.5)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});


document.querySelectorAll(".box")[11].addEventListener("click", function () {
    document.getElementById("change").setAttribute("src", "images/t12.jpeg");
    document.querySelector("p").innerHTML = "Green Lotus Multi-Coat";
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1.5)";
});

document.querySelectorAll(".box")[0].addEventListener("mouseout", function () {
    document.querySelectorAll(".box")[0].style.transform = "scale(1)";
    document.querySelectorAll(".box")[1].style.transform = "scale(1)";
    document.querySelectorAll(".box")[2].style.transform = "scale(1)";
    document.querySelectorAll(".box")[3].style.transform = "scale(1)";
    document.querySelectorAll(".box")[4].style.transform = "scale(1)";
    document.querySelectorAll(".box")[5].style.transform = "scale(1)";
    document.querySelectorAll(".box")[6].style.transform = "scale(1)";
    document.querySelectorAll(".box")[7].style.transform = "scale(1)";
    document.querySelectorAll(".box")[8].style.transform = "scale(1)";
    document.querySelectorAll(".box")[9].style.transform = "scale(1)";
    document.querySelectorAll(".box")[10].style.transform = "scale(1)";
    document.querySelectorAll(".box")[11].style.transform = "scale(1)";
});
