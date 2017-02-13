/**
 * Created by Administrator on 2017/2/9.
 */
function MusicBall(){
    this.$musicBall = $('#musicBall');
    this.$mask = $('#mask');
    this.$wrapper = $('#wrapper');
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
    this.ballL = 0;
    this.ballT = 0;
    this.ballW = this.$musicBall.width();
    this.ballH = this.$musicBall.height();
    this.clientW = 0;
    this.clientH = 0;
    this.isMoving = false;

    this.bindEvents();
}

MusicBall.prototype = {
  bindEvents: function(){
      var _this = this;
      _this.$musicBall.on('mousedown',function(e){
          _this.getCurPos(e);
      });

      $(document).on('mousemove',function(e){
          _this.mouseMove(e);
      });

      $(document).on('mouseup',function(e){
          _this.isMoving = false;
      });

      //当窗口缩小时不会出现滚动条
      $(window).on('resize',function(){
          _this.getClientWH();
          $(this).css({
              width: _this.clientW,
              height: _this.clientH
          })
      });

      _this.$musicBall.on('dblclick',function(){
          _this.$mask.hide();
          $(this).fadeOut(800);
          _this.$wrapper.fadeIn(800);
      })
  },
  getCurPos: function(e){
      var _this = this;
      _this.ballL = _this.$musicBall.offset().left;
      _this.ballT = _this.$musicBall.offset().top;
      _this.mouseOffsetX = e.clientX - _this.ballL;
      _this.mouseOffsetY = e.clientY - _this.ballT;
      _this.isMoving = true;
  },
  mouseMove: function(e){
      var _this = this;
      _this.getClientWH();
      if(_this.isMoving===true){
          var maxL = _this.clientW - _this.ballW;
          var maxT = _this.clientH - _this.ballH;
          //不会脱离视口宽高范围
          _this.ballL = Math.min(Math.max(0 , (e.clientX - _this.mouseOffsetX)),maxL);
          _this.ballT = Math.min(Math.max(0 , (e.clientY - _this.mouseOffsetY)),maxT);
          _this.$musicBall.css({
              'left': _this.ballL+'px',
              'top': _this.ballT+'px'
          })
      }
  },
  getClientWH: function(){
      var _this = this;
      _this.clientW = document.documentElement.clientWidth;
      _this.clientH = document.documentElement.clientHeight;
  }
};

var ballMove = {
    init: function(){
        return new MusicBall();
    }
};




