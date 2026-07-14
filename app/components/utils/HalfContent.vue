<template>
    <section class="half-content-container">
        <span class="half-1">
            <slot name="half1"></slot>
        </span>

        <span class="half-2">
            <slot name="half2"></slot>
        </span>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

.half-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    place-items: center;
    align-items: center;
    justify-items: center;
}

.half-1, .half-2 {
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
    align-content: center;
}


</style>