
var looperNnumber = 2;

videojs("video").ready(function(){
    var player = this;

    player.on('loadeddata',function(){
    })

    // 检测播放时间
    player.on('timeupdate', function () {
    });

    // 开始或恢复播放
    player.on('play', function() {
    });

    player.on('ended',function(){
        loopMode = looperNnumber % 3

        if ( loopMode == 0 ){
            player.src({ type: 'video/mp4', src: 'http://ogrmjs8hr.bkt.clouddn.com/blurry.mov' });
            player.play();
        }
        if ( loopMode == 1 || loopMode == 2 ){
            player.src({ type: 'video/mp4', src: 'http://ogrmjs8hr.bkt.clouddn.com/clear.mov' });
            player.play();
        }
        looperNnumber++;
    })

    player.src({ type: 'video/mp4', src: 'http://ogrmjs8hr.bkt.clouddn.com/clear.mov' });
    player.play();
});
var video_content=document.getElementById('video_content');
var download_btn=document.getElementById('div-download-button');
var qrcode=document.getElementById('qrcode');
qrcode.style.display='none';
download_btn.onclick=function () {
    if (qrcode.style.display == "none") {
        qrcode.style.display='block';
    }else{
        qrcode.style.display='none';
    }
};
video_content.onclick=function(){
     qrcode.style.display='none';
}

