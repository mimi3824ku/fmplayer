/**
 * Created by Administrator on 2017/2/2.
 */
    function Progress(){
        this.audio = $('audio').get(0);
        this.$audio = $('audio');
        this.$curTime = $('#time');
        this.$baseBar = $('#baseBar');
        this.$progressBar = $('#progressBar');
        this.$handle = $('#dragBall');
        this.$dragHandle = this.$handle.draggabilly({
            axis: 'x',
            containment: true
        });
        this.barWidth = this.$baseBar.width();
        this.handleWidth = this.$handle.width();
        this.draggie = this.$dragHandle.data('draggabilly');

        this.bindEvents();
    }

    Progress.prototype = {
        bindEvents: function(){
            var _this = this;
            _this.$audio.on('timeupdate',function(){
                _this.showTime();
                _this.progressMove();
            });

            _this.$dragHandle.on('dragMove',function(){
                _this.dragMove();
            });

            _this.$dragHandle.on('dragStart',function(){
                _this.audio.pause();
            });

            _this.$dragHandle.on('dragEnd',function(){
                _this.dragEnd();
            });

            _this.$baseBar.on('mousedown',function(e){
                _this.mouseDown(e);
            });
        },
        showTime: function(){
            var _this = this;
            var tMinutes = Math.floor(_this.audio.currentTime / 60);
            var tSeconds = Math.floor(_this.audio.currentTime % 60);
            var timeShow = (tMinutes<10?('0'+tMinutes):tMinutes) + ':' + (tSeconds<10?('0'+tSeconds):tSeconds);
            _this.$curTime.empty();
            _this.$curTime.html(timeShow);
        },
        progressMove: function(){
            var _this = this;
            _this.$progressBar.css({
                width: Math.floor(_this.audio.currentTime / _this.audio.duration*100) + '%'
            });
            _this.$handle.css({
                left: Math.floor(_this.audio.currentTime / _this.audio.duration*100) + '%'
            })
        },
        dragMove: function(){
            var _this = this;
            _this.$progressBar.css({
                width: Math.floor(_this.draggie.position.x / _this.barWidth*100) + 1 + '%'
            });
        },
        dragEnd: function(){
            var _this = this;
            _this.audio.play();
            var xMoveWidth = _this.barWidth - _this.handleWidth;
            _this.audio.currentTime = _this.draggie.position.x/xMoveWidth * _this.audio.duration;
        },
        mouseDown: function(e){
            var _this = this;
            var barLeft = _this.$baseBar.offset().left;
            var eLeft = e.clientX;
            _this.audio.currentTime = (eLeft - barLeft)/_this.barWidth * _this.audio.duration
        }
    };

    var progressBarCrl = {
        init: function(){
            return new Progress()
        }
    };
