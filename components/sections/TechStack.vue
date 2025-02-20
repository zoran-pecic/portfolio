
<template>
    <section>
        <TechStackItem
            :tech-name="techItem.text"
            :image-source="techItem.source"
            :image-alt="techItem.alt"
            v-for="techItem in techItems"
        />
    </section>
</template>

<script setup lang="ts">

const techItems = [
    { source: "/images/tech/python.png", alt: "python-photo", text: "Python" },
    { source: "/images/tech/fastapi.png", alt: "fast-api-photo", text: "FastAPI" },
    { source: "/images/tech/dj.png", alt: "dj-photo", text: "Django" },
    { source: "/images/tech/js.png", alt: "js-photo", text: "JavaScript" },
    { source: "/images/tech/ts.png", alt: "ts-photo", text: "TypeScript" },
    { source: "/images/tech/vue.png", alt: "vue-photo", text: "VueJs" },
    { source: "/images/tech/nuxt.png", alt: "nuxt-photo", text: "NuxtJs" },
    { source: "/images/tech/angular.png", alt: "angular-photo", text: "Angular 2+" },
]

</script>

<style scoped>


section {
    min-height: 200px;
    background-color: var(--darker-light-gray);
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(8, 80px);
    grid-gap: 50px;
    place-items: center;
    padding: 0px 10% 0px 10%;
    justify-content: center;
}

@media only screen and (max-width: 1070px){
    section {
        padding: 30px 0 30px 0;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 80px);
    }
}

</style>
