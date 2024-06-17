<template>
  <div id="section">
    <h1>DESCUBRA QUAL GATO VOCÊ É</h1>
    <div id="cards">
      <div v-if="cat" id="img-cat">
        <img :src="cat.url" alt="Random Cat" />
      </div>
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
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
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
  top: 450px;
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
  height: 220px;
  width: 220px;
  border-radius: 10px;
  background-size: cover;
}

#img-cat {
  width: 100%;
  border-bottom: 0px solid #fff;
  border-radius: 8px;
  align-items: center;
  margin-top: 50px;
}

#section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 565px;
 
}


#cards{
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
<<<<<<< HEAD
  margin: 10px;
  margin-top: 50px;
} 

=======
  margin-top: 30px;
  border: 2px solid #fff;
  border-radius: 10px;
 
  } 
>>>>>>> 2b678c7 (arrumei umas coisa)
</style>
