<template>
  <q-page padding class="register-page">
    <div class="row justify-center">
      <div class="col-12 col-sm-8 col-md-6">
        <q-card>
          <q-card-section class="text-h6">Register</q-card-section>

          <q-card-section>
            <q-input v-model="name" label="Full Name" outlined />
            <q-input v-model="email" label="Email" type="email" outlined class="q-mt-md" />
            <q-input v-model="password" label="Password" type="password" outlined class="q-mt-md" />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              label="Register"
              color="primary"
              @click="handleRegister"
              :loading="isLoading"
            />
          </q-card-actions>

          <q-card-actions align="left">
          <q-btn label="Natrag" color="primary" @click="goBack" />
        </q-card-actions>
        
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'RegisterMe',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleRegister() {
      if (this.username && this.email && this.password) {
        
        console.log('Registriraj se sa:', this.username, this.email, this.password)

        // login uspjesan idi na home page
        this.$router.push('/')
      } else {
        // error ako su polja prazna
        this.$q.notify({
          type: 'negative',
          message: 'Please fill in both fields'
        })
      }
    },
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)  // slijedeca stranica ako ima povijesti
      } else {
        this.$router.push('/')  // ako nema sljedece stranice odi na homepage
      }
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// podaci o korisniku
const name = ref('')
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const handleRegister = () => {
  // validacija
  if (name.value && email.value && password.value) {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
      alert('Registration successful! Redirecting to login...')
      router.push('/login') // prebacivanje na login stranicu nakon uspjesne prijave
    }, 1000)
  } else {
    alert('Ispunite sva polja!')
  }
}
</script>

<style scoped>
.register-page {
  max-width: 900px;
  margin: 0 auto;
}
</style>