<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="book-logo-container">
      <img
        alt="furigana app book logo"
        class="book-logo"
        src="@/assets/LogoFuri.svg"
      />
    </div>
    <div class="title-logo-container">
      <img
        alt="furigana app title"
        class="title"
        src="@/assets/TitleFuriganaApp.svg"
      />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  max-height: 150px;
  padding: 24px 0;
  background-color: #fff8eb;
  transition: box-shadow 0.3s ease;
}
.book-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}
.title-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.title {
  display: flex;
  height: 50%;
  object-fit: contain;
}

.book-logo {
  display: flex;
  height: 100%;
  max-height: 150px;
  object-fit: contain;
}

@media (min-width: 1024px) {
  header {
    position: fixed;
    top: 0;
    left: 0;

    flex-direction: column;

    width: 50%;
    height: 100vh;
    max-height: 800px;
    padding-right: 24px;
  }

  .book-logo-container,
  .title-logo-container {
    width: 100%;
    height: 50%;
  }
}
@media (max-width: 1023px) {
  header {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
