<template>
    <Transition name="fade">
        <button
            v-show="isVisible"
            class="scroll-to-top"
            aria-label="Scroll to top"
            @click="scrollToTop"
        >
            <span class="chevron-up"></span>
        </button>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const SCROLL_THRESHOLD = 300;

function handleScroll() {
    isVisible.value = window.scrollY > SCROLL_THRESHOLD;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--primary-dark-gray);
    border: 1px solid var(--light-gray-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 900;
    transition: border-color 0.2s ease, background-color 0.2s ease;
}

.scroll-to-top:hover {
    border-color: var(--white-gray);
    background-color: var(--footer-background-color);
}

.chevron-up {
    display: block;
    width: 10px;
    height: 10px;
    border-left: 2px solid var(--light-gray-text-color);
    border-top: 2px solid var(--light-gray-text-color);
    transform: rotate(45deg) translateY(3px);
    transition: border-color 0.2s ease;
}

.scroll-to-top:hover .chevron-up {
    border-color: var(--white-gray);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media only screen and (max-width: 768px) {
    .scroll-to-top {
        bottom: 20px;
        right: 20px;
    }
}
</style>
