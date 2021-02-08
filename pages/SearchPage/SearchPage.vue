<template>
	<view class="search_index">
		<SearchHeader></SearchHeader>
		<SearchRecord></SearchRecord>
		<SearchHot></SearchHot>
	</view>
</template>

<script>
	import SearchRecord from './SearchRecord/SearchRecord'
	import SearchHeader from './SearchHeader/SearchHeader'
	import SearchHot from './SearchHot/SearchHot'
	export default {
		components: {
			SearchRecord,
			SearchHeader,
			SearchHot
		},
		data() {
			return {

			}
		},
	}
</script>

<style lang="scss">
	.search_index {
		width: 100vm;
		height: 100vm;
		overflow-y: auto;
	}
</style>
