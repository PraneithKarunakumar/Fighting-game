var game;
window.onload=function() {
	var config = {
	        type: Phaser.AUTO,
	        width: 2000,
	        height: 700,
	        parent: 'fighting-game',
	        scene: [SceneMain]
	    };
	 game = new Phaser.Game(config);
}
