<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Toast",
  data() {
    //这里存放数据
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message = "默认文字", delay = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, delay);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  color: white;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  /* 根据自身的宽高进行偏移 */
  z-index: 999;
}
</style>