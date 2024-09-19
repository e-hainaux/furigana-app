<template>
  <footer class="footer">
    <p class="footer-text">Created by Emilien Hainaux © 2024</p>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
.footer {
  width: 100vw;

  text-align: center;
  margin-top: 24px;

  padding: 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.footer-text {
  margin: 0;
  color: #6c757d;
}

@media (min-width: 1024px) {
  .footer {
    width: 100%;
    margin-top: 24px;
  }
}
</style>
