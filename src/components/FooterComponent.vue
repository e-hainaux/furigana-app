<template>
  <footer
    class="w-full mt-6 py-4 bg-gray-100 border-t border-gray-300 text-center"
  >
    <p class="flex justify-center items-center text-gray-600 m-0">
      Created by Emilien Hainaux © 2024
      <a
        href="https://www.linkedin.com/in/e-hainaux"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-2 hover:opacity-100 focus:outline-none select-none hover:bg-transparent"
      >
        <img
          src="@/assets/LinkedInLogo.svg"
          alt="LinkedIn"
          class="w-5 h-5 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer select-none"
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
