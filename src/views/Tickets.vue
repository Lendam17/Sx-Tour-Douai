<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Tickets</h1>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Pass Journée</h2>
          <p class="text-gray-600 mb-4">Accès à tous les événements de la journée</p>
          <p class="text-2xl font-bold text-primary mb-4">29€</p>
          <button class="btn btn-primary w-full">Réserver</button>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Pass Week-end</h2>
          <p class="text-gray-600 mb-4">Accès complet pendant tout le week-end</p>
          <p class="text-2xl font-bold text-primary mb-4">49€</p>
          <button class="btn btn-primary w-full">Réserver</button>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Pass VIP</h2>
          <p class="text-gray-600 mb-4">Accès VIP avec prestations exclusives</p>
          <p class="text-2xl font-bold text-primary mb-4">99€</p>
          <button class="btn btn-primary w-full">Réserver</button>
        </div>
      </div>
    </div>
  </div>
</template>