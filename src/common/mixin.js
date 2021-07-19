import { debounce } from './utils'

export const itemListenerMixin = {
    mounted() {
        const newRefresh = debounce(this.$refs.scroll.refresh);

        this.itemImgListener = () => {
            newRefresh()
        }

        this.$bus.$on('itemImgLoad', this.itemImgListener)
        console.log('aaaaaa');
    }
};