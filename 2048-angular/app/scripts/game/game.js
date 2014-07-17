angular.module('Game', [])
.service('GameManager', function() {
    // Create new game
    this.newGame = function() {};
    // Handle the move action
    this.move = function() {};
    // Update the score
    this.updateScore = function(newScore) {};
    // Are there moves left
    this.moveAvailable = function() {
        return GridService.anyCellsAvailable() ||
                GridService.tileMatchesAvailable();
    };
});
