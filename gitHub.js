class ES6 {
	constructor() {
		this.client_Id = 'fa853872ec7fa1472f99';
		this.client_secret = '05d8c4ff187a379f8daf2e531a41bdfc10d7534e';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}
	async getUser(user) {
		const resProfile = await fetch(
			`https://api.github.com/users/${user}?client_Id=${
				this.client_Id
			} & client_secret=${this.client_secret}`
		);
		const resRepos = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${
				this.repos_count
			} & sort=${this.repos_sort}&client_Id=${this.client_Id} & client_secret=${
				this.client_secret
			}`
		);
		const profile = await resProfile.json();
		const repos = await resRepos.json();
		return {
			profile,
			repos,
		};
	}
}
