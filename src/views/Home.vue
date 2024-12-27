<script setup>
import VideoBackground from '../components/VideoBackground.vue'
</script>

<template>
  <div>
    <VideoBackground>
      <h1 class="text-5xl font-bold mb-4">Bienvenue à Sx Tour - Douai</h1>
      <p class="text-xl mb-8">L'événement Supercross incontournable</p>
      <router-link to="/tickets" class="btn btn-primary text-lg px-8 py-3">
        Réserver vos places
      </router-link>
    </VideoBackground>
    
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">À propos de nous</h2>
            <p class="text-gray-600">
              Découvrez l'expérience unique de Sx Tour à Douai. Nous vous proposons des événements 
              exceptionnels dans un cadre magnifique.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Prochains événements</h2>
            <p class="text-gray-600">
              Consultez notre calendrier d'événements et réservez vos places dès maintenant.
            </p>
            <router-link to="/tickets" class="btn btn-primary mt-4 inline-block">
              Voir les tickets
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply bg-[#a2210a] text-white hover:bg-[#8a1c08] transition-colors;
}
</style>