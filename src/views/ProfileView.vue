<template>
  <div >
    <headerProfile />

    <links />
  </div>
</template>

<script>
import links from "@/components/Links";
import headerProfile from "@/components/Header.vue";
export default {
  name: "Profile",

  components: { links, headerProfile },
};
</script>
<style >
html {
  overflow-y: auto;
}
</style>