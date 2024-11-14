<template>
  <q-page class="AboutUsPage">
    <div class="about-container q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h5 text-primary">Više o nama</div>
        </q-card-section>

        <q-card-section>
          <p>Dobrodošli na našu WEB stranicu! Ovdje možete pronaći sve informacije o nama baš kao i naša nezaboravna putovanja!</p>
          
          <p>Naš tim vjeruje da je svakom čovjeku potrebna avantura, a naša agencija baš to nudi!</p>
        </q-card-section>

        <q-card-section>
          <div class="text-subtitle1 text-weight-bold">Pretraživanje ponudi</div>
          <ul>
            <q-btn flat to="/travel" label="Sljedeća putovanja" color="primary" />
            <q-btn flat to="/qa" label="Pitanja" color="primary" />
            <q-btn flat to="/team" label="Upoznaj tim" color="primary" />
          </ul>
        </q-card-section>

        <q-card-actions align="left">
          <q-btn label="Natrag" color="primary" @click="goBack" />
        </q-card-actions>

      </q-card>
    </div>
  </q-page>
</template>



<script>
export default {
  name: 'AboutUsPage',
  methods: {
    goBack() {
      this.$router.go(-1)  // Vraca nazad na prijasnju stranicu
    }
  }
}
</script>

<style scoped>
.about-container {
  max-width: 600px;
  margin: auto;
  margin-top: 20vh;
}
</style>

