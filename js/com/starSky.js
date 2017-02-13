/**
 * Created by Administrator on 2017/2/11.
 */
    function StarSky(){
        this.canvas = $('#canvas').get(0);
        this.canvas.width = window.outerWidth;
        this.canvas.height = window.outerHeight;
        this.context = this.canvas.getContext('2d');
        this.skyStyle = this.context.createRadialGradient(this.canvas.width/2,this.canvas.height,0,
            this.canvas.width/2,this.canvas.height,this.canvas.height);


        this.init();
    }

    StarSky.prototype = {
        init: function(){
            var _this = this;
            _this.skyStyle.addColorStop(0,'#035');
            _this.skyStyle.addColorStop(1.0,'#000');
            _this.context.fillStyle = _this.skyStyle;
            _this.context.fillRect(0,0,_this.canvas.width,_this.canvas.height);

            _this.renderFixedStars();

        },
        renderFixedStars: function(){
            var _this = this;
            for(var i=0;i<300;i++){
                var R = Math.random()*5+5,
                    x = Math.random()*_this.canvas.width,
                    y = Math.random()*_this.canvas.height*0.8,
                    rot = Math.random()*360;
                _this.drawStarFive(_this.context,R,x,y,rot);
            }
        },
        drawStarFive: function(cxt,R,x,y,rot){
            cxt.save();
            //图形变换translate、rotate、scale
            cxt.translate(x,y);
            cxt.rotate(rot/180*Math.PI);//弧度制
            cxt.scale(R,R);//放弃外边框的绘制
            //标准化五角星路径
            this.startPath(cxt);
            cxt.fillStyle = '#fb3';
            /*    cxt.strokeStyle = '#fd5';
             cxt.lineWidth = 3;
             cxt.lineJoin = 'round';*/
            cxt.fill();
            //cxt.stroke();
            cxt.restore();
        },
        startPath: function(cxt){
            cxt.beginPath();
            for(var i=0;i<5;i++){
                cxt.lineTo(Math.cos((18+i*72)*Math.PI/180),
                    -Math.sin((18+i*72)*Math.PI/180));

                cxt.lineTo(Math.cos((54+i*72)*Math.PI/180)*0.5,
                    -Math.sin((54+i*72)*Math.PI/180)*0.5);
            }
            cxt.closePath();
        }
    };

    var starSky = {
        init: function(){
           return new StarSky()
        }
    };


