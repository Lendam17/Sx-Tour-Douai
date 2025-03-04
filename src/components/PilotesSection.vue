<template>
  <section class="relative w-full bg-black">
    <div class="container mx-auto px-4 py-16 sm:py-24">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <h2 class="text-4xl sm:text-5xl font-bold text-white">
          <span class="text-red-600">Pilotes</span>
        </h2>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Découvrez les talents qui feront vibrer la piste lors du SX Tour Douai
        </p>
      </div>

      <!-- Navigation des catégories -->
      <nav class="flex justify-center space-x-8 mb-8" role="tablist">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="handleCategoryChange(cat)"
          class="relative px-4 py-2 text-lg font-semibold transition-all duration-200 rounded-lg"
          :class="selectedCategory === cat ? 'bg-red-600 text-white' : 'text-white hover:bg-red-400 hover:text-black'"
          role="tab"
          :aria-selected="selectedCategory === cat"
        >
          {{ cat }}
        </button>
      </nav>

      <!-- Swiper Carousel -->
      <div class="relative">
        <!-- Flèches de navigation Swiper -->
        <div class="swiper-button-prev left-0 z-10 text-white cursor-pointer"></div>
        <div class="swiper-button-next right-0 z-10 text-white cursor-pointer"></div>

        <Swiper
          ref="swiperRef"
          :modules="[Navigation, Autoplay]"
          :slides-per-view="1"
          :space-between="10"
          :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          @swiper="onSwiper"
          class="w-full"
        >
          <SwiperSlide v-for="pilote in currentPilotes" :key="pilote.id">
            <div class="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-900 shadow-lg">
              <img
                :src="pilote.image"
                :alt="pilote.fullName"
                class="w-full h-full object-cover transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <div class="absolute top-4 right-4">
                  <span class="text-4xl font-bold text-red-600 drop-shadow-lg">
                    #{{ pilote.numero }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4">
                  <h3 class="text-2xl font-bold text-white">
                    {{ pilote.prenom }} <span class="text-red-600">{{ pilote.nom }}</span>
                  </h3>
                  <p class="mt-1 text-gray-300">{{ pilote.team }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const swiperRef = ref(null)

const categories = ['125cc', '250cc', '450cc']
const selectedCategory = ref('125cc')

const pilotes = {
  '125cc': [
    { id: 1, prenom: 'Liam', nom: 'BRUNEAU', numero: '301', team: 'KTM', image: '/images/pilotes_125/Bruneau_Liam.webp' },
    { id: 2, prenom: 'Xavier', nom: 'Camps Fauria', numero: '370', team: 'GasGas', image: '/images/pilotes_125/Camps_Fauria_Xavier.webp' },
    { id: 3, prenom: 'Maho', nom: 'SIMO', numero: '321', team: 'Yamaha', image: '/images/pilotes_125/Simo_Maho.webp' },
    { id: 4, prenom: 'Ilyes', nom: 'ORTIZ', numero: '188', team: 'KTM', image: '/images/pilotes_125/Ortiz_Ilyes.webp' },
    { id: 5, prenom: 'Yannis', nom: 'LOPEZ', numero: '66', team: 'Husqvarna', image: '/images/pilotes_125/Lopez_Yannis.webp' }
  ],
  '250cc': [
    { id: 1, prenom: 'Maxime', nom: 'Desprey', numero: '141', team: 'Union Motocycliste Doloise', image: '/images/pilotes_250/Desprey_Maxime.webp' },
    { id: 2, prenom: 'Calvin', nom: 'FONVIEILLE', numero: '11', team: 'A.G.S. Puech Rampant', image: '/images/pilotes_250/Fonvieille_Calvin.webp' },
    { id: 3, prenom: 'Charles', nom: 'LEFRANCOIS', numero: '225', team: 'Moto Club La Bosse de Bretagne', image: '/images/pilotes_250/Lefrançois_Charles.webp' },
    { id: 4, prenom: 'Yannis', nom: 'ISRUTI', numero: '170', team: 'MC Chateauneuf les Martigues', image: '/images/pilotes_250/Irsuti_Yannis.webp' },
    { id: 5, prenom: 'Mickaël', nom: 'LAMARQUE', numero: '22', team: 'Moto Club Montendrais', image: '/images/pilotes_250/Lamarque_Mickaël.webp' }
  ],
  '450cc': [
    { id: 1, prenom: 'Gregory', nom: 'ARANDA', numero: '20', team: 'Moto Club des Costieres', image: '/images/pilotes_450/Aranda_Gregory.webp' },
    { id: 2, prenom: 'Anthony', nom: 'BOURDON', numero: '945', team: 'Moto Club Langonnais', image: '/images/pilotes_450/Bourdon_Anthony.webp' },
    { id: 3, prenom: 'Adrien', nom: 'ESCOFFIER', numero: '137', team: 'Moto Club Pertuis Durance Lubéron', image: '/images/pilotes_450/Escoffier_Adrien.webp' },
    { id: 4, prenom: 'Cédric', nom: 'SOUBEYRAS', numero: '85', team: 'MC Chateauneuf les Martigues', image: '/images/pilotes_450/Soubeyras_Cedric.webp' },
    { id: 5, prenom: 'Thomas', nom: 'RAMETTE', numero: '6', team: 'MC Brienon', image: '/images/pilotes_450/Ramette_Thomas.webp' }
  ]
}

const currentPilotes = computed(() => pilotes[selectedCategory.value] || [])

const handleCategoryChange = (category) => {
  selectedCategory.value = category
}

// Associe Swiper aux flèches de navigation
const onSwiper = (swiper) => {
  setTimeout(() => {
    swiper.navigation.init()
    swiper.navigation.update()
  }, 100)
}
</script>