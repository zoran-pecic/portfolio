<template>
    <button :class="customClass">
        {{ displayText }}
    </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@/types/Button';

const { displayText, customClass } = defineProps<ButtonProps>();

</script>

<style scoped>
button {
    cursor: pointer;
}
</style>