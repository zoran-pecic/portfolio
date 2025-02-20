<template>
    <HalfContent class="wapper-space">
        <template v-slot:half1>
            <img class="custom-image"
                src="/images/custom-images/img1.webp" 
                alt="custom-photo" />
        </template>

        <template v-slot:half2 class="content">
            <div>

                <h2 class="unica-one-regular title">
                    My Featured Projects
                </h2>
                <p class="description">
                    Throughout my programming journey, 
                    I've had the opportunity to work on 
                    a variety of projects, each one pushing 
                    the boundaries of my abilities. 
                    From building responsive web applications 
                    to developing efficient
                </p>

                <a href="#" class="get-in-touch-link-style">Get in Touch</a>

            </div>

        </template>
    </HalfContent>
</template>

<script setup lang="ts">

</script>

<style scoped>

.wapper-space {
    padding: 50px 0 80px 0;
}

.title { 
    color: var(--description-dark-title);
    margin-bottom: 20px;
}

.description {
    color: var(--darker-light-gray);
    font-size: 13px;
    line-height: 181%;
    overflow-wrap: break-word;
    margin-bottom: 30px;
}

.get-in-touch-link-style {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    color: var(--description-light-gray-color);
    outline: none;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
}

.custom-image {
    width: 65%;
    height: auto;
    align-self: flex-end;
}


@media only screen and (max-width: 1300px){
    .custom-image {
        width: 85%;
    }
}

</style>