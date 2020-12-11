var g__nplayer_version="2.0.14",g__nplayer_index__=0,g__json_callback_index__=0,g__json_callback__=[];function isIE(){return window.ActiveXObject||"Microsoft Internet Explorer"==navigator.appName||navigator.userAgent.match(/MSIE/i)||navigator.userAgent.match(/Trident/i)}function isWindowsOS(){return 0<=navigator.platform.toUpperCase().indexOf("WIN")}function isMacOSX(){return 0<=navigator.platform.toUpperCase().indexOf("MAC")}function isMobileOS(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function isMacOSXApp(){return isMacOSXApplication}var isMacOSXApplication=!1;function JSONstringify(e){var t=typeof e;if("object"!=t||null===e)return"string"==t&&(e='"'+e+'"'),String(e);var n,a,i=[],r=e&&e.constructor==Array;for(n in e)"string"==(t=typeof(a=e[n]))?a='"'+a+'"':"object"==t&&null!==a&&(a=JSONstringify(a)),i.push((r?"":'"'+n+'":')+String(a));return(r?"[":"{")+String(i)+(r?"]":"}")}function NPlayer(a,i){i||(i={});var r=this,o=a+"-nplayer-"+ ++g__nplayer_index__,l=null,n=0!=i.visible,s=0,u=0,c=0,f=0,p=0,d=!1,h=0;function g(e){return document.getElementById(e)}function y(){return"<div id='"+o+"-msg'></div>"}function m(){var e="<a href='"+NPLAYER_SETUP_URL+"'><div id='nplayer-download-image'></div></a><p>동영상을 시청하려면 <a style='color:#ff4f4f;text-decoration:none' href='"+NPLAYER_SETUP_URL+"'><span style='color:#00ff00'>nPlayer</span> 설치 프로그램을 내려받아</a> 설치하여 주십시오.<br />플레이어 설치 후 페이지를 새로고침 해 주세요.</p>";return"string"==typeof NPLAYER_INSTALL_MSG&&(e=NPLAYER_INSTALL_MSG),"<table width='100%' height='100%' style='color:#9f9f9f;background-color:black;font-size:14px'><tr><td align='center' valign='middle'>"+e+"</td></tr></table>"}function t(){l=new _NPlayerPlugin(window.external),S(),d=!0}function P(){var e="";"undefined"!=typeof NPLAYER_USE_DSHOW&&(e="<param name='DShow' value='"+(0==NPLAYER_USE_DSHOW?"false":"true")+"' />");var t=y()+"<object id='"+o+"' classid='CLSID:{FE380CD7-670A-49B7-8A47-8E9DB67E5ED8}' width='1px' height='1px' codebase='"+NPLAYER_SETUP_URL+"#version="+NPLAYER_VERSION+"' ><param name='ControlBoxUrl' value='"+i.controlBox+"' /><param name='GuardDataBaseUrl' value='"+NPLAYER_GUARD_DB_URL+"' />"+(i.auth?"<param name='AuthUrl' value='"+i.auth+"' />":"")+(i.guardFlags?"<param name='GuardFlags' value='"+i.guardFlags+"' />":"")+"<param name='AutoPlay' value='"+(0==i.autoplay?"false":"true")+"' /><param name='Seekable' value='"+(0==i.seekable?"false":"true")+"' />"+e+"</object><span id='nplayer-install-msg'></span>";if(g(a).innerHTML+=t,g(o).object)l=new _NPlayerPlugin(g(o)),0!=i.visible&&l.setVisible(!0),S();else{g("nplayer-install-msg").innerHTML=m();var n=window.setInterval(function(){if(g(o).object)return g("nplayer-install-msg").innerHTML="",window.clearInterval(n),void location.reload()},500)}}function _(e){var t=!1;if(1==e.subtitle&&(t=!0),1==e.cors&&(t=!0),t)var n=y()+"<video class='video-js vjs-default-skin' style='visibility:hidden' id='"+o+"' width='100%' height='100%' preload crossorigin='anonymous' playsinline></video>";else n=y()+"<video class='video-js vjs-default-skin' style='visibility:hidden' id='"+o+"' width='100%' height='100%' preload playsinline></video>";g(a).innerHTML+=n,l=new _NPlayerHtml5(g(o),e),0!=e.visible&&l.setVisible(!0),S()}function S(){l.attachEvent("OpenStateChanged",function(e){switch(e){case NPlayer.OpenState.Opening:!function(e){if(null==l)return;l.setVisible(n);try{g(o+"-msg").innerHTML=""}catch(e){}}();break;case NPlayer.OpenState.Opened:if(p=c=u=s=0,!d)try{r.setCurrentPlaybackTime(f)}catch(e){}}if(r._onOpenStateChanged)for(var t in r._onOpenStateChanged)r._onOpenStateChanged[t](e)}),l.attachEvent("PlayStateChanged",function(e){switch(e){case NPlayer.PlayState.Playing:case NPlayer.PlayState.Paused:break;case NPlayer.PlayState.Stopped:h}if(r._onPlayStateChanged)for(var t in r._onPlayStateChanged)r._onPlayStateChanged[t](e)}),l.attachEvent("BufferingData",function(e){if(r._onBufferingData)for(var t in r._onBufferingData)r._onBufferingData[t](e)}),l.attachEvent("PlaybackCompleted",function(){if(r._onPlaybackCompleted)for(var e in r._onPlaybackCompleted)r._onPlaybackCompleted[e]()}),l.attachEvent("Error",function(e,t){var n;if(r._onError)for(var a in r._onError)n=r._onError[a](e,t),0==a&&!1===n||v(t);else v(t)}),l.attachEvent("RateChanged",function(e){if(r._onRateChanged)for(var t in r._onRateChanged)r._onRateChanged[t](e)}),l.attachEvent("VolumeChanged",function(e){if(r._onVolumeChanged)for(var t in r._onVolumeChanged)r._onVolumeChanged[t](e)}),l.attachEvent("MuteChanged",function(e){if(r._onMuteChanged)for(var t in r._onMuteChanged)r._onMuteChanged[t](e)}),l.attachEvent("RepeatPointAChanged",function(e){if(r._onRepeatPointAChanged)for(var t in r._onRepeatPointAChanged)r._onRepeatPointAChanged[t](e)}),l.attachEvent("RepeatPointBChanged",function(e){if(r._onRepeatPointBChanged)for(var t in r._onRepeatPointBChanged)r._onRepeatPointBChanged[t](e)}),l.attachEvent("PlaybackRangeChanged",function(e,t){if(r._onPlaybackRangeChanged)for(var n in r._onPlaybackRangeChanged)r._onPlaybackRangeChanged[n](e,t)}),l.attachEvent("UpdateTime",function(e){r.updateTime(e)}),l.attachEvent("DurationChanged",function(){if(r._onDurationChanged)for(var e in r._onDurationChanged)r._onDurationChanged[e]()}),l.attachEvent("Click",function(e,t){if(r._onClick){var n=!0;for(var a in r._onClick)0==r._onClick[a](e,t)&&(n=!1);n&&b()}else b()}),l.attachEvent("DblClick",function(e,t){if(r._onDblClick)for(var n in r._onDblClick)r._onDblClick[n](e,t);!function(){if(!a)return;k()}()}),l.attachEvent("KeyDown",function(e){if(!(-1!=navigator.userAgent.search("MSIE 7.0")&&7<document.documentMode)&&a)if(r._onKeyDown){var t=!0;for(var n in r._onKeyDown)0==r._onKeyDown[n](e)&&(t=!1);t&&C(e)}else C(e)}),l.attachEvent("GetControlBoxHeight",function(){return r.onGetControlBoxHeight?r.onGetControlBoxHeight():0}),l.attachEvent("GuardCallback",function(e,t){if(r._onGuardCallback)for(var n in r._onGuardCallback)r._onGuardCallback[n](e,t)}),l.attachEvent("ContextMenu",function(e,t){if(r._onContextMenu)for(var n in r._onContextMenu)r._onContextMenu[n](e,t)}),l.attachEvent("FrameStepChanged",function(e){if(r._onFrameStepChanged)for(var t in r._onFrameStepChanged)r._onFrameStepChanged[t](e)}),l.attachEvent("Repeat",function(e,t){if(r._onRepeat)for(var n in r._onRepeat)r._onRepeat[n](e,t)}),l.attachEvent("FullscreenChange",function(e){if(e?jQuery("body").addClass("nplayer-fullscreen"):jQuery("body").removeClass("nplayer-fullscreen"),r._onFullscreenChange)for(var t in r._onFullscreenChange)r._onFullscreenChange[t](e)}),jQuery(document).bind("fullscreenchange",function(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?l.onFullscreenChange(!0):l.onFullscreenChange(!1)}),jQuery(document).bind("webkitfullscreenchange",function(){document.webkitIsFullScreen?l.onFullscreenChange(!0):l.onFullscreenChange(!1)}),jQuery(document).bind("mozfullscreenchange",function(){document.mozFullScreen?l.onFullscreenChange(!0):l.onFullscreenChange(!1)}),jQuery(document).bind("MSFullscreenChange",function(){document.msFullscreenElement?l.onFullscreenChange(!0):l.onFullscreenChange(!1)}),window.setTimeout(function(){if(r._onReady)for(var e in r._onReady)r._onReady[e]()},0)}function b(){}function C(e){switch(e){case 13:k();break;case 27:l.setFullscreen(!1);break;case 32:!function(){if(null==l)return;l.getPlayState()==NPlayer.PlayState.Playing?l.pause():l.play()}();break;case 38:case 107:l.setVolume(l.getVolume()+.1);break;case 40:case 109:l.setVolume(l.getVolume()-.1);break;case 37:r.seek(l.getCurrentPlaybackTime()-r.getFrameStep(),0,0);break;case 39:r.seek(l.getCurrentPlaybackTime()+r.getFrameStep(),0,0);break;case 90:case 36:case 35:r.setCurrentPlaybackRate(1);break;case 88:case 34:.6<l.getCurrentPlaybackRate().toFixed(1)&&r.setCurrentPlaybackRate(l.getCurrentPlaybackRate()-.1);break;case 67:case 33:l.getCurrentPlaybackRate().toFixed(1)<2&&r.setCurrentPlaybackRate(l.getCurrentPlaybackRate()+.1);break;case 219:l.setRepeatPointA(l.getCurrentPlaybackTime());break;case 221:l.setRepeatPointB(l.getCurrentPlaybackTime());break;case 220:r.resetABRepeat();break;case 77:case 106:!function(){if(null==l)return;l.setMute(!l.getMute())}();break;default:return!0}return!1}function k(){null!=l&&l.setFullscreen(!l.getFullscreen())}function v(e){if(null!=l){n=l.getVisible(),l.setVisible(!1);try{g(o+"-msg").innerHTML="<table width='100%' height='100%' style='color:#ff0000;font-size:14px;position:absolute;'><tr><td align='center' valign='middle'><div id='nplayer-error-image'></div>"+e+"</td></tr></table>"}catch(e){}}}!function(){0==i.seekable&&(jQuery("#"+a).addClass("video-not-seekable"),jQuery("body").addClass("body-not-seekable"));isMobileOS()?jQuery("body").addClass("nplayer-platform-mobile"):isWindowsOS()?jQuery("body").addClass("nplayer-platform-windows"):isMacOSX()&&jQuery("body").addClass("nplayer-platform-mac");if("html5"==i.mode)_(i);else if("activex"==i.mode){if("Win32"==navigator.platform&&isIE())a?P():t();else if("Win64"==navigator.platform&&isIE())return alert("IE 64비트 버전에서는 재생할 수 없습니다. IE 32비트 버전을 사용하십시오.")}else if("mac"==i.mode)isMacOSX()&&"undefined"!=typeof nPlayer&&((l=new _NPlayerMac(g(o),i)).setVisible(!0),isMacOSXApplication=!0,S());else if("Win32"==navigator.platform)a?P():t();else{if("Win64"==navigator.platform&&isIE())return alert("IE 64비트 버전에서는 재생할 수 없습니다. IE 32비트 버전을 사용하십시오.");_(i)}null!=l?jQuery("body").addClass("nplayer-ready"):jQuery("body").addClass("nplayer-notready");if(!isIE()&&null==l)return g(a).innerHTML="\t\t<table width='100%' height='100%' style='color:#9f9f9f;background-color:black;font-size:14px'><tr><td align='center' valign='middle'><div id='nplayer-error-image'></div>\t\t<p>이 브라우저에서는 영상을 재생할 수 없습니다.<br /><span style='color:#00ff00'>다른 브라우저를 실행해 주세요.</span></p>\t\t</td></tr></table>\t\t";function e(e){if(e&&e.srcElement){-1!=navigator.userAgent.search("MSIE 7.0")&&7<document.documentMode||e.srcElement.id==o&&e.preventDefault();var t=e.srcElement.type;if("text"==t||"textarea"==t)return!0}return r._onKeyDown?0!=r._onKeyDown[0](e.keyCode)?C(e.keyCode):void 0:C(e.keyCode)}document.body.addEventListener?document.body.addEventListener("keydown",e,!1):document.body.attachEvent("onkeydown",e);r.processKeyDown=e}(),this.fireEvent=function(e,t){var n=new CustomEvent(e,t);document.dispatchEvent(n)},this.open=function(e,t){if(null!=l){t&&(f=t);var n=typeof e;"string"==n?l.open(e):"object"==n&&l.setPlayItem(e)}},this.close=function(){null!=l&&l.close()},this.play=function(){null!=l&&l.play()},this.pause=function(){null!=l&&l.pause()},this.stop=function(){null!=l&&l.stop()},this.command=function(e,t){null!=l&&l.command(e,t)},this.setCDNAuthParam=function(e){null!=l&&l.setCDNAuthParam(e)},this.setPlayItem=function(e){null!=l&&l.setPlayItem(e)},this.setSubtitleFont=function(e,t){null!=l&&l.setSubtitleFont(e,t)},this.setSubtitleColor=function(e,t,n,a){null!=l&&l.setSubtitleColor(e,t,n,a)},this.setSubtitlePosition=function(e,t){null!=l&&l.setSubtitlePosition(e,t)},this.setSubtitleText=function(e){null!=l&&l.setSubtitleText(e)},this.setWatermarkText=function(e){null!=l&&l.setWatermarkText(e)},this.setWatermarkSize=function(e){null!=l&&l.setWatermarkSize(e)},this.setWatermarkColor=function(e,t,n,a){null!=l&&l.setWatermarkColor(e,t,n,a)},this.setWatermarkLocation=function(e){null!=l&&l.setWatermarkLocation(e)},this.setWatermarkInterval=function(e){null!=l&&l.setWatermarkInterval(e)},this.setWatermarkDuration=function(e){null!=l&&l.setWatermarkDuration(e)},this.getSeekable=function(){return null!=l&&l.getSeekable()},this.setSeekable=function(e){null!=l&&(e?(jQuery("#"+a).removeClass("video-not-seekable"),jQuery("body").removeClass("body-not-seekable")):(jQuery("#"+a).addClass("video-not-seekable"),jQuery("body").addClass("body-not-seekable")),l.setSeekable(e))},this.getBrightness=function(){if(null!=l)return l.getBrightness()},this.setBrightness=function(e){null!=l&&l.setBrightness(e)},this.getContrast=function(){if(null!=l)return l.getContrast()},this.setContrast=function(e){null!=l&&l.setContrast(e)},this.getSaturation=function(){if(null!=l)return l.getSaturation()},this.setSaturation=function(e){null!=l&&l.setSaturation(e)},this.bindEvent=function(e,t){if(null!=l){var n="_on"+e;r[n]||(r[n]=[]),r[n].push(t)}},this.getOpenState=function(){return null==l?0:l.getOpenState()},this.getPlayState=function(){return null==l?0:l.getPlayState()},this.getDuration=function(){return null==l?0:l.getDuration()},this.seek=function(e,t,n){if(null!=l&&0!=l.getSeekable()){if(r._onPlaybackPositionChanging)for(var a in r._onPlaybackPositionChanging)r._onPlaybackPositionChanging[a](e);if(r._onSeeking)for(var a in r._onSeeking)r._onSeeking[a](parseInt(r.getCurrentPlaybackTime()),parseInt(e));l.seek(e,t,n)}},this.getCurrentPlaybackTime=function(){return null==l?0:l.getCurrentPlaybackTime()},this.setCurrentPlaybackTime=function(e){if(null!=l&&0!=l.getSeekable()&&(e>l.getDuration()&&(e=l.getDuration()),e<0&&(e=0),!r._callstackFlag1&&r.getCurrentPlaybackTime()!=e&&(r.getPlayState()==NPlayer.PlayState.Playing||parseInt(r.getCurrentPlaybackTime())!=parseInt(e)||e==l.getDuration()))){if(r._onPlaybackPositionChanging)for(var t in r._onPlaybackPositionChanging)r._onPlaybackPositionChanging[t](e);if(r._onSeeking)for(var t in r._onSeeking)r._onSeeking[t](parseInt(r.getCurrentPlaybackTime()),parseInt(e));r._callstackFlag1=!0,r.getPlayState()==NPlayer.PlayState.Playing&&r.firePlayStateChanged(NPlayer.PlayState.Playing),r._callstackFlag1=!1,l.setCurrentPlaybackTime(e)}},this.getCurrentPlaybackRate=function(){return null==l?1:l.getCurrentPlaybackRate()},this.setCurrentPlaybackRate=function(e){null!=l&&l.setCurrentPlaybackRate(e)},this.getNearestKeyframeTimestamp=function(e){return null==l?0:l.getNearestKeyframeTimestamp(e)},this.setPlaybackRange=function(e,t){null!=l&&l.setPlaybackRange(e,t)},this.addContextMenu=function(e,t){null!=l&&l.addContextMenu(e,t)},this.getVolume=function(){return null==l?0:l.getVolume()},this.setVolume=function(e){null!=l&&l.setVolume(e)},this.getMute=function(){return null!=l&&l.getMute()},this.setMute=function(e){null!=l&&l.setMute(e)},this.getFullscreen=function(){return null!=l&&l.getFullscreen()},this.setFullscreen=function(e){null!=l&&l.setFullscreen(e)},this.getABRepeat=function(){return null!=l&&(0<=l.getRepeatPointA()&&0<=l.getRepeatPointB())},this.setABRepeat=function(e){null!=l&&0!=l.getSeekable()&&l.setABRepeat(e)},this.resetABRepeat=function(){r.setABRepeat(!1)},this.getRepeatPointA=function(){return null==l?0:l.getRepeatPointA()},this.setRepeatPointA=function(e){null!=l&&0!=l.getSeekable()&&(e>l.getDuration()||l.setRepeatPointA(e))},this.resetRepeatPointA=function(){null!=l&&l.resetRepeatPointA()},this.getRepeatPointB=function(){return null==l?0:l.getRepeatPointB()},this.setRepeatPointB=function(e){null!=l&&0!=l.getSeekable()&&(e>l.getDuration()||l.setRepeatPointB(e))},this.resetRepeatPointB=function(){null!=l&&l.resetRepeatPointB()},this.getRepeatCount=function(){return null==l?0:h},this.setRepeatCount=function(e){null!=l&&(h=e)},this.getBeginPlaybackPosition=function(){return null==l?0:l.getBeginPlaybackPosition()},this.getEndPlaybackPosition=function(){return null==l?0:l.getEndPlaybackPosition()},this.getVisible=function(){return null!=l&&l.getVisible()},this.setVisible=function(e){null!=l&&l.setVisible(e)},this.getRealPlayTime=function(){return null==l?0:l.getRealPlayTime?l.getRealPlayTime():u},this.getPlayTime=function(){return null==l?0:l.getPlayTime?l.getPlayTime():c},this.getFrameStep=function(){return null==l?10:l.getFrameStep()},this.setFrameStep=function(e){null!=l&&l.setFrameStep(e)},this.isControlBox=function(){return null!=l&&d},this.getDeviceID=function(){return null==l?"":l.getDeviceID()},this.updateTime=function(e){var t=parseInt(e);if(e==l.getDuration()&&(t=l.getDuration()),s!=t){if(l.getPlayState()==NPlayer.PlayState.Playing)if((e=parseInt(l.getCurrentPlaybackTime()))!=p){var n=p+1==e;u+=n,c+=n/l.getCurrentPlaybackRate(),p=e}if(s=t,r._onUpdateTime)for(var a in r._onUpdateTime)r._onUpdateTime[a](s)}},this.setTrim=function(e,t){null!=l&&null==r.getDeviceID()&&l.setTrim&&l.setTrim(e,t)},this.getSubtitleVisible=function(){return null!=l&&(l.getSubtitleVisible?l.getSubtitleVisible():void 0)},this.setSubtitleVisible=function(e){null!=l&&l.setSubtitleVisible&&l.setSubtitleVisible(e)},this.getSubtitleCount=function(){return null==l?0:l.getSubtitleCount?l.getSubtitleCount():0},this.firePlayStateChanged=function(e){if(null==l)return 0;if(r._onPlayStateChanged)for(var t in r._onPlayStateChanged)r._onPlayStateChanged[t](e)},isMacOSXApplication&&(this.updateMute=function(e){if(r._onMuteChanged)for(var t in r._onMuteChanged)r._onMuteChanged[t](e)},this.nPlayerFullScreenChange=function(e){if(r._onMacfullscreenchange)for(var t in r._onMacfullscreenchange)r._onMacfullscreenchange[t](e)},this.getVideoLocation=function(){var e=jQuery("#"+a).offset().top,t=jQuery("#"+a).offset().left,n={width:jQuery("#"+a).width(),height:jQuery("#"+a).height(),x:t,y:e};return JSON.stringify(n)},this.fireOpenStateChanged=function(e){if(r._onOpenStateChanged)for(var t in r._onOpenStateChanged)r._onOpenStateChanged[t](e)},this.setDuration=function(e){l.setDuration(e)},this.updateVolume=function(e){if(r._onVolumeChanged)for(var t in r._onVolumeChanged)r._onVolumeChanged[t](e)},this.updateBufferingData=function(e){if(r._onBufferingData)for(var t in r._onBufferingData)r._onBufferingData[t](e)},this.updateRate=function(e){if(r._onRateChanged)for(var t in r._onRateChanged)r._onRateChanged[t](e)},this.updateRepeatPoint=function(e){if(r._onRepeatPointAChanged)for(var t in r._onRepeatPointAChanged)r._onRepeatPointAChanged[t](0)})}function _NPlayerHtml5(player,conf){var _self=this,_pendingStop=!1,_pendingClose=!1,_openState=NPlayer.OpenState.Closed,_playState=NPlayer.PlayState.Stopped,_repeatPointA=-1,_repeatPointB=-1,_frameStep=30,_seekable=0!=conf.seekable,_trimStart=0,_trimEnd=-1,_notfireplay=!1,_isBuffering=!1;function displayError(e){_self.onError&&_self.onError(-1,e)}function fireOpenStateChanged(e){e!=_openState&&(_openState=e,_self.onOpenStateChanged&&_self.onOpenStateChanged(_openState))}function firePlayStateChanged(e){_playState=e,_self.onPlayStateChanged&&_self.onPlayStateChanged(_playState)}function onClose(){fireOpenStateChanged(NPlayer.OpenState.Closed),_self.resetRepeatPointA(),_self.resetRepeatPointB(),_self.onMuteChanged&&_self.onMuteChanged(player.muted)}this.open=function(url){_trimStart=0,_trimEnd=-1;try{var loc=document.createElement("a");if(loc.href=url,""!=loc.hash&&(url=loc.protocol+"//"+loc.host+"/"+loc.pathname,"#t="==loc.hash.substr(0,3))){var trimRangeArr=loc.hash.substr(3).split(",");if(1==trimRangeArr.length&&/^\d+$/.test(trimRangeArr[0])){var trimStart=parseInt(trimRangeArr[0]);0<=trimStart&&(_trimStart=trimStart)}else if(2==trimRangeArr.length)if(""==trimRangeArr[1]&&/^\d+$/.test(trimRangeArr[0])){var trimStart=parseInt(trimRangeArr[0]);0<=trimStart&&(_trimStart=trimStart)}else if(""==trimRangeArr[0]&&/^\d+$/.test(trimRangeArr[1])){var trimEnd=parseInt(trimRangeArr[1]);0<trimEnd&&(_trimStart=0,_trimEnd=trimEnd)}else if(/^\d+$/.test(trimRangeArr[0])&&/^\d+$/.test(trimRangeArr[1])){var trimStart=parseInt(trimRangeArr[0]),trimEnd=parseInt(trimRangeArr[1]);0<=trimStart&&0<trimEnd&&trimStart<trimEnd&&(_trimStart=trimStart,_trimEnd=trimEnd)}}}catch(e){return void _self.stop()}if(_openState!=NPlayer.OpenState.Closed&&(firePlayStateChanged(NPlayer.PlayState.Stopped),fireOpenStateChanged(NPlayer.OpenState.Closing),fireOpenStateChanged(NPlayer.OpenState.Closed)),$("source").remove(),$("video").append('<source src="'+url+'" />'),$("source")[0].addEventListener("error",function(e){_self.onError("-2","영상을 불러올 수 없습니다."),firePlayStateChanged(NPlayer.PlayState.Stopped),fireOpenStateChanged(NPlayer.OpenState.Closing),fireOpenStateChanged(NPlayer.OpenState.Closed)}),player.load(),!1!==conf.autoplay){var playPromise=player.play();"object"==typeof playPromise&&eval("playPromise.then(function() {}).catch(function(error) { firePlayStateChanged(NPlayer.PlayState.WAIT_USER_INTERACTION); });")}},this.close=function(){firePlayStateChanged(NPlayer.PlayState.Stopped),fireOpenStateChanged(NPlayer.OpenState.Closing),_pendingClose=!0,player.src="http://null/",player.load()},this.play=function(){_openState!=NPlayer.OpenState.Opened&&_openState!=NPlayer.OpenState.Opening||((player.currentTime<_trimStart||-1!=_trimEnd&&player.currentTime>=_trimEnd)&&(player.currentTime=_trimStart),player.play())},this.pause=function(){_openState==NPlayer.OpenState.Opened&&player.pause()},this.stop=function(){_openState==NPlayer.OpenState.Opened&&(_pendingStop=!0,player.pause(),player.currentTime=0)},this.getOpenState=function(){return _openState},this.getPlayState=function(){return _playState},this.getDuration=function(){return 0<_trimEnd?Math.min(_trimEnd,player.duration)-_trimStart:player.duration},this.seek=function(e,t,n){_self.setCurrentPlaybackTime(e)},this.getCurrentPlaybackTime=function(){return player.currentTime-_trimStart},this.setCurrentPlaybackTime=function(e){isNaN(e)||(player.currentTime=e+_trimStart)},this.getCurrentPlaybackRate=function(){return player.playbackRate},this.setCurrentPlaybackRate=function(e){player.playbackRate=e,player.defaultPlaybackRate=e},this.getNearestKeyframeTimestamp=function(e){return e},this.setPlaybackRange=function(e,t){},this.addContextMenu=function(e,t){},this.getVolume=function(){return player.volume},this.setVolume=function(e){e<0?e=0:1<e&&(e=1),player.muted=!1,player.volume=e},this.getMute=function(){return player.muted},this.setMute=function(e){_openState==NPlayer.OpenState.Opened&&(player.muted=e)},this.getFullscreen=function(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)},this.setFullscreen=function(e){if(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)if(e){var t=player;"undefined"!=typeof g__fullscreen_layout_id__&&document.getElementById(g__fullscreen_layout_id__)&&(t=document.getElementById(g__fullscreen_layout_id__)),t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}else document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},this.getRepeatPointA=function(){return _repeatPointA<0&&0<=_repeatPointB?0:_repeatPointA},this.setABRepeat=function(e){e?(_self.setRepeatPointA(0),_self.setRepeatPointB(_self.getDuration())):(_self.resetRepeatPointA(),_self.resetRepeatPointB())},this.setRepeatPointA=function(e){if(0!=_self.getSeekable()&&_openState==NPlayer.OpenState.Opened&&_playState!=NPlayer.PlayState.Stopped&&_repeatPointA!=e){var t=parseInt(e);-1!=e&&parseInt(t)==parseInt(_self.getRepeatPointB())||((-1==_self.getRepeatPointB()||t<_self.getRepeatPointB())&&(_repeatPointA=t),t>_self.getCurrentPlaybackTime()&&_self.setCurrentPlaybackTime(t),_self.onRepeatPointAChanged&&_self.onRepeatPointAChanged(t))}},this.resetRepeatPointA=function(){_self.setRepeatPointA(-1)},this.getRepeatPointB=function(){return _repeatPointB<0&&0<=_repeatPointA?0<_trimEnd?Math.min(_trimEnd,player.duration)-_trimStart:player.duration:_repeatPointB},this.setRepeatPointB=function(e){if(0!=_self.getSeekable()&&_openState==NPlayer.OpenState.Opened&&_playState!=NPlayer.PlayState.Stopped&&_repeatPointB!=e){var t=parseInt(e);-1!=e&&parseInt(_self.getRepeatPointA())==parseInt(t)||(_self.getDuration()==e&&(t=_self.getDuration()),_repeatPointB=t,_self.onRepeatPointBChanged&&_self.onRepeatPointBChanged(_repeatPointB))}},this.resetRepeatPointB=function(){_self.setRepeatPointB(-1)},this.getBeginPlaybackPosition=function(){return-1},this.getEndPlaybackPosition=function(){return-1},this.getVisible=function(){player.style.visibility},this.setVisible=function(e){player.style.visibility=e?"visible":"hidden"},this.attachEvent=function(e,t){_self["on"+e]=t},this.command=function(e,t){},this.setCDNAuthParam=function(e){},this.setPlayItem=function(e){$("track").remove(),e.Subtitles&&e.Subtitles.length&&e.Subtitles[0].URL&&""!=e.Subtitles[0].URL&&$("video").append('<track src="'+e.Subtitles[0].URL+'" label="Captions" kind="subtitles" default />'),_self.open(e.URL)},this.setSubtitleFont=function(e,t){},this.setSubtitleColor=function(e,t,n,a){},this.setSubtitlePosition=function(e,t){},this.setSubtitleText=function(e){},this.setWatermarkText=function(e){},this.setWatermarkSize=function(e){},this.setWatermarkColor=function(e,t,n,a){},this.setWatermarkLocation=function(e){},this.setWatermarkInterval=function(e){},this.setWatermarkDuration=function(e){},this.getSeekable=function(){return _seekable},this.setSeekable=function(e){_seekable=!!e},this.getBrightness=function(){return 0},this.setBrightness=function(e){},this.getContrast=function(){return 0},this.setContrast=function(e){},this.getSaturation=function(){return 0},this.setSaturation=function(e){},this.getFrameStep=function(){return _frameStep},this.setFrameStep=function(e){_frameStep=e},this.getDeviceID=function(){},this.setTrim=function(e,t){_trimStart=e,_trimEnd=t,_self.onDurationChanged&&_self.onDurationChanged()},this.getSubtitleVisible=function(){return!(0<player.textTracks.length)||"hidden"!=player.textTracks[0].mode},this.setSubtitleVisible=function(e){0<player.textTracks.length&&(player.textTracks[0].mode=e?"showing":"hidden")},this.getSubtitleCount=function(){return player.textTracks.length},player.addEventListener("loadstart",function(){_pendingClose?(_pendingClose=!1,onClose()):fireOpenStateChanged(NPlayer.OpenState.Opening)},!1),player.addEventListener("loadeddata",function(){fireOpenStateChanged(NPlayer.OpenState.Opened)},!1),player.addEventListener("durationchange",function(){},!1),player.addEventListener("canplay",function(){0!=_trimStart&&0==player.currentTime&&(player.currentTime=_trimStart),0!=_trimStart&&-1==_trimEnd&&(_trimEnd=player.duration,_self.onDurationChanged&&_self.onDurationChanged())},!1),player.addEventListener("suspend",function(){},!1),player.addEventListener("emptied",function(){},!1),player.addEventListener("click",function(e){_self.onClick&&_self.onClick(e.x,e.y)},!1),player.addEventListener("dblclick",function(e){_self.onDblClick&&_self.onDblClick(e.x,e.y)},!1),player.addEventListener("seeking",function(){this._notfireplay=!0},!1),player.addEventListener("play",function(){this._notfireplay=!1},!1),player.addEventListener("playing",function(){this._notfireplay&&_self.getPlayState()!=NPlayer.PlayState.Stopped?this._notfireplay=!1:0==player.paused&&firePlayStateChanged(NPlayer.PlayState.Playing)},!1),player.addEventListener("pause",function(){_pendingStop?(_pendingStop=!1,firePlayStateChanged(NPlayer.PlayState.Stopped),_self.resetRepeatPointA(),_self.resetRepeatPointB()):firePlayStateChanged(NPlayer.PlayState.Paused)},!1),player.addEventListener("ended",function(){if(-1!=_self.getRepeatPointA())return player.currentTime=_self.getRepeatPointA(),void player.play();0==player.paused&&(firePlayStateChanged(NPlayer.PlayState.Paused),player.pause()),_self.onPlaybackCompleted&&_self.onPlaybackCompleted()},!1),player.addEventListener("waiting",function(){_self.onBufferingData&&(_isBuffering=!0,_self.onBufferingData(!0))},!1),player.addEventListener("abort",function(){},!1),player.addEventListener("error",function(){if("http://null/"!=player.src){var e;switch(player.error.code){case 1:e="비디오 재생을 중단하였습니다.";break;case 2:e="네트워크 오류가 발생하였습니다.";break;case 3:e="비디오 파일이 잘못되었거나 지원하지 않는 형식입니다.";break;case 4:e="비디오를 재생할 수 없습니다. 서비스 장애가 발생하였거나 지원하지 않는 형식입니다.";break;default:e="알 수 없는 오류가 발생하였습니다."}_self.onError&&_self.onError(player.error.code,e)}},!1),player.addEventListener("ratechange",function(){var e=10*player.playbackRate;e<1&&(e=0),e=parseInt(e)/10,_self.onRateChanged&&_self.onRateChanged(e)},!1),player.addEventListener("volumechange",function(){var e=10*player.volume;e<1&&(e=0),e=parseInt(e)/10,_self.onVolumeChanged&&_self.onVolumeChanged(e),_self.onMuteChanged&&_self.onMuteChanged(player.muted)},!1),player.addEventListener("timeupdate",function(){!0===_isBuffering&&player.readyState>=player.HAVE_FUTURE_DATA&&(_isBuffering=!1)===player.paused&&_self.onBufferingData&&_self.onBufferingData(!1),player.currentTime<_trimStart&&(player.currentTime=_trimStart),(0<=_repeatPointA||0<=_repeatPointB)&&(_self.getCurrentPlaybackTime()>=_self.getRepeatPointB()&&(_self.onRepeat&&_self.onRepeat(parseInt(_self.getCurrentPlaybackTime()),parseInt(_self.getRepeatPointA())),0==player.paused&&firePlayStateChanged(NPlayer.PlayState.Playing),player.currentTime=_self.getRepeatPointA()+_trimStart),_self.getCurrentPlaybackTime()<_self.getRepeatPointA()&&(player.currentTime=_self.getRepeatPointA()+_trimStart)),-1!=_trimEnd&&player.currentTime>_trimEnd&&(player.currentTime=_trimEnd,0==player.paused&&(firePlayStateChanged(NPlayer.PlayState.Paused),player.pause()),_self.onPlaybackCompleted&&_self.onPlaybackCompleted());try{var e=player.buffered.length;for(e!=$(".track_buffered").length&&$(".track_buffered").removeClass("active"),k=0;k<e;k++){var t=player.duration;-1!=_trimEnd&&(t=_trimEnd-_trimStart);var n=(player.buffered.end(k)-_trimStart)/t*100;100<n&&(n=100),0==$(".track_buffered"+(k+1)).length&&$('<div class="track_buffered track_buffered'+(k+1)+'"></div>').insertAfter($(".track_seekBtn")),$(".track_buffered"+(k+1)).css({left:"0%",width:n+"%"}).addClass("active"),player.buffered.start(k)>player.currentTime?$(".track_buffered"+(k+1)).hide():$(".track_buffered"+(k+1)).show()}$(".track_buffered").not(".active").remove()}catch(e){}_self.onUpdateTime&&_self.onUpdateTime(player.currentTime-_trimStart)},!1),window.addEventListener("unload",function(){_openState!=NPlayer.OpenState.Closed&&(firePlayStateChanged(NPlayer.PlayState.Stopped),fireOpenStateChanged(NPlayer.OpenState.Closing),fireOpenStateChanged(NPlayer.OpenState.Closed))},!1),window.addEventListener("beforeunload",function(){_openState!=NPlayer.OpenState.Closed&&(firePlayStateChanged(NPlayer.PlayState.Stopped),fireOpenStateChanged(NPlayer.OpenState.Closing),fireOpenStateChanged(NPlayer.OpenState.Closed))},!1),player.oncontextmenu=function(e){if("function"!=typeof showContextMenu)return!1;showContextMenu(e)}}function _NPlayerPlugin(i){var t=!1,n=30;this.open=function(e){i.open(e)},this.close=function(){i.close()},this.play=function(){i.play()},this.pause=function(){i.pause()},this.stop=function(){i.stop()},this.getOpenState=function(){return i.openState},this.getPlayState=function(){return i.playState},this.getDuration=function(){return i.duration},this.seek=function(e,t,n){i.currentPlaybackTime=0==t&&0==n?e:i.getNearestKeyframeTimestamp(e)},this.getCurrentPlaybackTime=function(){return i.currentPlaybackTime},this.setCurrentPlaybackTime=function(e){i.currentPlaybackTime=i.getNearestKeyframeTimestamp(e)},this.getCurrentPlaybackRate=function(){return i.currentPlaybackRate},this.setCurrentPlaybackRate=function(e){i.currentPlaybackRate=e},this.getNearestKeyframeTimestamp=function(e){return i.getNearestKeyframeTimestamp(e)},this.setPlaybackRange=function(e,t){i.setPlaybackRange(e,t)},this.addContextMenu=function(e,t){i.addContextMenu(e,t)},this.getVolume=function(){return i.volume},this.setVolume=function(e){i.volume=e},this.getMute=function(){return i.muted},this.setMute=function(e){i.muted=e},this.getFullscreen=function(){return i.fullscreen},this.setFullscreen=function(e){i.fullscreen=e},this.setABRepeat=function(e){i.repeatPointB=e?(i.repeatPointA=0,i.duration):i.repeatPointA=-1},this.getRepeatPointA=function(){return i.repeatPointA},this.setRepeatPointA=function(e){i.repeatPointA=e},this.resetRepeatPointA=function(){i.repeatPointA=-1},this.getRepeatPointB=function(){return i.repeatPointB},this.setRepeatPointB=function(e){i.repeatPointB=e},this.resetRepeatPointB=function(){i.repeatPointB=-1},this.getBeginPlaybackPosition=function(){return i.beginPlaybackPosition},this.getEndPlaybackPosition=function(){return i.endPlaybackPosition},this.getVisible=function(){return t},this.setVisible=function(e){try{isIE()?i.height=e?i.width="100%":i.width="1px":i.style.visibility=e?"visible":"hidden"}catch(e){}t=!0},this.attachEvent=function(e,t){i.attachEvent(e,t)},this.command=function(e,t){i.command(e,t)},this.setCDNAuthParam=function(e){i.CDNAuthParam=e},this.setPlayItem=function(e){i.playItem=JSONstringify(e)},this.setSubtitleFont=function(e,t){i.setSubtitleFont(e),i.setSubtitleFontSize(t)},this.setSubtitleColor=function(e,t,n,a){i.setSubtitleColor(e,t,n,a)},this.setSubtitlePosition=function(e,t){i.setSubtitlePos(e,t)},this.setSubtitleText=function(e){i.setSubtitleText(e)},this.setWatermarkText=function(e){i.setWatermarkText(e)},this.setWatermarkSize=function(e){i.setWatermarkSize(e)},this.setWatermarkColor=function(e,t,n,a){i.setWatermarkColor(e,t,n,a)},this.setWatermarkLocation=function(e){i.setWatermarkLocation(e)},this.setWatermarkInterval=function(e){i.setWatermarkInterval(e)},this.setWatermarkDuration=function(e){i.setWatermarkDuration(e)},this.getSeekable=function(){return i.seekable},this.setSeekable=function(e){i.seekable=e},this.getBrightness=function(){return i.brightness},this.setBrightness=function(e){i.brightness=e},this.getContrast=function(){return i.contrast},this.setContrast=function(e){i.contrast=e},this.getSaturation=function(){return i.saturation},this.setSaturation=function(e){i.saturation=e},this.getFrameStep=function(){return void 0!==i.frameStep?i.frameStep:n},this.setFrameStep=function(e){void 0!==i.frameStep?i.frameStep=e:n=e},this.getDeviceID=function(){return i.deviceID},this.getPlayTime=function(){return i.playTime},this.getRealPlayTime=function(){return i.realPlayTime},this.getSubtitleVisible=function(){return i.subtitlesVisible},this.setSubtitleVisible=function(e){i.subtitlesVisible=e}}function _NPlayerMac(e,t){var n;NPlayer.OpenState.Closed,t.seekable;this.open=function(e){nPlayer.open(e),!1!==t.autoplay&&nPlayer.play()},this.close=function(){nPlayer.close()},this.play=function(){nPlayer.play()},this.pause=function(){nPlayer.pause()},this.stop=function(){},this.getOpenState=function(){return nPlayer.getOpenState()},this.getPlayState=function(){return nPlayer.getPlayState()},this.setPlayState=function(e){_playState=e},this.setDuration=function(e){n=e},this.getDuration=function(){return n},this.seek=function(e,t,n){nPlayer.seek(e,t,n)},this.getCurrentPlaybackTime=function(){return nPlayer.getCurrentPlaybackTime()},this.setCurrentPlaybackTime=function(e){nPlayer.setCurrentPlaybackTime(e)},this.getCurrentPlaybackRate=function(){return nPlayer.getCurrentPlaybackRate()},this.setCurrentPlaybackRate=function(e){nPlayer.setCurrentPlaybackRate(e)},this.getNearestKeyframeTimestamp=function(e){return e},this.setPlaybackRange=function(e,t){},this.addContextMenu=function(e,t){},this.getVolume=function(){return nPlayer.getVolume()},this.setVolume=function(e){e<0?e=0:1<e&&(e=1),nPlayer.setVolume(e)},this.getMute=function(){return nPlayer.getMute()},this.toggleRepeat=function(){nPlayer.toggleRepeat()},this.setABRepeat=function(e){nPlayer.setABRepeat(e)},this.setMute=function(e){nPlayer.setMute(e)},this.getFullscreen=function(){return nPlayer.getFullscreen()},this.toggleFullscreen=function(){nPlayer.toggleFullscreen()},this.setFullscreen=function(e){nPlayer.toggleFullscreen()},this.getABRepeat=function(e){return nPlayer.getABRepeat()},this.getRepeatPointA=function(){return nPlayer.getRepeatPointA()},this.setRepeatPointA=function(e){nPlayer.setRepeatPointA(e)},this.resetRepeatPointA=function(){},this.getRepeatPointB=function(){return nPlayer.getRepeatPointB()},this.setRepeatPointB=function(e){nPlayer.setRepeatPointB(e)},this.resetRepeatPointB=function(){},this.getBeginPlaybackPosition=function(){return-1},this.getEndPlaybackPosition=function(){return-1},this.getVisible=function(){return!0},this.setVisible=function(e){nPlayer.setVisible(e)},this.attachEvent=function(e,t){},this.command=function(e,t){},this.setCDNAuthParam=function(e){},this.setPlayItem=function(e){},this.setSubtitleFont=function(e,t){},this.setSubtitleColor=function(e,t,n,a){},this.setSubtitlePosition=function(e,t){},this.setSubtitleText=function(e){},this.setWatermarkText=function(e){nPlayer.setWatermarkText(e)},this.setWatermarkSize=function(e){nPlayer.setWatermarkSize(e)},this.setWatermarkColor=function(e,t,n,a){nPlayer.setWatermarkColor(e,t,n,a)},this.setWatermarkLocation=function(e){nPlayer.setWatermarkLocation(e)},this.setWatermarkInterval=function(e){nPlayer.setWatermarkInterval(e)},this.setWatermarkDuration=function(e){nPlayer.setWatermarkDuration(e)},this.getSeekable=function(){return!0},this.setSeekable=function(e){!!e},this.getBrightness=function(){return 0},this.setBrightness=function(e){},this.getContrast=function(){return 0},this.setContrast=function(e){},this.getSaturation=function(){return 0},this.setSaturation=function(e){},this.getFrameStep=function(){return nPlayer.getFrameStep()},this.setFrameStep=function(e){nPlayer.setFrameStep(e)},this.getDeviceID=function(){return nPlayer.getDeviceID()},this.testlog=function(e){}}NPlayer.OpenState=function(){},NPlayer.OpenState.Opening=0,NPlayer.OpenState.Opened=1,NPlayer.OpenState.Closing=2,NPlayer.OpenState.Closed=3,NPlayer.PlayState=function(){},NPlayer.PlayState.Playing=0,NPlayer.PlayState.Paused=1,NPlayer.PlayState.Stopped=2,NPlayer.PlayState.WAIT_USER_INTERACTION=3;