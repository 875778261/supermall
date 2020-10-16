<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="selectAllClick"
      /><span>全选</span>
    </div>
    <div class="total-price">合计:{{ `￥` + totalPrice }}</div>
    <div class="calculate">去计算({{ checkLength }})</div>
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
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    /* totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return item.price * item.count;
          }, 0)
      );
    }, */
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      /* return !this.$store.state.cartList.filter((item) => !item.checked).length; */
      /* return !this.$store.state.cartList.find((item) => !item.checked); */
      for (let item of this.$store.state.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    selectAllClick() {
      console.log("selectAllClick");

      /* 
        if (this.$store.state.cartList.length === 0) return;
      if (this.isSelectAll !== false) {
        for (
          let index = 0;
          index < this.$store.state.cartList.length;
          index++
        ) {
          this.$store.state.cartList[index].checked = false;
        }
      } else {
        let noSelect = this.$store.state.cartList.filter(
          (item) => !item.checked
        );
        for (let index = 0; index < noSelect.length; index++) {
          noSelect[index].checked = true;
        }
      }
       */

      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
      //不可用
      /* this.$store.state.cartList.forEach(
        (item) => (item.checked = !this.isSelectAll)
      ); */
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #aaa;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
}
.check-content {
  display: flex;
  align-items: center;
  width: 73px;
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
.total-price {
  margin-left: 10px;
  flex: 1;
}
.calculate {
  width: 100px;
  background-color: orange;
  text-align: center;
}
</style>