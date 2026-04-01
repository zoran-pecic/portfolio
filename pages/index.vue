<template>
    <a href="#main-content" class="skip-to-content">Skip to main content</a>
    <Header/>
    <main id="main-content">
        <IntroSection/>
        <AboutSection/>
        <ExperienceSection/>
        <FeaturedProjectsSection/>
        <TechStack/>
    </main>
    <Footer/>
    <ScrollToTop/>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation';

useScrollAnimation();
</script>

<style scoped>
.skip-to-content {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 9999;
    padding: 8px 16px;
    background-color: var(--white-gray);
    color: var(--primary-dark-gray);
    font-size: 0.85rem;
    text-decoration: none;
    border-radius: 0 0 4px 0;
}

.skip-to-content:focus {
    left: 0;
}
</style>
