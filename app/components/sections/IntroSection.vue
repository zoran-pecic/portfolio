<template>
    <section id="home" class="hero">
        <div class="container hero-inner">
            <div class="hero-copy">
                <p class="meta hero-role hero-enter">Team Lead and Full-Stack Engineer</p>
                <h1 class="hero-title hero-enter" style="--i: 1">Zoran Pecic</h1>
                <p class="hero-text hero-enter" style="--i: 2">
                    I lead a product engineering team at EnergySage and build
                    backend-heavy platforms with Python, Django, FastAPI and Vue.
                </p>
                <div class="hero-actions hero-enter" style="--i: 3">
                    <a href="#work" class="btn btn-solid">See my work</a>
                    <a href="#contact" class="btn btn-outline">Get in touch</a>
                </div>
            </div>

            <img
                class="hero-photo hero-enter"
                style="--i: 2"
                src="/images/kujzo.webp"
                alt="Portrait of Zoran Pecic"
                width="640"
                height="640"
                fetchpriority="high"
            >
        </div>
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    min-height: 100dvh;
    display: grid;
    align-items: center;
    padding-top: 96px;
    padding-bottom: 64px;
    background-color: var(--primary-dark-gray);
    background-image: radial-gradient(60% 50% at 85% 20%, rgba(254, 254, 254, 0.07), transparent 70%);
    color: var(--white-gray);
}

.hero-inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: clamp(32px, 6vw, 96px);
}

.hero-role {
    color: var(--light-gray);
}

.hero-title {
    margin-top: 14px;
    font-size: clamp(3rem, 2rem + 5vw, 6rem);
    line-height: 0.95;
    letter-spacing: 0.02em;
}

.hero-text {
    margin-top: 24px;
    max-width: 46ch;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--light-gray-text-color);
}

.hero-actions {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.hero-photo {
    width: clamp(220px, 24vw, 340px);
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 16px;
    filter: grayscale(1);
}

@media only screen and (max-width: 768px) {
    .hero {
        padding-top: 88px;
    }

    .hero-inner {
        grid-template-columns: 1fr;
    }

    .hero-photo {
        order: -1;
        width: 120px;
        border-radius: 12px;
    }

    .hero-text {
        font-size: 1rem;
    }

    .hero-actions .btn {
        flex: 1 1 auto;
    }
}
</style>
