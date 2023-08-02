<template>
    <div>
        <nav class="grid fixed top-0 w-full bg-primary-light dark:bg-primary-dark grid-cols-4 h-20 place-items-center dark:text-white border-b-4 border-secondary-dark dark:border-secondary-light">
            <a href="/"><div class="font-KumbhSans text-2xl">CGDDP</div></a>
            <a href="https://discord.gg/gtuXdxEQA2" rel="noreferrer noopener" target="_blank"><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="Join our Discord server!" class="h-12"></a>
            <button @click="toggleTheme"><img :src="toggleButtonSvg" :key="forceRender" alt="Toggle Theme" class="h-8"></button>
            <router-link to="/list"><img :src="scrollButtonSvg" :key="forceRender" alt="See List" class="h-8"></router-link>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import light from "@/assets/light.svg";
import dark from "@/assets/dark.svg";
import scroll_light from "@/assets/scroll_light.svg";
import scroll_dark from "@/assets/scroll_dark.svg";

var toggleButtonSvg: string;
var scrollButtonSvg: string;
const forceRender = ref<number>(0);

// manage color themes
function changeTheme(theme: string): void {
    if (theme == "dark") {
        document.documentElement.classList.add('dark');
        toggleButtonSvg = dark;
        scrollButtonSvg = scroll_dark;
    } else {
        document.documentElement.classList.remove('dark');
        toggleButtonSvg = light;
        scrollButtonSvg = scroll_light;
    }
    forceRender.value++; // update element
}
if (localStorage.theme == null) localStorage.theme = "light";
changeTheme(localStorage.theme);

// implement toggle theme button
function toggleTheme(): void {
    localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
    changeTheme(localStorage.theme);
}
</script>

<style scoped>
</style>