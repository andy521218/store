<template>
	<view class="search_hot">
		<h3 class="search_hot_text">
			热门搜索
		</h3>
		<view class="hot_list">
			<text class="song_number">1</text>
			<text class="song_name">星辰大海</text>
			<img class='itps_logo' src="../../../assets/img/new.png" mode="widthFix" alt="">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.search_hot {
		width: 92%;
		margin: auto;

		.search_hot_text {
			margin-left: 2%;
		}

		.hot_list {
			width: 100%;
			display: flex;
			margin: 2.5% 0;
			display: flex;
			align-items: center;

			.song_number {
				width: 20%;
				text-align: center;
			}

			.itps_logo {
				max-height: 100%;
				width: 80rpx;
				margin-left: 2%;
			}
		}
	}
</style>
