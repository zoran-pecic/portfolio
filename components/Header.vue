
<template>
    <header class="display-grid header">
        <a href="#home" class="logo-link" aria-label="Homepage">
            <img src="/images/logo.svg" alt="ZP Logo" class="logo-img" />
        </a>

        <nav class="display-grid nav-alignment" aria-label="Main navigation">
            <ul class="nav-links">
                <li v-for="link in navLinks" :key="link.href" class="nav-item">
                    <a class="nav-link" :href="link.href">{{ link.label }}</a>
                </li>

                <a href="#contact" class="cta-link">
                    <RoundButton
                    displayText="Get in Touch"
                    class="rounded-button"/>
                </a>
            </ul>

            <button
                class="hamburger-btn"
                :aria-expanded="isMobileMenuOpen"
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                @click="toggleMobileMenu"
            >
                <span class="hamburger-line" :class="{ 'open': isMobileMenuOpen }"></span>
                <span class="hamburger-line" :class="{ 'open': isMobileMenuOpen }"></span>
                <span class="hamburger-line" :class="{ 'open': isMobileMenuOpen }"></span>
            </button>
        </nav>

        <Teleport to="body">
            <Transition name="overlay">
                <div
                    v-if="isMobileMenuOpen"
                    id="mobile-menu"
                    class="mobile-overlay"
                    role="dialog"
                    aria-label="Mobile navigation"
                    @click.self="closeMobileMenu"
                >
                    <nav class="mobile-nav">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            class="mobile-nav-link"
                            @click="closeMobileMenu"
                        >{{ link.label }}</a>

                        <a href="#contact" class="mobile-nav-link mobile-cta" @click="closeMobileMenu">
                            Get in Touch
                        </a>
                    </nav>
                </div>
            </Transition>
        </Teleport>
    </header>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';
import type { NavLink } from '@/types/NavLink';

const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
]

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
        closeMobileMenu();
    }
}

watch(isMobileMenuOpen, (isOpen) => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeydown);
    } else {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeydown);
    }
});

onUnmounted(() => {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
});
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
    align-items: center;
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
    border-color: var(--accent);
    color: var(--white-gray);
}

/* Hamburger button */
.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: none;
    border: 1px solid var(--light-gray-border);
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    width: 44px;
    height: 44px;
    transition: border-color 0.2s ease;
}

.hamburger-btn:hover {
    border-color: var(--white-gray);
}

.hamburger-line {
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--light-gray-text-color);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-line.open:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-line.open:nth-child(2) {
    opacity: 0;
}

.hamburger-line.open:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* Mobile overlay */
.mobile-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(34, 34, 34, 0.97);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.mobile-nav-link {
    text-decoration: none;
    color: var(--light-gray-text-color);
    font-size: 1.3rem;
    letter-spacing: 1px;
    transition: color 0.2s ease;
}

.mobile-nav-link:hover {
    color: var(--white-gray);
}

.mobile-cta {
    margin-top: 16px;
    padding: 10px 32px;
    border: 1px solid var(--light-gray-border);
    border-radius: 42px;
    font-size: 1rem;
    transition: border-color 0.2s ease, color 0.2s ease;
}

.mobile-cta:hover {
    border-color: var(--white-gray);
    color: var(--white-gray);
}

/* Overlay transition */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

@media only screen and (max-width: 1100px){
    .nav-links {
        display: none;
    }

    .hamburger-btn {
        display: flex;
    }
}
</style>
