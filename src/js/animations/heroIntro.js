import gsap from "gsap";

export function runHeroIntro() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = {
        topbar: ".topbar",
        topbarLeft: ".topbar__left > *",
        topbarRight: ".topbar__right > *",
        heroContent: ".hero__content",
        coinSilver: ".hero__coin--silver",
        coinGold: ".hero__coin--gold",

        bgGraha: ".header-bg__graha",
        bgHill: ".header-bg__hill",
        headImg: ".header-bg__head img",
        car: ".header-bg__car",
        bgNameWrap: ".header-bg__name",
    };

    if (reduceMotion) {
        gsap.set(
            [
                els.topbar,
                els.topbarLeft,
                els.topbarRight,
                els.heroContent,
                els.coinSilver,
                els.coinGold,
                els.bgGraha,
                els.bgHill,
                els.headImg,
                els.car,
            ],
            { clearProps: "all", opacity: 1 }
        );
        return;
    }

    gsap.set([els.topbar, els.heroContent, els.coinSilver, els.coinGold], { opacity: 1 });
    gsap.set([els.topbarLeft, els.topbarRight], { opacity: 0, y: -10 });

    gsap.set([els.bgGraha, els.bgHill], { opacity: 0, y: 18, filter: "blur(2px)" });
    gsap.set(els.headImg, { opacity: 0, y: -20, scale: 1.03, filter: "blur(3px)" });
    gsap.set(els.car, { opacity: 0, y: 30, scale: 0.98, filter: "blur(2px)" });

    gsap.set(els.heroContent, { opacity: 0, y: 18, filter: "blur(2px)" });

    gsap.set(els.coinSilver, { opacity: 0, y: 22, scale: 0.96, filter: "blur(2px)" });
    gsap.set(els.coinGold, { opacity: 0, y: 30, scale: 0.94, rotation: -10, filter: "blur(2px)" });

    const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out", duration: 0.9 },
    });

    tl.to([els.bgGraha, els.bgHill], {
        opacity: 0.28,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.08,
    });

    tl.to(
        els.headImg,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
        },
        "-=0.55"
    );

    tl.to(
        els.car,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.0,
        },
        "-=0.85"
    );

    tl.to(
        els.topbarLeft,
        {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
        },
        "-=0.75"
    );

    tl.to(
        els.topbarRight,
        {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
        },
        "-=0.55"
    );

    tl.to(
        els.heroContent,
        {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
        },
        "-=0.55"
    );

    tl.to(
        els.coinSilver,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
        },
        "-=0.75"
    );

    tl.to(
        els.coinGold,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 1.0,
        },
        "-=0.85"
    );

    tl.to(
        [els.coinGold, els.coinSilver],
        {
            duration: 0.35,
            ease: "power2.out",
            y: (i) => (i === 0 ? -2 : -1),
            yoyo: true,
            repeat: 1,
        },
        "-=0.25"
    );

    window.addEventListener(
        "load",
        () => {
            tl.play(0);
        },
        { once: true }
    );
}
