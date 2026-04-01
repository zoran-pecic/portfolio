<template>
    <section id="home" class="intro-section generic-section">
        <img class="hero-image animate-hero-1"
         src="/images/kujzo.webp"
         alt="Zoran Pecic photo">

         <p class="subtitle animate-hero-2">Team Lead & Full-Stack Engineer</p>

         <h1 class="title unica-one-regular animate-hero-3">Zoran Pecic</h1>
        <p class="description animate-hero-4">
            Building scalable platforms, leading high-performing teams,
            and turning complex problems into elegant solutions.
            {{ yearsOfExperience }}+ years crafting software from backend systems to polished user interfaces.
        </p>
    </section>
</template>

<script setup lang="ts">
const yearsOfExperience = useYearsOfExperience();
</script>

<style scoped>

* {
    color: #FFFFFF;
}

.intro-section {
    background-color: var(--primary-dark-gray);
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
}

.title {
    font-size: 2.5rem;
    padding-bottom: 20px;
}

.description {
    max-width: 670px;
    text-align: center;
    color: var(--light-gray);
    padding-bottom: 50px;
    line-height: 1.6;
}

/* Hero load animations */
.animate-hero-1 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.1s forwards; }
.animate-hero-2 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.3s forwards; }
.animate-hero-3 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.5s forwards; }
.animate-hero-4 { opacity: 0; animation: fadeInUp 0.6s var(--animation-easing) 0.7s forwards; }

</style>
