<script setup>
import Header from './components/Header.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/router.png" width="125" height="125" />

    <div class="wrapper">
      <Header />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style>
@import './assets/base.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face { font-family: 'YanoljaYacheR'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YanoljaYacheR.woff') format('woff'); font-weight: normal; font-style: normal; }



body {
  color: #414141;
  background-color: #f2f6ff;
  font-size: 18px;
  font-family: 'YanoljaYacheR';
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'YanoljaYacheR';
  font-weight: normal;
  
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.6em;
}

p {
  text-align: left;
}

.title_name{
  font-size: 60px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  color: white;
  background-color: #333;
  padding: 50px;
}

#color_text{
  color: blueviolet;

}

.links {
  display: flex;
  justify-content: center;
}

.display_image img{
  width: 500px;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content_grid {
  width: 900px;
  display: flex;
  justify-content: center;    /* Change this */
  flex-wrap: wrap;
  flex-direction: column;
  flex-direction: row;  /* <--- Really freaking cool! */
  align-items: center;
}

.item_container {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.item_container_grid {
  width: 1000px;
  display: flex;
  justify-content: center;    /* Change this */
  flex-wrap: wrap;
  flex-direction: column;
  flex-direction: row;  /* <--- Really freaking cool! */
  align-items: center;      /* Add this */
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.blue {
  text-decoration: none;
  color: rgb(60, 22, 199);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    //grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
