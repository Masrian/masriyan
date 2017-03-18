console.clear();
const boms = document.getElementsByClassName("bom");
const booms = document.getElementsByClassName("booms");

setTimeout(() => {
    for (let i = 0; i < boms.length; i++) {
        boms[i].className += " hide";
    }
}, 2000);

setTimeout(() => {
    booms[0].className += " visible";
}, 2500);