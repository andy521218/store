let apiReq = {
	req(obj) {
		var method = obj.method || "GET"; // 请求方式,默认为GET
		var url = 'http://localhost:3000' + obj.url || ""; // 请求路径 
		var data = obj.data || {}; // 请求数据
		var header = obj.header || {}; // 请求头
		var success = obj.success; // 成功回调函数
		var fail = obj.fail; //表示失败后，要执行的回调函数
		uni.request({
			url: url,
			data: data,
			method: method,
			header: header,
			success: ((res) => {
				if (res.statusCode === 403 || res.statusCode === 401) {
					// 错误处理
				} else if (res.statusCode === 200) {
					success(res.data)
				}
			}),
			fail: ((err) => {
				fail(err)
			})
		})
	}
}
export default apiReq
