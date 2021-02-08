<template>
	<view class="swiper_container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="rgb(196,196,196)"
		 indicator-active-color="red">
			<swiper-item v-for="(item,index) in banner" :key='index'>
				<view class="swiper-item">
					<img class='swiper_img' :src="item.imageUrl" alt="">
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: []
			}
		},
		created() {
			this.$axios.req({
				url: 'banner',
				success: (res) => {
					this.banner = res.banners
				}
			})
		}
	}
</script>

<style lang="scss">
	.swiper_container {
		width: 98%;
		margin: 5% auto;
		border-radius: 6px;
		overflow: hidden;

		.swiper_img {
			width: 100%;
			height: 150px;
		}
	}
</style>
