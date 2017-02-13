/**
 * Created by Administrator on 2017/2/3.
 */

/*有关歌曲及歌曲功能的所有实现*/
function Music(){
    this.$wrapper = $('#wrapper');
    this.$playBtn = $('#play');
    this.$pauseBtn = $('#pause');
    this.$randomSongBtn = $('#randomSong');
    this.$getChannelBtn = $('#getChannel');
    this.audio = $('audio').get(0);
    this.$audio = $('audio');
    this.$songStyle = $('#songStyle');
    this.$songName = $('#songName');
    this.$singer = $('#singer');
    this.$lyric = $('#lyric');
    this.$background = $('#background');
    this.lyricArr = [];
    this.$lyricBtn = $('#lyricBtn');
    this.$lyricPanel = $('#lyricPanel');
    this.$star = $('#star');
    this.$star.attr('data-star','false');
    this.starList = [];
    this.$starList = $('#starList');
    this.firstLoad = true;

    this.bindEvents();
    this.loadLocalStorage();
}

Music.prototype = {
    bindEvents: function(){
        var _this = this;
        /*先把localStorage储存的list渲染出来*/

        var hasGetChannel = false;
        /*播放按钮*/
        _this.$playBtn.on('click',function(){
            if(_this.audio.pause){
                if(hasGetChannel===false){
                    _this.getChannel();
                }
                _this.musicPlay()
            }else{
                _this.musicPause()
            }
        });
        /*暂停按钮*/
        _this.$pauseBtn.on('click',function(){
            hasGetChannel = true;
            if(_this.audio.play){
                _this.musicPause()
            }else{
                _this.musicPlay()
            }
        });
        /*随机歌曲播发*/
        _this.$randomSongBtn.on('click',function(){
            _this.getMusic();
        });
        /*随机歌曲频道*/
        _this.$getChannelBtn.on('click',function(){
            _this.getChannel();
        });
        /*歌词显示按钮*/
        _this.$lyricBtn.on('click',function(){
            _this.$lyricPanel.fadeToggle(800);
        });
        /*跟踪歌曲时间的变化，如歌曲结束则自动触发随机歌曲播放*/
        _this.$audio.on('timeupdate',function(){
            if(_this.audio.currentTime === _this.audio.duration){
                _this.getMusic();
            }
        });
        /*star按钮逻辑*/
        _this.$star.on('click',function(){

            if(_this.$star.attr('data-star') === 'true'){
                _this.$star.attr('data-star','false');
            }else{
                _this.$star.attr('data-star','true');
            }
            $(this).toggleClass('star');
            console.log('star');
            _this.createSongItem();

        });

        _this.$starList.on('click',function(e){
            var target = $(e.target);

            _this.$star.addClass('star');
            _this.$star.attr('data-star','true');

            _this.renderSongInfo(target.attr('data-sid'),
                target.attr('data-songName'),target.attr('data-bgPic'),
                target.attr('data-singer'),target.attr('data-src'),
                target.attr('data-channel'));
            _this.musicPlay();
        });

        window.onbeforeunload = function(){
            var starListString = JSON.stringify(_this.starList);
            console.log(starListString);
            window.localStorage.setItem('starListSave',starListString);

            try{
                localStorage.setItem('starListSave',starListString);
            }catch(oException){
                if(oException.name == 'QuotaExceededError'){
                    console.log('超出本地存储限额！');
                    //如果历史信息不重要了，可清空后再设置
                    localStorage.clear();
                    localStorage.setItem('starListSave',starListString);
                }
            }
        };

    },
    loadLocalStorage: function(){
            var _this = this;
            var starListString = window.localStorage.getItem('starListSave');
            _this.starList = JSON.parse(starListString);
            _this.render_list(_this.starList);
    },
    removeStar: function(){
        var _this = this;
        if(_this.starList!=null){
            for(var i=0;i<_this.starList.length;i++){

                if(_this.$audio.attr('src')===_this.starList[i]['src']){
                    _this.starList.splice(i,1);
                }
            }
        }

    },
    createSongItem: function(){
        var song_item = {};
        var _this = this;

        song_item.songName = _this.$songName.attr('title');
        song_item.singer = _this.$singer.attr('title');
        song_item.style = _this.$songStyle.attr('title');
        song_item.src = _this.$audio.attr('src');
        song_item.bgPic = _this.$background.attr('data-bgPic');
        song_item.sid = _this.$audio.attr('sid');

        if(_this.firstLoad===true&&_this.starList===null){
            _this.starList = [];
            _this.firstLoad = false;
        }
        if(_this.starList!=null){
            Array.prototype.push.call(_this.starList,song_item);
        }
        console.log('starList',_this.starList)

        if(_this.$star.attr('data-star') === 'true'){
            _this.render_list(_this.starList);
        }
        if(_this.$star.attr('data-star') === 'false'){
            if(_this.starList!=null){
                Array.prototype.pop.call(_this.starList,song_item);//因click又重复push了，所以直接pop掉重复的
            }
            _this.removeStar();
            _this.render_list(_this.starList);
        }
    },
    musicPlay: function(){
        var _this = this;
        _this.audio.play();
        _this.$playBtn.hide();
        _this.$pauseBtn.show();
    },
    musicPause: function(){
        var _this = this;
        _this.audio.pause();
        _this.$pauseBtn.hide();
        _this.$playBtn.show();
    },
    /*随机获取频道*/
    getChannel: function(){
        var _this = this;
        $.ajax({
            url:'http://api.jirengu.com/fm/getChannels.php',
            dataType: 'json',
            method: 'get',
            success: function(ret){
                var channels = ret.channels;
                var channelsNum = Math.floor(Math.random()*channels.length);
                var channelName = channels[channelsNum].name;
                var channelId = channels[channelsNum].channel_id;
                _this.$songStyle.html(channelName);
                _this.$songStyle.attr('title',channelName);
                _this.$songStyle.attr('data-id',channelId);
                _this.getMusic();
            }
        })
    },
    /*根据channel_id随机获取歌曲*/
    getMusic: function(){
        var _this = this;
        $.ajax({
            url: 'http://api.jirengu.com/fm/getSong.php',
            dataType: 'json',
            method: 'get',
            data: {
                'channel': _this.$songStyle.attr('data-id')
            },
            success: function(ret){
                var song = ret.song[0],
                    sid = song.sid,
                    ssid = song.ssid,
                    songName = song.title,
                    bgPic = song.picture,
                    singer = song.artist,
                    songSrc = song.url;
                _this.$background.css({
                    background: 'url(' + bgPic + ')'
                });

                _this.$background.attr('data-bgPic','url(' + bgPic + ')');
                _this.$songName.html(songName);
                _this.$songName.attr('title',songName);
                _this.$singer.html(singer);
                _this.$singer.attr('title',singer);
                _this.$audio.attr('src',songSrc);
                _this.$audio.attr('sid',sid);
                _this.$audio.attr('ssid',ssid);

                _this.musicPlay();
                _this.getLyric();
            }
        });
        /*自动下首歌的时候将star去掉*/
        _this.$star.removeClass('star');
        _this.$star.attr('data-star','false');
    },

    /*根据sid获取指定歌词*/
    getLyric: function(getSid){
        var getSid = getSid?getSid:null;
        var _this = this,
            sid = getSid?getSid:_this.$audio.attr('sid'),
            ssid = _this.$audio.attr('ssid');
        $.post('http://api.jirengu.com/fm/getLyric.php',{ssid: ssid, sid: sid})
            .done(function(lry){
                var lry = JSON.parse(lry);
                if(lry.lyric){
                    _this.$lyric.empty();
                    var line = lry.lyric.split('\n');
                    var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;
                    var result = [];
                    if(line){
                        for(var i in line){
                            var lyricTime = line[i].match(timeReg);//每句歌词时间的数组
                            if(!lyricTime) continue;
                            var lyricSec = line[i].replace(timeReg,'');
                            for(var j in lyricTime){
                                var t = lyricTime[j].slice(1,-1).split(':');
                                var timeArr = parseInt(t[0],10)*60 + parseFloat(t[1]);
                                result.push([timeArr,lyricSec])
                            }
                        }
                    }
                    /*歌词根据时间出现顺序排序*/
                    result.sort(function(t1,t2){
                        return t1[0]-t2[0];
                    });
                    _this.lyricArr = result;
                    _this.renderLyric();
                }
            }).fail(function(){
                _this.$lyric.html('<li>本歌曲展示没有歌词</li>')
            })
    },
    /*渲染歌词*/
    renderLyric: function(){
        var _this = this;
        if(_this.lyricArr!=null){
            for(var i in _this.lyricArr){
                var lyricLi = '<li data-time='+ _this.lyricArr[i][0] +'>'+
                                 _this.lyricArr[i][1] +'</li>';
                _this.$lyric.append(lyricLi);
            }
            setInterval(function(){
                _this.showLyric()
            },200);
        }
    },
    /*歌词展示的控制*/
    showLyric: function(){
        var _this = this;
        var liH = _this.$lyric.find('li').eq(1).outerHeight()-2;
        for(var i=0;i<_this.lyricArr.length;i++){
            var curT = _this.$lyric.find('li').eq(i).attr('data-time');
            var nextT = _this.$lyric.find('li').eq(i+1).attr('data-time');
            var currentTime = _this.audio.currentTime;
            if((currentTime>curT) && (curT<nextT)){
                _this.$lyric.find('li').removeClass('active');
                _this.$lyric.find('li').eq(i).addClass('active');
                _this.$lyric.css({
                    top: -liH*(i-2)
                })
            }
        }
    },
    /*渲染star歌单*/
    render_list: function(starList){
        console.log('starList',starList)

        var songLi = '';
        var _this = this;
        if(starList!=null){
            for(var i=0;i<starList.length;i++){
                songLi += '<li title="'+
                    starList[i]['songName']+
                    '&nbsp&nbsp--'+
                    starList[i]['singer'] +'" data-src="'+
                    starList[i]['src'] +'" data-singer="'+ starList[i]['singer']
                    +'" data-songName="'+ starList[i]['songName'] +'" data-bgPic="'+
                    starList[i]['bgPic'] +'" data-sid="'+
                    starList[i]['sid'] +'" data-channel="'+
                    starList[i]['style'] +'">'+
                    starList[i]['songName']+
                    '&nbsp&nbsp--'+
                    starList[i]['singer'] +
                    '</li>';
            }
        }
            _this.$starList.empty();
            _this.$starList.append(songLi);
    },
    /*渲染歌曲信息到面板*/
    renderSongInfo: function(sid,songName,bgPic,singer,songSrc,songStyle){
        var _this = this;
        _this.$background.css({
            background: bgPic
        });
        _this.$songStyle.html(songStyle);
        _this.$songName.html(songName);
        _this.$songName.attr('title',songName);
        _this.$singer.html(singer);
        _this.$singer.attr('title',singer);
        _this.$audio.attr('src',songSrc);
        _this.$audio.attr('sid',sid);
        _this.getLyric(sid);
    }
};

var musicCrl = {
    init: function(){
        return new Music()
    }
};
