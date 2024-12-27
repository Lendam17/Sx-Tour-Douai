<script setup>
const videoUrl = "https://www.youtube.com/watch?v=AxIedVuX69k&t=330s&ab_channel=SXTour-ChampionnatdeFrancedeSupercross"
</script>

<template>
  <div class="video-container">
    <video autoplay muted loop class="video-background">
      <source :src="videoUrl" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
    <div class="video-overlay">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.video-overlay {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>