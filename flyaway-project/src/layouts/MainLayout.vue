<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          FLY AWAY APP
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Pretraživanje',
    caption: 'quasar.dev',
    icon: 'school',
    link: ''
  },
  {
    title: 'Logiraj se',
    caption: 'nez kako linkattt',
    icon: 'code',
    link: ''
  },
  {
    title: 'Registriraj se',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/Register'
  },
  {
    title: 'Upoznaj nas',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Naslovnica',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Česta pitanja',
    caption: '@FlyAwayAPP',
    icon: 'public',
    link: 'https://facebook.com'
  },
  {
    title: 'Naša lokacija',
    caption: '@FlyAwayapp',
    icon: 'favorite',
    link: 'https://instagram.com'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.main-layout {
  /* gradient pozadina */
  background: linear-gradient(135deg, #3397a6, #4646a7, #9c284f);
  height: 100vh;
  color: rgb(0, 0, 0);
}

.q-page-container {
  padding-top: 2rem;
}
</style>
