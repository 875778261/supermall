<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "CheckButton",
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaaaaa;
}
.checked {
  border: 2px solid red;
  background-color: red;
}
</style>