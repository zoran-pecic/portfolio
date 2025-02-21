
<template>
    <header class="display-grid header">
        <div class="courier-prime-bold logo">Dev Diary</div>


        <nav class="display-grid nav-aligment">
            <ul class="nav-links">
                <li v-for="link in navLinks" class="nav-item">
                    <a class="nav-link" :href="link.href">{{ link.label }}</a>
                </li>

                <RoundButton 
                displayText="Get in Touch" 
                class="rounded-button"/>
            </ul>
            
        </nav>
    </header>
</template>

<script setup lang="ts">
import type { NavLink } from '@/types/NavLink';

const navLinks: NavLink[] = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'Contact' },
]

</script>

<style scoped>

.header {
    grid-template-columns: 1fr 1fr;
    background-color: var(--primery-dark-gray);
    padding: var(--global-padding);
    padding-top: 10px;
    padding-bottom: 10px;
    color: #FFFFFF;
}

.logo {
    display: grid;
    align-items: center;
}

.nav-aligment {
    justify-items: end;
}

.nav-links {
    list-style-type: none; 
    display: grid;
    grid-template-columns: repeat(4, minmax(50px, 100px)) fit-content(160px);
    place-items: center;
}

.nav-link {
    text-decoration: none; 
    color: var(--nav-links-text-color);
    font-size: 0.8rem;
}

.rounded-button {
    background: transparent;
    border: 1px solid var(--light-gray-border);
    border-radius: 42px;
    width: 155px;
    min-height: 40px;
    padding: 2px 5px 2px 5px;
    white-space: nowrap;
    color: var(--light-gray-text-color);
    font-size: 0.8rem;
}

@media only screen and (max-width: 1100px){

    .nav-links {
        grid-template-columns: fit-content(160px);
    }
    .nav-item {
        display: none;
    }
    .rounded-button{
        grid-column: 5;
    }
}
</style>