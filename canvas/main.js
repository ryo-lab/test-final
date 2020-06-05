let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy, imgCoin, imgCoin2, imgCoin3, imgRock;
let points = 0;
let direction;

$(document).ready(function(){

    //1 rock
    //2 goal
    //3 enemy
    //4 one coin
    //5 two coins
    //6 three coins
    //7 broken rocks
    
    mapArray = [0, 1, 1, 6, 1, 1,
                0, 0, 1, 1, 4, 0, 
                0, 1, 0, 0, 0, 5, 
                6, 0, 4, 0, 1, 0,
                1, 0, 0, 5, 0, 0, 
                3, 0, 0, 0, 1, 2];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "canvas/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;

    imgMain.onload = function(){

        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMainX, currentImgMainY, 200, 200);
        //(pic, picplace1, 2, 3, 4, putwhere x, putwhere y, size x, size y)
    };
//-191px-33px
    imgCoin = new Image();
    imgCoin.src = "canvas/images/material.png";

    imgCoin2 = new Image();
    imgCoin2.src = "canvas/images/material.png";

    imgCoin3 = new Image();
    imgCoin3.src = "canvas/images/material.png";

    imgRock = new Image();
    imgRock.src = "canvas/images/material.png";

    imgMountain = new Image();
    imgMountain.src = "canvas/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "canvas/images/Enemy.png";
    // console.log(imgCoin.src);
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
                for(let x in mapArray){
                    
                    if(mapArray[x] == 1){
                        ctx.drawImage(imgMountain, 64, 191, 32, 32, x%6*200, Math.floor(x/6)*200, 200, 200);
                                           
                    }
                    else if(mapArray[x] == 3){
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, x%6*200, Math.floor(x/6)*200, 200, 200);
                    }
                    else if(mapArray[x] == 4){
                        ctx.drawImage(imgCoin, 134, 32, 20, 20, x%6*200, Math.floor(x/6)*200, 100, 100);
                    }
                    else if(mapArray[x] == 5){
                        ctx.drawImage(imgCoin2, 162, 35, 28, 23, x%6*200, Math.floor(x/6)*200, 150, 150);
                    }
                    else if(mapArray[x] == 6){
                        ctx.drawImage(imgCoin3, 191, 33, 33, 28, x%6*200, Math.floor(x/6)*200, 200, 200);
                    }
                }
        };
    };

    $("#status").text(points + " points");

    $("#attack").click(function(){
        // alert(direction);

        if(direction == "up"){
            if(mapArray[currentImgMainX/200 + (currentImgMainY - 200)/200*6] != 1){
                return;
            }
            
            if(points < 2){
                alert("your points is less than 2, you cannot break rock!!!!");
                return;
            }
            else{
                points -= 2;
                $("#status").text(points + " points");
                ctx.clearRect(currentImgMainX, currentImgMainY - 200, 200, 200);
                ctx.drawImage(imgRock, 63, 161, 33, 28, currentImgMainX, currentImgMainY - 200, 200, 200);
                mapArray[currentImgMainX/200 + (currentImgMainY - 200)/200*6] = 7;//break rock
            }
        }

        else if(direction == "down"){
            if(mapArray[currentImgMainX/200 + (currentImgMainY + 200)/200*6] != 1){
                return;
            }
            
            if(points < 2){
                alert("your points is less than 2, you cannot break rock!!!!");
                return;
            }
            else{
                points -= 2;
                $("#status").text(points + " points");
                ctx.clearRect(currentImgMainX, currentImgMainY + 200, 200, 200);
                ctx.drawImage(imgRock, 63, 161, 33, 28, currentImgMainX, currentImgMainY + 200, 200, 200);
                mapArray[currentImgMainX/200 + (currentImgMainY + 200)/200*6] = 7;//break rock
            }
        }

        else if(direction == "left"){
            if(mapArray[(currentImgMainX - 200)/200 + (currentImgMainY)/200*6] != 1){
                return;
            }
            
            if(points < 2){
                alert("your points is less than 2, you cannot break rock!!!!");
                return;
            }
            else{
                points -= 2;
                $("#status").text(points + " points");
                ctx.clearRect(currentImgMainX - 200, currentImgMainY, 200, 200);
                ctx.drawImage(imgRock, 63, 161, 33, 28, currentImgMainX - 200, currentImgMainY, 200, 200);
                mapArray[(currentImgMainX - 200)/200 + (currentImgMainY)/200*6] = 7;//break rock
            }
        }

        else if(direction == "right"){
            if(mapArray[(currentImgMainX + 200)/200 + (currentImgMainY)/200*6] != 1){
                return;
            }
            
            if(points < 2){
                alert("your points is less than 2, you cannot break rock!!!!");
                return;
            }
            else{
                points -= 2;
                $("#status").text(points + " points");
                ctx.clearRect(currentImgMainX + 200, currentImgMainY, 200, 200);
                ctx.drawImage(imgRock, 63, 161, 33, 28, currentImgMainX + 200, currentImgMainY, 200, 200);
                mapArray[(currentImgMainX + 200)/200 + (currentImgMainY)/200*6] = 7;//break rock
            }
        }
    });
    // imgCoin.onload = function(){
    //     for(let x in mapArray){
    //         if(mapArray[x] == 4){
    //             ctx.drawImage(imgCoin, 3, 7, 65, 65, x%6*200, Math.floor(x/6)*200, 200, 200);
                                
    //         }
    //     }
    // }
});

