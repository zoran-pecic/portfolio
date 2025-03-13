<template>
    <section class="intro-section generic-section">
        <img class="hero-image"
         src="/images/kujzo.webp" 
         alt="kujzo-programmer-photo">

         <p class="description">Programmer Portfolio</p>

         <h1 class="title unica-one-regular">My Programmer Diary</h1>
        <p class="sub-title-description">
            Welcome to my programmer portfolio! 
            This is where I document my coding journey, share my projects
        </p>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

* {
    color: #FFFFFF;
}

.intro-section {
    background-color: var(--primery-dark-gray);
}

.hero-image {
    width: 299px;
    height: 303px;
}

.description {
    padding: 20px 0;
    font-size: 0.8rem;
    color: var(--darker-light-gray);
}

.title {
    font-size: 2rem;
    padding-bottom: 20px;
}

.sub-title-description {
    max-width: 670px;
    text-align: center;
    color: var(--light-gray);
    padding-bottom: 50px;
}

</style>