<template>
  <v-card tile class="elevation-0">
    <profile-header :profile-pic="profilePic"></profile-header>
    <profile-content :name="name" :links="links"></profile-content>
    <profile-actions class="mt-3"></profile-actions>
  </v-card>
</template>

<script>
import ProfileHeader from "@/components/profile/ProfileHeader.vue";
import ProfileContent from "@/components/profile/ProfileContent.vue";
import ProfileActions from "@/components/profile/ProfileActions.vue";
import { db } from "@/fb";
import { doc, getDoc } from "firebase/firestore";

export default {
  components: { ProfileHeader, ProfileContent, ProfileActions },
  data() {
    return {
      name: "",
      email: "",
      profilePic: "",
      links: [],
    };
  },
  async created() {
    const docRef = doc(db, "profiles", this.$route.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.name = docSnap.data().user_name;
      this.profilePic = docSnap.data().profile_pic;
      this.links = docSnap.data().links;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>

<style></style>
