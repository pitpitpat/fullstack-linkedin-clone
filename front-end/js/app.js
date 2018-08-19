(function() {

	var app = angular.module("tediApp", [
	 	"ngRoute",
		"angular-jwt"])
	.config(function($httpProvider, $routeProvider, jwtOptionsProvider) {
		/* ================= Authendication JWT ================= */
		jwtOptionsProvider.config({
			tokenGetter: function(options) {
                token = localStorage.isjwt;
				if (!token) {
					window.location.href = "/login";
				}
				return token;
			},
			whiteListedDomains: ["localhost"]
		});
		$httpProvider.interceptors.push("jwtInterceptor");

		/* ================= Routing ================= */
		$routeProvider
		.when("/login", {
			template: "",
			controller: function() {
  				window.location.href = "/login";
  			}
		})
		.when("/logout", {
			template: "",
			controller: function() {
				delete localStorage.isjwt;
				window.location.href = "/login";
  			}
		})
		.when("/home", {
			templateUrl: '../templates/home.html',
			controller: 'homeCtrl',
			resolve: {
				user: function($rootScope) {
                    return $rootScope.getUserDetails().then(function(response) {
                    	return response.data;
                    });
                }
			}
		})
		.when("/profile", {
			templateUrl: '../templates/view-profile.html',
			controller: 'viewProfileCtrl',
			resolve: {
				user: function($rootScope) {
                    return $rootScope.getUserDetails().then(function(response) {
                    	return response.data;
                    });
                }
			}
        })
		.when("/edit", {
			templateUrl: '../templates/edit-profile.html',
			controller: 'editProfileCtrl'
        })
        .when("/post", {
            templateUrl: '../templates/post.html',
            controller: 'postCtrl'
        })
		.otherwise({
	        redirectTo: '/home'
	    });
		/* =========================================== */
	})
	.run(function ($rootScope, globalFunctions) {
		globalFunctions.init_app();
        $rootScope.login = globalFunctions.login;
		$rootScope.registerUser = globalFunctions.registerUser;
		$rootScope.getUserList = globalFunctions.getUserList;
		$rootScope.getUserDetails = globalFunctions.getUserDetails;
		$rootScope.updateUser = globalFunctions.updateUser;
        $rootScope.logout = globalFunctions.logout;
        $rootScope.getUserSimple = globalFunctions.getUserSimple;
        $rootScope.postEducation = globalFunctions.postEducation;
        $rootScope.postExperience = globalFunctions.postExperience;
        $rootScope.postSkills = globalFunctions.postSkills;
        $rootScope.searchAccounts = globalFunctions.searchAccounts;
        $rootScope.postArticle = globalFunctions.postArticle;
        $rootScope.postComment = globalFunctions.postComment;
        $rootScope.upvote = globalFunctions.upvote;
        $rootScope.getArticles = globalFunctions.getArticles;
        $rootScope.getUpvoted = globalFunctions.getUpvoted;
        $rootScope.getFeed = globalFunctions.getFeed;
        $rootScope.sendMessage = globalFunctions.sendMessage;
        $rootScope.getMessages = globalFunctions.getMessages;
        $rootScope.publishAd = globalFunctions.publishAd;
        $rootScope.getAds = globalFunctions.getAds;
        $rootScope.getSuggestedAds = globalFunctions.getSuggestedAds;
        $rootScope.connect = globalFunctions.connect;
        $rootScope.deleteConnection = globalFunctions.deleteConnection;
        $rootScope.getConnections = globalFunctions.getConnections;
        $rootScope.getNotifications = globalFunctions.getNotifications;
		// $rootScope.user = {};
		// $rootScope.getUserDetails().then(function(result) {
		// 	$rootScope.user.email = result.email;
		// 	$rootScope.user.firstName = result.name;
		// 	$rootScope.user.lastName = result.surname;
		// 	$rootScope.user.phoneNum = result.telNumber;
		// 	$rootScope.user.picture = result.picture;
        // });

		$('a.nav-link, a.dropdown-item').click(function() {
		    $('.navbar-nav').find('li.nav-item.active').removeClass('active');
		    $(this).parents('li.nav-item').addClass('active');
		});
	});

})();
