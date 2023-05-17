<template>
    <div class="home-new">
        <HomePanel title="人气场景" subTitle="瑰丽壮观，气势磅礴！">
            <template #right><XtxMore path="/" /></template>
            <!-- 面板内容 -->
            <div ref="target" style="position: relative;height: 406px;">
                <transition name="fade" mode="">
                    <ul v-if="goods.length" class="goods-list">
                        <li v-for="item in goods" :key="item.id">
                            <router-link :to="`/product/${item.id}`">
                                <img :src="item.picture" alt="">
                                <p class="name ellipsis">{{item.name}}</p>
                                <p class="price">{{item.price}}</p>
                            </router-link>
                        </li>
                    </ul>
                    <HomeSkeleton v-else bg="#f0f9f4" />
                </transition>
            </div>
        </HomePanel>
    </div>
</template>

<script>
import { ref } from 'vue';
import { hotScene } from '@/api/home.js'
import HomePanel from './home-panel.vue';
import HomeSkeleton from './home-skeleton.vue';
import { useLazyData } from '../../../hooks';
export default {
    name: "HomeScenes",
    components: { HomePanel, HomeSkeleton },
    setup() {
        // const goods = ref([]);
        // findNew().then(data => {
        //     goods.value = data.result;
        // });
        const { target, result } = useLazyData(hotScene)
        return { goods: result, target };
    },
}

</script>

<style lang="less" scoped>
@import '@/assets/styles/mixins.less';
@import '@/assets/styles/common.less';
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
        width: 306px;
        height: 406px;
        background-color: #f0f9f4;
        .hoverShadow();
        img {
            width: 306px;
            height: 306px;
        }
        p {
            font-size: 22px;
            padding: 12px 30px 0 30px;
            text-align: center;
        }
        .price {
                color: #CF4444;
            }
    }
}
</style>