<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="detailScroll">
      <detail-swiper
        :top-images="topImages"
        @swiperImageLoad="swiperImageLoad"
      />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />

      <detail-params-info :paramsInfo="paramsInfo" :goodsParams="goodsParams" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";

import { getDetail, Goods, Shop, GoodsParams } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
  },
  data() {
    return {
      iid: null,
      res: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      goodsParams: {},
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
      const data = res.result;

      console.log(
        "detail数据请求到的详情轮播图",
        res.result.itemInfo.topImages
      );
      this.topImages = res.result.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.获取店铺信息对象
      this.shop = new Shop(data.shopInfo);
      //4.获取商品详情信息
      this.detailInfo = data.detailInfo;
      //5.获取参数信息
      this.paramsInfo = data.itemParams;
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  methods: {
    swiperImageLoad() {
      this.$refs.detailScroll.refresh();
    },
    imgLoad() {
      this.$refs.detailScroll.refresh();
    },
  },
};
</script>

<style scoped>
.active {
  color: var(--color-high-text);
}
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: white;
}
.content {
  height: calc(100% - 44px);
  background-color: white;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>