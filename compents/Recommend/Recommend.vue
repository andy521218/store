<template>
	<view class="recommend">
		<h3>推荐歌单</h3>
		<view class="recommend_box">
			<view class="recommend_item" v-for="(item,index) in recommend" :key='index'>
				<img class='recommed_itps' :src="item.picUrl" alt="">
				<text class="recommed_desc">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recommend: []
			}
		},
		created() {
			this.$axios.req({
				url: 'personalized',
				success: (res) => {
					this.recommend = res.result.splice(0, 6)
					console.log(res.result)
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.recommend {
		width: 92vw;

		.recommend_box {
			margin-top: 4%;
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			justify-content: space-around;

			.recommend_item {
				width: 28vm;
				display: flex;
				flex-direction: column;
				margin-bottom: 2%;
				.recommed_itps {
					width: 28vw;
					height: 28vw;
				}

				.recommed_desc {
					width: 28vw;
					height: 11vw;
					font-size: 3.733vw;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
</style>
