<template>
    <q-page class="qa-page">
      <div class="qa-container q-pa-md">
        <q-card>
          <q-card-section>
            <q-btn
              flat
              label="Natrag"
              icon="arrow_back"
              color="primary"
              @click="goBack"
              class="q-mb-md"
            />
            <div class="text-h5 text-primary">Često postavljena pitanja</div>
            <p>Pretraži najčešće postavljena pitanja:</p>
          </q-card-section>
  
          <!-- Q&A List -->
          <q-list bordered separator>
            <q-expansion-item
              v-for="(qa, index) in qaList"
              :key="index"
              :label="qa.question"
              expand-icon="keyboard_arrow_down"
              dense
              header-class="text-primary text-weight-bold"
            >
              <div class="q-pa-sm">
                {{ qa.answer }}
              </div>
            </q-expansion-item>
          </q-list>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'QA',
    data() {
      return {
        qaList: [
          {
            question: 'Što je zapravo FlyAway aplikacija?',
            answer: 'Ova aplikacija je dizajnirana da pruži ljudima jednostavan način potražnje jeftinih putovanja.'
          },
          {
            question: 'Mogu li dobiti povrat novca?',
            answer: 'Nema povrata novca.'
          },
          {
            question: 'Osiguranje i da li je uključeno u cijenu?',
            answer: 'Osiguranje je uključeno u svaki paket putovanja.'
          },
          {
            question: 'Imam li osiguran prijevoz?',
            answer: 'Prijevoz za osobnu gradsku vožnju nije osiguran, samo grupno razgledavanje grada sa vodićem.'
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
  .qa-container {
    max-width: 600px;
    margin: auto;
    margin-top: 10vh;
  }
  </style>
  