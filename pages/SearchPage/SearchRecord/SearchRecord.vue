<template>
	<view class="SearchRecord">
		<view class="SearchRecord_top">
			<h3 class='search_text'>历史记录</h3>
			<img class='search_dele' src="../../../assets/img/dele.png" mode="widthFix" alt="">
		</view>
		<view class="search_list">
			<view class="searc_content">
				1111111
			</view>
			<view class="searc_content">
				1111111111111111111122222
			</view>
			<view class="searc_content">
				11111113333333333333333333333333
			</view>
			<view class="searc_content">
				1111111
			</view>
			<view class="searc_content">
				1111111
			</view>
			<view class="searc_content">
				1111111
			</view>
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
	.SearchRecord {
		width: 92%;
		margin: 1em auto;

		.SearchRecord_top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.search_text {
				margin-left: 2%;
			}

			.search_dele {
				margin-right: 4%;
				width: 40rpx;
				height: 40rpx;
			}
		}

		.search_list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.searc_content {
				background: #f2f4f5;
				padding: 1%;
				border-radius: 10px;
				margin-right: 5%;
				margin-top: 5%;
				max-width: 100%;
			}
		}
	}
</style>
