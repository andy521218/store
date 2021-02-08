<template>
	<view class="search_header">
		<view class="search_box">
			<img class="search_icon" src="../../../assets/img/search.png" mode="widthFix"></img>
			<input class="search_input" placeholder="搜索你想听的歌曲" type=" text" v-model="searchVal" />
		</view>

		<text class="search_cancel" v-if="!searchVal" @click="cancel">取消</text>
		<text class="search_cancel" v-else @click="dele">删除</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: ''
			}
		},
		methods: {
			cancel() {
				uni.navigateTo({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.search_header {
		width: 92%;
		height: 44px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #a1a4b3;
		margin-top: 1em;

		.search_box {
			width: 80vw;
			height: 44px;
			background: #f2f4f5;
			border-radius: 20px;
			display: flex;
			align-items: center;

			.search_input {
				width: 100%;
				padding-left: 1vw;
			}

			.search_icon {
				max-height: 100%;
				width: 50rpx;
			}
		}

	}
</style>
