<template>
  <q-page class="LogInPage">
    <div class="login-container q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="username"
            label="Username"
            outlined
            dense
            required
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            outlined
            dense
            required
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Login" color="primary" @click="handleLogin" />
        </q-card-actions>

        <q-card-actions align="left">
          <q-btn label="Natrag" color="primary" @click="goBack" />
        </q-card-actions>

      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LogInPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if (this.username && this.password) {
        
        console.log('Logging in with:', this.username, this.password)

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

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  margin-top: 20vh;
}
</style>