$(document).keydown(function(event){
    let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;

    event.preventDefault();

    switch(event.originalEvent.key){//to left
        case "ArrowLeft":
            targetImgMainX = currentImgMainX - 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            direction = "left";
            break;

        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 200;
            cutImagePositionX = 355;
            direction = "up";
            break;
        
        case "ArrowRight":
            targetImgMainX = currentImgMainX + 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            direction = "right";
            break;

        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 200;
            cutImagePositionX = 0;
            direction = "down";
            break;
        default:
            return;
    }

    if(targetImgMainX <= 1000 && targetImgMainX >= 0 &&
        targetImgMainY <= 1000 && targetImgMainY >= 0){
            targetBlock = targetImgMainX/200 + targetImgMainY/200*6;
        }
    else{
        targetBlock = -1;
    }

    //draw rock again

    if (mapArray[(currentImgMainX)/200 + (currentImgMainY)/200*6] == 7){
        // alert("if 1");
        ctx.drawImage(imgRock, 63, 161, 33, 28, currentImgMainX, currentImgMainY, 200, 200);
    }

    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);

    //draw rock again
    if (mapArray[(currentImgMainX)/200 + (currentImgMainY)/200*6] == 7){
        // alert("if 2");
        ctx.drawImage(imgRock, 63, 161, 33, 28, currentImgMainX, currentImgMainY, 200, 200);
    }

    if(targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3){
    }
    else{
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }

    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMainX, currentImgMainY, 200, 200);

    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點");
            break;
        case 3:
            // $("#talkBox").text("對戰");
            let result = window.confirm("do you want to attack enemy??");
            if(result){
                sleep(2000);

                let randomNum = Math.floor((Math.random() * 10) + 1);
                if(randomNum < points){
                    alert("YOU WIN!!");
                }
                else if(randomNum > points){
                    alert("YOU LOSE...");
                }
                else{
                    alert("DRAW");
                }
            }
            else{
                
            }
            break;
        case 4:
            points++;
            mapArray[targetBlock] = 0;
            break;
        case 5:
            points += 2;
            mapArray[targetBlock] = 0;
            break;
        case 6:
            points += 3;
            mapArray[targetBlock] = 0;
            break;
    }

    $("#status").text(points + " points");

    
});

function sleep(waitMsec) {
    var startMsec = new Date();
    while(new Date() - startMsec < waitMsec);
}