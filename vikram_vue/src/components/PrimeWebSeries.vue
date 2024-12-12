<template>
    <div class="container">
        <div class="series-img">
            <img :src="series.image" alt="series.name" class="image">
        </div>
        <div class="series-details">
            <h1>{{ series.name }}</h1>
            <p> Trending: {{ series.trending }}</p>
            <p> Genre: {{ series.genre }}</p>
            <p> Quality: {{ series.Quality }}</p>
            <p> Likes: {{ series.likes }}</p>
            <button class="watch-button" @click="watchSeries">Episodes</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrimeWebSeries',
    props: {
        series: Object
    },
    methods: {
        watchSeries() {
            alert(`Enjoy watching ${this.series.name}!`);
        }
    }
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
    width: 90%;
    margin: 1em auto;
    border: transparent;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 1em;
    background-color: #669bbc;
}

.series-img .image {
    width: 100%; 
    height: 250px; 
    object-fit: cover;
}

.watch-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #c347a8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.watch-button:hover {
    background-color: #a0038b; 
}
</style>
