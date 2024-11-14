<template>
    <q-page class="travel-page">
      <div class="travel-container q-pa-md">
        <q-card>
          <q-card-section>
            <q-btn
              flat
              label="Back"
              icon="arrow_back"
              color="primary"
              @click="goBack"
              class="q-mb-md"
            />
            <div class="text-h5 text-primary">Gdje dalje putujemo?</div>
            <p>Istražite neka nevjerojatna odredišta za svoju sljedeću avanturu!</p>
          </q-card-section>
  
          <!-- Travel Destinations List -->
          <q-list bordered separator>
            <q-item
              v-for="(destination, index) in destinations"
              :key="index"
              class="q-mb-md"
            >
              <q-item-section avatar>
                <q-img :src="destination.image" :alt="destination.name" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-primary">{{ destination.name }}</q-item-label>
                <q-item-label caption>{{ destination.story }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'TravelEu',
    data() {
      return {
        destinations: [
          {
            name: 'Pariz, Francuska',
            story: 'Znan kao "Grad svijetla" Pariz nudi svijetski poznate umjetnosti, povijesne arhitekture, i vibrantan ulični život. Bez obzira posjećujete li Eiffelov toranj ili šetate Montmartreom, Pariz ima nenadmašiv šarm.',
            image: 'https://source.unsplash.com/200x200/?paris,eiffel'
          },
          {
            name: 'Rim, Italija',
            story: 'Rim je grad prožet poviješću, gdje se drevne ruševine susreću s modernom talijanskom kulturom. Posjetite Koloseum, prošetajte Vatikanom i uronite u okuse talijanske kuhinje.',
            image: 'https://source.unsplash.com/200x200/?rome,colosseum'
          },
          {
            name: 'Barcelona, Španjolska',
            story: 'Poznata po Gaudíjevoj zadivljujućoj arhitekturi, uključujući Sagradu Familiju i Park Güell, Barcelona spaja život na plaži s bogatom katalonskom kulturom, što je čini obaveznim posjetom u Europi.',
            image: 'https://source.unsplash.com/200x200/?barcelona,gaudi'
          }
        ]
      }
    },
    methods: {
      goBack() {
        if (window.history.length > 1) {
          this.$router.go(-1)
        } else {
          this.$router.push('/')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .travel-container {
    max-width: 600px;
    margin: auto;
    margin-top: 10vh;
  }
  </style>
  