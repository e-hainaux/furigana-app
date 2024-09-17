<template>
  <div class="p-4 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Convertisseur de Texte Japonais</h1>
    <form @submit.prevent="convertText" class="space-y-4">
      <div>
        <label for="inputText" class="block text-lg font-medium text-gray-700"
          >Texte en Japonais</label
        >
        <textarea
          id="inputText"
          v-model="inputText"
          rows="4"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Entrez le texte en japonais ici"
        ></textarea>
      </div>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Convertir
      </button>
    </form>
    <div
      v-if="convertedText"
      class="mt-4 p-4 border rounded-md border-gray-200"
    >
      <h2 class="text-lg font-medium">Résultat</h2>
      <div v-html="convertedText" class="mt-2 text-gray-700"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ConvertView",
  setup() {
    const inputText = ref("");
    const convertedText = ref("");

    const convertText = async () => {
      try {
        console.log("inputText: ", inputText.value);

        const response = await axios.post(
          "http://localhost:3000/nihongo/convert",
          {
            text: inputText.value,
            to: "hiragana",
          }
        );
        convertedText.value = response.data;
      } catch (error) {
        console.error("Error converting text:", error);
        convertedText.value = "Erreur lors de la conversion du texte.";
      }
    };

    return {
      inputText,
      convertedText,
      convertText,
    };
  },
});
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
