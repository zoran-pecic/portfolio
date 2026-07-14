<template>
    <section id="about" class="generic-section animate-on-scroll">
        <h2 class="about-title unica-one-regular">
            About Me
        </h2>
        <div class="divider"></div>
        <p class="about-description">
            I'm a backend-focused full-stack developer and team lead based in Belgrade, Serbia.
            Over the past {{ yearsOfExperience }}+ years, I've built everything from complex e-commerce platforms
            and marketing automation tools to data-intensive backend systems with Python, Django,
            and FastAPI. I lead a team at EnergySage, a Schneider Electric Hub, where we are
            shaping the future of clean energy technology. I'm passionate about clean architecture,
            scalable systems, and mentoring engineers to grow.
        </p>
    </section>
</template>

<script setup lang="ts">
const yearsOfExperience = useYearsOfExperience();
</script>

<style scoped>

.generic-section > * {
    padding-bottom: 20px;
}

.about-title {
    font-size: 1.5rem;
}

.divider {
    width: 60px;
    height: 1px;
    background-color: var(--light-gray-border);
    padding-bottom: 0 !important;
    margin-bottom: 12px;
}

.about-description {
    max-width: 760px;
    text-align: center;
    color: var(--description-light-gray-color);
    padding-bottom: 80px;
    line-height: 1.7;
}


</style>
