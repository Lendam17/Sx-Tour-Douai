<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['fixed-navbar', { 'scrolled': isScrolled }]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-white">
            Sx Tour - Douai
          </router-link>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Accueiltest</router-link>
          <router-link to="/tickets" class="nav-link">Tickets</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" class="mobile-nav-link">Accueil</router-link>
        <router-link to="/tickets" class="mobile-nav-link">Tickets</router-link>
        <router-link to="/contact" class="mobile-nav-link">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
}

.fixed-navbar.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
}

.nav-link {
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #a2210a;
}

.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mobile-nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #1a1a1a;
  font-weight: 500;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #a2210a;
}
</style>