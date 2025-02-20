<template>
    <footer>

        <pre class="rights-style">
            © 2025 Zoran Pecić
            All rights reserved.
        </pre>


        <span>
            <h4>Connect With Me</h4>

            <ul class="list-style">
                <li v-for="linkItem in accountsList" class="link-nav-element">
                    <a :href="linkItem.link" class="link-nav">
                        {{ linkItem.text }}
                    </a>
                </li>
                
            </ul>

        </span>

    </footer>
</template>

<script setup lang="ts">

const accountsList = [
    { text: "LinkedIn", link: "#"},
    { text: "GitHub", link: "#"},
    { text: "Email", link: "#"},
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
    white-space: pre-line;
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
    
}

</style>