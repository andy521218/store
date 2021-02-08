<template>
	<view class="content">
		<Search></Search>
		<SwiperContainer></SwiperContainer>
		<RankingList></RankingList>
		<Recommend></Recommend>
		<newSong></newSong>
	</view>
</template>

<script>
	import Search from '../../compents/Search.vue'
	import SwiperContainer from '../../compents/SwiperContainer.vue'
	import RankingList from '../../compents/RankingList/RankingList.vue'
	import Recommend from '../../compents/Recommend/Recommend.vue'
	import newSong from '../../compents/newSong/newSong.vue'
	export default {
		components: {
			Search,
			SwiperContainer,
			RankingList,
			Recommend,
			newSong
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		width: 92%;
		margin: auto;
	}
</style>
