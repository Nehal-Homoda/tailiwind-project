<template>
    <div class=" text-right">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex w-full border border-black rounded  px-3 py-1 text-sm font-medium text-white gap-x-1.5">
                    <slot />
                    {{ btnName }}
                    <svg class="-mr-1 size-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon">
                        <path fill-rule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </MenuButton>
            </div>

            <MenuItems
                class="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none">
                <div class="px-1 py-1">
                    <slot name="link"></slot>
                </div>
            </MenuItems>
        </Menu>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'


const props = defineProps(['btnName'])
</script>