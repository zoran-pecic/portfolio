<template>
    <Header/>
    <main>
        <IntroSection/>
        <AboutSection/>
        <ExperienceSection/>
        <FeaturedProjectsSection/>
        <TechStack/>
    </main>
    <Footer/>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation';

useScrollAnimation();
</script>

<style scoped>

</style>
