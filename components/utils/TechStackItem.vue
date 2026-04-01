<template>
    <div class="tech-item">
        <img class="tech-image"
            :src="imageSource"
            :alt="imageAlt" />
        <p class="tech-name">{{ techName }}</p>
    </div>
</template>

<script setup lang="ts">
import type { TechItemProps } from '~/types/TechItemProps';

const { techName, imageSource, imageAlt } = defineProps<TechItemProps>();

</script>

<style scoped>

.tech-item {
    display: grid;
    place-items: center;
    gap: 8px;
    padding: 10px;
    transition: transform 0.2s ease;
    cursor: default;
}

.tech-item:hover {
    transform: translateY(-5px);
}

.tech-image {
    width: 60px;
    height: 60px;
    object-fit: contain;
    filter: grayscale(1) brightness(0.8);
    transition: filter 0.3s ease;
}

.tech-item:hover .tech-image {
    filter: grayscale(0);
}

.tech-name {
    font-size: 0.75rem;
    color: var(--primary-dark-gray);
    text-align: center;
}

</style>
