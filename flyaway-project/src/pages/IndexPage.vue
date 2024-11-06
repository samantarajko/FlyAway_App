<template>
  <q-page class="flex flex-center">
    <q-btn 
      label="Go to Login" 
      color="primary" 
      @click="goToLogin" 
      class="q-mt-md"
    />
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLogin() {
  router.push('/login');
}

defineOptions({
  name: 'IndexPage'
});
</script>
