(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Testanimation_atlas_1", frames: [[0,0,459,88]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Testanimation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,229.5,44), null);


// stage content:
(lib.Testanimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,23];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // Stoppt die Animation am Anfang
		
		var test = this.test;
		
		test.addEventListener("click", function() {
		    console.log("test");
		    this.play(); // Spielt die Animation ab, wenn auf das Objekt 'test' geklickt wird
		}.bind(this)); // Bindet den korrekten Kontext an die Funktion
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// gsi_logo_svg
	this.test = new lib.Symbol1();
	this.test.name = "test";
	this.test.setTransform(150.05,50,1,1,0,0,0,114.8,22);

	this.timeline.addTween(cjs.Tween.get(this.test).wait(1).to({scaleX:1.0702,scaleY:1.0702,x:190.7,y:66.4},0).wait(1).to({scaleX:1.1403,scaleY:1.1403,x:228.55,y:82.9},0).wait(1).to({scaleX:1.2105,scaleY:1.2105,x:263.7,y:99.4},0).wait(1).to({scaleX:1.2807,scaleY:1.2807,x:296.1,y:115.9},0).wait(1).to({scaleX:1.3508,scaleY:1.3508,x:325.75,y:132.55},0).wait(1).to({scaleX:1.421,scaleY:1.421,x:352.7,y:149.2},0).wait(1).to({scaleX:1.4912,scaleY:1.4912,x:376.8,y:165.9},0).wait(1).to({scaleX:1.5613,scaleY:1.5613,x:398.2,y:182.65},0).wait(1).to({scaleX:1.6315,scaleY:1.6315,x:416.9,y:199.45},0).wait(1).to({scaleX:1.7016,scaleY:1.7016,x:432.8,y:216.3},0).wait(1).to({scaleX:1.7718,scaleY:1.7718,x:445.95,y:233.2},0).wait(1).to({scaleX:1.842,scaleY:1.842,x:456.4,y:250.1},0).wait(1).to({scaleX:1.9121,scaleY:1.9121,x:464.1,y:267.15},0).wait(1).to({scaleX:1.9823,scaleY:1.9823,x:469,y:284.2},0).wait(1).to({scaleX:2.0525,scaleY:2.0525,x:471.25,y:301.3},0).wait(1).to({scaleX:2.1226,scaleY:2.1226,x:470.75,y:318.45},0).wait(1).to({scaleX:2.1928,scaleY:2.1928,x:467.45,y:335.65},0).wait(1).to({scaleX:2.263,scaleY:2.263,x:461.45,y:352.9},0).wait(1).to({scaleX:2.3331,scaleY:2.3331,x:452.65,y:370.25},0).wait(1).to({scaleX:2.4033,scaleY:2.4033,x:441.15,y:387.55},0).wait(1).to({scaleX:2.4735,scaleY:2.4735,x:426.9,y:404.95},0).wait(1).to({scaleX:2.5436,scaleY:2.5436,x:409.85,y:422.45},0).wait(1).to({scaleX:2.6138,scaleY:2.6138,x:390.1,y:439.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(435.3,328,285.7,169.5);
// library properties:
lib.properties = {
	id: '4135D526DB63F14FB9836D5473E7D9E0',
	width: 800,
	height: 600,
	fps: 60,
	color: "#D4EEFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Testanimation_atlas_1.png", id:"Testanimation_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4135D526DB63F14FB9836D5473E7D9E0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;