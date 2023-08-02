<template>
    <div>
        <Nav />
        <h1 class="font-KumbhSans dark:text-white mt-40 text-6xl text-center"><strong>Tiers</strong></h1>
        <div class="grid bg-primary-light/60 dark:bg-primary-dark/60 w-10/12 mx-auto mt-24 rounded-3xl p-14 grid-cols-2 sm:grid-cols-1 h-auto">
            <Tier class="from-green-700 border-green-800" data-title="Bronze" data-description="A tier perfect for those wanting to improve at the game! (for newcomers at the game)" data-levels="bronze.json" />
            <Tier class="from-pink-200 border-pink-300" data-title="Silver" data-description="A tier above the first one: you're starting to make good progress!" data-levels="silver.json" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>