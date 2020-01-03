class UI {
	constructor() {
		this.profile = document.querySelector('#profile');
	}
	showProfile(user) {
		this.profile.innerHTML = `
    <div class ="card card-body mb-3 ">
    <div class="row">
    <div class ="col-md-3">
    <img class="img-fluid mb-2" src ="${user.avatar_url}"
    <a href ="${
			user.html_url
		}" target ="_blank"  class="btn btn-primary bg-primary btn-block">View Profile</a>
    </div>
    <div class ="col md-9">
    <span class="badge badge-primary mb-3">Public Repos:${
			user.public_repos
		}</span>
        <span class="badge badge-secondary mb-3">Public Gist:${
					user.public_gists
				}</span> 
           <span class="badge badge-success mb-3">Followers: ${
							user.followers
						}</span>   
       <span class="badge badge-info mb-3">Following: ${user.following}</span>
       <br><br>
       <ul class = "list-group">
       <li class="list-group-item">Company:${user.company}</li>
       <li class="list-group-item">Website/Blog:${user.blog}</li>
       <li class="list-group-item">Location:${user.location}</li>
       <li class="list-group-item">Member Since:${user.created_at}</li>
       </ul>
    </div>
    </div>
    </div>
    <h3 class="page-heading mb-3"> Latest Repos</h3
    <div id="repos"></div>
        `;
	}

	// Show Repos

	showRepos(repos) {
		let outPut;
		repos.forEach(element => {
			outPut += `
			<div class="card card-body mb-2">
			<div class="row">
			<div class="colo-md-6">
			<a href="${repos.html_url}" target="_blank">${element.name}</a>
			</div>
			<div class="col-md-6">
			<span class="badge badge-primary mb-3">Starts:${element.stargazers_count}</span>
				<span class="badge badge-primary mb-3">Watchers:${element.watchers_count}</span>
				<span class="badge badge-primary mb-3">Forks:${element.forks_count}</span>
			</div>
			</div>
			</div>
			
			`;
			document.querySelector('#repos').innerHTML = outPut;
		});
	}
	// Show Alert
	showAlert(message, className) {
		// Clear any Remaining Alert
		this.clearAlert();
		const divError = document.createElement('div');
		divError.className = `alert ${className}`;
		divError.appendChild(document.createTextNode(message));
		const container = document.querySelector('.searchContainer');
		const search = document.querySelector('.search');
		container.insertBefore(divError, search);
		// Timeout
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}
	// Clear Alert Message
	clearAlert() {
		const currentAlert = document.querySelector('.alert');
		if (currentAlert) {
			currentAlert.remove();
		}
	}
}
