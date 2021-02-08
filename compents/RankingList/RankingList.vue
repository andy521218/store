<template>
	<view class="ranking_list">
		<h3>排行榜</h3>
		<view class="ranking_box">
			<img class='ranking_logo' src="../../assets/img/icon_rank_hot.png" alt="">
			<view class="ranking_right">
				<text class="ranking_title">热歌榜</text>
				<view class="song_name_box">
					<text class="ranking_name">1.星辰大海-鞑子</text>
					<text class="ranking_name">1.星辰大海-鞑子</text>
					<text class="ranking_name">1.星辰大海-鞑子</text>
				</view>

			</view>
		</view>
		<view class="ranking_box">
			<img class='ranking_logo' src="../../assets/img/icon_rank_new.png" alt="">
			<view class="ranking_right">
				<text class="ranking_title">新歌榜</text>
				<view class="song_name_box">
					<text class="ranking_name">1.星辰大海-鞑子</text>
					<text class="ranking_name">1.星辰大海-鞑子</text>
					<text class="ranking_name">1.星辰大海-鞑子</text>
				</view>

			</view>
		</view>
		<view class="ranking_box">
			<img class='ranking_logo' src="../../assets/img/icon_rank_rise.png" alt="">
			<view class="ranking_right">
				<text class="ranking_title">飙升榜</text>
				<view class="song_name_box">
					<text class="ranking_name">1.星辰大海-鞑子</text>
					<text class="ranking_name">1.星辰大海-鞑子</text>
					<text class="ranking_name">1.星辰大海-鞑子</text>
				</view>
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
	.ranking_list {
		width: 92vw;

		.ranking_box {
			height: 28vw;
			background: rgba(196, 196, 196, 0.1);
			margin: 4% 0;
			display: flex;
			justify-content: space-between;

			.ranking_logo {
				width: 28vw;
				height: 28vw;
				border-radius: 6px;
			}

			.ranking_right {
				display: flex;
				flex-direction: column;
				width: 60vw;

				.ranking_title {
					height: 10vw;
					line-height: 10vw;
					font-size: 3.733vw;
				}

				.song_name_box {
					height: 90vw;

					display: flex;
					flex-direction: column;
					justify-content: center;

					.ranking_name {
						font-size: 2.933vw;
						color: #a1a4b3;
					}
				}

			}
		}
	}
</style>
