<template>
  <q-layout view="lHh Lpr lFf">
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
        <q-toolbar-title class="">
          <q-toolbar-title> <h4>IZBORNIK</h4> </q-toolbar-title>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

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
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Upoznaj tim",
    caption: "Upoznajte naš tim!",
    icon: "menu_book",
    link: "/team",
  },
  {
    title: "Pretraživanje",
    caption: "Pretražite putovanja",
    icon: "search",
    link: "/",
  },
  {
    title: "Pitanja",
    caption: "FAQ - često postavljena pitanja",
    icon: "info",
    link: "/qa",
  },
  {
    title: "Sljedeća putovanja",
    caption: "Otkrite gdje sljedeće putujemo",
    icon: "place",
    link: "/travel",
  },
  {
    title: "Registracija",
    caption: "Prijavite se kao novi korisnik",
    icon: "person_add",
    link: "/register",
  },
  {
    title: "Login",
    caption: "Prijavite se u sustav",
    icon: "login",
    link: "/login",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
