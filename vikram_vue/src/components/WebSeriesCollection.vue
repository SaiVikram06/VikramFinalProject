<template>
    <div class="web-series-grid">
        <div v-for="series of primewebSeriesContent" :key="series.id">
            <PrimeWebSeries :series="series" />
        </div>
    </div>
</template>

<script>
import PrimeWebSeries from "./PrimeWebSeries.vue";

export default {
    name: 'WebSeriesCollection',
    components: {
        PrimeWebSeries
    },
    props: {
        primewebSeriesContent: Array
    }
}
</script>

<style scoped>
.web-series-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 40px; 
    padding: 1em;
     background-color: #f9f9f9;
}
</style>
