<template>
    <section id="work" class="work-section">
        <h2 class="section-title unica-one-regular animate-on-scroll">Work Highlights</h2>
        <div class="divider animate-on-scroll"></div>
        <p class="section-subtitle animate-on-scroll">
            Proprietary platforms I've built and led over the years.
        </p>

        <div class="work-grid stagger-fade" role="list" aria-label="Professional work highlights">
            <article v-for="project in projects" :key="project.title" class="work-card" role="listitem">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-company">{{ project.company }}</p>
                <p class="card-description">{{ project.description }}</p>
                <div class="card-tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
            </article>
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
        description: 'Coupon and cashback platform with a mobile app — paybacks from purchases at partner stores go into savings funds for the users\' kids.',
        tags: ['FastAPI', 'Cloud Functions', 'Mobile'],
    },
    {
        title: 'Thömus — Bikes of Switzerland',
        company: 'Mindnow / Holycode',
        description: 'Online bike configurator for the Swiss manufacturer, with payment integrations including Mollie and PayPal.',
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
.work-section {
    padding: 20px 10% 80px 10%;
    display: grid;
    grid-template-columns: 100%; /* pin the track so the auto-fit grid can't overflow */
    place-items: center;
}

.section-title {
    font-size: 1.5rem;
    color: var(--description-dark-title);
    margin-bottom: 20px;
}

.divider {
    width: 60px;
    height: 1px;
    background-color: var(--light-gray-border);
    margin-bottom: 16px;
}

.section-subtitle {
    color: var(--description-light-gray-color);
    font-size: 0.85rem;
    margin-bottom: 40px;
    text-align: center;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1000px;
}

.work-card {
    border: 1px solid var(--light-gray-text-color);
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    transition: transform var(--animation-duration-fast) var(--animation-easing),
                box-shadow var(--animation-duration-fast) var(--animation-easing),
                border-color var(--animation-duration-fast) var(--animation-easing);
}

.work-card:hover {
    transform: translateY(-4px);
    border-color: var(--darker-light-gray);
    box-shadow: 0 12px 24px rgba(34, 34, 34, 0.12);
}

.card-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--description-dark-title);
    margin-bottom: 4px;
}

.card-company {
    font-size: 0.75rem;
    color: var(--darker-light-gray);
    margin-bottom: 12px;
}

.card-description {
    font-size: 0.8rem;
    line-height: 1.7;
    color: var(--description-light-gray-color);
    margin-bottom: 16px;
    flex-grow: 1;
}

.card-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag {
    font-size: 0.7rem;
    padding: 4px 12px;
    border: 1px solid var(--light-gray-border);
    border-radius: 20px;
    color: var(--darker-light-gray);
}

@media only screen and (max-width: 768px) {
    .work-section {
        padding: 20px 5% 60px 5%;
    }
}
</style>
