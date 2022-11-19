
<template>
  <div class="header">
    <v-container class="black mx-auto" fluid style="height: 120px">
      <v-layout row wrap justify-center>
        <v-flex xs3 sm3 md2 ma-5>
          <img src="/logo.png" height="20" class="white--text darken-4" />
        </v-flex>
        <v-flex xs6 sm6 offset-sm3 mt-16>
          <v-avatar size="70" class="grey lighten-2">
            <img :src="'data:image/jpeg;base64,' + profilePic" />
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="mx-auto mt-10">
      <v-layout row wrap justify-center>
        <v-flex xs7 sm4 md3 lg2 xl1>
          <H2>{{ name }}</H2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { db } from "@/fb";
import { doc, getDoc } from "firebase/firestore";
export default {
  data() {
    return {
      name: "",
      email: "",
      profilePic: "",
    };
  },
  async created() {
    const docRef = doc(db, "profiles", this.$route.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.name = docSnap.data().user_name;
      this.profilePic = docSnap.data().profile_pic;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>
    