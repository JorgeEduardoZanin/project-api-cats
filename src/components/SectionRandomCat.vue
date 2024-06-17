<template>
  <div id="section">
    <h1>QUAL GATO VOCÊ É?</h1>
    <div id="cards">
      <div id="img-cat">
        <img v-if="cat" :src="cat.url" alt="Random Cat" />
        <div v-else class="placeholder">?</div>
      </div>
      <p v-if="cat">Esse é você!!</p>
    </div>
    <button @click="fetchRandomCat">CLIQUE IMEDIATAMENTE</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cat: null,
      error: null,
    };
  },
  methods: {
    async fetchRandomCat() {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        this.cat = data[0];
        this.error = null;
      } catch (error) {
        console.error("Error fetching random cat:", error);
        this.error = "Failed to fetch random cat. Please try again later.";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  margin-top: 10px;
}

button {
  background-color: #fff;
  padding: 10px;
  box-shadow: 10px 10px 5px #333;
  border-radius: 10px;
}

button:hover {
  background-color: #333;
  cursor: pointer;
  color: #fff;
  transition: 0.4s;
  box-shadow: 5px 5px 5px #333;
}

div img {
  height: 300px;
  width: 300px;
  background-size: cover;
  border-bottom: 2px solid #ddd;
}

#img-cat {
  border-bottom: 0px solid #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
}

.placeholder {
  font-size: 150px;
  color: #ccc;
}

#section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 565px;
}

#cards {
  display: flex;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  height: 400px;
  margin-bottom: 20px;
  flex-direction: column;
  text-align: center;
}

#cards p {
  margin-top: 20px;
  font-size: 30px;
}
</style>
