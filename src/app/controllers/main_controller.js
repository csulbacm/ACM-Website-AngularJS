acm_app.controller("main_controller", function($scope){

	// this.tab1 = {
	// 	EVENT: {
	// 		name: "Event",
	// 		state: "null",
	// 		url: "https://www.facebook.com/csulbacm/"
	// 	},
	// 	ABOUT: {
	// 		name: "About & Board",
	// 		state: "about-board"
	// 	}
	// };


	this.home = {
			name: "Home",
			state: "home"
	}


	// this.tab2 = {
	// 	/*
	// 	CONTACT: {
	// 		name: "Contact",
	// 		state: "contact"
	// 	},
	// 	*/
	// 	HUB: {
	// 		name: "Activities Hub",
	// 		state: "hub"
	// 	},
	// 	BEACHHACK: {
	// 		name: "Beachhack",
	// 		state: "null",
	// 		url: "http://beachhacks.com/"
	// 	}
	// };

	this.tab = {
		ABOUT: {
			name: "About",
			state: "about-board"
		},
		HUB: {
			name: "Activities Hub",
			state: "hub"
		},
		BEACHHACKS: {
			name: "Beachhacks",
			state: "null",
			url: "http://beachhacks.com/"
		}
	}

	this.currentTab = "/";


	this.getNavRoute = function(_tab){
		if(_tab.state == "null") {
			this.currentTab = _tab.url
			return _tab.url;
		} else {
			return "";
		}
	}

	this.checkLink = function(_tab){
		console.log(_tab);
		if(_tab.state == "null" || _tab.state == ""){
			return "_blank";
		} else {
			return "";
		}


	}
});