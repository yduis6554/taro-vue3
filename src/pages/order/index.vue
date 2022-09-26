<template>
    <swiper class='swiper-item' indicator-color='#999' indicator-active-color='#333' :vertical="false" :circular="true"
        :indicator-dots="true" :autoplay="true">
        <swiper-item v-for="item in swiperImgs" :key="item">
            <view class='demo-text-1'>
                <image mode="heightFix" lazyLoad="true" :src='item' alt="" />
            </view>
        </swiper-item>
    </swiper>
</template>

<script lang="ts" setup>

const swiperImgs: string[] = [
    '/assets/images/fristfabu.jpg',
    '/assets/images/fristfabu.jpg',
    '/assets/images/fristfabu.jpg',
    '/assets/images/fristfabu.jpg',
]
</script>
