<template>
    <!-- <Transition name="slideDown"> -->
    <!-- <div class=" d-block d-lg-none rounded-b-xl elevation-5 pt-4 px-3 pb-3"> -->
    <div class="app-nav-menu-dropdown-header flex align-center justify-space-between w-100 mb-10">
        <div class="w-100 me-10">
            <img src="@/assets/img/logo.png">
        </div>
        <button @click="handleCloseDrawer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </button>
    </div>

    <div class="wrap">
        <ul>
            <li class="rounded-lg"  :to="item.link"
                v-for="(item, index) in navLinks" :key="index">
                <!-- <template v-slot:title>
                    <span class="font-weight-bold"> {{ item.name }} </span>
                </template> -->
            </li>
        </ul>
    </div>
    <!-- </div> -->
    <!-- </Transition> -->

</template>

<script setup lang="ts">
import RoutesManager from '~/core/manager/RoutesManager';
const navLinks = ref({
    1: { name: 'currency', link: RoutesManager.home },
    2: { name: 'gold', link: RoutesManager.gold },
    3: { name: "silver", link: RoutesManager.silver },
    4: { name: 'news', link: RoutesManager.news },
});

// const props = defineProps(["modelValue"]);
// const emit = defineEmits(["update:modelValue"]);



const emits=defineEmits(['close-drawer'])
// const navDrawer = computed({
//     get() {
//         return props.modelValue;
//     },
//     set(value) {
//         emit("update:modelValue", value);
//     },
// });
const handleCloseDrawer=()=>{
emits('close-drawer')
}
</script>

<style scoped></style>