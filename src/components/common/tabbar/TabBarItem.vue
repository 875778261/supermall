<template>
  <div class="tab-bar-item" @click="itemClick()">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    //在使用模板处的标签传入值
    path: String,
    activeColor: {
      type:String,
      default:'red'
    },
  },
  data() {
    return {
      /*  isActive: true, */
    };
  },
  computed: {
    isActive() {
      //$route:处于活跃的路由对象
      //indexOf 从$route.path中没有找到this.path的字符串则返回-1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      //是否处于活跃状态，是：返回颜色。否：返回空对象
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      //在props中传入path
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* 距离顶部3px */
  margin-top: 3px;
  /* 清除图片下多余的3px */
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>