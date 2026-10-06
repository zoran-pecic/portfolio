<template>
    <footer id="contact" class="footer">
        <div class="container footer-grid">
            <div class="footer-contact animate-on-scroll">
                <h2 class="section-title">Get in touch</h2>
                <p class="footer-text">
                    Open to conversations about backend and platform work, team leadership, or anything in between.
                </p>
                <a href="mailto:zoran@pecic.dev" class="footer-email link-underline">zoran@pecic.dev</a>
            </div>

            <ul class="footer-links" aria-label="Social links">
                <li v-for="account in accountsList" :key="account.text">
                    <a
                        :href="account.link"
                        class="meta footer-link link-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`${account.text} (opens in new tab)`"
                    >{{ account.text }}</a>
                </li>
            </ul>
        </div>

        <div class="container footer-bottom">
            <p class="meta">&copy; {{ currentYear }} Zoran Pecic</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const accountsList = [
    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/zoran-pecic-131244155/' },
    { text: 'GitHub', link: 'https://github.com/zoran-pecic' },
]
</script>

<style scoped>
.footer {
    background-color: var(--footer-background-color);
    color: var(--light-gray-text-color);
    padding-top: var(--section-y);
}

.footer-grid {
    display: grid;
    grid-template-columns: minmax(0, 8fr) minmax(0, 4fr);
    gap: 40px;
    align-items: end;
    padding-bottom: 56px;
}

.footer-contact .section-title {
    color: var(--white-gray);
}

.footer-text {
    max-width: 46ch;
    line-height: 1.7;
}

.footer-email {
    display: inline-block;
    margin-top: 20px;
    font-family: var(--font-mono);
    font-size: 1.1rem;
    color: var(--white-gray);
}

.footer-links {
    list-style: none;
    display: flex;
    gap: 28px;
    justify-content: flex-end;
}

.footer-link {
    color: var(--light-gray-text-color);
}

.footer-link:hover {
    color: var(--white-gray);
}

.footer-bottom {
    border-top: 1px solid var(--light-gray-border);
    padding-block: 20px;
    color: var(--darker-light-gray);
}

@media only screen and (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
    }

    .footer-links {
        justify-content: flex-start;
    }
}
</style>
