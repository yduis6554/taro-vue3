<template>



    <NavBar searchBar="true" back="true" home="true" onBack="handleBackClick">
    </NavBar>
    <HomeHeader />
    <!-- <video id="video"
        src="https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D"
        poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg" initial-time="0" :controls="true"
        :autoplay="false" :loop="false" :muted="false" /> -->
    <!-- <video id="video"
        src="http://182.150.0.15:9121/%E5%B7%9DC28513.1.1.0.MTY2NDI1MTAyMyxDb3J0b2lfV2VDaGF0LDEsMjAyMC0wOC0xNCAwODoyOTowOSwyMDIwLTA4LTE0IDEwOjI5OjA5.m3u8"
        initial-time="0" :controls="true" :autoplay="false" :loop="false" :muted="false" /> -->
    <!-- <video id="video"
        src="http://182.150.0.15:9121/%E5%B7%9DW83192.1.1.0.MTY2NDI1MTAyMyxDb3J0b2lfV2VDaGF0LDEsMjAyMC0wOC0xNCAwODoyOTowOSwyMDIwLTA4LTE0IDEwOjI5OjA5.m3u8"
        initial-time="0" :controls="false" :autoplay="true" :loop="false" :muted="false" /> -->


</template>

<script lang="ts" setup>

import homeHeader from "@/components/homeHeader.vue"
import NavBar from '@/components/Navbar/index'
import HomeHeader from "@/components/homeHeader.vue";
components: {
    homeHeader;
    NavBar
}
function handleBackClick() {
    console.log("asdgasdg")
}
</script>
    