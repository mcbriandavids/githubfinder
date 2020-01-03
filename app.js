const userProfile = new ES6();
// Instantiate UI class
const ui = new UI();

document.querySelector('#searchUser').addEventListener('keyup', e => {
	const userText = e.target.value;

	if (userText !== '') {
		// Make Http Call
		userProfile.getUser(userText).then(data => {
			// console.log(data);
			if (data.profile.message === 'Not Found') {
				// Show Alert
				ui.showAlert('User Not Found', 'alert alert-danger align-center');
			} else {
				// show Profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		// Clear Profile
		ui.clearProfile();
	}
	e.preventDefault();

});
