<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  
  computed: {
    ...mapGetters({
      cartList: "cartList",
    }),
  },
  activated(){
    this.$refs.scroll.refresh()  
  },
  updated() {
  },
};
</script>
<style scoped>
.cart-list {
  height: calc(100vh - 40px - 44px - 49px );
}
.content {
  height: 100%;
  overflow: hidden;
}
img{
    width: 300px;
}
</style>