<template>
    <header class="header">
        <div class="container header-inner">
            <a href="#home" class="logo-link" aria-label="Homepage">
                <img src="/images/logo.svg" alt="ZP logo" class="logo-img" width="36" height="36">
            </a>

            <nav class="nav" aria-label="Main navigation">
                <ul class="nav-links">
                    <li v-for="link in navLinks" :key="link.href">
                        <a class="nav-link link-underline" :href="link.href">{{ link.label }}</a>
                    </li>
                </ul>
                <a href="#contact" class="btn btn-outline nav-cta">Get in touch</a>

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
        </div>

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

                        <a href="#contact" class="btn btn-outline mobile-cta" @click="closeMobileMenu">
                            Get in touch
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
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#work', label: 'Work' },
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
    /* Overlays the dark hero; it scrolls away with the page */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    color: var(--white-gray);
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
}

.logo-link {
    display: inline-flex;
    align-items: center;
}

.logo-img {
    height: 36px;
    width: auto;
}

.nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 24px;
}

.nav-link {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--nav-links-text-color);
    transition: color var(--animation-duration-fast) ease;
}

.nav-link:hover {
    color: var(--white-gray);
}

.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: none;
    border: 1px solid var(--light-gray-border);
    border-radius: 6px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    transition: border-color var(--animation-duration-fast) ease;
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
    gap: 28px;
}

.mobile-nav-link {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--light-gray-text-color);
    text-decoration: none;
    transition: color var(--animation-duration-fast) ease;
}

.mobile-nav-link:hover {
    color: var(--white-gray);
}

.mobile-cta {
    margin-top: 12px;
}

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

@media only screen and (max-width: 900px) {
    .nav-links,
    .nav-cta {
        display: none;
    }

    .hamburger-btn {
        display: flex;
    }
}
</style>
