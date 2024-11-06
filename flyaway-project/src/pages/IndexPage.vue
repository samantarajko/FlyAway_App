<template>
  <q-page class="flex flex-center">
    <!-- Wrapper div for buttons to prevent overlap and ensure they're aligned -->
    <div class="q-gutter-md flex">
      <q-btn 
        label="Go to Login" 
        color="primary" 
        @click="goToLogin"
      />
      <q-btn 
        label="About Us" 
        color="secondary" 
        @click="goToAboutUs"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLogin() {
  router.push('/login');
}

function goToAboutUs() {
  router.push('/about-us');
}

defineOptions({
  name: 'IndexPage'
});
</script>
