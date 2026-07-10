// 🌹 Falling Rose Petals
const petals = document.getElementById("petals");

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);

// ✨ Fade in sections while scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{threshold:0.2});

sections.forEach(sec=>{
    sec.style.opacity="0";
    sec.style.transform="translateY(60px)";
    sec.style.transition="all 1s ease";
    observer.observe(sec);
});

// 📸 Click image to view larger
const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{
    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.9)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="99999";

        const big=document.createElement("img");

        big.src=img.src;
        big.style.maxWidth="90%";
        big.style.maxHeight="90%";
        big.style.borderRadius="15px";

        overlay.appendChild(big);

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });
});

// ❤️ Smooth welcome animation
window.onload=()=>{
    document.body.style.opacity="0";
    document.body.style.transition="opacity 1.5s";
    setTimeout(()=>{
        document.body.style.opacity="1";
    },100);
};
