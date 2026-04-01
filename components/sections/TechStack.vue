
<template>
    <section id="tech-stack" class="tech-section">
        <h2 class="section-title unica-one-regular animate-on-scroll">Tech Stack</h2>

        <div class="tech-grid stagger-children" role="list" aria-label="Technologies">
            <TechStackItem
                :tech-name="techItem.text"
                :image-source="techItem.source"
                :image-alt="techItem.alt"
                v-for="techItem in techItems"
                :key="techItem.text"
            />
        </div>
    </section>
</template>

<script setup lang="ts">

const techItems = [
    { source: "/images/tech/python.svg", alt: "python-logo", text: "Python" },
    { source: "/images/tech/django.svg", alt: "django-logo", text: "Django" },
    { source: "/images/tech/fastapi.svg", alt: "fastapi-logo", text: "FastAPI" },
    { source: "/images/tech/javascript.svg", alt: "javascript-logo", text: "JavaScript" },
    { source: "/images/tech/typescript.svg", alt: "typescript-logo", text: "TypeScript" },
    { source: "/images/tech/vuejs.svg", alt: "vue-logo", text: "Vue.js" },
    { source: "/images/tech/nuxtjs.svg", alt: "nuxt-logo", text: "Nuxt.js" },
    { source: "/images/tech/angular.svg", alt: "angular-logo", text: "Angular" },
    { source: "/images/tech/postgresql.svg", alt: "postgresql-logo", text: "PostgreSQL" },
    { source: "/images/tech/redis.svg", alt: "redis-logo", text: "Redis" },
    { source: "/images/tech/docker.svg", alt: "docker-logo", text: "Docker" },
    { source: "/images/tech/celery.png", alt: "celery-logo", text: "Celery" },
    { source: "/images/tech/aws-lambda.svg", alt: "lambda-logo", text: "Lambda" },
    { source: "/images/tech/dynamodb.svg", alt: "dynamodb-logo", text: "DynamoDB" },
    { source: "/images/tech/opensearch.png", alt: "opensearch-logo", text: "OpenSearch" },
]

</script>

<style scoped>

.tech-section {
    min-height: 200px;
    background-color: var(--darker-light-gray);
    display: grid;
    place-items: center;
    padding: 40px 10%;
}

.section-title {
    font-size: 1.3rem;
    color: var(--primary-dark-gray);
    margin-bottom: 30px;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 30px;
    max-width: 900px;
    width: 100%;
    place-items: center;
}

@media only screen and (max-width: 600px){
    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

</style>
