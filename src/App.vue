<template>
  <div class="main">
    <Navbar :alt="app_name" />
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "/src/components/Footer";
import Navbar from "/src/components/Navbar";

export default {
  components: {
    Footer,
    Navbar,
  },
  data: function () {
    return {
      logo_src: "/public/img/image.png",
      app_name: "catsAPI"
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}


</style>
