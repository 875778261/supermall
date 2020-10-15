
<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isShowTabControl"
    />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="topClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import { itemListenerMixin, backTopMixin } from "common/mixin";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      scroll: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0 /* TabControl需要吸顶位置 */,
      isShowTabControl: false,
      saveY: 0,
      itemImgListener: null,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    //创建组件后
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求Goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  destroyed() {
    console.log("home已经被销毁");
  },

  mounted() {
    //通过事件总线，监听item中图片加载完成，并重新计算高度
    //以下混入
    /* //common/utils 防抖函数debounce
    const refresh = debounce(this.$refs.scroll.refresh);
    //对监听的时间进行保存
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.ItemImgListener); */
  },
  deactivated() {
    //1.保存saveY
    console.log("离开Home时的saveY", this.saveY);
    this.saveY = this.$refs.scroll.getSaveY();
    //取消全局事件监听
    this.$bus.$off("itemImgLoad", this.ItemImgListener);
  },
  activated() {
    console.log("重新进入时的saveY", this.saveY);
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    //返回页面时刷新可以避免回弹y0
    this.$refs.scroll.refresh();
  },

  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    /**
     * 返回顶部相关方法
     */
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
      /* 访问scroll组件中定义的scrollTo方法，传参给Scroll*/
    },

    /**
     * BScroll内元素的控制
     */
    contentScroll(position) {
      //BackTop的显示与隐藏
      this.showBackTop(position);
      //TabControl的显示与隐藏
      this.isShowTabControl =
        position.y <= -this.$refs.tabControl2.$el.offsetTop;
    },
    loadMore() {
      console.log("已执行下拉加载更多");
      this.getHomeGoods(this.currentType);
      //记录了当前选中的类型
    },

    //轮播图加载监听
    swiperImageLoad() {
      console.log(
        "tabControl监听轮播图后高度",
        this.$refs.tabControl2.$el.offsetTop
      );
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log("请求首页的数据成功");
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(
          "拉取GOODS数据：",
          "res, type, res.data.list,' this.goods[type].list",
          "this.goods"
        );
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  /*浏览器原生滚动时 固定navbar */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/*bs中的tc 使用better-scroll后失效 */
/* 
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
 */
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* 
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
 */
</style>