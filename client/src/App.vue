<script setup lang="ts">
import { useUserStore } from './stores/user'
import { computed } from 'vue';

const userStore = useUserStore();
const users = computed(() => userStore.getUsers)

</script>

<template>
  <main>
    <div>
      User list
      <div v-for="user in users">
        <div>{{ user.name }}</div>
        <div>{{ user.age }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
