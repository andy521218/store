<template>
	<view class="newSong">
		<h3>最新歌单</h3>
		<view class="song_item" v-for="(item,index) in newSong" :key='index'>
			<view class="song_item_left">
				<view class="song_name_top">
					<text class="song_name_big">
						{{item.name}}
					</text>
					<text class="song_name_smal">
						{{item.alias[0]}}
					</text>
				</view>
				<view class="song_singer_box">
					<img class='song_sq_logo' src="../../assets/img/index_icon_sq.png" alt="">
					<text class="song_singer">{{item.artists[0].name}}-{{item.name}}</text>
				</view>
			</view>
			<img class='song_player' src="../../assets/img/player.png" alt="">
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				newSong: [],
				loadingSong: [],
				index: 9
			}
		},
		methods: {
			add() {
				let arr = [];
				arr = this.loadingSong.splice(this.index, 10)
				this.index += 10;
				arr.forEach(item => {
					this.newSong.push(item)
				})
			}
		},
		created() {
			this.$axios.req({
				url: '/top/song',
				data: {
					type: 0
				},
				success: (res) => {
					this.loadingSong = res.data
					this.newSong = res.data.splice(0, 10)
				}
			})
		}
	}
</script>

<style lang="scss">
	.newSong {
		width: 98%;
		margin-top: 4%;

		.song_item {
			margin-top: 4%;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.song_item_left {
				width: 90%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.song_name_top {
					display: flex;
					align-items: center;

					.song_name_big {
						font-size: 4.93vw;
					}

					.song_name_smal {
						font-size: 2.93vw;
						color: #888;
						margin-left: 2vw;
					}
				}

				.song_singer_box {
					display: flex;
					align-items: center;

					.song_sq_logo {
						width: 4vw;
						margin-right: 2vw;
					}

					.song_singer {
						font-size: 2.93vw;
						color: #888;
					}
				}
			}

			.song_player {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>
