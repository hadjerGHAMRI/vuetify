<template>
  <div class="black" >
    <v-app-bar flat color="rgba(0, 0, 0, 0)">
      <v-toolbar-title class="mx-auto">
        <img :src="require('@/assets/logo.png')" alt="profile-picture" height="20" class="white--text darken-4" />
      </v-toolbar-title>
    </v-app-bar>

    <v-card-title>
      <v-avatar size="100" class="picture-border mb-n12 mx-auto">
        <img :src="profilePic?`data:image/jpeg;base64,${profilePic}` : require('@/assets/default-user.png')" />
      </v-avatar>
    </v-card-title>
  </div>
</template>

<script>
export default {
  props: { profilePic: { type: String, default: "" } },
};
</script>

<style>
</style>
