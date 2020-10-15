<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="top" />

    <scroll
      class="content"
      ref="scroll"
      @scroll="scrollPosition"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />

      <detail-params-info
        :paramsInfo="paramsInfo"
        :goodsParams="goodsParams"
        ref="params"
      />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommends" class="goods-list" ref="recommend" />
    </scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
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
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "components/content/goods/GoodsList";
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";
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
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [itemListenerMixin, backTopMixin],
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
      commentInfo: {},
      recommends: [],
      /* itemImgListener: null,混入 */
      themeTopYs: [], //各组件元素的顶部所在y坐标
      getThemeTopY: null, //获取各组件元素的顶部所在y坐标
      currentIndex: null,
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
      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //3.请求推荐信息
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    //4.获取组件元素顶部位置
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(-this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);
      console.log("等待所有元素的防抖");
      console.log(this.themeTopYs);
    }, 100);
  },

  mounted() {
    //已经混入
    /* const refresh = debounce(this.$refs.scroll.refresh);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener); */
  },
  destroyed() {
    console.log("离开了Detail");
    //取消itemImgLoad事件中的this.itemImgListener方法,取消全局事件监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },

  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, this.themeTopYs[index]);
    },
    scrollPosition(position) {
      //监听滚动位置
      //console.log(position);
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < this.themeTopYs.length - 1 &&
            position.y <= this.themeTopYs[i] &&
            position.y > this.themeTopYs[i + 1]) ||
            (i === this.themeTopYs.length - 1 &&
              position.y < this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          console.log(i);
          this.$refs.top.currentIndex = this.currentIndex;
        }
      }
      //BackTop的显示与隐藏
      this.showBackTop(position);
      /* for (let i in this.themeTopYs) {
        if (position.y < this.themeTopYs[i] && position.y > themeTopYs[i + 1]) {
          console.log(i);
        }
      } */
    },
    addToCart() {
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      this.$store.dispatch("addCart", product);
    },
  },
  updated() {},
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
.goods-list {
  margin-top: 2px;
}
</style>