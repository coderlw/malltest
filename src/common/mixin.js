import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
    data() {
        return {
            iid: null,
            itemImgListener: null,
            newRefresh: null
        }

    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100);

        this.itemImgListener = () => {
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
};
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        positionListener(position) {
            this.isShow = -position.y > 1000;
        }
    }
}