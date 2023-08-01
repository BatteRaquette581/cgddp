<template>
    <div>
        <nav class="grid bg-primary-light dark:bg-primary-dark grid-cols-3 h-20 place-items-center dark:text-white">
            <div class="font-KumbhSans text-2xl">CGDDP</div>
            <a href="https://discord.gg/gtuXdxEQA2" rel="noreferrer noopener" target="_blank"><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="Join our Discord server!" class="h-12"></a>
            <button @click="toggleTheme"><img :src="toggleButtonSvg" :key="forceRender" alt="Toggle Theme" class="h-8" id="toggle-theme"></button>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

var toggleButtonSvg: string;
const forceRender = ref(0);

// manage color themes
function changeTheme(theme: string): void {
    if (theme == "dark") {
        document.documentElement.classList.add('dark');
        toggleButtonSvg = "src/assets/dark.svg";
    } else {
        document.documentElement.classList.remove('dark');
        toggleButtonSvg = "src/assets/light.svg";
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