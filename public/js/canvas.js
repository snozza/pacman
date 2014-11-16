function drawGrid(dots) {
    var cnv = document.getElementById("canvas");
    var ctx = cnv.getContext('2d');

    var gridOptions = {
        minorLines: {
            color: 'white'
        },
        majorLines: {
            separation: 30,
            color: 'blue'
        }
    };

    drawDots(dots, cnv, gridOptions.majorLines);
    drawOuterWalls(cnv, gridOptions.minorLines);
    drawOuterWalls(cnv, gridOptions.majorLines);
    
    // drawGridLines(cnv, gridOptions.majorLines);
    return;
}

function drawGameStatus(message, ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
    ctx.font = "30px Georgia";
    ctx.fillStyle = 'white';
    ctx.fillText(message, 140, width/2);
}


    

function drawDots(dots, cnv, lineOptions) {
    var iWidth = cnv.width;
    var iHeight = cnv.height;
    var iCount = null;
    var ctx = cnv.getContext('2d');
    var i; 
    var j;
    var x;
    var y;
    var smallSquare = 0.5;

    iCount = Math.floor(iWidth / lineOptions.separation);

    ctx.fillStyle = 'orange';

    for (i = 0; i < dots.length; i++) {
        ctx.fillRect(dots[i].x -3, dots[i].y -3, 8, 8)
    }

    var Nest = {
        x: 390,
        y: 390,
        width:120,
        height:150,
    }

    var Door = {
        x: 510,
        y: 450,
        width:30,
        height:30,
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(Nest.x, Nest.y, Nest.width, Nest.height);
    ctx.fillRect(Door.x, Door.y, Door.width, Door.height);
    
    

}

function drawOuterWalls(cnv, lineOptions) {

    var ctx = cnv.getContext('2d');

    ctx.strokeStyle = lineOptions.color;
    ctx.strokeWidth = 1;
    ctx.fillStyle = 'blue';

    ctx.beginPath();
    ctx.fill();



    var topWall = {
        x: 0,
        y: 0,
        width: 900,
        height: 30
    }

    var leftWall = {
        x: 0,
        y: 30,
        width: 30,
        height: 840
    }

    var rightWall = {
        x: 870,
        y: 30,
        width: 30,
        height: 840
    }

    var bottomWall = {
        x: 0,
        y: 870,
        width: 900,
        height: 30
    }
     var wall1 = {
        x: 60,
        y: 60,
        width: 120,
        height: 30
    }

    var wall2 = {
        x: 210,
        y: 60,
        width: 180,
        height: 30
    }

    var wall3 ={
        x: 420,
        y: 60,
        width: 60,
        height: 30
    }

     var wall4={
        x: 510,
        y: 60,
        width: 180,
        height: 30
    }

    var wall5={
        x: 720,
        y: 60,
        width: 120,
        height: 30
    }

    var wall6={
        x: 60,
        y: 90,
        width: 30,
        height: 60
    }

    var wall7={
        x: 360,
        y: 90,
        width: 30,
        height: 180
    }

     var wall8={
        x: 420,
        y: 90,
        width: 30,
        height: 60
    }

      var wall9={
        x: 510,
        y: 90,
        width: 30,
        height: 180
    }

      var wall10={
        x: 810,
        y: 90,
        width: 30,
        height: 60
    }

    var wall11={
        x: 30,
        y: 180,
        width: 60,
        height: 30
    }

    var wall12={
        x: 120,
        y: 120,
        width: 30,
        height: 300
    }

    var wall13={
        x: 180,
        y: 120,
        width: 30,
        height: 90
    }

     var wall14={
        x: 180,
        y: 180,
        width: 90,
        height: 30
    }

    var wall15={
        x: 210,
        y: 180,
        width: 60,
        height: 30
    }

    var wall16={
        x: 240,
        y: 120,
        width: 30,
        height: 60
    }

    var wall17={
        x: 270,
        y: 120,
        width: 60,
        height: 30
    }

    var wall18={
        x: 300,
        y: 150,
        width: 30,
        height: 60
    }

    var wall19={
        x: 420,
        y: 90,
        width: 30,
        height: 60
    }

    var wall20={
        x: 450,
        y: 120,
        width: 30,
        height: 90
    }

    var wall21={
        x: 420,
        y: 180,
        width: 30,
        height: 90
    }

    var wall22={
        x: 450,
        y: 240,
        width: 30,
        height: 60
    }

    var wall23={
        x: 360,
        y: 300,
        width: 180,
        height: 30
    }

    var wall24={
        x: 570,
        y: 120,
        width: 150,
        height: 30
    }

    var wall25={
        x: 570,
        y: 150,
        width: 30,
        height: 120
    }

    var wall26={
        x: 600,
        y: 240,
        width: 30,
        height: 30
    }

    var wall27={
        x: 630,
        y: 180,
        width: 30,
        height: 90
    }

    var wall28={
        x: 660,
        y: 180,
        width: 30,
        height: 30
    }

    var wall29={
        x: 690,
        y: 180,
        width: 30,
        height: 180
    }

    var wall30={
        x: 750,
        y: 120,
        width: 30,
        height: 300
    }

    var wall31={
        x: 810,
        y: 180,
        width: 60,
        height: 30
    }

    var wall32={
        x: 60,
        y: 240,
        width: 60,
        height: 30
    }

    var wall33={
        x: 180,
        y: 240,
        width: 150,
        height: 30
    }

    var wall34={
        x: 180,
        y: 270,
        width: 30,
        height: 150
    }

    var wall35={
        x: 300,
        y: 270,
        width: 30,
        height: 270
    }

    var wall36={
        x: 570,
        y: 300,
        width: 30,
        height: 120
    }

    var wall37={
        x: 630,
        y: 300,
        width: 30,
        height: 240
    }

    var wall38={
        x: 690,
        y: 390,
        width: 30,
        height: 90
    }

    var wall39={
        x: 720,
        y: 450,
        width: 90,
        height: 30
    }

    var wall40={
        x: 810,
        y: 240,
        width: 30,
        height: 360
    }

    var wall41={
        x: 60,
        y: 300,
        width: 30,
        height: 300
    }

    var wall42={
        x: 90,
        y: 450,
        width: 120,
        height: 30
    }

    var wall43={
        x: 120,
        y: 510,
        width: 120,
        height: 30
    }

    var wall44={
        x: 240,
        y: 300,
        width: 30,
        height: 240
    }

    var wall45={
        x: 360,
        y: 360,
        width: 30,
        height: 210
    }

    var wall46={
        x: 390,
        y: 360,
        width: 150,
        height: 30
    }

    var wall47={
        x: 390,
        y: 540,
        width: 150,
        height: 30
    }

        var wall48={
        x: 510,
        y: 390,
        width: 30,
        height: 60
    }

    var wall49={
        x: 510,
        y: 480,
        width: 30,
        height: 60
    }

    var wall50={
        x: 570,
        y: 450,
        width: 60,
        height: 30
    }

    var wall51={
        x: 570,
        y: 510,
        width: 30,
        height: 90
    }

    var wall52={
        x: 60,
        y: 630,
        width: 30,
        height: 210
    }

    var wall53={
        x: 90,
        y: 810,
        width: 210,
        height: 30
    }

    var wall54={
        x: 570,
        y: 690,
        width: 30,
        height: 150
    }


    var wall55={
        x: 120,
        y: 570,
        width: 30,
        height: 210
    }

    var wall56={
        x: 150,
        y: 630,
        width: 180,
        height: 30
    }

    var wall57={
        x: 180,
        y: 570,
        width: 150,
        height: 30
    }


    var wall58={
        x: 360,
        y: 600,
        width: 30,
        height: 240
    }

    var wall59={
        x: 420,
        y: 600,
        width: 30,
        height: 30
    }

    var wall60={
        x: 420,
        y: 660,
        width: 30,
        height: 90
    }


    var wall61={
        x: 420,
        y: 780,
        width: 30,
        height: 60
    }

    var wall62={
        x: 450,
        y: 600,
        width: 30,
        height: 90
    }

    var wall63={
        x: 450,
        y: 720,
        width: 30,
        height: 120
    }


    var wall64={
        x: 510,
        y: 600,
        width: 30,
        height: 240
    }

    var wall65={
        x: 600,
        y: 570,
        width: 240,
        height: 30
    }

    var wall66={
        x: 570,
        y: 630,
        width: 180,
        height: 30
    }


    var wall67={
        x: 750,
        y: 570,
        width: 30,
        height: 210
    }

    var wall68={
        x: 630,
        y: 690,
        width: 90,
        height: 30
    }

    var wall69={
        x: 630,
        y: 720,
        width: 30,
        height: 30
    }


    var wall70={
        x: 630,
        y: 750,
        width: 90,
        height: 30
    }

    var wall71={
        x: 600,
        y: 810,
        width: 240,
        height: 30
    }

    var wall72={
        x: 810,
        y: 630,
        width: 30,
        height: 210
    }

    var wall73={
        x: 180,
        y: 690,
        width: 90,
        height: 30
    }

    var wall74={
        x: 180,
        y: 720,
        width: 30,
        height: 30
    }

    var wall75={
        x: 180,
        y: 750,
        width: 90,
        height: 30
    }

    var wall76={
        x: 300,
        y: 690,
        width: 30,
        height: 150
    }

    var wall77={
        x: 660,
        y: 510,
        width: 120,
        height: 30
    }

    var walls = [topWall, rightWall, leftWall, bottomWall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60, wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70, wall71, wall72, wall73, wall74, wall75, wall76, wall77]
    for (var i = 0; i< walls.length; i++)
    ctx.fillRect(walls[i].x,walls[i].y, walls[i].width, walls[i].height)





    ctx.closePath();

    return;
}

   function drawGridLines(cnv, lineOptions) {


            var iWidth = cnv.width;
            var iHeight = cnv.height;

            var ctx = cnv.getContext('2d');

            ctx.strokeStyle = lineOptions.color;
            ctx.strokeWidth = 1;

            ctx.beginPath();

            var iCount = null;
            var i = null;
            var x = null;
            var y = null;

            iCount = Math.floor(iWidth / lineOptions.separation);

            for (i = 1; i <= iCount; i++) {
                x = (i * lineOptions.separation);
                ctx.moveTo(x, 0);
                ctx.lineTo(x, iHeight);
                ctx.stroke();
            }


            iCount = Math.floor(iHeight / lineOptions.separation);

            for (i = 1; i <= iCount; i++) {
                y = (i * lineOptions.separation);
                ctx.moveTo(0, y);
                ctx.lineTo(iWidth, y);
                ctx.stroke();
            }

            ctx.closePath();

            return;
        }