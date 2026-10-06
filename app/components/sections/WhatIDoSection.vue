<template>
    <section id="what-i-do" class="section section-muted">
        <div class="container">
            <h2 class="section-title animate-on-scroll">What I do</h2>

            <dl class="skills-grid">
                <div
                    v-for="(skill, index) in skills"
                    :key="skill.name"
                    class="skill animate-on-scroll"
                    :style="{ '--i': index }"
                >
                    <dt class="skill-name">{{ skill.name }}</dt>
                    <dd class="skill-text">{{ skill.text }}</dd>
                </div>
            </dl>
        </div>
    </section>
</template>

<script setup lang="ts">
const skills = [
    {
        name: 'Leadership',
        text: 'Running an engineering team: planning, mentoring, code review, and keeping delivery predictable across teams and companies.',
    },
    {
        name: 'Backend',
        text: 'Python, Django and FastAPI. API design, splitting monoliths into services, and async pipelines with Celery.',
    },
    {
        name: 'Frontend',
        text: 'Vue, Nuxt, Angular and TypeScript. SPA, SSG and SSR apps: marketplaces, dashboards and customer-facing UI.',
    },
    {
        name: 'Cloud and delivery',
        text: 'AWS (Lambda, DynamoDB, OpenSearch) and GCP. Docker, CI/CD pipelines, and observability with Sentry and Datadog.',
    },
];
</script>

<style scoped>
.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px clamp(32px, 5vw, 72px);
    margin-top: 16px;
}

.skill {
    border-top: 1px solid var(--rule-light);
    padding-top: 20px;
}

.skill-name {
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--description-dark-title);
}

.skill-text {
    margin-top: 10px;
    max-width: 48ch;
    line-height: 1.7;
    color: var(--description-light-gray-color);
}

@media only screen and (max-width: 640px) {
    .skills-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }
}
</style>
