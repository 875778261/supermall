<template>
  <div>
    <!-- Detail详情页
    {{this.$route.params}}
    {{iid}} -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import { getDetail,Goods } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
  data() {
    return {
      iid: null,
      res: null,
      topImages: [],
      goods: {},
    };
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    //2.根据iid请求详情数据→network/detail
    getDetail(this.iid).then((res) => {
      console.log("detail数据请求到的res", res);

      //1.获取顶部轮播图数据
      const data = res.result

      console.log(
        "detail数据请求到的详情轮播图",
        res.result.itemInfo.topImages
      );
      this.topImages = res.result.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    });
  },
  methods: {},
};
</script>

<style scoped>
.active {
  color: var(--color-high-text);
}
</style>