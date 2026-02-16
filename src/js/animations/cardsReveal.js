export function initCardsReveal({
                                    selector = ".card",
                                    threshold = 0.15,
                                    rootMargin = "0px 0px -15% 0px",
                                    stagger = 200, // ms
                                    once = true,
                                } = {}) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll(selector));

    if (!items.length) return;

    if (reduceMotion) {
        items.forEach((el) => el.classList.add("is-inview"));
        return;
    }

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const el = entry.target;
                const idx = items.indexOf(el);
                const delay = Math.max(0, idx) * Math.max(0, stagger);

                window.setTimeout(() => el.classList.add("is-inview"), delay);

                if (once) io.unobserve(el);
            });
        },
        { root: null, threshold, rootMargin }
    );

    items.forEach((el) => io.observe(el));
}
