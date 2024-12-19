<template>
    <div>
        <LayoutsAppNavBar @open-drawer="isOpened=true" />
        <LayoutsAppNavDrawer v-if="isOpened" @close-drawer="isOpened=false" />
        <div>
            <slot />
        </div>
        <LayoutsAppFooter />
    </div>
</template>

<script setup lang="ts">
const isOpened=ref(false)
</script>

<style scoped></style>