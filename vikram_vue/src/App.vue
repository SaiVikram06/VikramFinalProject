<template>
  <div class="container">
    <PrimeHeader/>
    <WebSeriesCollection :primewebSeriesContent = primewebSeriesContent />
</div>
</template>

<script>

import PrimeHeader from './components/PrimeHeader.vue'
import WebSeriesCollection from './components/WebSeriesCollection.vue'

export default {
  name: 'App',
  components: {    
    PrimeHeader,
    WebSeriesCollection
  },

  data(){
    return {
      primewebSeriesContent: []
    }

  },

  methods: {
  
    async fetchPrimeWebSeries(){
      const res = await fetch('https://primewebseries.onrender.com/api')
      const data = await res.json();
      console.log(data[0].primewebseries);
      return data[0].primewebseries;
    }
  },
  async created(){
    this.primewebSeriesContent = await this.fetchPrimeWebSeries();
  }
}
</script>

<style>

</style>
