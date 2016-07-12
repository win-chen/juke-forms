'use strict'

juke.controller('PlaylistsCtrl', function($state, $scope, PlaylistFactory) {
	$scope.submit = function() {
		var playlist = {
			name: $scope.playlistName
		}
		PlaylistFactory.create(playlist)
		.then(function(playlist) {
			// $scope.playlistName = "";
			// $scope.submitForm.$setPristine();
			$state.go('singlePlaylist', {playlistid: playlist.id});
			// console.log($scope.submitForm);
		});
	};
});

juke.controller('PlaylistSidebarCtrl', function($scope, PlaylistFactory) {
	PlaylistFactory.getPlaylists()
	.then(function(playlists) {
		$scope.playlists = playlists;
		console.log(playlists);
	});
});

juke.controller('SinglePlaylistCtrl', function($scope, thePlaylist) {
	$scope.playlist = thePlaylist;
});