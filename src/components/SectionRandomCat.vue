<template>
  <div id="section">
    <h1>DESCUBRA QUAL GATO VOCÊ É</h1>
   
    <div v-if="cat" id="img-cat">
      
      <img :src="cat.url" alt="Random Cat">
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


<style >

h1{
  font-size: 20px;
  margin-top: 10px;
  
}

button{
  position: absolute;
  top: 450px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 10px 10px 5px #333;
  border-radius: 10px ;
}

button:hover{
  background-color: #333;
  cursor: pointer;
  color: #fff;
  transition: .4s;
  box-shadow: 5px 5px 5px #333;
}

div img{
  height: 200px;
  width: 200px;
  margin-top: 20px;
  background-size: cover;
  border: 2px solid #000;
  border-radius: 10px;
  
}

#img-cat{
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  
}

#section{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

}

</style>
