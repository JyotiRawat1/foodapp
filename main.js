//We are creating a variable called 'foodieApp'
// We are storing the value returned by the angular.module() function here
// The first argument we pass to the function is the name of the app we mentioned in 'ng-app' directive
// The second parameter is an array of 'extra powers' we want to add to our app - we'll see this in future classes

var foodieApp = angular.module('foodieApp',['ngRoute']);



foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
    NoOfVote: '460 votes',
    reviews:  '369 reviews',

  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'img/Farzi-Cafe44.jpg'
  },
  {

    name: 'Dominos Pizza',
    address: '3486 Mission St San Francisco, CA 94110',
    location: 'Bernal Heights, Mission',
    category: 'Casual Dining',
    vote: '2.5',

    NoOfVote: '360 votes',
    reviews:  '309 reviews',
    cuisines: 'Modern Indian',
    cost: '500',
    hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
									name: 'Corn Pizza',
									image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
				      },

    image: 'img/dominos.jpg'
  },
  {
    name: 'Zen',
    address: 'B-25, Connaught Place, New Delhi',
    location: 'Connaught Place',
    category: 'Casual Dining',
    vote: '3.4',
    NoOfVote: '1068 votes',
    reviews:  '678 reviews',

    cuisines: 'Chinese, Japanese, Italian, Seafood',
    cost: '1500',
    hours: '11 AM to 11:30 PM (Mon-Sun)',
    image: 'img/zen.jpg'
  },
  {
    name: 'Momos Point',
    address: '27 UB, Jawahar Nagar, Kamla Nagar, New Delhi',
    location: 'Kamla Nagar',
    category: 'QUICK BITES',
    vote: '3.8',
    NoOfVote: '760 votes',
    reviews:  '649 reviews',

    cuisines: 'Chinese',
    cost: '1100',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'img/momo.jpg'
  },
  {
    name: 'Big Wong',
    address: 'G-40/41, Baani Square, Sector 50, Gurgaon',
    location: 'Baani Square, Sector 50',
    category: 'CASUAL DINING',
    vote: '5.2',
    NoOfVote: '860 votes',
    reviews:  '760 reviews',

    cuisines: 'Chinese, Thai',
    cost: '1000',
    hours: '11:30 AM to 11 PM (Mon-Thu),11:30 AM to 10:45 PM',
    image: 'img/bag.jpg'
  }]

	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url){
		console.log(url);
}
})


foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
		id: 1,
    NoOfVote: '460 votes',
    reviews:  '369 reviews',

  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'img/Farzi-Cafe44.jpg'
  },
  {

    name: 'Dominos Pizza',
    address: '3486 Mission St San Francisco, CA 94110',
    location: 'Bernal Heights, Mission',
    category: 'Casual Dining',
    vote: '2.5',
		id: 2,
    NoOfVote: '360 votes',
    reviews:  '309 reviews',
    cuisines: 'Modern Indian',
    cost: '500',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'img/dominos.jpg'
  },
  {
    name: 'Zen',
    address: 'B-25, Connaught Place, New Delhi',
    location: 'Connaught Place',
    category: 'Casual Dining',
    vote: '3.4',
		id: 3,
    NoOfVote: '1068 votes',
    reviews:  '678 reviews',

    cuisines: 'Chinese, Japanese, Italian, Seafood',
    cost: '1500',
    hours: '11 AM to 11:30 PM (Mon-Sun)',
    image: 'img/zen.jpg'
  },
  {
    name: 'Momos Point',
    address: '27 UB, Jawahar Nagar, Kamla Nagar, New Delhi',
    location: 'Kamla Nagar',
    category: 'QUICK BITES',
    vote: '3.8',
    id: 4,
		NoOfVote: '760 votes',
    reviews:  '649 reviews',

    cuisines: 'Chinese',
    cost: '1100',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'img/momo.jpg'
  },
  {
    name: 'Big Wong',
    address: 'G-40/41, Baani Square, Sector 50, Gurgaon',
    location: 'Baani Square, Sector 50',
    category: 'CASUAL DINING',
    vote: '5.2',
		id: 5,
    NoOfVote: '860 votes',
    reviews:  '760 reviews',

    cuisines: 'Chinese, Thai',
    cost: '1000',
    hours: '11:30 AM to 11 PM (Mon-Thu),11:30 AM to 10:45 PM',
    image: 'img/bag.jpg'
  }]

})
