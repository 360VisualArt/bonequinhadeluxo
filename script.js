(function(){
    var script = {
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "width": "100%",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playAudioList([this.audio_C76750C3_DEC7_3DAF_41E7_3B43420FB968])",
 "class": "Player",
 "defaultVRPointer": "laser",
 "scripts": {
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "contentOpaque": false,
 "downloadEnabled": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 20,
 "layout": "absolute",
 "borderRadius": 0,
 "borderSize": 0,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -97.71,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "id": "camera_C7B49DB7_DF5F_07E8_41CB_43C19A5E802D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -91.1,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "id": "camera_C6E05D0E_DF5F_04B9_41BF_98BB259746FC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_camera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 07",
 "hfovMin": "135%",
 "id": "panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CF4B8262_DEC7_3D69_41D0_BD6862A17F75",
  "this.overlay_CF090589_DEC7_07BB_416B_C819A17ED952"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_camera"
  },
  {
   "media": "this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_camera"
  },
  {
   "media": "this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_camera"
  },
  {
   "media": "this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_camera"
  },
  {
   "media": "this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_camera"
  },
  {
   "media": "this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_camera"
  },
  {
   "media": "this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_camera"
  },
  {
   "media": "this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_camera"
  },
  {
   "media": "this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_camera"
  },
  {
   "media": "this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_camera"
  },
  {
   "media": "this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_camera"
  },
  {
   "media": "this.panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "id": "camera_C7DEDE23_DF5F_04EF_41D4_118460320538",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 08",
 "hfovMin": "135%",
 "id": "panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CCB022E7_DEC1_1D77_41DB_E58D2DB5C41D",
  "this.overlay_CC7DB863_DEC1_0D6F_41D8_4C91F504C8A8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 168.24,
  "class": "PanoramaCameraPosition",
  "pitch": -8.82
 },
 "id": "camera_C6F65CF4_DF5F_0569_41CB_F02E81E7389E",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 03",
 "hfovMin": "135%",
 "id": "panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D02CAA00_DEC1_0CA8_41E8_A34820041BC0",
  "this.overlay_D1E357D1_DEC1_03A8_41E2_14A0DBD74650"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 86.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C7D3CE13_DF5F_04A8_41E7_C940F8694146",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 12",
 "hfovMin": "135%",
 "id": "panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CBD7C9F3_DEDF_0F6F_41C0_EBDF0D4B4B4E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_camera"
  },
  {
   "media": "this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_camera"
  },
  {
   "media": "this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_camera"
  },
  {
   "media": "this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_camera"
  },
  {
   "media": "this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_camera"
  },
  {
   "media": "this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_camera"
  },
  {
   "media": "this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_camera"
  },
  {
   "media": "this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_camera"
  },
  {
   "media": "this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_camera"
  },
  {
   "media": "this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_camera"
  },
  {
   "media": "this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_camera"
  },
  {
   "media": "this.panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "id": "camera_C7CA7E3D_DF5F_04DB_41B5_8D76695567FE",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 04",
 "hfovMin": "135%",
 "id": "panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D166DAFE_DEC3_0D59_41E0_92F629ACD0CF",
  "this.overlay_D120BD93_DEC3_07AF_41E4_5AB221D058D6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 02",
 "hfovMin": "135%",
 "id": "panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D0B3CA02_DECF_0CA8_41D6_4731F8505059",
  "this.overlay_D07373B6_DECF_03E8_41DD_CCBE1BE2D9BC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 174.86,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "id": "camera_C7AA8DF2_DF5F_0768_41E1_6ADEBE9626D5",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 06",
 "hfovMin": "135%",
 "id": "panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CF8F811D_DEC1_1CDB_41C4_D07AE382B58E",
  "this.overlay_CE004A41_DEC7_0CAB_41EA_2963EDB6878C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 102.86,
  "class": "PanoramaCameraPosition",
  "pitch": 14.69
 },
 "id": "camera_C7F3DE54_DF5F_04A8_41D9_8CF783A3A0D4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 166.78,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_C7B04D96_DF5F_07A8_41E9_2E10F3731908",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 175.59,
  "class": "PanoramaCameraPosition",
  "pitch": -13.96
 },
 "id": "camera_C7E84E84_DF5F_05A8_41E4_779F8A4DCB71",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 10",
 "hfovMin": "135%",
 "id": "panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CD5AFC65_DEC1_056B_41D6_DF699863319F",
  "this.overlay_CD190EDD_DEC1_055B_41E8_54E6AB2FABBC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -174.86,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "id": "camera_C7A1CDE1_DF5F_0768_41D2_7A9A32EDD558",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 85.96,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "id": "camera_C6135E95_DF5F_05A8_41D4_BF59170E3346",
 "automaticZoomSpeed": 10
},
{
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_C76750C3_DEC7_3DAF_41E7_3B43420FB968.ogg",
  "mp3Url": "media/audio_C76750C3_DEC7_3DAF_41E7_3B43420FB968.mp3"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_C76750C3_DEC7_3DAF_41E7_3B43420FB968",
 "data": {
  "label": "Irreplaceable"
 }
},
{
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "hfov": 165,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -94.78,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "id": "camera_C78ACD63_DF5F_076F_41E7_316509C9611D",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 01",
 "hfovMin": "135%",
 "id": "panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D0DC2B5D_DEC1_0358_41E6_65B6969C987C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -72.73,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_C7FEFE6E_DF5F_0578_41E4_72D2ADB94A97",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 05",
 "hfovMin": "135%",
 "id": "panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CE9A733B_DEC3_1CDF_41E0_FA3E5C0327BB",
  "this.overlay_CE438363_DEC1_0368_41E1_E199A81229C2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 11",
 "hfovMin": "135%",
 "id": "panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CA9E787B_DEDF_0D5F_41D2_9EF32126A439",
  "this.overlay_CA541E04_DEDF_04A9_41B3_D300C61BAF34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 92.57,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "id": "camera_C7BBADC2_DF5F_07A8_41E8_2297181ABCDE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Foto 09",
 "hfovMin": "135%",
 "id": "panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CDCD0E6E_DEC3_0578_41D7_11E719D78FAB",
  "this.overlay_CDF5588C_DEC3_0DB9_41EA_D9EFF9A2ECF4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277"
  }
 ],
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_t.jpg",
 "hfovMax": 130
},
{
 "playbackBarHeight": 10,
 "toolTipFontSize": 13,
 "id": "MainViewer",
 "left": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "width": "100%",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "toolTipFontStyle": "normal",
 "minWidth": 100,
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontFamily": "Georgia",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "progressBorderRadius": 0,
 "top": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": 300,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "top": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 81.49,
   "hfov": 26.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD, this.camera_C7D3CE13_DF5F_04A8_41E7_C940F8694146); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8BD768_DEC7_0378_41C5_ACA32071B0EE",
   "yaw": 81.49,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.37,
   "hfov": 26.19,
   "distance": 100
  }
 ],
 "id": "overlay_CF4B8262_DEC7_3D69_41D0_BD6862A17F75",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.67,
   "hfov": 26.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572, this.camera_C7DEDE23_DF5F_04EF_41D4_118460320538); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8BF768_DEC7_0378_41DB_46644B196B3B",
   "yaw": -179.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.31,
   "hfov": 26.85,
   "distance": 100
  }
 ],
 "id": "overlay_CF090589_DEC7_07BB_416B_C819A17ED952",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -99.71,
   "hfov": 30,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0, this.camera_C78ACD63_DF5F_076F_41E7_316509C9611D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8B0768_DEC7_0378_41D8_B40A56DA6661",
   "yaw": -99.71,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.95,
   "hfov": 30,
   "distance": 100
  }
 ],
 "id": "overlay_CCB022E7_DEC1_1D77_41DB_E58D2DB5C41D",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.62,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8B2768_DEC7_0378_41DC_8DAA408C1DCA",
   "yaw": -3.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.68,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_CC7DB863_DEC1_0D6F_41D8_4C91F504C8A8",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 170.37,
   "hfov": 26.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1, this.camera_C7AA8DF2_DF5F_0768_41E1_6ADEBE9626D5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A8766_DEC7_0368_41EB_71F0138A9FEC",
   "yaw": 170.37,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.96,
   "hfov": 26.95,
   "distance": 100
  }
 ],
 "id": "overlay_D02CAA00_DEC1_0CA8_41E8_A34820041BC0",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.99,
   "hfov": 27.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8AD766_DEC7_0368_41E8_CE053839C43D",
   "yaw": -4.99,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.87,
   "hfov": 27.85,
   "distance": 100
  }
 ],
 "id": "overlay_D1E357D1_DEC1_03A8_41E2_14A0DBD74650",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.33,
   "hfov": 27.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941, this.camera_C7B49DB7_DF5F_07E8_41CB_43C19A5E802D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8BA768_DEC7_0378_41C2_6BB2E16D0799",
   "yaw": -86.33,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.62,
   "hfov": 27.06,
   "distance": 100
  }
 ],
 "id": "overlay_CBD7C9F3_DEDF_0F6F_41C0_EBDF0D4B4B4E",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 166.94,
   "hfov": 28.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9, this.camera_C7B04D96_DF5F_07A8_41E9_2E10F3731908); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8AF766_DEC7_0369_41DD_9E19CD672933",
   "yaw": 166.94,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.84,
   "hfov": 28.14,
   "distance": 100
  }
 ],
 "id": "overlay_D166DAFE_DEC3_0D59_41E0_92F629ACD0CF",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.31,
   "hfov": 27.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A0767_DEC7_0368_41D7_6AE2EDF4D32A",
   "yaw": -4.31,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.56,
   "hfov": 27.66,
   "distance": 100
  }
 ],
 "id": "overlay_D120BD93_DEC3_07AF_41E4_5AB221D058D6",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.45,
   "hfov": 27.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB892765_DEC7_0368_41DC_7155A9CEEAB2",
   "yaw": -9.45,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.59,
   "hfov": 27.36,
   "distance": 100
  }
 ],
 "id": "overlay_D0B3CA02_DECF_0CA8_41D6_4731F8505059",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.52,
   "hfov": 28.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4, this.camera_C7CA7E3D_DF5F_04DB_41B5_8D76695567FE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB897765_DEC7_0368_41B7_6084DBFA9322",
   "yaw": 175.52,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.84,
   "hfov": 28.14,
   "distance": 100
  }
 ],
 "id": "overlay_D07373B6_DECF_03E8_41DD_CCBE1BE2D9BC",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.2,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E, this.camera_C7BBADC2_DF5F_07A8_41E8_2297181ABCDE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8B9768_DEC7_0378_41C3_2BFA1BD7D0FE",
   "yaw": 83.2,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.68,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_CF8F811D_DEC1_1CDB_41C4_D07AE382B58E",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.62,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8BB768_DEC7_0378_41E7_2D35F2426BAE",
   "yaw": -3.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.68,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_CE004A41_DEC7_0CAB_41EA_2963EDB6878C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 176.55,
   "hfov": 25.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E, this.camera_C7E84E84_DF5F_05A8_41E4_779F8A4DCB71); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A3768_DEC7_0378_41A7_0B699502A080",
   "yaw": 176.55,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.42,
   "hfov": 25.51,
   "distance": 100
  }
 ],
 "id": "overlay_CD5AFC65_DEC1_056B_41D6_DF699863319F",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 72.22,
   "hfov": 27.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941, this.camera_C6135E95_DF5F_05A8_41D4_BF59170E3346); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A5768_DEC7_0378_41E0_ABFE278BF96F",
   "yaw": 72.22,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.9,
   "hfov": 27.56,
   "distance": 100
  }
 ],
 "id": "overlay_CD190EDD_DEC1_055B_41E8_54E6AB2FABBC",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.62,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB89F761_DEC7_036B_41D8_F382987AA212",
   "yaw": -3.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.68,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_D0DC2B5D_DEC1_0358_41E6_65B6969C987C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.36,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572, this.camera_C6E05D0E_DF5F_04B9_41BF_98BB259746FC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A2767_DEC7_0368_41BE_3C7BF81AE531",
   "yaw": -87.36,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.68,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_CE9A733B_DEC3_1CDF_41E0_FA3E5C0327BB",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 164.54,
   "hfov": 28.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89, this.camera_C6F65CF4_DF5F_0569_41CB_F02E81E7389E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A4767_DEC7_0368_41D4_556C37D151B8",
   "yaw": 164.54,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.16,
   "hfov": 28.32,
   "distance": 100
  }
 ],
 "id": "overlay_CE438363_DEC1_0368_41E1_E199A81229C2",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -96.97,
   "hfov": 26.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277, this.camera_C7FEFE6E_DF5F_0578_41E4_72D2ADB94A97); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8A7768_DEC7_0378_41CD_7920A77EE583",
   "yaw": -96.97,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.37,
   "hfov": 26.19,
   "distance": 100
  }
 ],
 "id": "overlay_CA9E787B_DEDF_0D5F_41D2_9EF32126A439",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 86.98,
   "hfov": 28.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B, this.camera_C7F3DE54_DF5F_04A8_41D9_8CF783A3A0D4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8B8768_DEC7_0378_41E7_17417E562912",
   "yaw": 86.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.19,
   "hfov": 28.04,
   "distance": 100
  }
 ],
 "id": "overlay_CA541E04_DEDF_04A9_41B3_D300C61BAF34",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.67,
   "hfov": 25.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD, this.camera_C7A1CDE1_DF5F_0768_41D2_7A9A32EDD558); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB8B4768_DEC7_0378_41A1_4FE3204188A4",
   "yaw": -179.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.39,
   "hfov": 25.86,
   "distance": 100
  }
 ],
 "id": "overlay_CDCD0E6E_DEC3_0578_41D7_11E719D78FAB",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.62,
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CBB49768_DEC7_0378_41E8_5EDA9FD78CE9",
   "yaw": -3.62,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.68,
   "hfov": 26.42,
   "distance": 100
  }
 ],
 "id": "overlay_CDF5588C_DEC3_0DB9_41EA_D9EFF9A2ECF4",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": 66,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "top": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_C962F94F_DEC7_0CB7_41C6_08B1B38ED642"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "scrollBarMargin": 2,
 "width": 300,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "right": "0%",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 40,
 "top": "0%",
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 40,
 "propagateClick": true,
 "height": "100%",
 "paddingBottom": 40,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowVerticalLength": 0,
 "right": "15%",
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "bottom": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "15%",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "top": "10%",
 "minWidth": 1,
 "borderRadius": 0,
 "bottom": "80%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "overflow": "visible",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowVerticalLength": 0,
 "right": "15%",
 "layout": "absolute",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "bottom": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowVerticalLength": 0,
 "right": "15%",
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "bottom": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "15%",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "top": "10%",
 "minWidth": 1,
 "borderRadius": 0,
 "bottom": "80%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "overflow": "visible",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowVerticalLength": 0,
 "right": "15%",
 "layout": "absolute",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "bottom": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowVerticalLength": 0,
 "right": "15%",
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "bottom": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowVerticalLength": 0,
 "right": "15%",
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.3,
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "bottom": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadow": true,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "right": "15%",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "top": "10%",
 "minWidth": 1,
 "borderRadius": 0,
 "bottom": "80%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "overflow": "visible",
 "scrollBarVisible": "rollOver"
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8BD768_DEC7_0378_41C5_ACA32071B0EE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5A16998_DEC1_0FD8_41E5_EDEB08FF99E0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8BF768_DEC7_0378_41DB_46644B196B3B",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8B0768_DEC7_0378_41D8_B40A56DA6661",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E569D2_DEC1_0FA9_4193_42AB4DCA96CD_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8B2768_DEC7_0378_41DC_8DAA408C1DCA",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A8766_DEC7_0368_41EB_71F0138A9FEC",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5A3E83C_DEC3_0CD9_41E0_154D7408B6B9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8AD766_DEC7_0368_41E8_CE053839C43D",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E31979_DEC7_0F5B_41CA_E0440857B06B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8BA768_DEC7_0378_41C2_6BB2E16D0799",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8AF766_DEC7_0369_41DD_9E19CD672933",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E4B840_DEC3_0CA8_41DA_CF01EF2B3B89_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A0767_DEC7_0368_41D7_6AE2EDF4D32A",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB892765_DEC7_0368_41DC_7155A9CEEAB2",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E96952_DEC3_0CA8_41EB_78E8B04BA1C1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB897765_DEC7_0368_41B7_6084DBFA9322",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8B9768_DEC7_0378_41C3_2BFA1BD7D0FE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E58A59_DEC1_0D58_41E0_8D2F529B2572_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8BB768_DEC7_0378_41E7_2D35F2426BAE",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A3768_DEC7_0378_41A7_0B699502A080",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5E4BA9B_DEC1_0DD8_41D0_159A56C23277_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A5768_DEC7_0378_41E0_ABFE278BF96F",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D51FB6AA_DEC3_05F8_41A8_C5332064A8C4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB89F761_DEC7_036B_41D8_F382987AA212",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A2767_DEC7_0368_41BE_3C7BF81AE531",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5AE098E_DEC3_0FB9_41DF_4EDB66D7A39E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A4767_DEC7_0368_41D4_556C37D151B8",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8A7768_DEC7_0378_41CD_7920A77EE583",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D59A299E_DEC7_0FD9_41E5_241A79BFE941_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8B8768_DEC7_0378_41E7_17417E562912",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CB8B4768_DEC7_0378_41A1_4FE3204188A4",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D5AD0C57_DEC1_0557_41B9_10A63E8D6E3E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_CBB49768_DEC7_0378_41E8_5EDA9FD78CE9",
 "rowCount": 6
},
{
 "horizontalAlign": "left",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "scrollBarMargin": 2,
 "width": 36,
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "backgroundOpacity": 0.4,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "class": "IconButton",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "bottom": "40%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "transparencyActive": true,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "class": "Container",
 "right": "0%",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "top": "25%",
 "minWidth": 1,
 "borderRadius": 0,
 "bottom": "25%",
 "borderSize": 0,
 "gap": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "class": "Container",
 "right": "0%",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "bottom": "0%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "height": "26.316%",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_C962F94F_DEC7_0CB7_41C6_08B1B38ED642",
 "left": "18.45%",
 "width": "57.182%",
 "class": "Image",
 "url": "skin/Image_C962F94F_DEC7_0CB7_41C6_08B1B38ED642.jpeg",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "23.077%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image16916"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarMargin": 2,
 "width": "85%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarMargin": 2,
 "width": "50%",
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "minWidth": 460,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "paddingLeft": 50,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "75%",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "itemMaxHeight": 1000,
 "horizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "width": "100%",
 "itemBorderRadius": 0,
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "minHeight": 1,
 "itemLabelPosition": "bottom",
 "verticalAlign": "middle",
 "paddingRight": 70,
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailBorderRadius": 0,
 "minWidth": 1,
 "borderSize": 0,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemMinHeight": 50,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "shadow": false,
 "itemThumbnailOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "itemThumbnailHeight": 125,
 "itemLabelTextDecoration": "none",
 "itemMinWidth": 50,
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadow": true,
 "itemPaddingRight": 3,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemHeight": 160,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarWidth": 10,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailWidth": 220,
 "itemOpacity": 1,
 "bottom": -0.2,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "gap": 26,
 "paddingTop": 10,
 "itemThumbnailShadow": false,
 "paddingBottom": 70,
 "selectedItemLabelFontWeight": "bold",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 70,
 "itemPaddingBottom": 3,
 "scrollBarOpacity": 0.5,
 "itemLabelGap": 7,
 "itemLabelFontStyle": "italic",
 "itemLabelHorizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "itemMaxWidth": 1000
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "insetBorder": false,
 "width": "100%",
 "scrollEnabled": true,
 "class": "WebFrame",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "75%",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand"
},
{
 "playbackBarHeight": 10,
 "toolTipFontSize": 12,
 "id": "MapViewer",
 "left": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "width": "100%",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "height": "99.975%",
 "toolTipFontStyle": "normal",
 "minWidth": 1,
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "progressBorderRadius": 0,
 "top": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": 140,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarMargin": 2,
 "width": "55%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarMargin": 2,
 "width": "45%",
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "minWidth": 460,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "paddingLeft": 60,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "75%",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "class": "IconButton",
 "minHeight": 50,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "click": "this.openLink('https://www.instagram.com/bonequinhadeluxoclubb/', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "iconHeight": 32,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "fontFamily": "Oswald",
 "paddingTop": 0,
 "propagateClick": true,
 "height": 50,
 "paddingBottom": 0,
 "label": "Instagram",
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": "38px",
 "paddingLeft": 10,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "Button Tour Info"
 },
 "shadow": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "click": "this.openLink('https://www.facebook.com/p/Bonequinha-de-luxo-bar-100069924845633/?locale=pt_BR', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "iconHeight": 32,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "fontFamily": "Oswald",
 "paddingTop": 0,
 "propagateClick": true,
 "height": 50,
 "paddingBottom": 0,
 "label": "Facebook",
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": "38px",
 "paddingLeft": 10,
 "gap": 23,
 "layout": "horizontal",
 "data": {
  "name": "Button Panorama List"
 },
 "shadow": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "click": "this.openLink('http://wa.me/5547996149709', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "iconHeight": 32,
 "rollOverBackgroundOpacity": 0.8,
 "pressedLabel": "Location",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "fontFamily": "Oswald",
 "paddingTop": 0,
 "propagateClick": true,
 "height": 50,
 "paddingBottom": 0,
 "label": "Whatsapp ",
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": "38px",
 "paddingLeft": 10,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "Button Location"
 },
 "shadow": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "click": "this.openLink('http://wa.me/5547997246298', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "iconHeight": 32,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "fontFamily": "Oswald",
 "paddingTop": 0,
 "propagateClick": true,
 "height": 50,
 "paddingBottom": 0,
 "label": "Whatsapp",
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": "38px",
 "paddingLeft": 10,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "Button Floorplan"
 },
 "shadow": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "click": "this.openLink('http://wa.me/5547996770464', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "iconHeight": 32,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "fontFamily": "Oswald",
 "paddingTop": 0,
 "propagateClick": true,
 "height": 50,
 "paddingBottom": 0,
 "label": "Whatsapp",
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": "38px",
 "paddingLeft": 10,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "Button Photoalbum"
 },
 "shadow": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "click": "this.openLink('https://maps.app.goo.gl/nSJ7QdE7ddEU7KHw9', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "iconWidth": 32,
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "iconHeight": 32,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "fontFamily": "Oswald",
 "paddingTop": 0,
 "propagateClick": true,
 "height": 50,
 "paddingBottom": 0,
 "label": "Localiza\u00e7\u00e3o",
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": "38px",
 "paddingLeft": 10,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "Button Contact"
 },
 "shadow": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "scrollBarMargin": 2,
 "width": 40,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 2,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "height": 78,
 "paddingBottom": 0,
 "click": "this.openLink('https://maps.app.goo.gl/nSJ7QdE7ddEU7KHw9', '_blank')",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:18px;font-family:'Oswald Regular';\"><I>Bonequinha de Luxo Bar</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Rua: Eng. Udo Deeke, 1941</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Salto Norte</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Blumenau - SC</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "class": "IconButton",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": true,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 50,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 100,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarMargin": 2,
 "width": 370,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 30,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "36.14%",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "class": "IconButton",
 "right": 20,
 "minHeight": 50,
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "36.14%",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "class": "IconButton",
 "right": 20,
 "minHeight": 50,
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand"
},
{
 "playbackBarHeight": 10,
 "toolTipFontSize": 12,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "width": "100%",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "height": "100%",
 "toolTipFontStyle": "normal",
 "minWidth": 1,
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipFontFamily": "Arial",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "progressBorderRadius": 0,
 "top": "0%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "paddingLeft": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "class": "IconButton",
 "minHeight": 50,
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "bottom": "20%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "class": "IconButton",
 "right": 10,
 "minHeight": 50,
 "top": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "bottom": "20%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "height": "10%",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "class": "IconButton",
 "right": 20,
 "minHeight": 50,
 "top": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "height": "5%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 100,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarMargin": 2,
 "width": 370,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.6vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.75vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundOpacity": 1,
 "width": 180,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "class": "Button",
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 50,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "borderRadius": 50,
 "shadowSpread": 1,
 "label": "LOREM IPSUM",
 "paddingTop": 0,
 "propagateClick": false,
 "fontSize": "2.39vh",
 "paddingBottom": 0,
 "gap": 5,
 "fontStyle": "italic",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0,
 "width": "100%",
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "46%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "scrollBarVisible": "rollOver"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarMargin": 2,
 "width": "100%",
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "75%",
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "class": "Image",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "75%",
 "class": "HTMLText",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.6vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.46vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "scrollBarVisible": "rollOver"
}],
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "propagateClick": true,
 "mobileMipmappingEnabled": false,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
