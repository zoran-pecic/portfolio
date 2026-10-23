<template>
    <header class="header" :class="{ 'is-fixed': isFixed }">
        <div class="container header-inner">
            <a href="#home" class="logo-link" aria-label="Homepage">
                <img src="/images/logo.svg" alt="ZP logo" class="logo-img" width="36" height="36">
            </a>

            <nav class="nav" aria-label="Main navigation">
                <ul class="nav-links" @mouseleave="hovered = null" @focusout="hovered = null">
                    <li v-for="link in navLinks" :key="link.href">
                        <a
                            class="nav-link"
                            :class="{ 'is-active': activeHref === link.href }"
                            :href="link.href"
                            :aria-current="activeHref === link.href ? 'location' : undefined"
                            @mouseenter="hovered = link.href"
                            @focus="hovered = link.href"
                        >
                            {{ link.label }}
                            <Motion
                                v-if="(hovered ?? activeHref) === link.href"
                                layout-id="nav-indicator"
                                class="nav-indicator"
                                :transition="{ type: 'spring', stiffness: 380, damping: 34 }"
                            />
                        </a>
                    </li>
                </ul>
                <a href="#contact" class="btn btn-outline nav-cta">Get in touch</a>

                <button
                    ref="menuButton"
                    class="hamburger-btn"
                    :aria-expanded="isMobileMenuOpen"
                    aria-controls="mobile-menu"
                    :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
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
                    ref="mobileMenu"
                    class="mobile-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    @click.self="closeMobileMenu()"
                >
                    <nav class="mobile-nav">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            class="mobile-nav-link"
                            @click="closeMobileMenu(false)"
                        >{{ link.label }}</a>

                        <a href="#contact" class="btn btn-outline mobile-cta" @click="closeMobileMenu(false)">
                            Get in touch
                        </a>
                    </nav>
                </div>
            </Transition>
        </Teleport>
    </header>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import type { NavLink } from '@/types/NavLink';

const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#work', label: 'Work' },
]

const isMobileMenuOpen = ref(false);
const isFixed = ref(false);
const hovered = ref<string | null>(null);
const activeHref = ref<string | null>(null);
const menuButton = ref<HTMLButtonElement>();
const mobileMenu = ref<HTMLElement>();
let sectionObserver: IntersectionObserver | null = null;

function toggleMobileMenu() {
    if (isMobileMenuOpen.value) closeMobileMenu();
    else isMobileMenuOpen.value = true;
}

/** Closes the overlay; returns focus to the toggle unless a nav link is taking the user elsewhere. */
function closeMobileMenu(restoreFocus = true) {
    isMobileMenuOpen.value = false;
    if (restoreFocus) nextTick(() => menuButton.value?.focus());
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
        closeMobileMenu();
    }
}

/** Pins the header once the hero has scrolled out of view. */
function onScroll() {
    isFixed.value = window.scrollY > window.innerHeight * 0.8;
}

watch(isMobileMenuOpen, async (isOpen) => {
    // The overlay is teleported outside #__nuxt, so making the app inert keeps Tab inside the dialog.
    document.getElementById('__nuxt')?.toggleAttribute('inert', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) {
        document.addEventListener('keydown', onKeydown);
        await nextTick();
        mobileMenu.value?.querySelector<HTMLElement>('a')?.focus();
    } else {
        document.removeEventListener('keydown', onKeydown);
    }
});

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    sectionObserver = new IntersectionObserver(
        (entries) => {
            const hit = entries.find((entry) => entry.isIntersecting);
            if (hit) activeHref.value = `#${hit.target.id}`;
        },
        { rootMargin: '-40% 0px -55% 0px' }
    );
    ['home', ...navLinks.map((link) => link.href.slice(1))].forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionObserver?.observe(el);
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    sectionObserver?.disconnect();
    document.getElementById('__nuxt')?.removeAttribute('inert');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.header {
    /* Overlays the dark hero; pinned (.is-fixed) once the hero scrolls out of view */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    color: var(--white-gray);
}

.header.is-fixed {
    position: fixed;
    z-index: 50;
    background-color: rgba(34, 34, 34, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--light-gray-border);
    animation: headerDrop 0.35s var(--animation-easing);
}

@keyframes headerDrop {
    from {
        transform: translateY(-100%);
    }
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
}

.is-fixed .header-inner {
    height: 60px;
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
    position: relative;
    display: inline-block;
    padding-block: 6px;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    text-decoration: none;
    color: var(--nav-links-text-color);
    transition: color var(--animation-duration-fast) ease;
}

.nav-link:hover,
.nav-link.is-active {
    color: var(--white-gray);
}

.nav-indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: currentColor;
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

@media (prefers-reduced-motion: reduce) {
    .header.is-fixed {
        animation: none;
    }
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
