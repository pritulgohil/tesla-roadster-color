const boxes = document.querySelectorAll(".box");
const img = document.getElementById("change");
const firstBox = boxes[0];
const p = document.querySelector("p");

firstBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t1.jpeg");
    firstBox.style.transform = "scale(1.5)";
    for (let i = 1; i < boxes.length; i++) {
        boxes[i].style.transform = "scale(1)";
    }
});


const oneBox = boxes[1];
oneBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t2.jpeg");
    p.innerHTML = "Midnight Silver Metallic";
    oneBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 1) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const twoBox = boxes[2];
twoBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t3.jpeg");
    p.innerHTML = "Obsidian Black Metallic";
    twoBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 2) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const threeBox = boxes[3];
threeBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t4.jpeg");
    p.innerHTML = "Deep Blue Metallic";
    threeBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const fourBox = boxes[4];
fourBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t5.jpeg");
    p.innerHTML = "Silver Metallic";
    fourBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const fiveBox = boxes[5];
fiveBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t6.jpeg");
    p.innerHTML = "Pearl White Multi-Coat";
    fiveBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const sixBox = boxes[6];
sixBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t7.jpeg");
    p.innerHTML = "Red Multi-Coat";
    sixBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const sevenBox = boxes[7];
sevenBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t8.jpeg");
    p.innerHTML = "Very Orange Multi-Coatc";
    sevenBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const eightBox = boxes[8];
eightBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t9.jpeg");
    p.innerHTML = "Brilliant Yellow Multi-Coat";
    eightBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
});


const nineBox = boxes[9];
nineBox.addEventListener("click", function () {
    img.setAttribute("src", "images/t10.jpeg");
    p.innerHTML = "Glacier Blue Multi-Coat";
    nineBox.style.transform = "scale(1.5)";
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 3) {
            boxes[i].style.transform = "scale(1)";
        }
    }
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
