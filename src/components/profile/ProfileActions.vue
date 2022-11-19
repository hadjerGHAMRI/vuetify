<template>
  <v-card-actions class="d-flex justify-center">
    <v-btn dark>
      <v-icon left>
        {{ mdiAccount }}
      </v-icon>
      Partager
    </v-btn>
    <v-btn dark class="ml-8">
      <v-icon left>
        {{ mdiCartOutline }}
      </v-icon>
      Boutique
    </v-btn>
  </v-card-actions>
</template>

<script>
import { mdiShareVariantOutline, mdiCartOutline } from "@mdi/js";
export default {
  data() {
    return {
      mdiAccount: mdiShareVariantOutline,
      mdiCartOutline: mdiCartOutline,
    };
  },
};
</script>

<style></style>
