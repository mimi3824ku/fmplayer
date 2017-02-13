/**
 * Created by Administrator on 2017/2/3.
 */
/*Ð¡¹¦ÄÜ*/
function Feature(){
    this.$lyricBtn = $('#lyricBtn');
    this.$recycle = $('#recycleBtn');
    this.$pinkBtn = $('#pinkBtn');
    this.$blueBtn = $('#blueBtn');
    this.$greenBtn = $('#greenBtn');
/*
    this.$star = $('#star');
*/
    this.$download = $('#download');
    this.$lyric = $('#lyric');
    this.$enlargeBtn = $('#listEnlargeBtn');
    this.$narrowBtn = $('#listNarrowBtn');
    this.$starListPanel = $('#starListPanel');
    this.bindEvents();
}

Feature.prototype = {
    bindEvents: function(){
        var _this = this;

        _this.$recycle.on('click',function(){
            $(this).toggleClass('recycleed');
            if ($(this).hasClass('recycleed')) {
                $('audio').attr('loop','loop');
            }
            if(!$(this).hasClass('recycleed')){
                $('audio').removeAttr('loop','no-loop');
            }
        });
/*
        _this.$star.on('click',function(){
            $(this).toggleClass('star')
        });*/

        _this.$download.on('click',function(){
            $(this).attr('href',$('audio').attr('src'));
        });

        _this.$pinkBtn.on('click',function(){
            _this.$lyric.find('li').removeClass('blue');
            _this.$lyric.find('li').removeClass('green');
            _this.$lyric.find('li').toggleClass('pink');
            _this.$blueBtn.removeClass('deep');
            _this.$greenBtn.removeClass('deep');
            $(this).toggleClass('deep');
        });

        _this.$blueBtn.on('click',function(){
            _this.$lyric.find('li').removeClass('pink');
            _this.$lyric.find('li').removeClass('green');
            _this.$lyric.find('li').toggleClass('blue');
            _this.$greenBtn.removeClass('deep');
            _this.$pinkBtn.removeClass('deep');
            $(this).toggleClass('deep');
        });

        _this.$greenBtn.on('click',function(){
            _this.$lyric.find('li').removeClass('blue');
            _this.$lyric.find('li').removeClass('pink');
            _this.$lyric.find('li').toggleClass('green');
            _this.$blueBtn.removeClass('deep');
            _this.$pinkBtn.removeClass('deep');
            $(this).toggleClass('deep');
        });

        _this.$narrowBtn.on('click',function(){
            _this.$starListPanel.addClass('scaleList');
            _this.$starListPanel.find('.scaleBtn>span').addClass('scaleBtn');
            $(this).hide(300);
            _this.$enlargeBtn.show(300);
            _this.$starListPanel.find('h1').hide();
            _this.$starListPanel.find('ol').hide();
        });

        _this.$enlargeBtn.on('click',function(){
            $(this).hide(300);
            _this.$narrowBtn.show(300);
            _this.$starListPanel.find('h1').show();
            _this.$starListPanel.find('ol').show();
            _this.$starListPanel.removeClass('scaleList');
            _this.$starListPanel.find('.scaleBtn>span').removeClass('scaleBtn');
        });
    }
};

var featureCrl = {
    init: function(){
        return new Feature();
    }
};

