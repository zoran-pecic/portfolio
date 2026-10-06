<template>
    <section id="about" class="section">
        <div class="container about-grid">
            <h2 class="section-title animate-on-scroll">About</h2>
            <div class="about-body animate-on-scroll" style="--i: 1">
                <p>
                    I'm a backend-focused full-stack developer and team lead based in Belgrade, Serbia.
                    Over the past {{ yearsOfExperience }}+ years I've built e-commerce platforms,
                    marketing automation tools and data-heavy backend systems with Python, Django and FastAPI.
                </p>
                <p>
                    Today I lead a team at EnergySage, a Schneider Electric hub, working on the
                    platform that connects consumers with clean energy. I care about clean architecture,
                    systems that scale, and helping engineers grow.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const yearsOfExperience = useYearsOfExperience();
</script>

<style scoped>
.about-grid {
    display: grid;
    grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
    gap: 32px clamp(32px, 6vw, 96px);
    align-items: start;
}

.about-grid .section-title {
    margin-bottom: 0;
}

.about-body {
    max-width: 62ch;
    display: grid;
    gap: 1.1rem;
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--description-light-gray-color);
}

@media only screen and (max-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr;
    }

    .about-body {
        font-size: 1rem;
    }
}
</style>
