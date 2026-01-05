
/*
Praneith Karunakumar
jan 12th 7:00pm
my game code
    */
let player1;// this will be used in my preload and in update and in my create functions thats why they are global
let player2;// this will be used in my preload and in update and in my create functions thats why they are global
let HealthBar1;// this will be used in my preload and in update and in my create functions thats why they are global
let HealthBar2;// this will be used in my preload and in update and in my create functions thats why they are global
let audio;// this will be used in my function thats why they are global
let player1Health =6000;// this will be used in my function and in update function thats why they are global
let player2Health =6000;// this will be used in my function and in update function thats why they are global
let pass;// this will be used in my function thats why they are global

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
        let player2x =100;// this will be used only in create function  thats why their local
        let player1X =1900;// this will be used only in create function  thats why their local
        
        this.background = this.add.image(1000, 350, "background");
        // sets postiition of sprite sheets and key(name/variable to reach it)
        player2 = this.add.sprite(player2x, 550, "player2");
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
            frames: this.anims.generateFrameNames("player1", {start: 5, end: 7})
        });
        this.anims.create({
            key: 'BlueLeftPunch',
            repeat:0,
            frameRate: 4,
            frames: this.anims.generateFrameNames("player1", {start: 8, end: 11})
        });
        this.anims.create({
            key: 'BluerightPunch',
            repeat:0,
            frameRate: 4,
            frames: this.anims.generateFrameNames("player1", {start: 12, end: 15})
        });
        this.anims.create({
            key: 'BlueLeftKick',
            repeat:0,
            frameRate: 4,
            frames: this.anims.generateFrameNames("player1", {start: 16, end: 19})
        });
        this.anims.create({
            key: 'BluerightKick',
            repeat:0,
            frameRate:4,
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
            frameRate: 9.5,
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
        
        this.keyboard=this.input.keyboard.addKeys("W,A,D,E,Q,C,Z,F");//helps make a keys to use in our game

        
        player1.play("BlueIdleLeft");// when we want to play animation we call them with their key and pu them as a parameter in a play function and we use player1. to make it specifically do thatt animation for player 1
        player2.play("RedIdleRight");
        HealthBar1.play("RedHealth6");
        HealthBar2.play("BlueHealth6");



        

    }

    update() {

        
        

        boundaries();//called a function to make boundraies
        
        let Location =Math.round(1+Math.random()*1999);// this will be used in my update function  thats why their local here


/****************************************************array  geting a random value taken out of it for the bot to use as data on which attack to do against the player ****************************************************/
        
        let myArray=[1,3,2,0];// this will be used in my update function  thats why their local here
        let passer =Math.round(1+Math.random()*10);// this will be used in my update function  thats why their local here
        let AttackArray = randomSort(myArray,passer);// this  will be used in my update function and my randomsort function thats why their local here
        const AttackValue = Math.floor(Math.random() * AttackArray.length);// this will be used in my update function  thats why their local here

        if(this.keyboard.D.isDown==true ){// if we pressdown a we want to do the following


            player2.play("RedRunRight",true); //play animation
                player2.x += 8.5;//go right if negative it go left

           
            
        }
        else if(this.keyboard.A.isDown==true){
            player2.play("RedRunLeft",true);

                player2.x -= 8.5;

                //45
                //36


            
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
                    player1.x = Location;//we push player 2 back to another location
                    sound("punch");//calls function to make sound
                    player1Health=player1Health-100;//reduces the enemy health
                    console.log(player1Health);
                    console.log(player2Health+"red");

                }
                else{
                    sound("woosh");//calls function to make sound
                }

        }
        else if( this.keyboard.C.isDown==true ){

            
            player2.play("RedrightKick",true);
                if (player2.x-60<player1.x && player2.x>player1.x-60) {
                    player1.x = Location;
                    sound("kick");
                    player1Health=player1Health-100;
                    console.log(player1Health);
                    console.log(player2Health+"red");
                }
                else{
                    sound("woosh");
                }
        }
        else if( this.keyboard.Q.isDown==true ){


            player2.play("RedLeftPunch",true);
            if ((player2.x+60>= player1.x && player2.x<=player1.x+60) ) {
                player1.x = Location;
                sound("punch");
                player1Health=player1Health-100;
                console.log(player1Health);
                console.log(player2Health+"red");
            }
            else{
                sound("woosh");
            }

        }
        else if( this.keyboard.Z.isDown==true ){

            player2.play("RedLeftKick",true);
            if (player2.x+60>= player1.x && player2.x<=player1.x+60 ) {
                player1.x = Location;
                sound("kick")
                player1Health=player1Health-100;
                console.log(player1Health);  
                console.log(player2Health+"red");              

            }
            else{
                sound("woosh");
            }

        }

        if (player2.x < player1.x) {
            player1.play("BlueRunLeft", true);
            player1.x -= 8.5;


        }
        
        
        if (player2.x > player1.x) {
            player1.play("BlueRunRight", true);
            player1.x += 8.5;

        }
        if(player1.x+10>= player2.x && player1.x<=player2.x+10){
            
            
            attack(AttackValue);
            player2.x += 5.5;
            
            
        }
        if(player1.x-10<player2.x && player1.x>player2.x-10){
            attack(AttackValue);
            player2.x -= 5.5;
            
        }
        if (player2Health >= 4000 && player2Health <5000) {
            HealthBar1.play("RedHealth5");
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



/**************************************************** array filled with keys(variables used to get a sprite animation) that can be used to get each stage of health and place the health in game  ****************************************************/
        let bossArray = ["BlueHealth6","BlueHealth5","BlueHealth4","BlueHealth3","BlueHealth2",'BlueHealth1'];// these will be used update fucntion  thats why their local here       
        if (player1Health>5000) {//enemy health is always being checked and if it is on one of hese if and else staements it will do the following
            HealthBar2.play(bossArray[0]);//it will calla key which is in the array above and it will play that animation
        }
        else if (player1Health >= 4000 && player1Health <5000) {
            HealthBar2.play(bossArray[1]);
        }
        else if (player1Health >= 3000 && player1Health <4000) {
            HealthBar2.play(bossArray[2]);
        }
        else if (player1Health >= 2000 && player1Health <3000) {
            HealthBar2.play(bossArray[3]);
        }
        else if (player1Health  >= 1000 && player1Health <2000) {
            HealthBar2.play(bossArray[4]);
        }  
        else if (player1Health < 1000) {
            HealthBar2.play(bossArray[5]);
        } 
        let interval1=player2Health;// this will be used in my update fucntion  thats why their local here
        let interval2=player1Health;// this will be used in my update fucntion  thats why their local here

        if(interval1<0 || interval2<0){// if health went below 0 this happenes
            let winnerString= WinChecker();// this will be used in my update fucntion  thats why their local here
            let rootString="gameover screen/"+winnerString+".html";// this will be used in my update fucntion  thats why their local here
            window.location.replace(rootString);//it goes to gameover screen determined by the root string created
        }


    }
}





