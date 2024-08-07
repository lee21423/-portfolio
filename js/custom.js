MainFullpage();
menuBtnAction();
profileSlide();

function MainFullpage() {
    let tt = false;
    const nav = document.querySelectorAll('.gnb li');

    const tl = gsap.timeline({ pause: true, });

    let t = 1;


    tl
        .from('.intro h2 span:nth-child(4)', {
            x: -400,
            opacity: 0,
            duration: t * 0.4,
            delay: t * 1
        })
        .from('.intro h2 span:nth-child(1)', {
            rotateX: 720,
            y: -100,
            delay: t * 1,
            opacity: 0,
            duration: t * 1,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(2)', {
            y: 100,
            delay: t * 1,
            opacity: 0,
            duration: t * 0.5,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(3)', {
            y: -100,
            delay: t * 1,
            opacity: 0,
            duration: t * 0.5,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(5)', {
            y: 100,
            delay: t * 1,
            opacity: 0,
            duration: t * 0.5,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(6)', {
            y: -100,
            delay: t * 1,
            opacity: 0,
            duration: t * 0.5,
            ease: 'bounce'
        })
        .to('.intro h2 span:nth-child(4)', {
            width: 300,
            duration: t * 1,
            delay: t * 1,
        })
        .from('.intro p', {
            opacity: 0
        })
        .from('.intro .dog', {
            scale: 0,
            opacity: 0,
            ease: 'bounce'
        })
        .from('.intro .bar span', {
            opacity: 0,
        })
        .from('.intro .bar', {
            width: 0,
            duration: t * 2
        })


    const portFolio = new fullpage('.content', {
        anchors: ['intro', 'pt01', 'pt02', 'pt03', 'profile'],
        onLeave: function (origin, destination, direction) {
            let idx = destination.index;
            nav.forEach(it => it.classList.remove('on'))
            nav[idx].classList.add('on');
            if (idx !== 0) {
                tl.kill()
            } else {
                tl.restart()
            }
        }
    });
}


function menuBtnAction() {
    const btn = document.querySelector('.menu .btn');
    const cover = document.querySelector('.cover');
    const lnk = document.querySelectorAll('.lnb a');

    function coverAnimation() {
        cover.classList.toggle('on');
        btn.parentElement.classList.toggle('on');
    }

    function linkMove() {
        cover.classList.remove('on');
        btn.parentElement.classList.remove('on');
    }

    btn.addEventListener('click', coverAnimation);

    lnk.forEach(el => {
        el.addEventListener('click', linkMove)
    });

    cover.addEventListener('wheel', function (e) {
        e.stopPropagation();
    })

}

function profileSlide() {
    const slide = new Swiper('.profileSlide', {
        effect: "cube",
        loop: true,
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: false,
            shadowOffset: 80,
            shadowScale: 0.7,
        },
    })
}





