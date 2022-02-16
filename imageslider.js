/* QuerySelectors for image and buttons */
const image = document.querySelector("img");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
/* Variables that contain image urls */
const img1 = "https://img.search.brave.com/6WRtnqvgMi2e-3fTGsvC9J9cZTOsLtLxI4rzuQHi7-o/rs:fit:1200:1050:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL1R3MVZBV1Eu/anBn";
const img2 = "https://img.search.brave.com/aU2x6kVvRE0t98PyCvYZTxcDLFbjwGwf71OA5RL1Vqo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c3V3YWxscy5jb20v/d2FsbHBhcGVycy9u/YXR1cmUvc25vd3kt/cm9ja3ktbW91bnRh/aW5zLTM2MDg0LTE5/MjB4MTIwMC5qcGc";
const img3 = "https://img.search.brave.com/gBqDHJKwxZP_1Z_Ql5Pgs4jnkB5wkU_SSBL2adSyUuQ/rs:fit:1200:984:1/g:ce/aHR0cHM6Ly93d3cu/Y2hpbmF0b3Vyc25l/dC5jb20vdXBsb2Fk/cy9tYWluL2xpdGlt/Zy8yMDE5LTA1LTA1/LzVjY2U1YTBkMDE3/YjguanBn";
const img4 = "https://img.search.brave.com/XiLHhXm-kor25X8JoK9z867NJAQCQZUFkJL9VCtJvIU/rs:fit:1200:1080:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL0poRkpyd0Mu/anBn";

/* Array containing the images */
const imageArray = [img1, img2, img3, img4];

/* Image Source start image */
/* Click function for right button */
    let count = 0;
    image.src = imageArray[0]
right.addEventListener("click", function(){
    image.src = imageArray[count + 1]
    count += 1;
    if(count === imageArray.length){
        count = 0;
        image.src = imageArray[count]
    }
       
console.log(count);
})
/* Click function for left button */
left.addEventListener("click", function () {
    if(count === 0){
        count = 4;
        image.src = imageArray[count]
    }
    count -= 1;
    image.src = imageArray[count];
    console.log(count)
})
