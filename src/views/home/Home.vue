<template>
  <div id="home">
    <header>
        <HeaderMusic></HeaderMusic>
    </header>

    <footer>
        <FooterMusic></FooterMusic>
    </footer>
  </div>
</template>

<script>
import HeaderMusic from "@/components/Header-music.vue";
import FooterMusic from '@/components/Footer-music.vue'
export default {
    components: {
        HeaderMusic,
        FooterMusic
    }
}
</script>

<style lang="scss">
   
</style>