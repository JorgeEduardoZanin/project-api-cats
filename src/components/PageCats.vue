<template>
    <div id="section">
      <h1>DESCUBRA QUAL GATO VOCÊ É</h1>
  
      <div class="gato-column">
        <div v-for="cat in cats" :key="cat.id" class="img-cat">
          <img :src="cat.url" :alt="cat.id">
        </div>
      </div>
  
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 0">Anterior</button>
        <button @click="nextPage" :disabled="currentPage === pageCount - 1">Próxima</button>
      </div>
  
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cats: [],
        error: null,
        currentPage: 0,
        pageSize: 12 // Define o número de gatos por página
      };
    },
    computed: {
      paginatedCats() {
        const start = this.currentPage * this.pageSize;
        const end = start + this.pageSize;
        return this.cats.slice(start, end);
      },
      pageCount() {
        return Math.ceil(this.cats.length / this.pageSize);
      }
    },
    mounted() {
      this.fetchRandomCats();
    },
    methods: {
      async fetchRandomCats() {
        try {
          const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=50');
          const data = await response.json();
          this.cats = data;
          this.error = null;
        } catch (error) {
          console.error('Error fetching random cats:', error);
          this.error = 'Failed to fetch random cats. Please try again later.';
        }
      },
      nextPage() {
        if (this.currentPage < this.pageCount - 1) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 0) {
          this.currentPage--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  #section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
  }
  
  .gato-column {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; /* Para que as imagens sejam exibidas em várias linhas */
    margin-bottom: 20px;
  }
  
  .img-cat {
    margin-bottom: 10px;
  }
  
  .pagination {
    margin-top: 20px;
  }
  
  button {
    padding: 8px 16px;
    margin: 0 4px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #555;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  