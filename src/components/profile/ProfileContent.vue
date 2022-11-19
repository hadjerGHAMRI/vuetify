<template>
  <v-card-text class="mt-12 d-flex flex-column align-center">
    <h2>{{ name }}</h2>
    <span class="subtitle-2 mt-2">{{ email }}</span>
    
    <!-- links -->
    <v-row class="mt-5" >
      <v-col v-for="link in links" :key="link.id" class="col-4 col-md-3 col-lg-2  d-flex flex-column align-center" >
        <v-btn icon :href="'https://' + link.link" target="_blank">
          <v-avatar size="36">
            <img :src="require(`@/assets/${link.name.toLowerCase()}.png`)"/>
          </v-avatar>
        </v-btn>

        <span class="subtitle-2 mt-2">
          {{ link.name }}
        </span>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "User name" },
    email: { type: String, default: "User@name.dz" },
    links: { type: Array, default: () => [] },
  },
};
</script>

<style></style>
