<template>
  <q-item clickable v-ripple @click="navigateTo(link)">
    <q-item-section avatar>
      <q-icon :name="icon" size="md" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateTo(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.q-item {
  border: 1px solid var(--q-color-primary);
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: var(--q-color-secondary);
}
</style>
