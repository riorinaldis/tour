// Garden Gnome Software - Skin
// Pano2VR 6.0.1/17227
// Filename: bskins.ggsk
// Generated Mon Aug 9 14:01:09 2021

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_info', 2, false);
	player.addVariable('opt_thumbnail', 2, true);
	player.addVariable('opt_thumbnail_tooltip', 2, true);
	player.addVariable('opt_projection', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_muriles', 2, true);
	player.addVariable('opt_url', 2, true);
	player.addVariable('opt_autohide', 2, true);
	player.addVariable('vis_uderdata', 2, false);
	player.addVariable('vis_close_buton', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_thumbnail_menu_show', 2, true);
	player.addVariable('vis_thumbnail_menu_mobile', 2, false);
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('vis_360image_once', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('pos_zoom_in', 1, 0);
	player.addVariable('pos_zoom_out', 1, 0);
	player.addVariable('pos_autorotate', 1, 0);
	player.addVariable('pos_information', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_gyro', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('pos_360image', 1, 0);
	player.addVariable('vis_userdata', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenodeid', function() { me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_website') == true) || 
				(player.getVariableValue('vis_thumbnail_menu_mobile') == true) && 
				(player.getVariableValue('vis_thumbnail_menu_auto_hide') == true) && 
				(player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._screentint.ggCurrentLogicStateAlpha == 0) {
					me._screentint.style.visibility=me._screentint.ggVisible?'inherit':'hidden';
					me._screentint.style.opacity=1;
				}
				else {
					me._screentint.style.visibility="hidden";
					me._screentint.style.opacity=0;
				}
			}
		}
		me._screentint.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
			player.setVariableValue('vis_userdata', false);
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_loader') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading.style[domTransition]='';
				if (me._loading.ggCurrentLogicStateVisible == 0) {
					me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
					me._loading.ggVisible=true;
				}
				else {
					me._loading.style.visibility="hidden";
					me._loading.ggVisible=false;
				}
			}
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #fdd751;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(34,34,34,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._loading.appendChild(me._loadingtext);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 13px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #f4f4f4;';
		hs+='border : 0px solid #808080;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_1.appendChild(me._loadingbar);
		me._loading.appendChild(me._container_1);
		me.divSkin.appendChild(me._loading);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		hs+='<link rel=\"stylesheet\" href=\"https:\/\/cdn.jsdelivr.net\/npm\/bootstrap@5.1.0\/dist\/css\/bootstrap.min.css\" integrity=\"sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p\/We\" crossorigin=\"anonymous\">';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(player.getViewerSize().width < 750)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information.ggCurrentLogicStateSize = newLogicStateSize;
				me._information.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._information.ggCurrentLogicStateSize == 0) {
					me._information.style.width='70%';
					me._information.style.height='50%';
					skin.updateSize(me._information);
				}
				else {
					me._information.style.width='50%';
					me._information.style.height='50%';
					skin.updateSize(me._information);
				}
			}
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 13px;';
		hs+='border-radius : 13px;';
		hs+='background : #f4f4f4;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAIBklEQVR4nO2dT3LbyBXGvwdYHkWzCHMAm+AJRjqBoUWqKGzGOYHpE0g4gagTgKzKXvQJIm8o7kSfwJoTACKrsmY2miQy8GVBUMPIIrrx3xTxq1KVSt1CN/s1+897XzeAhoaGhoaGhoaGhoZdQ6ooxPb81h72LBPRoQFaEGkTaAFoCdgipLXKawCtOK1wBFhEwGLtT8FaWgDyLoIEgAQT9820jDo8U6dy6Hq+ZRivPpC0BbDLKqdMCExBfiaiq4nbCcooo3ADOJ7fo5gftrXRN0FgKsSnsft2VORzCzNA15vbhvASgFXUM39QAhAXRRkitwFsz2/9LOY5gbMiKrRFjO4ZulO3s1Bn3UwuA3Q93zLEvMHL7/WbCCKGx3nmh8wGaBr/kVxGyGSApvG/I7'+
			'MRUhvA9vzWgZhf0TT+U4J7hkdp5wQjbSkHYnpoGv85rD+JeZ72n1J9AxzP70HMy7SF7BLxUDTVzZ/uG5DBwruGkbKDahvA8fwemqFHB8vxZj3dzNoGoJgfMlVnB6FAu620DND1fOul+XaeQmAaMTy+Z/iX8dlbiRgek/yU5VkC2M7f/9nWyftK74HG+ywV2RrIi2u33V//UzyRTh3vLoBI+rnv4eEjgL4qm94QJPJr6gpsD6Pxk8ZfZ+y2+wSmaR9KkXc6+bQM8JKHn4ihcpghw4u0zxXAtj1fGVhSGqDrze20hW8TOmv2feA2y7P3NFaNSgMY+KZ8yDaj00uvMrqc92AeqvJoTMKGlaXwoonDg78B0ZTA7b+BxcrvYnt+6wCwCFgC45Ai73SHzX3gEIoxfjkKMEutLVUOpQGWH6o2FiCH94gGSU6uOO02/rkClktn'+
			'ALaIeS4JQ4Esd/fTpEoYwmx7IBHlUlTZtieD2U0Nk/CCy6XhoIiHdT2/l2gIkf749M2zE60znJ+D7GcpNyI/T9x24hJeax9QJSSHvyPq5w31rTNxO6Ou508Boy8i3/dmsu8MZlZE+TRx30xtz2/t49WhCM9B2lnLFZE/K/OoMlT5DSDpFtXrN3Hi3Z2JiFdmGSsI3l6ftY+S8ihXQUnjZ4EsIobHZTc+AFy77QEYHsn/C7RKQdYEZ5tIHZAphZQ+9LyM3c5tyPBvVZWXRO0GIOmO3U6mjU4eJm5nStKtutynKCdhWWo1y2KUZtixPb91YLw65XJitFbDY6z5vE0rI7x22wPHu7Mgcpqh7joohyCdfUApQlkCga6Ppev5loh5KYAN8ruVA4GWADZEbIHpOYPZKGJ4oWOI14j6DzA/lPQ5f9w5gIRWAznD+akp5teUK7'+
			'GeIebXE+9Oqda7cjuLiEztbCuKWgxAIJhoaCvjTdAgY+9siYjnDOdKX/612x5UsSp6jnoMQCh7nDOcn2bdgT4prK/zTSA5zF1WBmoagsJpUmrX8y0povFjROQ89g1t5DWi0vcgz1G5AQhMVWO/sVRbFzkptkQhF7lyO4sska+8VG4AIb8kpcc9tVd4uRoRKiF/K7pcFZUb4BuixE1XmQKAAxiJcwEh07LK3kQdQ1CQmKFEAYAqUE6Ele/IKzfAg8IAxjJCVQoqx+J+DUvRyg2g8vOXtfOOsZISs8Z+81C7M27XqdwAGiqEoMTiE3v4ew2FRNFUboCDvZ8Sw3TKSToHVOh7/luD+rv6ZejDfxJDdKp9Qi7Iz4nJMK3Syt5A5QYwYdhJ6WW6BIjoKildwNJWYJuofhIW+SUpuUSXwEjlAtEV1BZJ9a4IDZcAGX4s2D28'+
			'iBTBn7rOQNSyDFW5BCZuJygySEJSGfwxalKA17MP0IjBLuUjBRhBV2FX0wHEujZiLZ0gydht90m6GYejxVJxsfnwxYo6DyDWthMWkXMdafi12x6EDI/SnNeKz3sd6fT8rudbdR6/1ZGlLMpSDMQny5XanHj87nU9vy8w3kPkV1k67VrA4+YtEPKLSkn9FGNZByvLB9BAWQ+lNtQZzHyU+PWsQg+6iTjuXGbZwfjsbScpQ+3OOBHxup5vV12u4/mHJTe+FrUbAAAMMf/xV8+vbBfa9ea2LK/bqR0NdbRU4SNv7WkKqfLiDOenhvCm5LgDAD3HonISjsBFVUeURMRzBrNfdGWFaXi82478oe620zkfUHWUqGeIeZPmwgsVznB++rOY/o94saBanEv+S6TyY3oWBJfOYHYO4iJCqNQSPWWlpBbyjGSZCu+NSBFDkM5DSs'+
			'SC4NKAiZPBbCrkF0Juv8EIHvAQrB9T3QdaAvMQgncADldK6joa/hHyTpVF45BeFABmAbXJxx/yc2APEfZgwhnM6q6WAglUOXSWoZVrZV4KEcJAlUdpgNf1DkFbjc65N6UB6hKtbju6baZ3XU2ZgfKXikIAsELLABGiUa7K7CAqAcAKLQNM3E7QDEP66JyBWKF/a6LGzVINS0hot1WqLe7JYOZXdHXB1kIguFbEANZJ5Y4mw4/pq7Rb6BxAXCeVASZuZ4qaThNuCSOd47frpA7IvEbUL1NAu61weX196rsnUhvgyu0syPC4McIfxNcuHGe5ZCrXK0xEzJtdn5RXjV/pK0xW7LoR8jY+kDMoP3E7wU8pRVMvBZLD3xke5Q2dFvgiN8XNhC+EuNd/LOqGr8JjjbEhXuSrDEl8SrvMVFHqyzzXZIR2WeWUyfL9kfwSIVIe'+
			'7shKZdH2WP1mGTBWr7O11pIff5f4NbclVWPBNZWHgAtCFrHyY7F8nW0UGMDtPRAUeXdpQ0NDQ0NDQ0NDQ0PDiv8B85huwtkzVjsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggDy=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._button_1);
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 13px;';
		hs+='border-radius : 13px;';
		hs+='background : #fdd751;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._rectangle_20);
		el=me._info_desc=document.createElement('div');
		els=me._info_desc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_desc";
		el.ggDx=0;
		el.ggDy=-75;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_desc.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_desc.ggUpdateText();
		el.appendChild(els);
		me._info_desc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_desc.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._info_desc);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggDx=0;
		el.ggDy=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._info_title);
		me._information.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me._information);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDANCgkJUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40DQoJCWwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTEx'+
			'LjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zDQoJCWwxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43DQoJCWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuNiwzOTYuOWwxNS'+
			'44LDE1LjhjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUNCgkJYy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xDQoJCWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjENCgkJbDE1LjgsMTUuOGwx'+
			'NS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDANCgkJUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNA0KCQlsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwt'+
			'MTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40DQoJCWwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNA0KCQljMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLj'+
			'gsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42DQoJCWMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zDQoJCWMwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUNCgkJbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43'+
			'LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4%;';
		hs+='top : 7%;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true) || 
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close.style[domTransition]='';
				if (me._close.ggCurrentLogicStateVisible == 0) {
					me._close.style.visibility=(Number(me._close.style.opacity)>0||!me._close.style.opacity)?'inherit':'hidden';
					me._close.ggVisible=true;
				}
				else {
					me._close.style.visibility="hidden";
					me._close.ggVisible=false;
				}
			}
		}
		me._close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
		}
		me._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		me._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=-2.19;
		el.ggDy=-2.71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAi'+
			'IGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUo'+
			'MjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdX'+
			'I9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40'+
			'IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		me._popup_image__img=document.createElement('img');
		me._popup_image__img.className='ggskin ggskin_external';
		me._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		me._popup_image.ggText=basePath + '';
		me._popup_image__img.setAttribute('src', me._popup_image.ggText);
		me._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		me._popup_image.appendChild(me._popup_image__img);
		me._popup_image.ggSubElement = me._popup_image__img;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			};
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=-1.09;
		el.ggDy=-1.35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._web_page);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					(player.getVariableValue('vis_loader') == true)
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_url_changenodeid = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenodeid = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenodeid', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._info_desc.ggUpdateText();
		me._info_title.ggUpdateText();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.style.opacity=0;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTkzLjUsMzk0LjdoMTYuM3YtMTVoLTEzLjdDLTE5Mi4zLDM4NC4yLTE5My4zLDM4OS4zLTE5My41LDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OS4xLDM3NS4yaDExLjl2LTExLjlDLTE4MS45LDM2NC40LTE4Ni4xLDM2OC44LTE4OS4xLDM3NS4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJN'+
			'LTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNiwzNzkuN2gtOC41Yy0yLjYsNC41LTQuMyw5LjYtNC42LDE1aDEwLjhDLTE5Ny44LDM4OS4zLTE5NywzODQuMy0xOTUuNiwzNzkuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNDguOSwzNzUuMmMtMy4zLTQtNy42LTcuMi0xMi40LTkuM2MyLjEsMi42LDMuOSw1LjcsNS40LDkuM0gtMTQ4Ljl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLD'+
			'EyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg4LjgsMzY2Yy00LjcsMi4xLTguOSw1LjMtMTIuMiw5LjJoNi45Qy0xOTIuNiwzNzEuNy0xOTAuOSwzNjguNi0xODguOCwzNjZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LDM5OS4yaC0xMC44YzAuNCw1LjUsMiwxMC42LDQuNywxNWg4LjVDLTE5Nyw0MDkuNy0xOTcuOCw0MDQuNy0xOTgsMzk5LjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2'+
			'LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eg0KCQkJIE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNA0KCQkJYzIxLjIsMCwzOC40LDE3LjIsMzguNCwzOC40Qy0xMzYuNSw0MTguMi0xNTMuNyw0MzUuNC0xNzQuOSw0MzUuNHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4NCg'+
			'kJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTQuNCw0MTQuM2g4LjZjMi43LTQuNSw0LjMtOS42LDQuNy0xNWgtMTFDLTE1Mi4yLDQwNC43LTE1Myw0MDkuNy0xNTQuNCw0MTQuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzIuNywzNjMuM3YxMS45aDExLjdDLTE2My45LDM2OC45LTE2OCwzNjQuNS0xNzIuNywzNjMuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3'+
			'Mi43LDQxOC44djExLjljNC42LTEuMSw4LjgtNS41LDExLjctMTEuOUMtMTYwLjksNDE4LjgtMTcyLjcsNDE4LjgtMTcyLjcsNDE4Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjIsMzc5LjdoLTEzLjV2MTVoMTYuMUMtMTU2LjcsMzg5LjMtMTU3LjcsMzg0LjItMTU5LjIsMzc5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2Lj'+
			'UsMzk3YzAtMjEuMi0xNy4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40DQoJCWMwLjEsMCwwLjIsMCwwLjQsMGMwLDAsMC4xLDAsMC4xLDBDLTE1My43LDQzNS40LTEzNi41LDQxOC4yLTEzNi41LDM5N3ogTS0yMDguOCwzOTkuMmgxMC44YzAuMiw1LjQsMSwxMC41LDIuMywxNWgtOC41DQoJCUMtMjA2LjgsNDA5LjgtMjA4LjQsNDA0LjctMjA4LjgsMzk5LjJ6IE0tMTQxLjEsMzk0LjdoLTExYy0wLjItNS40LTEtMTAuNS0yLjMtMTVoOC42Qy0xNDMuMSwzODQuMi0xNDEuNCwzODkuMy0xNDEuMSwzOTQuN3oNCgkJIE0tMTU2'+
			'LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yDQoJCUwtMTcyLjcsMzc1LjJ6IE0tMTc3LjIsMzYzLjN2MTEuOWgtMTEuOUMtMTg2LjEsMzY4LjgtMTgxLjksMzY0LjQtMTc3LjIsMzYzLjN6IE0tMTc3LjIsMzc5Ljd2MTVoLTE2LjNjMC4yLTUuNCwxLjEtMTAuNSwyLjYtMTUNCgkJTC0xNzcuMiwzNzkuN0wtMTc3LjIsMzc5Ljd6IE0tMTk4LDM5NC43aC0xMC44YzAuNC01LjUsMi0xMC42LDQuNi0xNWg4LjVDLTE5NywzODQuMy0xOT'+
			'cuOCwzODkuMy0xOTgsMzk0Ljd6IE0tMTkzLjUsMzk5LjJoMTYuMw0KCQl2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcNCgkJQy0xNjMuOSw0MjUuMS0xNjgsNDI5LjUtMTcyLjcsNDMwLjZ6IE0tMTcyLjcsNDE0LjN2LTE1aDE2LjFjLTAuMiw1LjQtMS4xLDEwLjYtMi42LDE1SC0xNzIuN3ogTS0xNTIsMzk5LjJoMTENCgkJYy0wLjQsNS41LTIsMTAuNi00LjcsMTVoLTguNkMtMTUzLDQwOS43LTE1Mi4yLDQwNC43LTE1'+
			'MiwzOTkuMnogTS0xNDguOSwzNzUuMmgtN2MtMS41LTMuNi0zLjMtNi44LTUuNC05LjMNCgkJQy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6DQoJCSBNLTIwMC45LDQxOC44aDYuOWMxLjQsMy41LDMuMiw2LjYsNS4zLDkuMkMtMTkzLjUsNDI1LjgtMTk3LjYsNDIyLjctMjAwLjksNDE4Ljh6IE0tMTYxLjMsNDI4LjFjMi4xLTIuNiwzLjktNS43LDUuNC05LjNoNw0KCQlDLTE1Mi4zLDQyMi43LTE1Ni41LDQyNS45LTE2MS4zLDQyOC4xeiIvPg'+
			'0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNSwzOTQuNWgxOC4xdi0xNi43aC0xNS4yQy0xOTQuMywzODIuOC0xOTUuMywzODguNS0xOTUuNSwzOTQuNXoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuNiwzNzIuOGgxMy4ydi0xMy4yQy0xODIuNiwzNjAuNy0xODcuMywzNjUuNy0xOTAuNiwzNzIuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIg'+
			'ZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk3LjksMzc3LjhoLTkuNGMtMi45LDQuOS00LjgsMTAuNi01LjIsMTYuN2gxMkMtMjAwLjMsMzg4LjUtMTk5LjQsMzgyLjgtMTk3LjksMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTQ2LDM3Mi44Yy0zLjctNC40LTguNC04LTEzLjgtMTAuNGMyLjMsMi44LDQuNCw2LjMsNiwxMC40SC0xNDZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy'+
			'44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuMywzNjIuNmMtNS4yLDIuNC05LjksNS45LTEzLjUsMTAuMmg3LjZDLTE5NC42LDM2OC45LTE5Mi42LDM2NS40LTE5MC4zLDM2Mi42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTIwMC41LDM5OS41aC0xMmMwLjQsNi4xLDIuMiwxMS44LDUuMiwxNi43aDkuNEMtMTk5LjQsNDExLjEtMjAwLjMsNDA1LjUtMjAwLjUsMzk5LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYy'+
			'LjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNg0KCQkJeiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcNCgkJCWMyMy42LDAsNDIuNywxOS4yLDQyLjcsNDIuN0MtMTMyLjIsNDIwLjUtMTUxLjMsNDM5LjctMTc0LjksNDM5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS'+
			'4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE1Mi4xLDQxNi4yaDkuNmMzLTUsNC44LTEwLjYsNS4yLTE2LjdoLTEyLjJDLTE0OS43LDQwNS41LTE1MC42LDQxMS4xLTE1Mi4xLDQxNi4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3Mi40LDM1OS42djEzLjJoMTNDLTE2Mi42LDM2NS43LTE2Ny4zLDM2MC44LTE3Mi40LDM1OS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUt'+
			'MTQ5LjUsMzk0LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTcyLjQsNDIxLjJ2MTMuMmM1LjEtMS4yLDkuOC02LjEsMTMtMTMuMkMtMTU5LjQsNDIxLjItMTcyLjQsNDIxLjItMTcyLjQsNDIxLjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU3LjQsMzc3LjhoLTE1djE2LjdoMTcuOUMtMTU0LjcsMzg4LjUtMTU1LjgsMzgyLjgtMTU3LjQsMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaW'+
			'Q9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNw0KCQljMC4xLDAsMC4zLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTEuMyw0MzkuNy0xMzIuMiw0MjAuNS0xMzIuMiwzOTd6IE0tMjEyLjUsMzk5LjVoMTJjMC4yLDYsMS4xLDExLjcsMi42LDE2LjdoLTkuNA0KCQlDLTIxMC4zLDQxMS4yLTIxMi4xLDQwNS42LTIxMi41LDM5OS41eiBNLTEzNy4zLDM5NC41aC0xMi4yYy0wLjItNi0xLjEtMTEuNi0yLjYtMTYu'+
			'N2g5LjZDLTEzOS41LDM4Mi44LTEzNy43LDM4OC40LTEzNy4zLDM5NC41eg0KCQkgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44DQoJCUwtMTcyLjQsMzcyLjh6IE0tMTc3LjQsMzU5LjZ2MTMuMmgtMTMuMkMtMTg3LjMsMzY1LjctMTgyLjYsMzYwLjctMTc3LjQsMzU5LjZ6IE0tMTc3LjQsMzc3Ljh2MTYuN2gtMTguMWMwLjItNiwxLjMtMTEuNywyLjktMTYuNw0KCQlMLTE3Ny40LDM3Ny44TC0xNzcuNCwzNzcuOHogTS0yMD'+
			'AuNSwzOTQuNWgtMTJjMC40LTYuMSwyLjItMTEuNyw1LjItMTYuN2g5LjRDLTE5OS40LDM4Mi44LTIwMC4zLDM4OC41LTIwMC41LDM5NC41eg0KCQkgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eg0KCQkgTS0xNzIuNCw0MzQuNHYtMTMuMmgxM0MtMTYyLjcsNDI4LjItMTY3LjMsNDMzLjEtMTcyLjQsNDM0LjR6IE0tMTcyLjQsNDE2LjJ2LTE2LjdoMTcuOWMtMC4yLDYtMS4zLDExLjctMi45LDE2LjdILTE3Mi40eg0KCQkgTS0x'+
			'NDkuNSwzOTkuNWgxMi4yYy0wLjQsNi4xLTIuMiwxMS44LTUuMiwxNi43aC05LjZDLTE1MC42LDQxMS4xLTE0OS43LDQwNS41LTE0OS41LDM5OS41eiBNLTE0NiwzNzIuOGgtNy44DQoJCWMtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03LjYNCgkJQy0yMDAuMiwzNjguNC0xOTUuNiwzNjQuOS0xOTAuMywzNjIuNnogTS0yMDMuOCw0MjEuMmg3LjZjMS42LDMuOSwzLjYsNy40LDUuOSwxMC4yQy0xOTUuNiw0MjktMjAwLjIsNDI1LjUtMjAzLjgsNDIxLjJ6DQoJCSBNLT'+
			'E1OS44LDQzMS41YzIuMy0yLjgsNC4zLTYuMyw2LTEwLjNoNy44Qy0xNDkuNyw0MjUuNi0xNTQuNCw0MjkuMi0xNTkuOCw0MzEuNXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == false) && 
				(player.getVariableValue('opt_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
				else {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
			}
		}
		me._ht_url_image.onclick=function (e) {
			skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
			skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
			if (skin._web_page.ggUpdateText) {
				skin._web_page.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._web_page.ggUpdatePosition) {
				skin._web_page.ggUpdatePosition();
			}
			skin._web_page.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_website', true);
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._ht_url_image_newpage=document.createElement('div');
		els=me._ht_url_image_newpage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTkzLjUsMzk0LjdoMTYuM3YtMTVoLTEzLjdDLTE5Mi4zLDM4NC4yLTE5My4zLDM4OS4zLTE5My41LDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OS4xLDM3NS4yaDExLjl2LTExLjlDLTE4MS45LDM2NC40LTE4Ni4xLDM2OC44LTE4OS4xLDM3NS4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJN'+
			'LTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNiwzNzkuN2gtOC41Yy0yLjYsNC41LTQuMyw5LjYtNC42LDE1aDEwLjhDLTE5Ny44LDM4OS4zLTE5NywzODQuMy0xOTUuNiwzNzkuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNDguOSwzNzUuMmMtMy4zLTQtNy42LTcuMi0xMi40LTkuM2MyLjEsMi42LDMuOSw1LjcsNS40LDkuM0gtMTQ4Ljl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLD'+
			'EyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg4LjgsMzY2Yy00LjcsMi4xLTguOSw1LjMtMTIuMiw5LjJoNi45Qy0xOTIuNiwzNzEuNy0xOTAuOSwzNjguNi0xODguOCwzNjZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LDM5OS4yaC0xMC44YzAuNCw1LjUsMiwxMC42LDQuNywxNWg4LjVDLTE5Nyw0MDkuNy0xOTcuOCw0MDQuNy0xOTgsMzk5LjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2'+
			'LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eg0KCQkJIE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNA0KCQkJYzIxLjIsMCwzOC40LDE3LjIsMzguNCwzOC40Qy0xMzYuNSw0MTguMi0xNTMuNyw0MzUuNC0xNzQuOSw0MzUuNHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4NCg'+
			'kJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTQuNCw0MTQuM2g4LjZjMi43LTQuNSw0LjMtOS42LDQuNy0xNWgtMTFDLTE1Mi4yLDQwNC43LTE1Myw0MDkuNy0xNTQuNCw0MTQuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzIuNywzNjMuM3YxMS45aDExLjdDLTE2My45LDM2OC45LTE2OCwzNjQuNS0xNzIuNywzNjMuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3'+
			'Mi43LDQxOC44djExLjljNC42LTEuMSw4LjgtNS41LDExLjctMTEuOUMtMTYwLjksNDE4LjgtMTcyLjcsNDE4LjgtMTcyLjcsNDE4Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjIsMzc5LjdoLTEzLjV2MTVoMTYuMUMtMTU2LjcsMzg5LjMtMTU3LjcsMzg0LjItMTU5LjIsMzc5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2Lj'+
			'UsMzk3YzAtMjEuMi0xNy4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40DQoJCWMwLjEsMCwwLjIsMCwwLjQsMGMwLDAsMC4xLDAsMC4xLDBDLTE1My43LDQzNS40LTEzNi41LDQxOC4yLTEzNi41LDM5N3ogTS0yMDguOCwzOTkuMmgxMC44YzAuMiw1LjQsMSwxMC41LDIuMywxNWgtOC41DQoJCUMtMjA2LjgsNDA5LjgtMjA4LjQsNDA0LjctMjA4LjgsMzk5LjJ6IE0tMTQxLjEsMzk0LjdoLTExYy0wLjItNS40LTEtMTAuNS0yLjMtMTVoOC42Qy0xNDMuMSwzODQuMi0xNDEuNCwzODkuMy0xNDEuMSwzOTQuN3oNCgkJIE0tMTU2'+
			'LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yDQoJCUwtMTcyLjcsMzc1LjJ6IE0tMTc3LjIsMzYzLjN2MTEuOWgtMTEuOUMtMTg2LjEsMzY4LjgtMTgxLjksMzY0LjQtMTc3LjIsMzYzLjN6IE0tMTc3LjIsMzc5Ljd2MTVoLTE2LjNjMC4yLTUuNCwxLjEtMTAuNSwyLjYtMTUNCgkJTC0xNzcuMiwzNzkuN0wtMTc3LjIsMzc5Ljd6IE0tMTk4LDM5NC43aC0xMC44YzAuNC01LjUsMi0xMC42LDQuNi0xNWg4LjVDLTE5NywzODQuMy0xOT'+
			'cuOCwzODkuMy0xOTgsMzk0Ljd6IE0tMTkzLjUsMzk5LjJoMTYuMw0KCQl2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcNCgkJQy0xNjMuOSw0MjUuMS0xNjgsNDI5LjUtMTcyLjcsNDMwLjZ6IE0tMTcyLjcsNDE0LjN2LTE1aDE2LjFjLTAuMiw1LjQtMS4xLDEwLjYtMi42LDE1SC0xNzIuN3ogTS0xNTIsMzk5LjJoMTENCgkJYy0wLjQsNS41LTIsMTAuNi00LjcsMTVoLTguNkMtMTUzLDQwOS43LTE1Mi4yLDQwNC43LTE1'+
			'MiwzOTkuMnogTS0xNDguOSwzNzUuMmgtN2MtMS41LTMuNi0zLjMtNi44LTUuNC05LjMNCgkJQy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6DQoJCSBNLTIwMC45LDQxOC44aDYuOWMxLjQsMy41LDMuMiw2LjYsNS4zLDkuMkMtMTkzLjUsNDI1LjgtMTk3LjYsNDIyLjctMjAwLjksNDE4Ljh6IE0tMTYxLjMsNDI4LjFjMi4xLTIuNiwzLjktNS43LDUuNC05LjNoNw0KCQlDLTE1Mi4zLDQyMi43LTE1Ni41LDQyNS45LTE2MS4zLDQyOC4xeiIvPg'+
			'0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_url_image_newpage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image_newpage;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_newpage__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNSwzOTQuNWgxOC4xdi0xNi43aC0xNS4yQy0xOTQuMywzODIuOC0xOTUuMywzODguNS0xOTUuNSwzOTQuNXoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuNiwzNzIuOGgxMy4ydi0xMy4yQy0xODIuNiwzNjAuNy0xODcuMywzNjUuNy0xOTAuNiwzNzIuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIg'+
			'ZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk3LjksMzc3LjhoLTkuNGMtMi45LDQuOS00LjgsMTAuNi01LjIsMTYuN2gxMkMtMjAwLjMsMzg4LjUtMTk5LjQsMzgyLjgtMTk3LjksMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTQ2LDM3Mi44Yy0zLjctNC40LTguNC04LTEzLjgtMTAuNGMyLjMsMi44LDQuNCw2LjMsNiwxMC40SC0xNDZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy'+
			'44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuMywzNjIuNmMtNS4yLDIuNC05LjksNS45LTEzLjUsMTAuMmg3LjZDLTE5NC42LDM2OC45LTE5Mi42LDM2NS40LTE5MC4zLDM2Mi42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTIwMC41LDM5OS41aC0xMmMwLjQsNi4xLDIuMiwxMS44LDUuMiwxNi43aDkuNEMtMTk5LjQsNDExLjEtMjAwLjMsNDA1LjUtMjAwLjUsMzk5LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYy'+
			'LjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNg0KCQkJeiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcNCgkJCWMyMy42LDAsNDIuNywxOS4yLDQyLjcsNDIuN0MtMTMyLjIsNDIwLjUtMTUxLjMsNDM5LjctMTc0LjksNDM5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS'+
			'4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE1Mi4xLDQxNi4yaDkuNmMzLTUsNC44LTEwLjYsNS4yLTE2LjdoLTEyLjJDLTE0OS43LDQwNS41LTE1MC42LDQxMS4xLTE1Mi4xLDQxNi4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3Mi40LDM1OS42djEzLjJoMTNDLTE2Mi42LDM2NS43LTE2Ny4zLDM2MC44LTE3Mi40LDM1OS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUt'+
			'MTQ5LjUsMzk0LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTcyLjQsNDIxLjJ2MTMuMmM1LjEtMS4yLDkuOC02LjEsMTMtMTMuMkMtMTU5LjQsNDIxLjItMTcyLjQsNDIxLjItMTcyLjQsNDIxLjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU3LjQsMzc3LjhoLTE1djE2LjdoMTcuOUMtMTU0LjcsMzg4LjUtMTU1LjgsMzgyLjgtMTU3LjQsMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaW'+
			'Q9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNw0KCQljMC4xLDAsMC4zLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTEuMyw0MzkuNy0xMzIuMiw0MjAuNS0xMzIuMiwzOTd6IE0tMjEyLjUsMzk5LjVoMTJjMC4yLDYsMS4xLDExLjcsMi42LDE2LjdoLTkuNA0KCQlDLTIxMC4zLDQxMS4yLTIxMi4xLDQwNS42LTIxMi41LDM5OS41eiBNLTEzNy4zLDM5NC41aC0xMi4yYy0wLjItNi0xLjEtMTEuNi0yLjYtMTYu'+
			'N2g5LjZDLTEzOS41LDM4Mi44LTEzNy43LDM4OC40LTEzNy4zLDM5NC41eg0KCQkgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44DQoJCUwtMTcyLjQsMzcyLjh6IE0tMTc3LjQsMzU5LjZ2MTMuMmgtMTMuMkMtMTg3LjMsMzY1LjctMTgyLjYsMzYwLjctMTc3LjQsMzU5LjZ6IE0tMTc3LjQsMzc3Ljh2MTYuN2gtMTguMWMwLjItNiwxLjMtMTEuNywyLjktMTYuNw0KCQlMLTE3Ny40LDM3Ny44TC0xNzcuNCwzNzcuOHogTS0yMD'+
			'AuNSwzOTQuNWgtMTJjMC40LTYuMSwyLjItMTEuNyw1LjItMTYuN2g5LjRDLTE5OS40LDM4Mi44LTIwMC4zLDM4OC41LTIwMC41LDM5NC41eg0KCQkgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eg0KCQkgTS0xNzIuNCw0MzQuNHYtMTMuMmgxM0MtMTYyLjcsNDI4LjItMTY3LjMsNDMzLjEtMTcyLjQsNDM0LjR6IE0tMTcyLjQsNDE2LjJ2LTE2LjdoMTcuOWMtMC4yLDYtMS4zLDExLjctMi45LDE2LjdILTE3Mi40eg0KCQkgTS0x'+
			'NDkuNSwzOTkuNWgxMi4yYy0wLjQsNi4xLTIuMiwxMS44LTUuMiwxNi43aC05LjZDLTE1MC42LDQxMS4xLTE0OS43LDQwNS41LTE0OS41LDM5OS41eiBNLTE0NiwzNzIuOGgtNy44DQoJCWMtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03LjYNCgkJQy0yMDAuMiwzNjguNC0xOTUuNiwzNjQuOS0xOTAuMywzNjIuNnogTS0yMDMuOCw0MjEuMmg3LjZjMS42LDMuOSwzLjYsNy40LDUuOSwxMC4yQy0xOTUuNiw0MjktMjAwLjIsNDI1LjUtMjAzLjgsNDIxLjJ6DQoJCSBNLT'+
			'E1OS44LDQzMS41YzIuMy0yLjgsNC4zLTYuMyw2LTEwLjNoNy44Qy0xNDkuNyw0MjUuNi0xNTQuNCw0MjkuMi0xNTkuOCw0MzEuNXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_url_image_newpage__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image_newpage;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_newpage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_newpage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_newpage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true) || 
				(player.getVariableValue('opt_url') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_newpage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_newpage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_newpage.style[domTransition]='';
				if (me._ht_url_image_newpage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_newpage.style.visibility=(Number(me._ht_url_image_newpage.style.opacity)>0||!me._ht_url_image_newpage.style.opacity)?'inherit':'hidden';
					me._ht_url_image_newpage.ggVisible=true;
				}
				else {
					me._ht_url_image_newpage.style.visibility="hidden";
					me._ht_url_image_newpage.ggVisible=false;
				}
			}
		}
		me._ht_url_image_newpage.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._ht_url_image_newpage.onmouseover=function (e) {
			me._ht_url_image_newpage__img.style.visibility='hidden';
			me._ht_url_image_newpage__imgo.style.visibility='inherit';
		}
		me._ht_url_image_newpage.onmouseout=function (e) {
			me._ht_url_image_newpage__img.style.visibility='inherit';
			me._ht_url_image_newpage__imgo.style.visibility='hidden';
		}
		me._ht_url_image_newpage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_url_image_newpage);
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTYuMyw0MTQuN2g0Mi43di00NGgtNDIuN1Y0MTQuN3ogTS0xNTUuNSw0MTIuOUgtMTgzbDE5LTE4LjZjMC4zLTAuMywwLjYtMC40LDEtMC40DQoJCQljMC40LDAsMC43LDAuMSwxLDAuNGw2LjUsNi40VjQxMi45eiBNLTE2Mi45LDM3NmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Yy0yLjIsMC00LTEuOC00LTQNCgkJCUMtMTY2LjgsMzc3LjgtMTY1LjEsMzc2LTE2Mi45LDM3NnogTS0xOTQuNSwzOTcuOGw5LjctOS40YzAuMy0wLjMsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDEsMC40'+
			'bDExLjIsMTAuOWwtMTMuOSwxMy42aC05DQoJCQlMLTE5NC41LDM5Ny44TC0xOTQuNSwzOTcuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMQ0KCQkJUy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE0OS41LDQyNS41YzAsMS4zLTEsMi4zLTIuMywyLjNoLTQ2LjRjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTU3YzAtMS4zLDEtMi4zLDIuMy0yLjNoNDYuNA0KCQkJYzEuMywwLDIuMywxLDIuMywyLjNMLTE0OS41LDQyNS41TC0xNDkuNSw0MjUuNX'+
			'oiLz4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjgsMzY2LjJoLTQ2LjRjLTEuMywwLTIuMywxLTIuMywyLjN2NTdjMCwxLjMsMSwyLjMsMi4zLDIuM2g0Ni40YzEuMywwLDIuMy0xLDIuMy0yLjN2LTU3DQoJCQlDLTE0OS41LDM2Ny4yLTE1MC41LDM2Ni4yLTE1MS44LDM2Ni4yeiBNLTE1My43LDQxNC43aC00Mi43di00NGg0Mi43VjQxNC43eiIvPg0KCQk8Y2lyY2xlIGZpbGw9IiNGRkZGRkYiIGN4PSItMTYyLjkiIGN5PSIzNzkuOSIgcj0iNCIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3MS43LDM5'+
			'OS4zbC0xMS4yLTEwLjljLTAuMy0wLjMtMC42LTAuNC0xLTAuNHMtMC43LDAuMS0xLDAuNGwtOS43LDkuNHYxNS4xaDlMLTE3MS43LDM5OS4zeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MywzOTMuOWMtMC40LDAtMC43LDAuMS0xLDAuNGwtMTksMTguNmgyNy41di0xMi4ybC02LjUtNi40Qy0xNjIuMiwzOTQtMTYyLjYsMzkzLjktMTYzLDM5My45eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_image_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTguNyw0MTYuNmg0Ny40di00OC45aC00Ny40VjQxNi42eiBNLTE1My4zLDQxNC42aC0zMC42bDIxLjEtMjAuNmMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNQ0KCQkJYzAuNCwwLDAuOCwwLjIsMS4xLDAuNWw3LjIsNy4xVjQxNC42eiBNLTE2MS41LDM3My42YzIuNCwwLDQuNCwyLDQuNCw0LjRjMCwyLjQtMiw0LjQtNC40LDQuNHMtNC40LTItNC40LTQuNA0KCQkJQy0xNjUuOSwzNzUuNi0xNjQsMzczLjYtMTYxLjUsMzczLjZ6IE0tMTk2LjcsMzk3LjlsMTAuNy0xMC41YzAuMy0wLjMsMC43LTAuNSwxLjEt'+
			'MC41czAuOCwwLjIsMS4xLDAuNGwxMi40LDEyLjJsLTE1LjQsMTUuMWgtMTANCgkJCUwtMTk2LjcsMzk3LjlMLTE5Ni43LDM5Ny45eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNA0KCQkJUy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ2LjcsNDI4LjdjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC01MS42Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTYzLjRjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDUxLjYNCgkJCWMxLjQsMCwyLjYsMS'+
			'4xLDIuNiwyLjZMLTE0Ni43LDQyOC43TC0xNDYuNyw0MjguN3oiLz4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ5LjIsMzYyLjhoLTUxLjZjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY2My40YzAsMS40LDEuMSwyLjYsMi42LDIuNmg1MS42YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNjMuNA0KCQkJQy0xNDYuNywzNjMuOS0xNDcuOCwzNjIuOC0xNDkuMiwzNjIuOHogTS0xNTEuMyw0MTYuNmgtNDcuNHYtNDguOWg0Ny40VjQxNi42eiIvPg0KCQk8Y2lyY2xlIGZpbGw9IiNGRkZGRkYiIGN4PSItMTYxLjUiIGN5PSIzNzgi'+
			'IHI9IjQuNCIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3MS4zLDM5OS41bC0xMi40LTEyLjJjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40Yy0wLjQsMC0wLjgsMC4yLTEuMSwwLjVsLTEwLjcsMTAuNXYxNi44aDEwDQoJCQlMLTE3MS4zLDM5OS41eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5My41Yy0wLjQsMC0wLjgsMC4yLTEuMSwwLjVsLTIxLjEsMjAuNmgzMC42VjQwMWwtNy4yLTcuMUMtMTYwLjgsMzkzLjctMTYxLjIsMzkzLjUtMTYxLjYsMzkzLjUNCgkJCXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_image_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', true);
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_desc.ggText=me.hotspot.description;
			skin._info_desc.ggTextDiv.innerHTML=skin._info_desc.ggText;
			if (skin._info_desc.ggUpdateText) {
				skin._info_desc.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_desc.ggUpdatePosition) {
				skin._info_desc.ggUpdatePosition();
			}
			skin._info_desc.ggTextDiv.scrollTop = 0;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDMTIuMjY1MiAyIDEyLjUxOTYgMi4xMDUzNiAxMi43MDcxIDIuMjkyODlDMTIuODk0NiAyLjQ4MDQzIDEzIDIuNzM0NzggMTMgM1Y2QzEzIDYuMjY1MjIgMTIuODk0NiA2LjUxOTU3IDEyLjcwNzEgNi43MDcxMUMxMi41MTk2IDYuODk0NjQgMTIuMjY1MiA3IDEyIDdDMTEuNzM0OCA3IDExLjQ4MDQgNi44OTQ2NCAxMS4yOTI5IDYuNzA3MTFDMTEuMTA1NCA2LjUxOTU3IDExIDYuMjY1MjIgMTEgNlYzQz'+
			'ExIDIuNzM0NzggMTEuMTA1NCAyLjQ4MDQzIDExLjI5MjkgMi4yOTI4OUMxMS40ODA0IDIuMTA1MzYgMTEuNzM0OCAyIDEyIDJWMlpNMTIgMTdDMTIuMjY1MiAxNyAxMi41MTk2IDE3LjEwNTQgMTIuNzA3MSAxNy4yOTI5QzEyLjg5NDYgMTcuNDgwNCAxMyAxNy43MzQ4IDEzIDE4VjIxQzEzIDIxLjI2NTIgMTIuODk0NiAyMS41MTk2IDEyLjcwNzEgMjEuNzA3MUMxMi41MTk2IDIxLjg5NDYgMTIuMjY1MiAyMiAxMiAyMkMxMS43MzQ4IDIyIDExLjQ4MDQgMjEuODk0NiAxMS4yOTI5IDIxLjcwNzFDMTEuMTA1NCAyMS41MTk2IDExIDIxLjI2NTIgMTEgMjFWMThDMTEgMTcuNzM0OCAxMS4xMDU0IDE3'+
			'LjQ4MDQgMTEuMjkyOSAxNy4yOTI5QzExLjQ4MDQgMTcuMTA1NCAxMS43MzQ4IDE3IDEyIDE3VjE3Wk0yMiAxMkMyMiAxMi4yNjUyIDIxLjg5NDYgMTIuNTE5NiAyMS43MDcxIDEyLjcwNzFDMjEuNTE5NiAxMi44OTQ2IDIxLjI2NTIgMTMgMjEgMTNIMThDMTcuNzM0OCAxMyAxNy40ODA0IDEyLjg5NDYgMTcuMjkyOSAxMi43MDcxQzE3LjEwNTQgMTIuNTE5NiAxNyAxMi4yNjUyIDE3IDEyQzE3IDExLjczNDggMTcuMTA1NCAxMS40ODA0IDE3LjI5MjkgMTEuMjkyOUMxNy40ODA0IDExLjEwNTQgMTcuNzM0OCAxMSAxOCAxMUgyMUMyMS4yNjUyIDExIDIxLjUxOTYgMTEuMTA1NCAyMS43MDcxIDExLj'+
			'I5MjlDMjEuODk0NiAxMS40ODA0IDIyIDExLjczNDggMjIgMTJaTTcgMTJDNyAxMi4yNjUyIDYuODk0NjQgMTIuNTE5NiA2LjcwNzExIDEyLjcwNzFDNi41MTk1NyAxMi44OTQ2IDYuMjY1MjIgMTMgNiAxM0gzQzIuNzM0NzggMTMgMi40ODA0MyAxMi44OTQ2IDIuMjkyODkgMTIuNzA3MUMyLjEwNTM2IDEyLjUxOTYgMiAxMi4yNjUyIDIgMTJDMiAxMS43MzQ4IDIuMTA1MzYgMTEuNDgwNCAyLjI5Mjg5IDExLjI5MjlDMi40ODA0MyAxMS4xMDU0IDIuNzM0NzggMTEgMyAxMUg2QzYuMjY1MjIgMTEgNi41MTk1NyAxMS4xMDU0IDYuNzA3MTEgMTEuMjkyOUM2Ljg5NDY0IDExLjQ4MDQgNyAxMS43MzQ4'+
			'IDcgMTJaTTE5LjA3MSAxOS4wNzFDMTguODgzNSAxOS4yNTg1IDE4LjYyOTIgMTkuMzYzOCAxOC4zNjQgMTkuMzYzOEMxOC4wOTg4IDE5LjM2MzggMTcuODQ0NSAxOS4yNTg1IDE3LjY1NyAxOS4wNzFMMTUuNTM2IDE2Ljk1QzE1LjM1MzggMTYuNzYxNCAxNS4yNTMgMTYuNTA4OCAxNS4yNTUzIDE2LjI0NjZDMTUuMjU3NiAxNS45ODQ0IDE1LjM2MjggMTUuNzMzNiAxNS41NDgyIDE1LjU0ODJDMTUuNzMzNiAxNS4zNjI4IDE1Ljk4NDQgMTUuMjU3NiAxNi4yNDY2IDE1LjI1NTNDMTYuNTA4OCAxNS4yNTMgMTYuNzYxNCAxNS4zNTM4IDE2Ljk1IDE1LjUzNkwxOS4wNzEgMTcuNjU2QzE5LjE2NCAxNy'+
			'43NDg5IDE5LjIzNzcgMTcuODU5MiAxOS4yODgxIDE3Ljk4MDZDMTkuMzM4NCAxOC4xMDIgMTkuMzY0MyAxOC4yMzIxIDE5LjM2NDMgMTguMzYzNUMxOS4zNjQzIDE4LjQ5NDkgMTkuMzM4NCAxOC42MjUgMTkuMjg4MSAxOC43NDY0QzE5LjIzNzcgMTguODY3OCAxOS4xNjQgMTguOTc4MSAxOS4wNzEgMTkuMDcxVjE5LjA3MVpNOC40NjQgOC40NjRDOC4yNzY0NyA4LjY1MTQ3IDguMDIyMTYgOC43NTY3OSA3Ljc1NyA4Ljc1Njc5QzcuNDkxODQgOC43NTY3OSA3LjIzNzUzIDguNjUxNDcgNy4wNSA4LjQ2NEw0LjkzIDYuMzQ0QzQuNzQyMzYgNi4xNTY0OSA0LjYzNjg5IDUuOTAyMTIgNC42MzY4IDUu'+
			'NjM2ODVDNC42MzY3IDUuMzcxNTggNC43NDE5OSA1LjExNzE0IDQuOTI5NSA0LjkyOTVDNS4xMTcwMSA0Ljc0MTg2IDUuMzcxMzggNC42MzYzOSA1LjYzNjY1IDQuNjM2M0M1LjkwMTkyIDQuNjM2MiA2LjE1NjM2IDQuNzQxNDkgNi4zNDQgNC45MjlMOC40NjQgNy4wNUM4LjY1MTQ3IDcuMjM3NTMgOC43NTY3OSA3LjQ5MTg0IDguNzU2NzkgNy43NTdDOC43NTY3OSA4LjAyMjE2IDguNjUxNDcgOC4yNzY0NyA4LjQ2NCA4LjQ2NFY4LjQ2NFpNNC45MyAxOS4wNzFDNC43NDI1MyAxOC44ODM1IDQuNjM3MjEgMTguNjI5MiA0LjYzNzIxIDE4LjM2NEM0LjYzNzIxIDE4LjA5ODggNC43NDI1MyAxNy44ND'+
			'Q1IDQuOTMgMTcuNjU3TDcuMDUxIDE1LjUzNkM3LjE0MzI1IDE1LjQ0MDUgNy4yNTM1OSAxNS4zNjQzIDcuMzc1NiAxNS4zMTE5QzcuNDk3NiAxNS4yNTk1IDcuNjI4ODIgMTUuMjMxOSA3Ljc2MTYgMTUuMjMwN0M3Ljg5NDM4IDE1LjIyOTYgOC4wMjYwNiAxNS4yNTQ5IDguMTQ4OTUgMTUuMzA1MkM4LjI3MTg1IDE1LjM1NTUgOC4zODM1IDE1LjQyOTcgOC40Nzc0IDE1LjUyMzZDOC41NzEyOSAxNS42MTc1IDguNjQ1NTQgMTUuNzI5MSA4LjY5NTgyIDE1Ljg1MkM4Ljc0NjEgMTUuOTc0OSA4Ljc3MTQgMTYuMTA2NiA4Ljc3MDI1IDE2LjIzOTRDOC43NjkxIDE2LjM3MjIgOC43NDE1MSAxNi41MDM0'+
			'IDguNjg5MSAxNi42MjU0QzguNjM2NjkgMTYuNzQ3NCA4LjU2MDUxIDE2Ljg1NzggOC40NjUgMTYuOTVMNi4zNDUgMTkuMDcxQzYuMjUyMTMgMTkuMTY0IDYuMTQxODQgMTkuMjM3NyA2LjAyMDQ0IDE5LjI4ODFDNS44OTkwNCAxOS4zMzg0IDUuNzY4OTIgMTkuMzY0MyA1LjYzNzUgMTkuMzY0M0M1LjUwNjA4IDE5LjM2NDMgNS4zNzU5NiAxOS4zMzg0IDUuMjU0NTYgMTkuMjg4MUM1LjEzMzE2IDE5LjIzNzcgNS4wMjI4NyAxOS4xNjQgNC45MyAxOS4wNzFWMTkuMDcxWk0xNS41MzYgOC40NjRDMTUuMzQ4NSA4LjI3NjQ3IDE1LjI0MzIgOC4wMjIxNiAxNS4yNDMyIDcuNzU3QzE1LjI0MzIgNy40OT'+
			'E4NCAxNS4zNDg1IDcuMjM3NTMgMTUuNTM2IDcuMDVMMTcuNjU2IDQuOTI5QzE3Ljg0MzUgNC43NDEzNiAxOC4wOTc5IDQuNjM1ODkgMTguMzYzMSA0LjYzNThDMTguNjI4NCA0LjYzNTcgMTguODgyOSA0Ljc0MDk5IDE5LjA3MDUgNC45Mjg1QzE5LjI1ODEgNS4xMTYwMSAxOS4zNjM2IDUuMzcwMzggMTkuMzYzNyA1LjYzNTY1QzE5LjM2MzggNS45MDA5MiAxOS4yNTg1IDYuMTU1MzYgMTkuMDcxIDYuMzQzTDE2Ljk1IDguNDY0QzE2Ljc2MjUgOC42NTE0NyAxNi41MDgyIDguNzU2NzkgMTYuMjQzIDguNzU2NzlDMTUuOTc3OCA4Ljc1Njc5IDE1LjcyMzUgOC42NTE0NyAxNS41MzYgOC40NjRWOC40'+
			'NjRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._svg_2);
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();;
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	me._screentint.logicBlock_alpha();
	me._information.logicBlock_size();
	me._loading.logicBlock_visible();
	me._information.logicBlock_visible();
	me._close.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._web_page.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._screentint.logicBlock_alpha();me._information.logicBlock_size(); });
	player.addListener('changenodeid', function(args) { me._screentint.logicBlock_alpha();me._loading.logicBlock_visible();me._information.logicBlock_visible();me._close.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._web_page.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint.logicBlock_alpha();me._information.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._screentint.logicBlock_alpha(); });
	player.addListener('varchanged_vis_website', function(args) { me._screentint.logicBlock_alpha();me._close.logicBlock_visible();me._web_page.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_mobile', function(args) { me._screentint.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_auto_hide', function(args) { me._screentint.logicBlock_alpha(); });
	player.addListener('varchanged_opt_loader', function(args) { me._loading.logicBlock_visible(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_url_changenodeid();me.callChildLogicBlocksHotspot_ht_image_changenodeid(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_url_configloaded(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website(); });
	player.addListener('varchanged_vis_timer', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer(); });
	player.addListener('varchanged_opt_url', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};