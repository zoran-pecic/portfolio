<template>
    <section id="tech-stack" class="section">
        <div class="container">
            <h2 class="section-title animate-on-scroll">Tech stack</h2>

            <ul class="tech-grid" aria-label="Technologies">
                <li
                    v-for="(tech, index) in techItems"
                    :key="tech.name"
                    class="tech-item animate-on-scroll"
                    :style="{ '--i': index % 5 }"
                >
                    <img class="tech-image" :src="tech.source" :alt="`${tech.name} logo`" width="48" height="48" loading="lazy">
                    <span class="meta tech-name">{{ tech.name }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const techItems = [
    { source: '/images/tech/python.svg', name: 'Python' },
    { source: '/images/tech/django.svg', name: 'Django' },
    { source: '/images/tech/fastapi.svg', name: 'FastAPI' },
    { source: '/images/tech/javascript.svg', name: 'JavaScript' },
    { source: '/images/tech/typescript.svg', name: 'TypeScript' },
    { source: '/images/tech/vuejs.svg', name: 'Vue.js' },
    { source: '/images/tech/nuxtjs.svg', name: 'Nuxt.js' },
    { source: '/images/tech/angular.svg', name: 'Angular' },
    { source: '/images/tech/postgresql.svg', name: 'PostgreSQL' },
    { source: '/images/tech/redis.svg', name: 'Redis' },
    { source: '/images/tech/docker.svg', name: 'Docker' },
    { source: '/images/tech/celery.png', name: 'Celery' },
    { source: '/images/tech/aws-lambda.svg', name: 'Lambda' },
    { source: '/images/tech/dynamodb.svg', name: 'DynamoDB' },
    { source: '/images/tech/opensearch.png', name: 'OpenSearch' },
]
</script>

<style scoped>
.tech-grid {
    list-style: none;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 24px 16px;
}

.tech-item {
    display: grid;
    justify-items: center;
    gap: 10px;
    padding: 18px 8px;
    border-radius: 10px;
    transition: background-color var(--animation-duration-fast) ease;
}

.tech-item:hover {
    background-color: var(--paper);
}

.tech-image {
    width: 48px;
    height: 48px;
    object-fit: contain;
    filter: grayscale(1);
    transition: filter 0.3s ease;
}

.tech-item:hover .tech-image {
    filter: grayscale(0);
}

.tech-name {
    color: var(--description-dark-title);
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .tech-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>
