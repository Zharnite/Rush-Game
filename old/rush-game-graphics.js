(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"rush_game_graphics_atlas_", frames: [[122,322,16,16],[36,336,16,16],[54,336,16,16],[72,336,16,16],[90,336,16,16],[0,336,16,16],[18,336,16,16],[140,322,19,10],[161,322,19,10],[0,322,120,12],[0,0,600,320]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.coin1 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.coin2 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.coin3 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.obstaclesplit1 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.obstaclesplit2 = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.platform = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.trees = function() {
	this.spriteSheet = ss["rush_game_graphics_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.PlatformGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.platform();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PlatformGraphic, new cjs.Rectangle(0,0,120,12), null);


(lib.ObstacleGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.obstaclesplit1();
	this.instance.parent = this;

	this.instance_1 = new lib.obstaclesplit2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,10);


(lib.HeroGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:0,jump:4});

	// timeline functions:
	this.frame_3 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_5 = function() {
		this.gotoAndPlay("jump");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(2).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.hero1();
	this.instance.parent = this;

	this.instance_1 = new lib.hero2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.hero3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.hero4();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.CoinGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin1();
	this.instance.parent = this;

	this.instance_1 = new lib.coin2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.coin3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.BackgoundGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trees();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BackgoundGraphic, new cjs.Rectangle(0,0,600,320), null);


// stage content:
(lib.rushgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CoinGraphic();
	this.instance.parent = this;
	this.instance.setTransform(191.1,177,1,1,0,0,0,8,8);

	this.instance_1 = new lib.ObstacleGraphic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.6,177.1,1,1,0,0,0,9.5,5);

	this.instance_2 = new lib.HeroGraphic();
	this.instance_2.parent = this;
	this.instance_2.setTransform(231.6,177,1,1,0,0,0,8,8);

	this.instance_3 = new lib.PlatformGraphic();
	this.instance_3.parent = this;
	this.instance_3.setTransform(235,188.1,1,1,0,0,0,60,6);

	this.instance_4 = new lib.BackgoundGraphic();
	this.instance_4.parent = this;
	this.instance_4.setTransform(249,160,1,1,0,0,0,300,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189,160,600,320);
// library properties:
lib.properties = {
	width: 480,
	height: 320,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/rush_game_graphics_atlas_.png", id:"rush_game_graphics_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;