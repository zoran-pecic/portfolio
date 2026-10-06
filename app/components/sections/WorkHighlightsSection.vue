<template>
    <section id="work" class="section section-muted">
        <div class="container">
            <h2 class="section-title animate-on-scroll">Work highlights</h2>
            <p class="section-intro animate-on-scroll">
                Proprietary platforms I have built and led. Closed source, so no links.
            </p>

            <ul class="work-list">
                <li
                    v-for="(project, index) in projects"
                    :key="project.title"
                    class="work-item animate-on-scroll"
                    :style="{ '--i': index % 2 }"
                >
                    <p class="meta">{{ project.company }}</p>
                    <h3 class="work-title">{{ project.title }}</h3>
                    <p class="work-description">{{ project.description }}</p>
                    <p class="meta work-tags">{{ project.tags.join(', ') }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        title: 'EnergySage',
        company: 'EnergySage / Schneider Electric',
        description: 'Marketplace for solar panels, inverters, batteries and EV chargers. Decoupling the monolith into services: equipment, quoting, messaging, campaigns, onboarding.',
        tags: ['Django', 'FastAPI', 'Vue', 'Nuxt', 'AWS'],
    },
    {
        title: 'Starzone',
        company: 'Mindnow / Holycode',
        description: 'Event ticketing platform built for the biggest Swiss mobile provider.',
        tags: ['Django', 'E-commerce', 'GCP'],
    },
    {
        title: 'Ash',
        company: 'Mindnow / Holycode',
        description: 'E-commerce platform for meat products in Germany, with complex data integrations.',
        tags: ['Django', 'Celery', 'Integrations'],
    },
    {
        title: 'Clanq',
        company: 'Mindnow / Holycode',
        description: 'Coupon and cashback platform with a mobile app. Cashback from partner stores goes into savings funds for the users\' kids.',
        tags: ['FastAPI', 'Cloud Functions', 'Mobile'],
    },
    {
        title: 'Thömus, Bikes of Switzerland',
        company: 'Mindnow / Holycode',
        description: 'Online bike configurator for the Swiss manufacturer, with Mollie and PayPal payment integrations.',
        tags: ['Django', 'Payments', 'Configurator'],
    },
    {
        title: 'Auction Platform',
        company: 'Mindnow / Holycode',
        description: 'Real-estate auction platform for apartments in Italy.',
        tags: ['Django', 'Docker', 'CI/CD'],
    },
    {
        title: 'Gernix',
        company: 'Mapp / Miticon',
        description: 'Marketing platform for triggering campaigns across mobile and other devices.',
        tags: ['Angular', 'AWS', 'Dashboards'],
    },
];
</script>

<style scoped>
.section-intro {
    max-width: 52ch;
    color: var(--description-light-gray-color);
    line-height: 1.6;
}

.work-list {
    list-style: none;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px clamp(32px, 5vw, 72px);
}

.work-item {
    border-top: 1px solid var(--rule-light);
    padding-top: 18px;
}

.work-title {
    margin-top: 6px;
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 1.15rem;
    color: var(--description-dark-title);
}

.work-description {
    margin-top: 8px;
    max-width: 50ch;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--description-light-gray-color);
}

.work-tags {
    margin-top: 12px;
}

@media only screen and (max-width: 640px) {
    .work-list {
        grid-template-columns: 1fr;
        gap: 28px;
    }
}
</style>
