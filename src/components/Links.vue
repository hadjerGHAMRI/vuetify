
<template>
  <div class="links">
    <v-container class="ma-5">
      <v-layout row wrap justify-center>
        <v-flex
          xs5
          sm3
          md2
          lg1
          xl1
          class="ma-3"
          v-for="link in links"
          :key="link.id"
        >
          <v-btn
            text
            class="black white--text"
            :href="'https://'+link.link"
            target="_blank"
            
          >
            <!-- <v-icon left>mdi-{{ link.name.toString().toLowerCase() }}</v-icon> -->
            <v-avatar size="20" class="mr-1 ml-n2"> <img :src="'/'+link.name.toString().toLowerCase()+'.png'" ></v-avatar>
           
            {{ link.name }}</v-btn
          >
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
      links: [],
    };
  },
  async created() {
    const docRef = doc(db, "profiles", this.$route.params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log(docSnap.data().links);
     this.links=docSnap.data().links;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>
<!-- { id: 0, name: "Twitter", link: "https://twitter.com" },
{ id: 1, name: "Facebook", link: "https://facebook.com" },
{ id: 2, name: "Linkedin", link: "https://linkedin.com" },
{ id: 3, name: "Youtube", link: "https://youtube.com" }, -->