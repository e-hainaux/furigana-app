<template>
  <footer class="footer">
    <p class="footer-text">
      Created by Emilien Hainaux © 2024
      <a
        href="https://www.linkedin.com/in/e-hainaux"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="@/assets/LinkedInLogo.svg"
          alt="LinkedIn"
          class="linkedin-icon"
        />
      </a>
    </p>
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: #6c757d;
}

.linkedin-icon {
  width: 20px;
  height: 20px;
  margin-left: 8px;
  filter: grayscale(100%);
  transition: filter 0.3s;
  cursor: pointer;
}

.linkedin-icon:hover {
  filter: grayscale(0%);
}

@media (min-width: 1024px) {
  .footer {
    width: 100%;
    margin-top: 24px;
  }
}
</style>
