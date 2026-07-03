<template>
    <HalfContent id="projects" class="wrapper-space">
        <template v-slot:half1>
            <div class="slide-from-left">
                <img class="custom-image"
                    src="/images/custom-images/img1.webp"
                    alt="QR Code Generator screenshot" />
            </div>
        </template>

        <template v-slot:half2>
            <div class="content slide-from-right">

                <h2 class="unica-one-regular title">
                    Featured Project
                </h2>
                <p class="description">
                    A fully-featured QR Code Generator with a Python/FastAPI backend
                    and Nuxt.js frontend. Supports WiFi, URL, IPS payments, and Social
                    QR codes with full customization -- colors, shapes, and embedded logos.
                    Designed for simplicity with a focus on clean UX and instant generation.
                </p>

                <div class="project-tags">
                    <span class="tag">Python</span>
                    <span class="tag">FastAPI</span>
                    <span class="tag">Nuxt.js</span>
                    <span class="tag">TypeScript</span>
                    <span class="tag">QR Generation</span>
                </div>

                <a href="https://qr-code.pecic.dev/"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="project-link link-underline"
                   aria-label="View QR Code Generator project (opens in new tab)">View Project</a>

            </div>

        </template>
    </HalfContent>
</template>

<script setup lang="ts">

</script>

<style scoped>

.wrapper-space {
    padding: 50px 0 80px 0;
}

.content {
    padding-right: 20%;
}

.title {
    color: var(--description-dark-title);
    margin-bottom: 20px;
}

.description {
    color: var(--darker-light-gray);
    font-size: 13px;
    line-height: 181%;
    overflow-wrap: break-word;
    margin-bottom: 20px;
}

.project-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
}

.tag {
    font-size: 0.7rem;
    padding: 4px 12px;
    border: 1px solid var(--light-gray-border);
    border-radius: 20px;
    color: var(--darker-light-gray);
}

.project-link {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    color: var(--description-light-gray-color);
    outline: none;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s ease;
}

.project-link:hover {
    color: var(--description-dark-title);
}

.custom-image {
    width: 65%;
    height: auto;
    align-self: flex-end;
}


@media only screen and (max-width: 1300px){
    .custom-image {
        width: 85%;
    }
}

</style>
