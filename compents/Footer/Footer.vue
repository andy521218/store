<template>
	<view class="footer">
		<view class="footer_title">
			<h3>网易云音乐</h3>
		</view>
		<view class="footer_desc">
			<text class="desc">杭州乐读科技有限公司运营：浙网文[2018]3506-263号</text>
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
	.footer {
		width: 100%;
		height: 49vw;
		background: url(../../assets/img/recommand_bg_3x.png) no-repeat;
		background-size: 100% auto;
		display: flex;
		flex-direction: column;
		align-items: center;

		.footer_title {
			width: 100%;
			height: 80%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.footer_desc {
			width: 100%;
			height: 10%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #888;
			font-size: 2vw;
		}
	}
</style>
