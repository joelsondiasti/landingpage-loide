const lightbox = document.getElementById("lightbox");
const lightcontent = document.getElementById("lightcontent");

const btnTerm = document.getElementById("termo"); 
const exitIcon = document.getElementById("exitIcon");
const exitBtn = document.getElementById("exitBtn");

exitIcon.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightcontent.style.display = "none";
});

exitBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightcontent.style.display = "none";
});

btnTerm.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightcontent.style.display = "flex";
});

