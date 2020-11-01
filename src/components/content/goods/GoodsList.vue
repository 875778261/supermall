<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item"/>
    {{item}}
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  data() {
    return {
      item:null//解决报错问题
    };
  },
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>