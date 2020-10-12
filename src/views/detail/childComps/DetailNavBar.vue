<template>
  <div>
    <nav-bar>
      <div class="back" slot="left">
        <img src="~assets/img/common/back.svg" @click="backClick" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
          v-for="(item, index) in title"
        >
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
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.back();
      /* this.$router.go(-1); */
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 18px;
}
.title-item {
  flex: 1;
}
.back img {
  margin-top: 2vh;
  margin-left: 4vw;
  width: 20px;
  height: 20px;
}
.active {
  color: var(--color-high-text);
}
</style>