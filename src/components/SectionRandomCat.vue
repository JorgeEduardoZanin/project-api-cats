<template>
    <div>
      <h1>Cat API</h1>
      <button @click="fetchRandomCat">Get Random Cat</button>
      <div v-if="cat">
        <img :src="cat.url" alt="Random Cat">
      </div>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        cat: null,
        error: null
      };
    },
    methods: {
      async fetchRandomCat() {
        try {
          const response = await fetch('https://api.thecatapi.com/v1/images/search');
          const data = await response.json();
          this.cat = data[0];
          this.error = null;
        } catch (error) {
          console.error('Error fetching random cat:', error);
          this.error = 'Failed to fetch random cat. Please try again later.';
        }
      }
    }
  };
  </script>
  
  
  <style>
  
  div img{
    height: 200px;
    width: 200px;
    margin-top: 20px;
    background-size: cover;
    border: 3px solid #000;
    border-radius: 10px;
  }
  
  </style>