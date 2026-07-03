<template>
    <section id="what-i-do" class="generic-section what-i-do-section">
        <h2 class="section-title unica-one-regular animate-on-scroll">What I Do</h2>
        <div class="divider animate-on-scroll"></div>

        <div class="terminal animate-on-scroll" role="img" aria-label="Terminal window describing skills">
            <div class="terminal-bar" aria-hidden="true">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
                <span class="terminal-title">zoran@dev: ~</span>
            </div>

            <div class="terminal-body">
                <template v-for="skill in skills" :key="skill.command">
                    <p class="terminal-line">
                        <span class="prompt">$</span> cat skills/{{ skill.command }}
                    </p>
                    <p class="terminal-output">{{ skill.output }}</p>
                </template>
                <p class="terminal-line">
                    <span class="prompt">$</span><span class="terminal-caret"></span>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const skills = [
    {
        command: 'leadership',
        output: 'Leading engineering teams — mentoring, planning, code reviews, and helping teams across companies collaborate and deliver together.',
    },
    {
        command: 'backend',
        output: 'Python, Django & FastAPI. Designing APIs, decoupling monoliths into services, and building async pipelines with Celery.',
    },
    {
        command: 'frontend',
        output: 'Vue, Nuxt, Angular & TypeScript. Building SPA, SSG and SSR apps — marketplaces, dashboards, and polished user interfaces.',
    },
    {
        command: 'cloud',
        output: 'AWS (Lambda, DynamoDB, OpenSearch) and GCP. Docker, CI/CD pipelines, and observability & alerting with Sentry and Datadog.',
    },
];
</script>

<style scoped>
.what-i-do-section {
    padding-bottom: 80px;
}

.section-title {
    font-size: 1.5rem;
    color: var(--description-dark-title);
    padding-bottom: 20px;
}

.divider {
    width: 60px;
    height: 1px;
    background-color: var(--light-gray-border);
    margin-bottom: 32px;
}

.terminal {
    width: 100%;
    max-width: 720px;
    margin: 0 5%;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--primary-dark-gray);
    box-shadow: 0 12px 32px rgba(34, 34, 34, 0.25);
}

.terminal-bar {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 14px;
    background-color: var(--footer-background-color);
    border-bottom: 1px solid var(--light-gray-border);
}

.dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--light-gray-border);
}

.terminal:hover .dot-red { background-color: #E0655B; }
.terminal:hover .dot-yellow { background-color: #E0C05B; }
.terminal:hover .dot-green { background-color: #6BC46D; }

.terminal-title {
    margin-left: 8px;
    font-size: 0.7rem;
    color: var(--darker-light-gray);
}

.terminal-body {
    padding: 20px 24px 24px 24px;
}

.terminal-line {
    color: var(--white-gray);
    font-size: 0.85rem;
    margin-top: 18px;
}

.terminal-line:first-child {
    margin-top: 0;
}

.prompt {
    color: var(--accent);
    margin-right: 8px;
    font-weight: 700;
}

.terminal-output {
    color: var(--light-gray-text-color);
    font-size: 0.85rem;
    line-height: 1.7;
    margin-top: 6px;
    padding-left: 16px;
}

.terminal-caret::after {
    content: '_';
    color: var(--accent);
    animation: caretBlink 1s steps(1) infinite;
}

@media only screen and (max-width: 768px) {
    .terminal {
        max-width: 90%;
    }

    .terminal-body {
        padding: 16px;
    }
}
</style>
