<template>
	<view class="content">
		<Search></Search>
		<SwiperContainer></SwiperContainer>
		<RankingList></RankingList>
		<Recommend></Recommend>
		<newSong ref='song'></newSong>
		<Footer></Footer>
	</view>
</template>

<script>
	import Search from '../../compents/Search.vue'
	import SwiperContainer from '../../compents/SwiperContainer.vue'
	import RankingList from '../../compents/RankingList/RankingList.vue'
	import Recommend from '../../compents/Recommend/Recommend.vue'
	import newSong from '../../compents/newSong/newSong.vue'
	import Footer from '../../compents/Footer/Footer.vue'
	export default {
		components: {
			Search,
			SwiperContainer,
			RankingList,
			Recommend,
			newSong,
			Footer
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},

		onReachBottom() {
			this.$refs.song.add()
		},
		methods: {
			add() {
				alert(2)
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
			},
		}
	}
</script>

<style lang="scss">
	.content {
		width: 92%;
		margin: auto;
	}
</style>
