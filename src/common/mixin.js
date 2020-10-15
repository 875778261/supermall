import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
        }
    },
    mounted() {
        //common/utils 防抖函数debounce
        const refresh = debounce(this.$refs.scroll.refresh);
        //对监听的时间进行保存
        this.itemImgListener = () => {
            refresh();
        };
        this.$bus.$on("itemImgLoad", this.itemImgListener);
        console.log('正在使用混入中的方法');
    }
}

export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    components: {
        BackTop,
    },
    methods: {
        /**
     * 返回顶部相关方法
     */
        topClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
            /* 访问scroll组件中定义的scrollTo方法，传参给Scroll*/
        },
        showBackTop(position) {
            this.isShowBackTop = position.y < -1000;
        }
    }
}