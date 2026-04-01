<template>
    <section id="experience" class="experience-section">
        <h2 class="section-title unica-one-regular">Experience</h2>
        <div class="divider"></div>

        <div class="timeline stagger-fade" aria-label="Career timeline" role="list">
            <div
                v-for="(item, index) in timeline"
                :key="index"
                class="timeline-entry"
                role="listitem"
                :class="{ 'is-highlight': item.highlight, 'is-education': item.isEducation }"
            >
                <div class="timeline-dot" :class="{ 'dot-active': item.highlight }"></div>
                <div class="timeline-card">
                    <p class="entry-role">{{ item.role }}</p>
                    <p class="entry-company">{{ item.company }}</p>
                    <p class="entry-period">{{ item.period }}</p>
                    <p class="entry-description">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Experience } from '@/types/Experience';

const timeline: Experience[] = [
    {
        company: 'EnergySage / Schneider Electric Hub',
        role: 'Team Lead',
        period: '2023 - Present',
        description: 'Leading engineers building the platform connecting consumers with clean energy solutions. Progressed from Software Engineer to Senior to Team Lead. Python, Django, Vue, PostgreSQL, Celery, GCP.',
        highlight: true,
    },
    {
        company: 'mindnow AG / Holycode',
        role: 'Backend Developer',
        period: '2021 - 2023',
        description: 'Built backend services for specialized e-commerce platforms. Complex data integrations, Celery task queues, Docker deployments, and CI/CD pipelines.',
    },
    {
        company: 'Mapp Digital / Miticon',
        role: 'Software Engineer',
        period: '2019 - 2021',
        description: 'Developed marketing platform interfaces with Angular. Dynamic dashboards, data visualizations, and enterprise client solutions.',
    },
    {
        company: 'University of Nis',
        role: 'BE Computer Science',
        period: '2014 - 2018',
        description: 'Bachelor of Engineering in Computer Science. Exchange semester at Malardalen University, Vasteras, Sweden.',
        isEducation: true,
    },
]
</script>

<style scoped>

.experience-section {
    background-color: var(--primary-dark-gray);
    padding: 60px 10%;
    display: grid;
    place-items: center;
}

.section-title {
    font-size: 1.5rem;
    color: var(--white-gray);
    margin-bottom: 20px;
}

.divider {
    width: 60px;
    height: 2px;
    background-color: var(--light-gray-border);
    margin-bottom: 40px;
}

.timeline {
    position: relative;
    max-width: 600px;
    width: 100%;
    margin-left: 20px;
}

.timeline-entry {
    position: relative;
    padding-left: 32px;
    padding-bottom: 36px;
    border-left: 1px solid var(--light-gray-border);
}

.timeline-entry:last-child {
    padding-bottom: 0;
    border-left-color: transparent;
}

.timeline-dot {
    position: absolute;
    left: -5px;
    top: 2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--darker-light-gray);
}

.dot-active {
    background-color: var(--white-gray);
    animation: pulse 2s infinite;
}

.timeline-card {
    padding: 0;
}

.entry-role {
    font-weight: 700;
    color: var(--white-gray);
    font-size: 1rem;
    margin-bottom: 4px;
}

.entry-company {
    color: var(--darker-light-gray);
    font-size: 0.85rem;
    margin-bottom: 4px;
}

.entry-period {
    color: var(--light-gray-border);
    font-size: 0.75rem;
    margin-bottom: 10px;
}

.entry-description {
    color: var(--light-gray-text-color);
    font-size: 0.85rem;
    line-height: 1.6;
}

.is-education .entry-role {
    color: var(--light-gray);
}

@media only screen and (max-width: 768px) {
    .experience-section {
        padding: 40px 5%;
    }
}

</style>
