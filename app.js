var app = new Vue({
	el: '#app',
	data: {
		user: "",
		pw: "",
		loggedin: false,
		message: "LOL",
	},
	methods: {
		validate: function () {
			let x = parseInt(this.user)
			let y = parseInt(this.pw)
			if (this.mysterious_algorithm(x, y) == 0 && this.mysterious_algorithm(x + 1, y + 1) == 255) {
				this.message = "twitter.com/xy" + ((((x * y) % 256) ** Math.abs(x - y)) % 4398046511103).toString()
				this.loggedin = true	
			} else {
				this.loggedin = false
			}
		},
		mysterious_algorithm: function(a, b){
			a %= 256
			b %= 256
			if (a > 0 && b > 0) {
				return ((a * b) - this.mysterious_algorithm(a - 1, b - 1)) % 256
			} else {
				return 255
			}
		}
	},
})
