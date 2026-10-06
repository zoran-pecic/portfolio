<template>
    <section id="projects" class="section">
        <div class="container project-grid">
            <figure class="project-figure slide-from-left">
                <img
                    src="/images/projects/qr-code-generator.jpg"
                    alt="Screenshot of the QR Code Generator web app"
                    width="1920"
                    height="1200"
                    loading="lazy"
                >
            </figure>

            <div class="project-copy slide-from-right">
                <h2 class="section-title">Featured project</h2>
                <h3 class="project-name">QR Code Generator</h3>
                <p class="project-text">
                    A QR code generator with a FastAPI backend and a Nuxt frontend.
                    Supports WiFi, URL, IPS payment and social-profile codes, with custom colours,
                    shapes and embedded logos.
                </p>
                <p class="meta project-stack">Python, FastAPI, Nuxt, TypeScript</p>
                <!-- Live link removed: qr-code.pecic.dev no longer resolves. Restore when redeployed. -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.project-grid {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: clamp(32px, 6vw, 80px);
    align-items: center;
}

.project-figure img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--rule-light);
    filter: grayscale(1);
    transition: filter 0.4s ease;
}

.project-figure:hover img {
    filter: grayscale(0);
}

.project-name {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--description-dark-title);
}

.project-text {
    margin-top: 12px;
    max-width: 44ch;
    line-height: 1.7;
    color: var(--description-light-gray-color);
}

.project-stack {
    margin-top: 16px;
}

@media only screen and (max-width: 900px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
}
</style>
