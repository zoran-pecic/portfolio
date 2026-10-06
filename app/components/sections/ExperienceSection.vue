<template>
    <section id="experience" class="section experience-section">
        <div class="container">
            <h2 class="section-title animate-on-scroll">Experience</h2>

            <ol class="timeline" aria-label="Career timeline">
                <li
                    v-for="(item, index) in timeline"
                    :key="item.company"
                    class="timeline-entry animate-on-scroll"
                    :class="{ 'is-education': item.isEducation }"
                    :style="{ '--i': index }"
                >
                    <span class="timeline-dot" :class="{ 'dot-active': item.highlight }" aria-hidden="true"></span>
                    <p class="meta entry-period">{{ item.period }}</p>
                    <h3 class="entry-role">{{ item.role }}</h3>
                    <p class="entry-company">{{ item.company }}</p>
                    <p class="entry-description">{{ item.description }}</p>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Experience } from '@/types/Experience';

const timeline: Experience[] = [
    {
        company: 'EnergySage / Schneider Electric hub',
        role: 'Team Lead',
        period: '2023 to present',
        description: 'Leading engineers building the platform that connects consumers with clean energy. Progressed from Software Engineer to Senior to Team Lead. Python, Django, Vue, PostgreSQL, Celery, GCP.',
        highlight: true,
    },
    {
        company: 'mindnow AG / Holycode',
        role: 'Backend Developer',
        period: '2021 to 2023',
        description: 'Built backend services for specialised e-commerce platforms. Complex data integrations, Celery task queues, Docker deployments and CI/CD pipelines.',
    },
    {
        company: 'Mapp Digital / Miticon',
        role: 'Software Engineer',
        period: '2019 to 2021',
        description: 'Developed marketing platform interfaces with Angular. Dynamic dashboards, data visualisations and enterprise client solutions.',
    },
    {
        company: 'University of Nis',
        role: 'BE Computer Science',
        period: '2014 to 2018',
        description: 'Bachelor of Engineering in Computer Science. Exchange semester at Malardalen University, Vasteras, Sweden.',
        isEducation: true,
    },
]
</script>

<style scoped>
.experience-section {
    background-color: var(--primary-dark-gray);
    color: var(--white-gray);
}

.timeline {
    list-style: none;
    max-width: 640px;
    margin-top: 16px;
}

.timeline-entry {
    position: relative;
    padding-left: 32px;
    padding-bottom: 40px;
    border-left: 1px solid var(--light-gray-border);
}

.timeline-entry:last-child {
    padding-bottom: 0;
    border-left-color: transparent;
}

.timeline-dot {
    position: absolute;
    left: -5px;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--darker-light-gray);
}

.dot-active {
    background-color: var(--white-gray);
}

.entry-period {
    color: var(--light-gray);
}

.entry-role {
    margin-top: 6px;
    font-size: 1.4rem;
    color: var(--white-gray);
}

.entry-company {
    margin-top: 2px;
    font-size: 0.95rem;
    color: var(--light-gray);
}

.entry-description {
    margin-top: 12px;
    max-width: 56ch;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--light-gray-text-color);
}

.is-education .entry-role {
    color: var(--light-gray-text-color);
}
</style>
