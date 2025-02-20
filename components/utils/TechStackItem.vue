<template>
    <div>
        <img class="tech-image"
            :src="imageSource" 
            :alt="imageAlt"/>

        <p>{{ techName }}</p>
    </div>
</template>

<script setup lang="ts">
import type { TechItemProps } from '~/types/TechItemProps';


const { techName, imageSource, imageAlt } = defineProps<TechItemProps>();

</script>

<style scoped>
.tech-image {
    width: 80px;
    height: auto;
    padding-bottom: 5px;
}

</style>