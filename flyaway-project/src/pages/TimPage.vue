<template>
    <q-page class="team-page">
      <div class="team-container q-pa-md">
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
            <div class="text-h5 text-primary">Upoznaj naš tim</div>
            <p>Saznaj nešto o nama:</p>
          </q-card-section>

          <!-- Članovi tima -->
          <q-list bordered separator>
            <q-expansion-item
              v-for="(member, index) in teamMembers"
              :key="index"
              :label="member.name"
              :caption="member.role"
              expand-icon="keyboard_arrow_down"
              dense
              header-class="text-primary text-weight-bold"
            >
              <div class="q-pa-sm">
                {{ member.description }}
              </div>
            </q-expansion-item>
          </q-list>
        </q-card>
      </div>
    </q-page>
  </template>

  <script>
  export default {
    name: 'UpoznajTim',
    data() {
      return {
        teamMembers: [
          {
            name: 'Samanta Rajko',
            role: '1# Vodić',
            description: 'Samanta dolazi iz prekrasne Istre, studira informatiku i obožava putovati. Tečno govori engleski, francuski i njemački.'
          },
          {
            name: 'Bartol Maretić',
            role: '2# Vodić',
            description: 'Bartol također dolazi iz Istre, voli životinje te također studira informatiku. Voli putovati i tečno govori engleski, njemački i ruski.'
          },
          {
            name: 'Eduard Pucić',
            role: '3# Vodić',
            description: 'Eduard je student informatike koji tečno govori engleski, španjolski i talijanski.'
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
  .team-container {
    max-width: 600px;
    margin: auto;
    margin-top: 10vh;
  }
  </style>

