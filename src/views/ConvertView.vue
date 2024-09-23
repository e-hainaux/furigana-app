<template>
  <div
    class="flex flex-col justify-between items-center h-[100vh] w-[100vw] px-0 mt-[150px] pt-6 md:pt-0 lg:w-[50vw] md:mt-[180px] md:h-[100vh] lg:ml-[100%] lg:mt-[40px]"
  >
    <h1
      class="w-full text-xl text-center font-bold mb-16 mt-0 mb-6 pl-1 pr-1 lg:mt-2 sm:px-2 text-2XL"
    >
      Visualiseur de furigana pour textes japonais
    </h1>
    <form
      @submit.prevent="convertText"
      class="w-full px-4 space-y-4 lg:pr-[40px]"
    >
      <div>
        <label
          for="inputText"
          class="block text-lg font-medium text-gray-700 mb-4"
        >
          Texte à convertir
        </label>
        <textarea
          id="inputText"
          v-model="inputText"
          rows="4"
          class="w-[96%] mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base p-2 h-40"
          placeholder="秋風に
たなびく雲の
絶え間より"
        ></textarea>
      </div>
      <div>
        <label class="block text-lg font-medium text-gray-700">
          Position des Furigana
        </label>
        <select
          v-model="furiganaPosition"
          class="w-40 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm md:w-40"
        >
          <option value="below">En-dessous</option>
          <option value="above">Au-dessus</option>
        </select>
      </div>
      <button
        class="px-4 py-2 bg-emerald text-white rounded-md hover:bg-emerald-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald"
      >
        Convertir
      </button>
    </form>
    <div class="w-full px-4 space-y-4 lg:pr-[40px]">
      <div
        v-if="convertedText"
        :class="[
          furiganaClass,
          'w-full mt-4 p-4 text-xl border rounded-md border-gray-200 bg-white bg-opacity-40',
        ]"
      >
        <h2 class="text-lg font-medium">Résultat</h2>
        <div
          v-html="convertedText"
          class="result-container mt-2 p-4 text-gray-700"
        ></div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import axios from "axios";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "ConvertView",
  components: {
    FooterComponent,
  },
  setup() {
    const inputText = ref("");
    const convertedText = ref("");
    const furiganaPosition = ref("below");

    const furiganaClass = computed(() => {
      return furiganaPosition.value === "below"
        ? "furigana-below"
        : "furigana-above";
    });

    const convertText = async () => {
      const textToConvert =
        inputText.value || "秋風に\nたなびく雲の\n絶え間より";
      try {
        const response = await axios.post(
          "https://furigana-backend.onrender.com/nihongo/convert",
          {
            text: textToConvert,
            to: "hiragana",
            furiganaPosition: furiganaPosition.value,
          }
        );
        convertedText.value = response.data;
        console.log("Received HTML:", convertedText.value);
      } catch (error) {
        console.error("Error converting text:", error);
        convertedText.value = "Erreur lors de la conversion du texte.";
      }
    };

    // Ajout d'un watcher pour reconvertir le texte lorsque la position change
    watch(furiganaPosition, () => {
      if (inputText.value) {
        convertText();
      }
    });

    return {
      inputText,
      convertedText,
      convertText,
      furiganaPosition,
      furiganaClass,
    };
  },
});
</script>

<style scoped>
/* Styles pour les furigana au-dessus */
.furigana-above :deep(ruby) {
  display: inline-flex;
  flex-direction: column-reverse;
  align-items: center;
  vertical-align: top;
  margin: 0 0.2em;
}

.furigana-above :deep(ruby rt) {
  display: block;
  font-size: 0.5em;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 0.2em;
}

/* Styles pour les furigana en-dessous */
.furigana-below :deep(ruby) {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: bottom;
  margin: 0 0.2em 0.2em 0.2em;
}

.furigana-below :deep(ruby rt) {
  display: block;
  font-size: 0.5em;
  line-height: 1.1;
  text-align: center;
  order: 1;
  margin-top: 0.2em;
}

/* Cacher les parenthèses */
:deep(ruby rp) {
  display: none;
}

/* Espacement entre les lignes de texte */
.result-container {
  white-space: pre-wrap;
  line-height: 2.5; /* Espacement entre les lignes de texte */
}

/* Préserver l'espacement entre kanji et furigana en ciblant uniquement les rubies */
.result-container :deep(ruby) {
  line-height: 1;
}

@media (min-width: 1024px) {
  /* .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    height: 100vh;
    margin-top: 0;
    margin-left: 100%;
    padding: 0 16px;
  } */
  .result-container {
    padding-right: 40px;
  }
}

@media (max-width: 600px) {
  /* .main-container {
    margin-top: 150px;
    padding: 24px 0 0 0;
  } */

  h1 {
    margin: 0 0 36px 0;
    font-size: medium;
    text-align: center;
  }
}
</style>
