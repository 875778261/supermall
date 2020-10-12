<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    
      <div class="goods-title">{{ goods.title }}</div>
      <div class="price">
        <sapn class="n-price">{{ goods.newPrice }}</sapn>
        <sapn class="o-price">{{ goods.oldPrice }}</sapn>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
    
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key=index>
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.goods-title {
  font-size: 18px;
  /* font-weight:450; */
  padding: 6px 6px 15px 6px;
}
.price{
  padding: 6px 6px 0 6px;
}
.n-price {
  color: var(--color-high-text);

  padding-right: 5px;
  font-size: 25px;
}
.o-price {
  text-decoration: line-through;
  padding-right: 10px;
}
.discount {
  font-size: 15px;
  /*  padding-left: 6px; */
  background-color: var(--color-high-text);
  padding: 3px 3px 3px 3px;
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  vertical-align:top;
}
.info-other{
  font-size: 15px;
  padding-top: 27px;
  padding-bottom: 5px;
  display: flex;
  border-bottom:solid 2px #CCCCCC;
}
.info-other span{
  flex: 1;
}
.info-service-item{
font-size: 13px;
}
.info-service-item img{
  padding-top: 6px;
  width: 13px;
}
</style>
