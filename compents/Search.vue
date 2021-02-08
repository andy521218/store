<template>

	<view class="search" @click="fn">
		<img class='search_icon' src="../assets/img/search.png" mode="widthFix" alt="">
		<text>搜索你想听的歌曲</text>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			fn() {
				uni.navigateTo({
					url: '../SearchPage/SearchPage'
				})
			}
		}
	}
</script>

<style lang="scss">
	.search {
		width: 98%;
		height: 44px;
		background: #f2f4f5;
		border-radius: 10px;
		margin: auto;
		margin-top: 4%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a1a4b3;

		.search_icon {
			max-height: 100%;
			width: 50rpx;
		}
	}
</style>
