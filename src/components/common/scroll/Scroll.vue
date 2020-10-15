<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
      /* 监听滚动配置  0.1不监听 2离开时监听 3滚动就监听*/
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
      /* 上拉事件配置 */
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        //console.log(position);
        this.$emit("scroll", position);
      });
    }

    //3.监听上拉加载更多事件

    //判断是否监听上拉加载
    if (this.pullUpLoad) {
      //监听上拉加载
      this.scroll.on("pullingUp", () => {
        console.log("Scroll.vue监听到已拉到底部");
        this.$emit("pullingUp");
      });
    }
  },

  methods: {
    //定位滚动位置
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    getSaveY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>