/****************************************************function here will be explained better in the webpage rather hen with comments because it will take more explaining to go over all these functions ****************************************************/




/****************************************************function with parameters that returns array and uses bubble sorting in a very different way(in my webpage) ****************************************************/
function randomSort(array,RandInt){
    console.log
    pass = RandInt;
    while(pass>0){
        for(let i=0;i<array.length;i++){
            let tempValue=array[i+1]  // this will be used in this function  thats why their local here
            if(array[i]>array[i+1]){
                array[i+1]=array[i];
                array[i]=tempValue;

            }
            else{

            }
        pass--;

    }
    }

    return array;
}
/****************************************************function with parameter that does not return anything****************************************************/
function attack(value){
    if (value == 0) {

        player1.play("BlueLeftPunch");
        player2Health=player2Health-10;
        sound("punch");
        
        

    }
    else if (value == 1) {

        player1.play("BluerightPunch");
        player2Health=player2Health-10;
        sound("punch");
        
        
    }

    else if (value == 2) {

        player1.play("BlueLeftKick");
        player2Health=player2Health-10;
        sound("kick");
        
        
    }
        else if (value == 3) {
        player1.play("BluerightKick");
        player2Health=player2Health-10;
        sound("kick");
        
        
    }

}
/****************************************************function with no parameters that does not return anything****************************************************/
function boundaries(){
        if (player2.x==2000 || player2.x > 1950  ) {
            player2.x -= 8.5;
        }
        else if (player2.x==0 || player2.x < 25 ) {
            player2.x += 8.5;
        }
}
/****************************************************function with parameter that does not return anything but makes use of string method****************************************************/
function sound(type){
        let type1 = type.charAt(0)// this will be used in this function  thats why their local here
        type1 = type1.toUpperCase();
        type = type.replace(type[0], type1);


        let usedstring= "assets/sounds/"+type+".mp3";// this will be used in this function  thats why their local here
        audio = new Audio(usedstring);
        audio.volume=0.10;
        audio.loop=false;
        audio.play();
        


}
/****************************************************function with no parameter that does returns a string using string metthods****************************************************/
function WinChecker(){
    if (player2Health < 0){
        let winner= "blue";// this will be used in this function  thats why their local here
        winner = winner.toUpperCase();
        return winner;

    }
    else if (player1Health < 0) {
        let winner= "red";// this will be used in this function  thats why their local here
        winner = winner.toUpperCase();
        return winner;

    } 



}