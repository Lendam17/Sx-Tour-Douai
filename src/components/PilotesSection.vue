<template>
  <section class="bg-black relative w-full overflow-hidden pt-16 md:pt-24 lg:pt-32">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
      <!-- En-tête -->
      <div class="text-center max-w-4xl mx-auto mb-10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          <span class="text-red-600">Pilotes</span>
        </h2>
        <p class="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
          Découvrez les talents qui feront vibrer la piste lors du SX Tour Douai
        </p>
      </div>

      <!-- Sélection de catégorie -->
      <div class="flex justify-center gap-8 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          class="text-2xl font-bold transition-all duration-300 px-6 py-2"
          :class="selectedCategory === cat ? 'text-red-600 border-b-2 border-red-600' : 'text-white hover:text-red-400'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Galerie de pilotes -->
      <div class="w-full flex justify-center">
        <div 
          class="flex flex-col md:flex-row gallery-container"
          :class="{
            'w-[85%] md:w-[90%] lg:w-full': true,
            'h-auto md:h-[60vh] lg:h-[85vh]': true,
            'space-y-2 md:space-y-0': true
          }"
        >
          <div
            v-for="(pilote, index) in pilotesFiltres"
            :key="pilote.id"
            @mouseenter="hoveredIndex = index"
            class="relative overflow-hidden cursor-pointer group transform-gpu"
            :class="{
              'aspect-[16/9] md:aspect-auto': true,
              'w-full md:w-auto': true,
              'flex-grow-0 flex-shrink-0 md:flex-1': true,
              'h-[12vh] md:h-full': hoveredIndex !== index,
              'h-[45vh] md:h-full': hoveredIndex === index,
              'hover:h-[45vh] md:hover:h-full': true,
              'md:basis-[10%] lg:basis-[12%]': hoveredIndex !== index,
              'md:hover:basis-[60%] lg:hover:basis-[50%]': true,
              'md:basis-[60%] lg:basis-[50%]': hoveredIndex === index,
              'opacity-70 hover:opacity-100': hoveredIndex !== index,
              'opacity-100': hoveredIndex === index,
              'transition-all ease-out duration-300': true
            }"
          >
            <!-- Image -->
            <img
              :src="pilote.image"
              :alt="pilote.fullName"
              class="w-full h-full object-cover transform-gpu will-change-transform"
              :class="{
                'transition-all ease-out duration-300': true
              }"
            />

            <!-- Overlay -->
            <div 
              class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300"
              :class="{
                'opacity-100': hoveredIndex === index,
                'opacity-0 group-hover:opacity-100': hoveredIndex !== index
              }"
            >
              <!-- Numéro -->
              <div class="absolute top-4 md:top-6 right-4 md:right-6">
                <span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 drop-shadow-lg">
                  #{{ pilote.numero }}
                </span>
              </div>

              <!-- Nom -->
              <div 
                class="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 transition-all duration-300"
                :class="{
                  'translate-y-0': hoveredIndex === index,
                  'translate-y-full group-hover:translate-y-0': hoveredIndex !== index
                }"
              >
                <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">
                  {{ pilote.prenom }}
                  <span class="text-red-600">{{ pilote.nom }}</span>
                </h3>
                <p class="text-base md:text-lg lg:text-xl text-gray-300">
                  {{ pilote.team }} - {{ pilote.palmares }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Catégories disponibles
const categories = ['125cc', '250cc', '450cc']
const selectedCategory = ref('125cc')

// Ajout de l'état pour suivre l'image survolée
const hoveredIndex = ref(0)

// Données statiques des pilotes
const pilotes125cc = [
  {
    id: 1,
    prenom: 'Maho',
    nom: 'SIMO',
    numero: '321',
    team: '',
    palmares: '',
    image: '/images/pilotes_125/Maho_Simo.webp'
  },
  
]

const pilotes250cc = [
  {
    id: 1,
    prenom: 'Brice',
    nom: 'MAYLIN',
    numero: '831',
    team: '',
    palmares: '',
    image: '/images/pilotes_250/Brice_Maylin.webp'
  },
  {
    id: 2,
    prenom: 'Charles',
    nom: 'LEFRANCOIS',
    numero: '225',
    team: '',
    palmares: '',
    image: '/images/pilotes_250/Charles_Lefrancois.webp'
  },
  {
    id: 3,
    prenom: 'Maxime',
    nom: 'DEPREY',
    numero: '141',
    team: '',
    palmares: '',
    image: '/images/pilotes_250/Maxime_Deprey.webp'
  },
  
  {
    id: 4,
    prenom: 'Calvin',
    nom: 'FONVIELLE',
    numero: '11',
    team: '',
    palmares: '',
    image: '/images/pilotes_250/Calvin_FONVIELLE.webp'
  },
  {
    id: 5,
    prenom: 'Yannis',
    nom: 'ISRUTI',
    numero: '170',
    team: '',
    palmares: '',
    image: '/images/pilotes_250/Yannis_Isruti.webp'
  },
  
]

const pilotes450cc = [
  {
    id: 1,
    prenom: 'Adrien',
    nom: 'MALAVAL',
    numero: '137',
    team: '',
    palmares: '',
    image: '/images/pilotes_450/Adrien_Malaval.webp'
  },
  {
    id: 2,
    prenom: 'Anthony',
    nom: 'BOURDON',
    numero: '945',
    team: '',
    palmares: '',
    image: '/images/pilotes_450/Anthony_Bourdon.webp'
  },
  {
    id: 3,
    prenom: 'Cedric',
    nom: 'SOUBEYRAS',
    numero: '85',
    team: '',
    palmares: '',
    image: '/images/pilotes_450/Cedric_Soubeyras.webp'
  },
  {
    id: 4,
    prenom: 'Jordi',
    nom: 'TIXIER',
    numero: '911',
    team: '',
    palmares: '',
    image: '/images/pilotes_450/Jordi_Tixier.webp'
  },
  {
    id: 5,
    prenom: 'Thomas',
    nom: 'RAMETTE',
    numero: '6',
    team: '',
    palmares: '',
    image: '/images/pilotes_450/Thomas_Ramette.webp'
  },
  
]

// Sélectionner les pilotes selon la catégorie
const pilotesFiltres = computed(() => {
  switch (selectedCategory.value) {
    case '125cc':
      return pilotes125cc
    case '250cc':
      return pilotes250cc
    case '450cc':
      return pilotes450cc
    default:
      return pilotes125cc
  }
})

// Fonction pour gérer la position des images selon leur nom de fichier
const getImagePosition = (imagePath) => {
  // Si l'image contient certains mots clés, ajuster la position
  if (imagePath.toLowerCase().includes('fonvielle')) {
    return 'center 30%'
  }
  if (imagePath.toLowerCase().includes('isruti')) {
    return 'center 20%'
  }
  // Position par défaut
  return 'center center'
}
</script>

<style scoped>
.gallery-container {
  will-change: contents;
}

.gallery-container > div {
  will-change: width, transform;
}

@media (prefers-reduced-motion: no-preference) {
  .gallery-container > div {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
