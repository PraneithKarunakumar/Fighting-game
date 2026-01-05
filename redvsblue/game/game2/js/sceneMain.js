/*
Praneith Karunakumar
jan 12th 8:00pm
my game code
    */
let player1Health =6000;// these will be used in my fuction and in update function thats why they are global
let player2Health =6000;// these will be used in my fuction and in update function thats why they are global
let player1;// these will be used in my preload and in update and in my create functions thats why they are global
let player2;// these will be used in my preload and in update and in my create functions thats why they are global
let HealthBar1;// these will be used in my preload and in update and in my create functions thats why they are global
let HealthBar2;// these will be used in my preload and in update and in my create functions thats why they are global
let audio;// this will be used in my global function called sound thats why they are global


class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	this.load.image("background", "assets/background/background.jpg");


        // sets up information on the sprite shees before doing the animation
        this.load.spritesheet("player1", "assets/colour/blue.png",{
            frameWidth: 100,
            frameHeight:140
        });
        this.load.spritesheet("player2", "assets/colour/red.png",{
            frameWidth: 100,
            frameHeight: 140

        });
        this.load.spritesheet("HealthBar1", "assets/health/Health.png",{
            frameWidth: 431,
            frameHeight: 96.5

        });
        this.load.spritesheet("HealthBar2", "assets/health/Health2.png",{
            frameWidth: 431,
            frameHeight: 96.5

        });
       
        
    }
    create() {
        let player2x =100;// this will be used only in create fucntion  thats why their local
        let player1X =1900;// this will be used only in create fucntion  thats why their local

        this.background = this.add.image(1000, 350, "background");
        player2 = this.add.sprite(player2x, 550, "player2");// sets postiition of sprite sheets and key(name/variable to reach it)
        player1 = this.add.sprite(player1X, 550, "player1");
        HealthBar1=this.add.sprite(200, 100, "HealthBar1");
        HealthBar2=this.add.sprite(1800, 100, "HealthBar2");
        this.anims.create({//this is the process to create the animation
            key: 'RedHealth6',//firstly the key is declared is here
            repeat:0,//then how much you want to repeat it -1 is infine 0 is once
            frameRate: 10,// the speed of animation is frame rate which is determined here
            frames: this.anims.generateFrameNames("HealthBar1", {start: 5, end: 5})// these are what we use to make animations their like arrays and we set them up by making them start somewhere and make them end somewhere else with the generate frames name function
        });
        this.anims.create({
            key: 'RedHealth5',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar1", {start: 4, end: 4})
        });
        this.anims.create({
            key: 'RedHealth4',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar1", {start: 3, end: 3})
        });
        this.anims.create({
            key: 'RedHealth3',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar1", {start: 2, end: 2})
        });
        this.anims.create({
            key: 'RedHealth2',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar1", {start: 1, end: 1})
        });
        this.anims.create({
            key: 'RedHealth1',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar1", {start: 0, end: 0})
        });
        this.anims.create({
            key: 'BlueHealth6',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar2", {start: 5, end: 5})
        });
        this.anims.create({
            key: 'BlueHealth5',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar2", {start: 4, end: 4})
        });
        this.anims.create({
            key: 'BlueHealth4',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar2", {start: 3, end: 3})
        });
        this.anims.create({
            key: 'BlueHealth3',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar2", {start: 2, end: 2})
        });
        this.anims.create({
            key: 'BlueHealth2',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar2", {start: 1, end: 1})
        });
        this.anims.create({
            key: 'BlueHealth1',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("HealthBar2", {start: 0, end: 0})
        });
        
        this.anims.create({
            key: 'BlueRunLeft',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("player1", {start: 0, end: 3})
        });
        this.anims.create({
            key: 'BlueIdleLeft',
            repeat:0,
            frameRate: 5,
            frames: this.anims.generateFrameNames("player1", {start: 0, end: 0})
        });
        this.anims.create({
            key: 'BlueIdleRight',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("player1", {start: 4, end: 4})
        });        
        this.anims.create({
            key: 'BlueRunRight',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("player1", {start: 4, end: 7})
        });
        this.anims.create({
            key: 'BlueLeftPunch',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player1", {start: 8, end: 11})
        });
        this.anims.create({
            key: 'BluerightPunch',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player1", {start: 12, end: 15})
        });
        this.anims.create({
            key: 'BlueLeftKick',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player1", {start: 16, end: 19})
        });
        this.anims.create({
            key: 'BluerightKick',
            repeat:0,
            frameRate:7,
            frames: this.anims.generateFrameNames("player1", {start: 20, end: 23})
        });

        this.anims.create({
            key: 'RedIdleLeft',
            repeat: 0,
            frameRate: 5,
            frames: this.anims.generateFrameNames("player2", {start: 0, end: 0}) 
        });
        this.anims.create({
            key: 'RedIdleRight',
            repeat: 0,
            frameRate: 6000,
            frames: this.anims.generateFrameNames("player2", {start: 4, end: 4})
        });    
        this.anims.create({
            key: 'RedRunLeft',
            repeat:0,
            frameRate:10,
            frames: this.anims.generateFrameNames("player2", {start: 0, end: 3})
        });
        this.anims.create({
            key: 'RedRunRight',
            repeat:0,
            frameRate: 10,
            frames: this.anims.generateFrameNames("player2", {start: 4, end: 7})
        });
        this.anims.create({
            key: 'RedLeftPunch',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player2", {start: 8, end: 11})
        });
        this.anims.create({
            key: 'RedRightPunch',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player2", {start: 12, end: 15})
        });
        this.anims.create({
            key: 'RedLeftKick',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player2", {start: 16, end: 19})
        });
        this.anims.create({
            key: 'RedrightKick',
            repeat:0,
            frameRate: 7,
            frames: this.anims.generateFrameNames("player2", {start: 20, end: 23})
        });
        
        this.keyboard=this.input.keyboard.addKeys("W,A,D,E,Q,C,Z");//helps make a keys to use in our game
        this.keyboard2=this.input.keyboard.addKeys("H,Y,K,M,U,I,B");

        
        player1.play("BlueIdleLeft");// when we want to play animation we call them with their key and pu them as a parameter in a play function and we use player1. to make it specifically do thatt animation for player 1
        player2.play("RedIdleRight");
        HealthBar1.play("RedHealth6");
        HealthBar2.play("BlueHealth6");


        

    }

    update() {
        let interval1=player2Health;// this will be used in my update function  thats why their local here
        let interval2=player1Health;// this will be used in my update function  thats why their local here

        boundaries();//called a function to make boundraies
        
        //red
        if(this.keyboard.D.isDown==true ){// if we pressdown a we want to do the following


            player2.play("RedRunRight",true); //play animation
                player2.x += 8.5;//go right

           
            
        }
        else if(this.keyboard.A.isDown==true){
            player2.play("RedRunLeft",true);

                player2.x -= 8.5;

            
        }
        else if(this.keyboard.W.isDown==true){
            player2.y -= 4.5;
            setTimeout(function(){
                player2.y += 4.5;
            }, 300);
            //player2.play("RedRunRight");
        }
        else if(this.keyboard.E.isDown==true ){

            player2.play("RedRightPunch",true);
                if (player2.x-60<player1.x && player2.x>player1.x-60) {//this is basically how we know they did the punch the range of blue
                   
                    player1.x += 2;//we push player 2 back
                    sound("punch");//call a function to do sounds
                    player1Health=player1Health-45;//decrease player 1 health  
                }
                else{
                    sound("woosh");//call a function to do sounds
                }

        }
        else if( this.keyboard.C.isDown==true ){

            
            player2.play("RedrightKick",true);
                if (player2.x-60<player1.x && player2.x>player1.x-60) {
                    player1.x += 3;
                    sound("kick");
                    player1Health=player1Health-40;
                    console.log(player1Health);   
                }
                else{
                    sound("woosh");
                }
        }
        else if( this.keyboard.Q.isDown==true ){


            player2.play("RedLeftPunch",true);
            if ((player2.x+60>= player1.x && player2.x<=player1.x+60) ) {
                player1.x -= 2;
                sound("punch");
                player1Health=player1Health-45;
                console.log(player1Health);   
            }
            else{
                sound("woosh");
            }

        }
        else if( this.keyboard.Z.isDown==true ){

            player2.play("RedLeftKick",true);
            if (player2.x+60>= player1.x && player2.x<=player1.x+60 ) {
                player1.x -= 3;
                sound("kick");
                player1Health=player1Health-40;
                console.log(player1Health);   

            }
            else{
                sound("woosh");
            }


        }

        //blue

        if(this.keyboard2.K.isDown==true ){


            player1.play("BlueRunRight",true); 
            player1.x += 8.5;

           
            
        }
        else if(this.keyboard2.H.isDown==true){
            player1.play("BlueRunLeft",true);

            player1.x -= 8.5;

                //45
                //36


            
        }
        else if(this.keyboard2.U.isDown==true){
            player1.y -= 4.5;
            setTimeout(function(){
                player1.y += 4.5;
            }, 300);
            //player2.play("RedRunRight");
        }
        else if(this.keyboard2.I.isDown==true ){

            player1.play("BluerightPunch",true);
                if (player1.x-60<player2.x && player1.x>player2.x-60) {
                    player2.x += 2;
                    sound("punch");
                    player2Health=player2Health-45;
                    console.log(player2Health); 


                }
                else{
                    sound("woosh");
                }

        }
        else if( this.keyboard2.M.isDown==true ){

            
            player1.play("BluerightKick",true);
                if (player1.x-60<player2.x && player1.x>player2.x-60) {
                    player2.x += 3;
                    sound("kick");
                    player2Health=player2Health-40;
                    console.log(player2Health);
   

                }

                else{
                    sound("woosh");
                }
        }
        else if( this.keyboard2.Y.isDown==true ){


            player1.play("BlueLeftPunch",true);
                if ((player1.x+60>= player2.x && player1.x<=player2.x+60) ) {
                    player2.x -= 2;
                    sound("punch");
                    player2Health=player2Health-45;
                    console.log(player2Health); 
       

                }
                else{
                    sound("woosh");
                }
        }
        else if( this.keyboard2.B.isDown==true ){

            player1.play("BlueLeftKick",true);
            if (player1.x+60>= player2.x && player1.x<=player2.x+60 ) {
                player2.x -= 3;
                sound("kick");
                player2Health=player2Health-40;
                console.log(player2Health);
                 


            }
            else{
                sound("woosh");
            }

        }

        //HEALTH

        if (player2Health>5000) {//we check players health  and if its true for one of these we do the following
            HealthBar1.play("RedHealth6");//we  play an animation for the health bar
        
        }
        else if (player2Health >= 4000 && player2Health <5000) {
            HealthBar1.play("RedHealth5");
        }
        else if (player2Health >= 3000 && player2Health <4000) {
            HealthBar1.play("RedHealth4");
        }
        else if (player2Health >= 2000 && player2Health <3000) {
            HealthBar1.play("RedHealth3");
        }
        else if (player2Health  >= 1000 && player2Health <2000) {
            HealthBar1.play("RedHealth2");
        }  
        else if (player2Health < 1000) {
            HealthBar1.play("RedHealth1");
        }        
        if (player1Health>5000) {
            HealthBar2.play("BlueHealth6");
        }
        else if (player1Health >= 4000 && player1Health <5000) {
            HealthBar2.play("BlueHealth5");
        }
        else if (player1Health >= 3000 && player1Health <4000) {
            HealthBar2.play("BlueHealth4");
        }
        else if (player1Health >= 2000 && player1Health <3000) {
            HealthBar2.play("BlueHealth3");
        }
        else if (player1Health  >= 1000 && player1Health <2000) {
            HealthBar2.play("BlueHealth2");
        }  
        else if (player1Health < 1000) {
            HealthBar2.play("BlueHealth1");
        }   



        if(interval1<0 || interval2<0){
            let winnerString= WinChecker();// this will be used in my update function  thats why their local here also this asks for the player who won and will create the root file for them which will take hem to game over screen
            let rootString="gameover screen/"+winnerString+".html";// this will be used in my update function  thats why their local here
            window.location.replace(rootString);// this will be used in my update function  thats why their local here
        }


        

    }
}
/****************************************************function with parameter that does not return anything****************************************************/
function sound(type){
        let type1 = type.charAt(0);// this will be used in this function  thats why their local here
        type1 = type1.toUpperCase();
        type = type.replace(type[0], type1);


        let usedstring= "assets/sounds/"+type+".mp3";// this will be used in this function  thats why their local here
        console.log(usedstring);
        audio = new Audio(usedstring);//it plays the string tthat was created
        audio.volume=0.20;
        audio.loop=false;
        audio.play();
}
/****************************************************function without parameter that does not return anything****************************************************/
function boundaries(){
        if (player1.x>1950) {
            player1.x -= 8.5;
        }
        else if (player1.x<15) {
            player1.x += 8.5;
        }
        if (player2.x>1950) {
            player2.x -= 8.5;
        }
        else if (player2.x<15) {
            player2.x += 8.5;
        }
}
/****************************************************function without parameter that does returns something****************************************************/
function WinChecker(){
    if (player2Health < 0){
        let winner= "blue";// this will be used in this function  thats why their local here
        winner = winner.toUpperCase();

        return winner;//returns string with name of player who won

    }
    else if (player1Health < 0) {
        let winner= "red";// this will be used in this function  thats why their local here
        winner = winner.toUpperCase();

        return winner;

    } 



}


