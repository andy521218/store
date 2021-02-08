<template>
	<view class="newSong">
		<h3>最新歌单</h3>
		<view class="song_item">
			<view class="song_item_left">

			</view>
			<img class='song_player' src="../../assets/img/player.png" alt="">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newSong: []
			}
		},
		methods: {

		},
		created() {
			this.$axios.req({
				url: 'top/song',
				data: {
					type: 0
				},
				success: (res) => {
					console.log(res)
				}
			})
		}
	}
</script>

<style lang="scss">
	.newSong {
		width: 98%;

		.song_item {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.song_item_left {
				width: 90%;
			}

			.song_player {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
</style>
