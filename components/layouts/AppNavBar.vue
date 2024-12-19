<template>
    <nav class=" flex items-center bg-surface py-3 ps-5 pe-2 md:px-16  rounded-b-[3em]">
        <div class="w-[100px] me-10 flex items-center ">
            <NuxtLink>
                <img src="@/assets/img/logo.png" alt="">
            </NuxtLink>
        </div>




        <!-- <div class="relative inline-block text-left">
            <div>
                <button @click="showMenu = !showMenu" type="button"
                    class="rounded text-black border border-black px-3 py-1 text-sm font-semibold inline-flex gap-x-1.5   "
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <img src="@/assets/img/avatar.png" class="w-6 h-6 rounded-full object-cover" alt="">
                    country
                    <svg class="-mr-1 size-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon">
                        <path fill-rule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div> -->
        <!-- <div v-if="showMenu"
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none"> -->
        <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" -->
        <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        id="menu-item-0">Account settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        id="menu-item-1">Support</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                        <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700"
                            role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                    </form>
                </div>
            </div>
        </div> -->


        <TailiwindDropDown btn-name="country">
            <img src="@/assets/img/avatar.png" class="w-6 h-6 rounded-full object-cover" alt="">
            <template v-slot:link>
                <MenuItem v-for="(item, index) in navLinks" :key="index">
                <NuxtLink class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :to="item.link">{{
                    item.name }}</NuxtLink>
                </MenuItem>
            </template>

        </TailiwindDropDown>



        <div class="flex-grow"></div>

        <div class="lg:flex hidden justify-center align-center gap-8">
            <NuxtLink class=" rounded-full px-5 py-1" exact-active-class="bg-background" v-for="item in navLinks"
                :to="item.link">
                {{ item.name }}
            </NuxtLink>
        </div>

        <div class="flex-grow"></div>

        <div class="ms-10 md:block hidden">
            <button class="bg-primary rounded-tr-lg rounded-bl-lg h-9 w-full px-3 text-background" height="40"
                variant="elevated" color="primary">
                <span class="pe-2">تحميل التطبيق </span>
            </button>
        </div>


        <button @click="handleOpenDrawer" class="lg:hidden px-5 drawer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </button>



    </nav>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';
import RoutesManager from '~/core/manager/RoutesManager';

const navDrawer = ref(false)
const emits=defineEmits(['open-drawer'])
const navLinks = computed(() => {
    return {

        1: { name: 'currency', link: RoutesManager.home },
        2: { name: 'gold', link: RoutesManager.gold },
        3: { name: "silver", link: RoutesManager.silver },
        // 4: { name: t("news"), link: localPath(RoutesManager.news) },
    }
});
const handleOpenDrawer=()=>{
emits('open-drawer')
}
</script>

<style scoped></style>