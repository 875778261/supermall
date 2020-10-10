<template>
  <div>
    <nav-bar>
      <div slot="left"></div>
      <div slot="center" class="title">
        <div 
        class="title-item" 
        v-for="(item, index) in title">
            {{ item }}
            </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["aa", "aa", "aa", "aa"],
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
</style>