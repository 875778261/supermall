
<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view/>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <ul>
      <li>第1行</li>
      <li>第2行</li>
      <li>第3行</li>
      <li>第4行</li>
      <li>第5行</li>
      <li>第6行</li>
      <li>第7行</li>
      <li>第8行</li>
      <li>第9行</li>
      <li>第10行</li>
      <li>第11行</li>
      <li>第12行</li>
      <li>第13行</li>
      <li>第14行</li>
      <li>第15行</li>
      <li>第16行</li>
      <li>第17行</li>
      <li>第18行</li>
      <li>第19行</li>
      <li>第20行</li>
      <li>第21行</li>
      <li>第22行</li>
      <li>第23行</li>
      <li>第24行</li>
      <li>第25行</li>
      <li>第26行</li>
      <li>第27行</li>
      <li>第28行</li>
      <li>第29行</li>
      <li>第30行</li>
      <li>第31行</li>
      <li>第32行</li>
      <li>第33行</li>
      <li>第34行</li>
      <li>第35行</li>
      <li>第36行</li>
      <li>第37行</li>
      <li>第38行</li>
      <li>第39行</li>
      <li>第40行</li>
      <li>第41行</li>
      <li>第42行</li>
      <li>第43行</li>
      <li>第44行</li>
      <li>第45行</li>
      <li>第46行</li>
      <li>第47行</li>
      <li>第48行</li>
      <li>第49行</li>
      <li>第50行</li>
      <li>第51行</li>
      <li>第52行</li>
      <li>第53行</li>
      <li>第54行</li>
      <li>第55行</li>
      <li>第56行</li>
      <li>第57行</li>
      <li>第58行</li>
      <li>第59行</li>
      <li>第60行</li>
      <li>第61行</li>
      <li>第62行</li>
      <li>第63行</li>
      <li>第64行</li>
      <li>第65行</li>
      <li>第66行</li>
      <li>第67行</li>
      <li>第68行</li>
      <li>第69行</li>
      <li>第70行</li>
      <li>第71行</li>
      <li>第72行</li>
      <li>第73行</li>
      <li>第74行</li>
      <li>第75行</li>
      <li>第76行</li>
      <li>第77行</li>
      <li>第78行</li>
      <li>第79行</li>
      <li>第80行</li>
      <li>第81行</li>
      <li>第82行</li>
      <li>第83行</li>
      <li>第84行</li>
      <li>第85行</li>
      <li>第86行</li>
      <li>第87行</li>
      <li>第88行</li>
      <li>第89行</li>
      <li>第90行</li>
      <li>第91行</li>
      <li>第92行</li>
      <li>第93行</li>
      <li>第94行</li>
      <li>第95行</li>
      <li>第96行</li>
      <li>第97行</li>
      <li>第98行</li>
      <li>第99行</li>
      <li>第100行</li>
    </ul>
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

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
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
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log("res");
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(
          "res, type, res.data.list,' this.goods[type].list",
          "this.goods"
        );
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* 固定navbar */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  height: calc(100% - 98px);
  overflow: hidden;
}
</style>