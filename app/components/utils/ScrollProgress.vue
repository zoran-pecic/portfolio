<template>
    <div
        class="scroll-progress"
        :style="{ transform: `scaleX(${progress})` }"
        aria-hidden="true"
    ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const progress = ref(0);

function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.value = max > 0 ? window.scrollY / max : 0;
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    /* mid-gray: stays visible over both dark hero and white sections (header scrolls away) */
    background-color: var(--darker-light-gray);
    transform-origin: 0 0;
    transform: scaleX(0);
    z-index: 999; /* below the mobile menu overlay (1000) */
}
</style>
