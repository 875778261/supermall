<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" /><span>全选</span>
    </div>
    <div>合计:{{ totalPrice }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return item.price * item.count;
          }, 0)
      );
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #aaa;
  line-height: 40px;
}
.check-content {
  display: flex;
  align-items: center;
}
.check-button {
  margin-left: 10px;
  width: 21px;
  height: 20px;
  line-height: 20px;
}
.check-content span {
  margin-left: 10px;
}
</style>