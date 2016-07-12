'use strict';

juke.config(function($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/newPlaylist',
		templateUrl: '/js/playlist/templates/playlist-new.html',
		controller: 'PlaylistsCtrl'
	});
	$stateProvider.state('singlePlaylist', {
		url: '/playlist/:playlistId',
		templateUrl: '/js/playlist/templates/playlist-single.html',
		controller: 'SinglePlaylistCtrl',
		resolve: {
			thePlaylist: function (PlaylistFactory, $stateParams) {
				return PlaylistFactory.fetchById($stateParams.playlistId);
			}
		},
	});
})