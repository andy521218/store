<template>
	<view class="content">
		<Search></Search>
		<SwiperContainer></SwiperContainer>
	</view>
</template>

<script>
	import Search from '../../compents/Search.vue'
	import SwiperContainer from '../../compents/SwiperContainer.vue'
	export default {
		components: {
			Search,
			SwiperContainer
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
	.content {}
</style>
