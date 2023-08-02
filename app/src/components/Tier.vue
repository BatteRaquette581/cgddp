<template>
    <div class="bg-gradient-to-bl to-transparent w-auto border-solid border-4 m-14 font-KumbhSans dark:text-white rounded-xl" style="height: 512px;" ref="tier">
        <div class="text-center mt-4 text-3xl" :key="forceRender">{{ title }}</div>
        <br><br>
        <div class="text-center mt-4 text-xl" :key="forceRender">{{ description }}</div>
        <br><br>
        <ul class="text-center text-lg">
            <li v-for="level in bronze.levels" :class="level.difficulty">
                <strong>{{ level.name }}</strong> by <strong>{{ level.author }}</strong> (ID: {{ level.id }}) <span class="tooltip-container">?<span class="tooltip bg-secondary-dark dark:bg-secondary-light rounded-lg text-white dark:text-black">{{ level.skillset }}</span></span>&nbsp;
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import bronze from "@/assets/tiers/bronze.json";

var title: string | undefined = "Loading...";
var description: string | undefined = "Loading...";
const tier = ref<HTMLElement | null>(null);
const forceRender = ref<number>(0);

onMounted(() => {
    title = tier.value?.dataset.title;
    description = tier.value?.dataset.description;
    forceRender.value++;
});
</script>

<style scoped>
</style>