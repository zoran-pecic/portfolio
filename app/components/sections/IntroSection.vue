<template>
    <section id="home" class="intro-section generic-section">
        <img class="hero-image animate-hero-1"
         src="/images/kujzo.webp"
         alt="Zoran Pecic photo">

         <p class="subtitle animate-hero-2">{{ typedSubtitle }}<span class="typing-caret" aria-hidden="true"></span></p>

         <h1 class="title unica-one-regular animate-hero-3">Zoran Pecic</h1>
        <p class="description animate-hero-4">
            Building scalable platforms, leading high-performing teams,
            and turning complex problems into elegant solutions.
            {{ yearsOfExperience }}+ years crafting software from backend systems to polished user interfaces.
        </p>

        <a href="#about" class="scroll-hint animate-hero-4" aria-label="Scroll to About section">
            <span class="scroll-hint-chevron" aria-hidden="true"></span>
            <span class="scroll-hint-chevron" aria-hidden="true"></span>
        </a>

        <div class="hero-waves" aria-hidden="true">
            <svg class="wave wave-back" viewBox="0 0 2880 100" preserveAspectRatio="none">
                <path d="M0,55 c240,-35 480,35 720,0 c240,-35 480,35 720,0 c240,-35 480,35 720,0 c240,-35 480,35 720,0 L2880,100 L0,100 Z"/>
            </svg>
            <svg class="wave wave-front" viewBox="0 0 2880 100" preserveAspectRatio="none">
                <path d="M0,60 c240,-40 480,40 720,0 c240,-40 480,40 720,0 c240,-40 480,40 720,0 c240,-40 480,40 720,0 L2880,100 L0,100 Z"/>
            </svg>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const yearsOfExperience = useYearsOfExperience();

// Typewriter effect: SSR renders the full text (SEO / no-JS), typing starts on mount
const fullSubtitle = 'Team Lead & Full-Stack Engineer';
const typedSubtitle = ref(fullSubtitle);
let typingTimer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    typedSubtitle.value = '';
    let i = 0;
    typingTimer = setInterval(() => {
        typedSubtitle.value = fullSubtitle.slice(0, ++i);
        if (i >= fullSubtitle.length && typingTimer) clearInterval(typingTimer);
    }, 55);
});

onUnmounted(() => {
    if (typingTimer) clearInterval(typingTimer);
});
</script>

<style scoped>

* {
    color: #FFFFFF;
}

.intro-section {
    background-color: var(--primary-dark-gray);
    position: relative;
    overflow: hidden;
    padding-top: 110px; /* clears the transparent header overlaying this section */
    padding-bottom: 70px; /* room for the wave divider */
}

/* Content sits above the mesh layers */
.intro-section > * {
    position: relative;
    z-index: 1;
}

/* Animated mesh: two layers of monochrome bubbles floating on independent paths.
   Radial falloff to transparent is soft enough — no filter:blur (expensive on mobile). */
.intro-section::before,
.intro-section::after {
    content: '';
    position: absolute;
    inset: -20%;
    z-index: 0;
    pointer-events: none;
}

.intro-section::before {
    background:
        radial-gradient(38% 32% at 22% 28%, rgba(254, 254, 254, 0.13), transparent 70%),
        radial-gradient(30% 28% at 78% 18%, rgba(173, 173, 173, 0.17), transparent 70%),
        radial-gradient(42% 38% at 68% 78%, rgba(254, 254, 254, 0.10), transparent 70%);
    animation: bubbleFloatA 14s ease-in-out infinite alternate;
}

.intro-section::after {
    background:
        radial-gradient(45% 40% at 28% 78%, rgba(173, 173, 173, 0.15), transparent 70%),
        radial-gradient(26% 22% at 55% 45%, rgba(0, 0, 0, 0.35), transparent 70%);
    animation: bubbleFloatB 18s ease-in-out infinite alternate;
}

@keyframes bubbleFloatA {
    0%   { transform: translate3d(-7%, -5%, 0) rotate(0deg) scale(1); }
    50%  { transform: translate3d(6%, 4%, 0) rotate(10deg) scale(1.15); }
    100% { transform: translate3d(-3%, 6%, 0) rotate(-8deg) scale(1.05); }
}

@keyframes bubbleFloatB {
    0%   { transform: translate3d(6%, 4%, 0) rotate(0deg) scale(1.1); }
    50%  { transform: translate3d(-6%, -6%, 0) rotate(-9deg) scale(1); }
    100% { transform: translate3d(4%, -3%, 0) rotate(7deg) scale(1.18); }
}

/* Scroll indicator: two chevrons cascading downward */
.scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px;
    margin-bottom: 30px;
}

.scroll-hint-chevron {
    width: 12px;
    height: 12px;
    border-right: 2px solid var(--darker-light-gray);
    border-bottom: 2px solid var(--darker-light-gray);
    transform: rotate(45deg);
    animation: chevronCascade 1.8s ease-in-out infinite;
}

.scroll-hint-chevron:nth-child(2) {
    animation-delay: 0.15s;
}

@keyframes chevronCascade {
    0%, 100% { opacity: 0.3; transform: rotate(45deg) translate(0, 0); }
    50%      { opacity: 1; transform: rotate(45deg) translate(3px, 3px); }
}

/* Wave divider: front wave matches the next section's background, back wave is a
   translucent silver swell. Each SVG is 200% wide with a path periodic over
   half its width, so translateX(-50%) loops seamlessly. */
.hero-waves {
    position: absolute;
    bottom: -1px; /* avoid subpixel gap against the next section */
    left: 0;
    width: 100%;
    height: 70px;
    overflow: hidden;
    pointer-events: none;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
}

.wave-back path { fill: rgba(254, 254, 254, 0.12); }
.wave-front path { fill: var(--light-gray-border); }

.wave-back { animation: waveDrift 26s linear infinite; }
.wave-front { animation: waveDrift 16s linear infinite reverse; }

@keyframes waveDrift {
    to { transform: translateX(-50%); }
}

.hero-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--light-gray-border);
}

.subtitle {
    padding: 20px 0;
    font-size: 0.8rem;
    color: var(--darker-light-gray);
    letter-spacing: 1px;
    min-height: calc(1em + 40px); /* no layout shift while typing */
}

.typing-caret::after {
    content: '_';
    color: var(--accent);
    animation: caretBlink 1s steps(1) infinite;
}

.title {
    font-size: 2.5rem;
    padding-bottom: 20px;
}

.description {
    max-width: 670px;
    text-align: center;
    color: var(--light-gray);
    padding-bottom: 24px;
    line-height: 1.6;
}

/* Hero load animations */
.animate-hero-1 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.1s forwards; }
.animate-hero-2 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.3s forwards; }
.animate-hero-3 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.5s forwards; }
.animate-hero-4 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.7s forwards; }

</style>
