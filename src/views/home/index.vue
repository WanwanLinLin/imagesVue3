<template>
    <!-- 二级路由首页组件 -->
    <div class="home-page">
        <div class="home-entry">
            <div class="container">
                <!-- 左侧分类 -->
                <HomeCategory />
                <!-- 轮播图 -->
                <HomeBanner />
                <!-- 新款角色 -->
                <HomeNew />
                <!-- 人气场景 -->
                <HomeScenes />
                <!-- 高分武器 -->
                <HomeWeapons />
                <!-- 人气推荐 -->
                <HomeHot />
                <!-- 武器装备 -->
                <!-- <HomeBrand /> -->
                <!-- 产品区块 -->
                <!-- <HomeProduct /> -->
                <!-- 最新专题 -->
                <!-- <HomeSpecial /> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue';
import HomeHot from './components/home-hot.vue';
import HomeScenes from './components/home-scene.vue'
import HomeWeapons from './components/home-weapons.vue'
import HomeBrand from './components/home-brand.vue';
import HomeProduct from './components/home-product.vue';
import HomeSpecial from './components/home-special.vue';

</script>

<style lang="scss" scoped>

</style>