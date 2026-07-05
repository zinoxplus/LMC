
/* =========================
   LMC CYBER HUD SYSTEM
========================= */

const particlesContainer =
document.getElementById("particles");

/* PARTICLES */

for(let i=0;i<80;i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100+"vw";

    particle.style.top =
    Math.random()*100+"vh";

    particle.style.width =
    Math.random()*4+1+"px";

    particle.style.height =
    particle.style.width;

    particle.style.animationDuration =
    Math.random()*10+5+"s";

    particle.style.animationDelay =
    Math.random()*5+"s";

    particlesContainer.appendChild(
    particle
    );

}

/* RANDOM ELECTRIC EFFECT */

const boxes =
document.querySelectorAll(
".panel,.game-box,.rank-box,.level-box,.steam-box,.music-box"
);

setInterval(()=>{

    const random =
    boxes[
    Math.floor(
    Math.random()*boxes.length
    )
    ];

    random.classList.add(
    "electric-hit"
    );

    setTimeout(()=>{

        random.classList.remove(
        "electric-hit"
        );

    },300);

},1200);


/* LEVEL RING */

document.querySelectorAll(
".circle-progress"
)

.forEach(circle=>{

    const value =
    parseInt(
    circle.dataset.value
    );

    let degree;

    if(value<=100){

        degree =
        value*3.6;

    }else{

        degree =
        (value/30)*360;

    }

    circle.style.background =
    `conic-gradient(
    #8b5cff 0deg,
    #3d7bff ${degree}deg,
    rgba(255,255,255,.08) ${degree}deg
    )`;

});


/* HUD SCAN LINE */

const scan =
document.createElement("div");

scan.className =
"scan-line";

document.body.appendChild(
scan
);


/* MOUSE GLOW */

const glow =
document.createElement("div");

glow.className =
"cursor-glow";

document.body.appendChild(
glow
);

window.addEventListener(
"mousemove",
e=>{

    glow.style.left =
    e.clientX+"px";

    glow.style.top =
    e.clientY+"px";

});


/* TITLE ANIMATION */

const title =
document.querySelector(
".top-logo h1"
);

let visible = true;

setInterval(()=>{

    visible = !visible;

    title.style.textShadow =
    visible
    ?
    `
    0 0 10px #fff,
    0 0 20px #8b5cff,
    0 0 40px #8b5cff,
    0 0 80px #3d7bff
    `
    :
    `
    0 0 5px #fff,
    0 0 10px #8b5cff
    `;

},1000);


/* FLOATING HUD ICONS */

const symbols = [
"◈",
"◉",
"✦",
"✧",
"⬢",
"⬡",
"△",
"◇"
];

for(let i=0;i<15;i++){

    const hud =
    document.createElement("span");

    hud.innerText =
    symbols[
    Math.floor(
    Math.random()*symbols.length
    )
    ];

    hud.className =
    "hud-symbol";

    hud.style.left =
    Math.random()*100+"vw";

    hud.style.top =
    Math.random()*100+"vh";

    hud.style.animationDelay =
    Math.random()*10+"s";

    document.body.appendChild(
    hud
    );

}


/* FOCUS TEXT GLOW */

const focus =
document.querySelector(
".focus-box h2"
);

setInterval(()=>{

    focus.style.filter =
    `brightness(${
    Math.random()*0.5+1
    })`;

},300);
