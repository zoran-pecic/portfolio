<template>
    <footer id="contact">

        <div class="rights-style">
            <p>&copy; {{ currentYear }} Zoran Pecic</p>
            <p>All rights reserved.</p>
        </div>

        <span>
            <h4>Connect With Me</h4>

            <ul class="list-style">
                <li v-for="linkItem in accountsList" class="link-nav-element">
                    <a :href="linkItem.link"
                       class="link-nav"
                       target="_blank"
                       rel="noopener noreferrer">
                        {{ linkItem.text }}
                    </a>
                </li>
            </ul>

        </span>

    </footer>
</template>

<script setup lang="ts">

const currentYear = new Date().getFullYear();

const accountsList = [
    { text: "LinkedIn", link: "https://www.linkedin.com/in/zoran-pecic-131244155/"},
    { text: "GitHub", link: "https://github.com/zoran-pecic"},
    { text: "Email", link: "mailto:zoran@pecic.dev"},
]

</script>

<style scoped>

footer {
    background-color: var(--footer-background-color);
    color: var(--footer-text-color);
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 50px 10% 30px 10%;
}

.rights-style {
    font-size: 0.8rem;
    align-self: end;
    line-height: 1.6;
}

.list-style {
    margin-top: 10px;
    list-style-type: none;
}

.link-nav-element {
    margin-top: 5px;
}

.link-nav {
    text-decoration: none;
    color: var(--nav-links-text-color);
    font-size: 0.8rem;
    transition: color 0.2s ease;
}

.link-nav:hover {
    color: var(--white-gray);
}

</style>
