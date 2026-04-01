
<template>
    <header class="display-grid header">
        <a href="#home" class="logo-link">
            <img src="/images/logo.svg" alt="ZP Logo" class="logo-img" />
        </a>

        <nav class="display-grid nav-alignment">
            <ul class="nav-links">
                <li v-for="link in navLinks" class="nav-item">
                    <a class="nav-link" :href="link.href">{{ link.label }}</a>
                </li>

                <a href="#contact" class="cta-link">
                    <RoundButton
                    displayText="Get in Touch"
                    class="rounded-button"/>
                </a>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import type { NavLink } from '@/types/NavLink';

const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
]

</script>

<style scoped>

.header {
    grid-template-columns: 1fr 1fr;
    background-color: var(--primary-dark-gray);
    padding: var(--global-padding);
    padding-top: 10px;
    padding-bottom: 10px;
    color: #FFFFFF;
}

.logo-link {
    display: grid;
    align-items: center;
    text-decoration: none;
}

.logo-img {
    height: 36px;
    width: auto;
}

.nav-alignment {
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
    transition: color 0.2s ease;
}

.nav-link:hover {
    color: var(--white-gray);
}

.cta-link {
    text-decoration: none;
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
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease;
}

.rounded-button:hover {
    border-color: var(--white-gray);
    color: var(--white-gray);
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
