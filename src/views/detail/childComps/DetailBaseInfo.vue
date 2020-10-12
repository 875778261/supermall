<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
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


.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.goods-title {
  font-size: 18px;
  color: #222;
}
.price {
  margin-top: 10px;
}

.n-price {
  color: var(--color-high-text);
  font-size: 25px;
}
.o-price {
  text-decoration: line-through;
  margin-left: 5px;
}

.discount {
  font-size: 12px;
  /*  padding-left: 6px; */
  background-color: var(--color-high-text);
  padding: 2px 5px;
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  margin-left: 5px;
 /*  vertical-align: top; */
  position: relative;
  top: -8px;
}

.info-other {
  font-size: 13px;
  margin-top: 15px;
  display: flex;
  border-bottom: solid 1px rgba(100,100,100,.1);
  line-height: 30px;
  justify-content: space-between;
}


.info-service{
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item {
  font-size: 13px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
    font-size: 13px;
    color: #333;
  }

</style>
