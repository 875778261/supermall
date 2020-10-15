<template>
  <div class="params-info" v-if="Object.keys(goodsParams).length !== 0">
    
      <table
        v-for="(tables, index) in goodsParams.sizes"
        :key="index"
        class="info-size"
      >
        <tr v-for="(tr, indey) in tables" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </table>
    <table class="info-params">
      <tr v-for="(set, index) in goodsParams.infos" :key="index">
        <td class="info-params-key">{{ set.key }}</td>
        <td class="info-params-value">{{ set.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParams.images.length !== 0">
      <img :src="goodsParams.images.images[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "DetailParamsInfo",
  components: {},
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style scoped>
.params-info {
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  padding: 20px 5px;
}

.info-size {
  width: 100%;
  border-collapse: collapse;
}
.info-size tr {
  height: 42px;
}

.info-size tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-params {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.info-params .info-params-key,
.info-params-value {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-params-key {
  width: 95px;
  height: 42px;
}
.info-params-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>