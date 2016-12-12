(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.youWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("You Win!", "120px 'Times'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 531;
	this.text.setTransform(10,-352.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9.9,1,1).p("EAv9AWVIwGGTIpBMqIxgitIwTF4IsPqqIxZjJIiTukIr1q+IIis2IhxumIQHmTII/sqIRhCsIQTl3IMPKqIRZDJICTOjIL1K+IohM2g");
	this.shape.setTransform(0,-284.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00C963","#2B3ACD"],[0,1],0,0,0,0,0,352.6).s().p("EgXMAhzIxZjJIiTukIr1q+IIis2IhxumIQHmTII/sqIRhCsIQTl3IMPKqIRZDJICTOjIL1K+IohM2IBwOnIwGGTIpBMqIxgitIwTF4g");
	this.shape_1.setTransform(0,-284.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.2,-574.1,710.5,579.1);


(lib.youLose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Computer\nWins.", "120px 'Times'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 531;
	this.text.setTransform(5.9,-418.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9.9,1,1).p("EAv9AWVIwGGTIpBMqIxgitIwTF4IsPqqIxZjJIiTukIr1q+IIis2IhxumIQHmTII/sqIRhCsIQTl3IMPKqIRZDJICTOjIL1K+IohM2g");
	this.shape.setTransform(0,-284.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00C963","#2B3ACD"],[0,1],0,0,0,0,0,352.6).s().p("EgXMAhzIxZjJIiTukIr1q+IIis2IhxumIQHmTII/sqIRhCsIQTl3IMPKqIRZDJICTOjIL1K+IohM2IBwOnIwGGTIpBMqIxgitIwTF4g");
	this.shape_1.setTransform(0,-284.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.2,-574.1,710.5,579.1);


(lib.U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("U", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("T", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Start", "40px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-52);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.5,1,1).p("AwZkrMAgzAAAIAAJXMggzAAAg");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AwZEsIAApXMAgzAAAIAAJXg");
	this.shape_1.setTransform(0,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("AyvlVMAlfAAAIAAKrMglfAAAg");
	this.shape_2.setTransform(0,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AyuFWIAAqrMAldAAAIAAKrg");
	this.shape_3.setTransform(0,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.5,1,1).p("AwakrMAg1AAAIAAJXMgg1AAAg");
	this.shape_4.setTransform(0,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AwaEsIAApXMAg1AAAIAAJXg");
	this.shape_5.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:-2,y:-52}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{scaleX:1.143,scaleY:1.143,x:-2.3,y:-55.1}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{scaleX:1.001,scaleY:1.001,x:-2,y:-52}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.2,-61.2,212.5,62.5);


(lib.R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("R", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.playerPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjPDQQhXhWAAh6QAAh5BXhWQBWhXB5AAQB6AABWBXQBXBWAAB5QAAB6hXBWQhWBXh6AAQh5AAhWhXg");
	this.shape.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,59.1);


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Play", "12px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 48;
	this.text.setTransform(-1,-22.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AlYiVIKxAAIAAErIqxAAg");
	this.shape.setTransform(0,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("AlXCWIAAkqIKvAAIAAEqg");
	this.shape_1.setTransform(0,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AlXCWIAAkqIKvAAIAAEqg");
	this.shape_2.setTransform(0,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF99FF").s().p("AlXCWIAAkqIKvAAIAAEqg");
	this.shape_3.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:-1,y:-22.8,text:"Play"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{x:-5,y:-23.8,text:"Drop"}}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.text,p:{x:-5,y:-23.8,text:"Drop"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-31,71,32);


(lib.O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("O", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 102;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("N", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.instructs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Instructions", "40px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 193;
	this.text.setTransform(-2,-52.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.5,1,1).p("AwZkrMAgzAAAIAAJXMggzAAAg");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333CC").s().p("AwZEsIAApXMAgzAAAIAAJXg");
	this.shape_1.setTransform(0,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("AyvlVMAlfAAAIAAKrMglfAAAg");
	this.shape_2.setTransform(0,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3333CC").s().p("AyuFWIAAqrMAldAAAIAAKrg");
	this.shape_3.setTransform(0,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.5,1,1).p("AwakrMAg1AAAIAAJXMgg1AAAg");
	this.shape_4.setTransform(0,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3333CC").s().p("AwaEsIAApXMAg1AAAIAAJXg");
	this.shape_5.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:-2,y:-52.5}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{scaleX:1.143,scaleY:1.143,x:-2.3,y:-55.7}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{scaleX:1.001,scaleY:1.001,x:-2,y:-52.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.2,-61.2,212.5,62.5);


(lib.instructionsText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("The goal of the game is to get four in a row either up and down, left to right, or diagonally.\nYou will play against the computer, alternating turns.\nPress the buttons at the bottom of the columns to drop a piece.  The piece will fall until it gets to the bottom or to another piece.", "bold 40px 'Times'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 569;
	this.text.setTransform(-2,-431.1);

	this.text_1 = new cjs.Text("Instructions", "bold 70px 'Times'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 72;
	this.text_1.lineWidth = 367;
	this.text_1.setTransform(11.8,-518.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.6,-518.1,573.2,518.2);


(lib.F = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("F", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("E", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.draw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Game is\na Draw", "120px 'Times'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 531;
	this.text.setTransform(-2.3,-410.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9.9,1,1).p("EAv9AWVIwGGTIpBMqIxgitIwTF4IsPqqIxZjJIiTukIr1q+IIis2IhxumIQHmTII/sqIRhCsIQTl3IMPKqIRZDJICTOjIL1K+IohM2g");
	this.shape.setTransform(0,-284.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00C963","#2B3ACD"],[0,1],0,0,0,0,0,352.6).s().p("EgXMAhzIxZjJIiTukIr1q+IIis2IhxumIQHmTII/sqIRhCsIQTl3IMPKqIRZDJICTOjIL1K+IohM2IBwOnIwGGTIpBMqIxgitIwTF4g");
	this.shape_1.setTransform(0,-284.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.2,-574.1,710.5,579.1);


(lib.computerPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjPDQQhXhWAAh6QAAh5BXhWQBWhXB5AAQB6AABWBXQBXBWAAB5QAAB6hXBWQhWBXh6AAQh5AAhWhXg");
	this.shape.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,59.1);


(lib.C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("C", "100px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-124.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-124.3,104,124.3);


(lib.board1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg2wgl3MBthAAAMAAABLvMhthAAAg");
	this.shape.setTransform(0,-242.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("Eg2vAl4MAAAhLvMBtfAAAMAAABLvgEAlPAYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAXoYkQhLBMAABqQAABrBLBLQBMBMBqAAQBrAABMhMQBLhLAAhrQAAhqhLhMQhMhLhrAAQhqAAhMBLgAKNYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAiwYkQhLBMAABqQAABrBLBLQBMBMBpAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhpAAhMBLgAwfYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgA9eYkQhLBMAABqQAABrBLBLQBMBMBrAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhrAAhMBLgEgq7AYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgEAlPANoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAXoNoQhLBMAABqQAABrBLBLQBMBMBqAAQBrAABMhMQBLhLAAhrQAAhqhLhMQhMhLhrAAQhqAAhMBLgAKNNoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAiwNoQhLBMAABqQAABrBLBLQBMBMBpAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhpAAhMBLgAwfNoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgA9eNoQhLBMAABqQAABrBLBLQBMBMBrAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhrAAhMBLgEgq7ANoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgEAlPAC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXoC3QhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKNC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiwC3QhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwfC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9eC3QhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7AC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgEAlPgINQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXooNQhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKNoNQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiwoNQhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwfoNQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9eoNQhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7gINQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgEAlPgTJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXozJQhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKNzJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiwzJQhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwfzJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9ezJQhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7gTJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgEAlPgdqQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXo9qQhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKN9qQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiw9qQhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwf9qQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9e9qQhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7gdqQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMg");
	this.shape_1.setTransform(0,-242.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.5,-485.9,703,487);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg2wgl3MBthAAAMAAABLvMhthAAAg");
	this.shape.setTransform(0,-242.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("Eg2vAl4MAAAhLvMBtfAAAMAAABLvgEAlPAYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAXoYkQhLBMAABqQAABrBLBLQBMBMBqAAQBrAABMhMQBLhLAAhrQAAhqhLhMQhMhLhrAAQhqAAhMBLgAKNYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAiwYkQhLBMAABqQAABrBLBLQBMBMBpAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhpAAhMBLgAwfYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgA9eYkQhLBMAABqQAABrBLBLQBMBMBrAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhrAAhMBLgEgq7AYkQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgEAlPANoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAXoNoQhLBMAABqQAABrBLBLQBMBMBqAAQBrAABMhMQBLhLAAhrQAAhqhLhMQhMhLhrAAQhqAAhMBLgAKNNoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgAiwNoQhLBMAABqQAABrBLBLQBMBMBpAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhpAAhMBLgAwfNoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgA9eNoQhLBMAABqQAABrBLBLQBMBMBrAAQBqAABMhMQBLhLAAhrQAAhqhLhMQhMhLhqAAQhrAAhMBLgEgq7ANoQhMBMAABqQAABrBMBLQBLBMBrAAQBqAABLhMQBMhLAAhrQAAhqhMhMQhLhLhqAAQhrAAhLBLgEAlPAC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXoC3QhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKNC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiwC3QhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwfC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9eC3QhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7AC3QhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgEAlPgINQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXooNQhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKNoNQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiwoNQhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwfoNQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9eoNQhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7gINQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgEAlPgTJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXozJQhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKNzJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiwzJQhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwfzJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9ezJQhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7gTJQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgEAlPgdqQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAXo9qQhLBLAABrQAABqBLBMQBMBLBqAAQBrAABMhLQBLhMAAhqQAAhrhLhLQhMhMhrAAQhqAAhMBMgAKN9qQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgAiw9qQhLBLAABrQAABqBLBMQBMBLBpAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhpAAhMBMgAwf9qQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMgA9e9qQhLBLAABrQAABqBLBMQBMBLBrAAQBqAABMhLQBLhMAAhqQAAhrhLhLQhMhMhqAAQhrAAhMBMgEgq7gdqQhMBLAABrQAABqBMBMQBLBLBrAAQBqAABLhLQBMhMAAhqQAAhrhMhLQhLhMhqAAQhrAAhLBMg");
	this.shape_1.setTransform(0,-242.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.5,-485.9,703,487);


(lib.LettersFalling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// R
	this.instance = new lib.R();
	this.instance.setTransform(153.8,-47.8,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:62.2},0).to({y:564.4},15).wait(11));

	// U
	this.instance_1 = new lib.U();
	this.instance_1.setTransform(49.8,-47.8,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({y:62.2},0).to({y:564.4},15).wait(1));

	// O2
	this.instance_2 = new lib.O();
	this.instance_2.setTransform(-54.2,-47.8,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:62.2},0).to({y:564.4},15).wait(21));

	// F
	this.instance_3 = new lib.F();
	this.instance_3.setTransform(-158.2,-47.8,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({y:62.2},0).to({y:564.4},15).wait(41));

	// T
	this.instance_4 = new lib.T();
	this.instance_4.setTransform(312.3,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({y:-62.1},0).to({x:314,y:440.1},15).wait(26));

	// C2
	this.instance_5 = new lib.C();
	this.instance_5.setTransform(208.3,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({y:-62.1},0).to({x:210,y:440.1},15).wait(36));

	// E
	this.instance_6 = new lib.E();
	this.instance_6.setTransform(103.8,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({y:-62.1},0).to({x:106,y:440.1},15).wait(6));

	// N2
	this.instance_7 = new lib.N();
	this.instance_7.setTransform(-0.2,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({y:-62.1},0).to({y:440.1},15).wait(46));

	// N1
	this.instance_8 = new lib.N();
	this.instance_8.setTransform(-104.2,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({y:-62.1},0).to({y:440.1},15).wait(16));

	// O1
	this.instance_9 = new lib.O();
	this.instance_9.setTransform(-208.2,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({y:-62.1},0).to({x:-206,y:440.1},15).wait(31));

	// C1
	this.instance_10 = new lib.C();
	this.instance_10.setTransform(-312.2,-172.1,1,1,0,0,0,0,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-310,y:440.1},14).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.2,-234.3,728.5,248.6);


// stage content:



(lib.ConnectFour = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{game:0,startGame:1,mainTitle:3,win:69,instructions:114,lose:140,draw:185});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay("mainTitle");
	}
	this.frame_1 = function() {
		this.stop();
		// x coordinates of each column
		var xCoord = [117, 203, 286, 374, 457, 543, 630];
		
		var yStart = -62; // y position the dropped piece will start at
		var player; // keeps track of which color of piece to drop. false = black (computer), true = red (player)
		
		//var buttonActive = [true, true, true, true, true, true, true];
		
		var game = this; // used to reference this in functions
		
		// strings for what is in each space of board
		var empty = "empty";
		var comp = "computer";
		var play = "player"
		
		// true when player or computer has won
		var win = false;
		
		// counter to keep track of how many total pieces have been played. 42 is max.
		var numberOfPiecesPlayed = 0;
		// random column computer chooses
		var computerCol;
		// array to keep track of all pieces that have been added to the stage
		var piece = [];
		
		// array to tell if row in a column is occupied by the player's or computer's piece, or is empty
		var columns = new Array(7);
		// 2D array containing y coordinates for each of the 7 columns
		var yColumns = new Array(7);
		
		// text box
		this.myText.text = "";
		
		// add event listeners to the column buttons
		this.col_1.addEventListener('click', fl_ClickToLoadImageFromLibrary_1.bind(this));
		this.col_2.addEventListener('click', fl_ClickToLoadImageFromLibrary_2.bind(this));
		this.col_3.addEventListener('click', fl_ClickToLoadImageFromLibrary_3.bind(this));
		this.col_4.addEventListener('click', fl_ClickToLoadImageFromLibrary_4.bind(this));
		this.col_5.addEventListener('click', fl_ClickToLoadImageFromLibrary_5.bind(this));
		this.col_6.addEventListener('click', fl_ClickToLoadImageFromLibrary_6.bind(this));
		this.col_7.addEventListener('click', fl_ClickToLoadImageFromLibrary_7.bind(this));
		
		
		startGame(); // start the game
		
		function startGame() {
			// initialize variables
			win = false;
			numberOfPiecesPlayed = 0;
			piece.length = 0;
			columns.length = 0;
			yColumns.lenght = 0;
			
			// fill columns and yColumns arrays
			for (var i = 0; i < 7; i++) {
				columns[i] = [empty, empty, empty, empty, empty, empty];
				yColumns[i] = [90, 164, 234, 305, 367, 437];
			}
			
			// choose who goes first - 0 = computer, 1 = player
			if (Math.floor(Math.random() * 2) == 0) {
				player = false;
				console.log("computer goes first");
				computerTurn();
			} else {
				player = true;
				console.log("player goes first");
				playerTurn();
			}
		}
		
		// computer's turn
		function computerTurn() {
			computerCol = Math.floor(Math.random() * 7); // choose random column
			console.log("computer picks column " + computerCol);
			computerDrop(computerCol); // drop piece in chosen column
		}
		
		// dummy function to call after computer's turn. wait for player to click button
		function playerTurn() {
			
		}
		
		
		// function to put the piece to be dropped at the correct x and y coordinates
		// and call the tweenPiece function
		function dropPiece(piece, xCoor, yCoor) {
			this.piece = piece; // player or computer piece
			this.piece.x = xCoor; // x coordinate of piece
			this.piece.y = 0; // y coordinate of piece
			tweenPiece(piece, xCoor, yCoor); // tween the piece to the yCoor
		}
		
		// drop computer's piece
		function computerDrop() {
			// check if there is still empty spaces in column that was chosen
			if (yColumns[computerCol].length > 0) {
				// add new piece to the array of children
				piece[numberOfPiecesPlayed] = new lib.computerPiece();
				player = true; // change to player's turn
				stage.addChild(piece[numberOfPiecesPlayed]); // add piece to stage
				xCoor = xCoord[computerCol]; // x coordinate of chosen column
				yCoor = yColumns[computerCol].pop(); // y coordinate of first empty space
				columns[computerCol][yColumns[computerCol].length] = comp; // set computer as owner of space
				
				console.log(yColumns[computerCol].length);
				console.log("Columns 2d Array = " + columns[computerCol][yColumns[computerCol].length]);
				// check to see if there is a winning combination
				win = checkWin(computerCol, yColumns[computerCol].length);
				
				console.log("win = " + win);
				
				// drop the piece into position
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++; // increment number of pieces played
				
				console.log("pieces played: " + numberOfPiecesPlayed);
				
				if (win) { // if win remove all pieces from the board and goto lose screen
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("lose");
					// if all pieces have been played remove all pieces and goto draw screen
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else { // else player's turn
					playerTurn();
				}
			} else { // no empty spaces in chosen column and choose another column
				console.log("no more room in column " + computerCol);
				computerTurn();
			}
		}
		
		
		//Tweens the specified Object using ease bounce out effect. 
		function tweenPiece(piece, xCoor, yCoor) {
			var target = piece;
			var tween = createjs.Tween.get(target, {
				loop: false
			})
				.to({
					//x: target.x,
					y: yCoor
				}, 1500, createjs.Ease.bounceOut);
		
		}
		
		// check for winning combinations
		function checkWin(col, row) {
			var win = false; // make win false to start with
			
			console.log("piece.length = " + piece.length);
		
			console.log("across");
			console.log("switch col = " + col);
			console.log("switch row = " + row);
			
			switch (col) { // check all combinations across
				case 0:
					if (columns[0][row] == columns[1][row] && columns[0][row] == columns[2][row] && columns[0][row] == columns[3][row]) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				case 1:
					if ((columns[1][row] == columns[0][row] && columns[1][row] == columns[2][row] && columns[1][row] == columns[3][row]) ||
						(columns[1][row] == columns[2][row] && columns[1][row] == columns[3][row] && columns[1][row] == columns[4][row])) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				case 2:
					if ((columns[2][row] == columns[0][row] && columns[2][row] == columns[1][row] && columns[2][row] == columns[3][row]) ||
						(columns[2][row] == columns[1][row] && columns[2][row] == columns[3][row] && columns[2][row] == columns[4][row]) ||
						(columns[2][row] == columns[3][row] && columns[2][row] == columns[4][row] && columns[2][row] == columns[5][row])) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				case 3:
					if ((columns[3][row] == columns[0][row] && columns[3][row] == columns[1][row] && columns[3][row] == columns[2][row]) ||
						(columns[3][row] == columns[1][row] && columns[3][row] == columns[2][row] && columns[3][row] == columns[4][row]) ||
						(columns[3][row] == columns[2][row] && columns[3][row] == columns[4][row] && columns[3][row] == columns[5][row]) ||
						(columns[3][row] == columns[4][row] && columns[3][row] == columns[5][row] && columns[3][row] == columns[6][row])) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				case 4:
					if ((columns[4][row] == columns[1][row] && columns[4][row] == columns[2][row] && columns[4][row] == columns[3][row]) ||
						(columns[4][row] == columns[2][row] && columns[4][row] == columns[3][row] && columns[4][row] == columns[5][row]) ||
						(columns[4][row] == columns[3][row] && columns[4][row] == columns[5][row] && columns[4][row] == columns[6][row])) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				case 5:
					if ((columns[5][row] == columns[2][row] && columns[5][row] == columns[3][row] && columns[5][row] == columns[4][row]) ||
						(columns[5][row] == columns[3][row] && columns[5][row] == columns[4][row] && columns[5][row] == columns[6][row])) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				case 6:
					if (columns[6][row] == columns[3][row] && columns[6][row] == columns[4][row] && columns[6][row] == columns[5][row]) {
						console.log("true");
						win = true;
					} else {
						win = false;
					}
					break;
				default:
					win = false;
					break;
			}
		
			console.log("up and down");
			console.log("switch col = " + col);
			console.log("switch row = " + row);
		
			if (!win) {
				switch (row) { // check all combinations up and down
					case 0:
						if (columns[col][0] == columns[col][1] && columns[col][0] == columns[col][2] && columns[col][0] == columns[col][3]) {
							console.log("true");
							win = true;
						} else {
							win = false;
						}
						break;
					case 1:
						if ((columns[col][1] == columns[col][0] && columns[col][1] == columns[col][2] && columns[col][1] == columns[col][3]) ||
							(columns[col][1] == columns[col][2] && columns[col][1] == columns[col][3] && columns[col][1] == columns[col][4])) {
							console.log("true");
							win = true;
						} else {
							win = false;
						}
						break;
					case 2:
						if ((columns[col][2] == columns[col][0] && columns[col][2] == columns[col][1] && columns[col][2] == columns[col][3]) ||
							(columns[col][2] == columns[col][1] && columns[col][2] == columns[col][3] && columns[col][2] == columns[col][4]) ||
							(columns[col][2] == columns[col][3] && columns[col][2] == columns[col][4] && columns[col][2] == columns[col][5])) {
							console.log("true");
							win = true;
						} else {
							win = false;
						}
						break;
					case 3:
						if ((columns[col][3] == columns[col][0] && columns[col][3] == columns[col][1] && columns[col][3] == columns[col][2]) ||
							(columns[col][3] == columns[col][1] && columns[col][3] == columns[col][3] && columns[col][3] == columns[col][4]) ||
							(columns[col][3] == columns[col][2] && columns[col][3] == columns[col][4] && columns[col][3] == columns[col][5])) {
							console.log("true");
							win = true;
						} else {
							win = false;
						}
						break;
					case 4:
						if ((columns[col][4] == columns[col][1] && columns[col][4] == columns[col][2] && columns[col][4] == columns[col][3]) ||
							(columns[col][4] == columns[col][2] && columns[col][4] == columns[col][3] && columns[col][4] == columns[col][5])) {
							console.log("true");
							win = true;
						} else {
							win = false;
						}
						break;
					case 5:
						if (columns[col][5] == columns[col][2] && columns[col][5] == columns[col][3] && columns[col][5] == columns[col][4]) {
							console.log("true");
							win = true;
						} else {
							win = false;
						}
						break;
					default:
						win = false;
						break;
				}
			}
		
			console.log("diagonal down");
			console.log("switch col = " + col);
			console.log("switch row = " + row);
		
			if (!win) {
				switch (col) { // check diagonal down
					case 0:
						if (row < 3) {
							win = diag_down_1(col, row);
						}
						break;
					case 1:
						if (row < 3) {
							win = diag_down_1(col, row);
						}
						if (!win && row > 0 && row < 4) {
							win = diag_down_2(col, row);
						}
						break;
					case 2:
						if (row < 3) {
							win = diag_down_1(col, row);
						}
						if (!win && row > 0 && row < 4) {
							win = diag_down_2(col, row);
						}
						if (!win && row > 1 && row < 5) {
							win = diag_down_3(col, row);
						}
						break;
					case 3:
						if (row < 3) {
							win = diag_down_1(col, row);
						}
						if (!win && row > 0 && row < 4) {
							win = diag_down_2(col, row);
						}
						if (!win && row > 1 && row < 5) {
							win = diag_down_3(col, row);
						}
						if (!win && row > 2) {
							win = diag_down_4(col, row);
						}
						break;
					case 4:
						if (row > 0 && row < 4) {
							win = diag_down_2(col, row);
						}
						if (!win && row > 1 && row < 5) {
							win = diag_down_3(col, row);
						}
						if (!win && row > 2) {
							win = diag_down_4(col, row);
						}
						break;
					case 5:
						if (row > 1 && row < 5) {
							win = diag_down_3(col, row);
						}
						if (!win && row > 2) {
							win = diag_down_4(col, row);
						}
						break;
					case 6:
						if (row > 3) {
							win = diag_down_4(col, row);
						}
						break;
					default:
						win = false;
				}
			}
		
			console.log("diagonal up");
			console.log("switch col = " + col);
			console.log("switch row = " + row);
		
			if (!win) {
				switch (col) { // check diagonal up
					case 0:
						if (row > 2) {
							win = diag_up_1(col, row);
						}
						break;
					case 1:
						if (row > 2) {
							win = diag_up_1(col, row);
						}
						if (!win && row > 1 && row < 5) {
							win = diag_up_2(col, row);
						}
						break;
					case 2:
						if (row > 2) {
							win = diag_up_1(col, row);
						}
						if (!win && row > 1 && row < 5) {
							win = diag_up_2(col, row);
						}
						if (!win && row > 0 && row < 4) {
							win = diag_up_3(col, row);
						}
						break;
					case 3:
						if (row > 2) {
							win = diag_up_1(col, row);
						}
						if (!win && row > 1 && row < 5) {
							win = diag_up_2(col, row);
						}
						if (!win && row > 0 && row < 4) {
							win = diag_up_3(col, row);
						}
						if (!win && row < 3) {
							win = diag_up_4(col, row);
						}
						break;
					case 4:
						if (row > 1 && row < 5) {
							win = diag_up_2(col, row);
						}
						if (!win && row > 0 && row < 4) {
							win = diag_up_3(col, row);
						}
						if (!win && row < 3) {
							win = diag_up_4(col, row);
						}
						break;
					case 5:
						if (row > 0 && row < 4) {
							win = diag_up_3(col, row);
						}
						if (!win && row < 3) {
							win = diag_up_4(col, row);
						}
						break;
					case 6:
						if (row < 3) {
							win = diag_up_4(col, row);
						}
						break;
					default:
						win = false;
				}
			}
			return win;
		}
		
		// functions to check all diagonal combinations
		
		function diag_down_1(col, row) { // diagonal down to the right for dropped piece
			if (columns[col][row] == columns[col + 1][row + 1] && columns[col][row] == columns[col + 2][row + 2] && columns[col][row] == columns[col + 3][row + 3]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_down_2(col, row) { // diagonal down to the right from col-1, row-1
			if (columns[col][row] == columns[col - 1][row - 1] && columns[col][row] == columns[col + 1][row + 1] && columns[col][row] == columns[col + 2][row + 2]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_down_3(col, row) { // diagonal down to the right from col-2, row-2
			if (columns[col][row] == columns[col - 2][row - 2] && columns[col][row] == columns[col - 1][row - 1] && columns[col][row] == columns[col + 1][row + 1]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_down_4(col, row) { // diagonal down to the right from col-3, row-3
			if (columns[col][row] == columns[col - 3][row - 3] && columns[col][row] == columns[col - 2][row - 2] && columns[col][row] == columns[col - 1][row - 1]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_up_1(col, row) { // diagonal up to the right for dropped piece
			if (columns[col][row] == columns[col + 1][row - 1] && columns[col][row] == columns[col + 2][row - 2] && columns[col][row] == columns[col + 3][row - 3]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_up_2(col, row) { // diagonal up to the right from col-1, row+1
			if (columns[col][row] == columns[col - 1][row + 1] && columns[col][row] == columns[col + 1][row - 1] && columns[col][row] == columns[col + 2][row - 2]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_up_3(col, row) { // diagonal down to the right from col-2, row+2
			if (columns[col][row] == columns[col - 2][row + 2] && columns[col][row] == columns[col - 1][row + 1] && columns[col][row] == columns[col + 1][row - 1]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		function diag_up_4(col, row) { // diagonal down to the right from col-3, row+3
			if (columns[col][row] == columns[col - 3][row + 3] && columns[col][row] == columns[col - 2][row + 2] && columns[col][row] == columns[col - 1][row + 1]) {
				console.log("true");
				return true;
			} else {
				return false;
			}
		}
		
		// functions to put player's piece in clicked column
		// all are the same except for the column reference
		// play in column 1
		function fl_ClickToLoadImageFromLibrary_1() {
			if (yColumns[0].length > 0) { // if empty spaces in column
				// clear the text box in case column full message was output
				clearTextBox(this.myText);
				// create new player piece
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false // change to computer's turn
				// add piece to stage
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[0]; // x coordinate of column 0
				yCoor = yColumns[0].pop(); // y coordinate of column
				columns[0][yColumns[0].length] = play; // set player as owner of space 
				
				console.log(yColumns[0].length);
				console.log("Columns 2d Array = " + columns[0][yColumns[0].length]);
				
				win = checkWin(0, yColumns[0].length); // check for win
				
				console.log("win = " + win);
				// drop piece into empty space
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++; // increment number of pieces played
				
				console.log("pieces played = " + numberOfPiecesPlayed);
				
				if(win){ // if win remove all pieces from board and goto win screen
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
					// if all spaces are full remove all pieces from board and goto draw screen
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else { // goto computer's turn
					computerTurn();
				}
			} else { // print out no more moves in column
				noMoreMoves(this.myText);
			}
		} 
		
		// play in column 2
		function fl_ClickToLoadImageFromLibrary_2() {
			if (yColumns[1].length > 0) {
				clearTextBox(this.myText);
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[1];
				yCoor = yColumns[1].pop();
				columns[1][yColumns[1].length] = play;
				console.log(yColumns[1].length);
				console.log("Columns 2d Array = " + columns[1][yColumns[1].length]);
				win = checkWin(1, yColumns[1].length);
				console.log("win = " + win);
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++;
				console.log("pieces played = " + numberOfPiecesPlayed);
				if(win){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else {
					computerTurn();
				} 
			} else {
				noMoreMoves(this.myText);
			}
		}
		
		// play in column 3
		function fl_ClickToLoadImageFromLibrary_3() {
			if (yColumns[2].length > 0) {
				clearTextBox(this.myText);
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[2];
				yCoor = yColumns[2].pop();
				columns[2][yColumns[2].length] = play;
				console.log(yColumns[2].length);
				console.log("Columns 2d Array = " + columns[2][yColumns[2].length]);
				win = checkWin(2, yColumns[2].length);
				console.log("win = " + win);
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++;
				console.log("pieces played = " + numberOfPiecesPlayed);
				if(win){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else {
					computerTurn();
				}
			} else {
				noMoreMoves(this.myText);
			}
		}
		
		// play in column 4
		function fl_ClickToLoadImageFromLibrary_4() {
			if (yColumns[3].length > 0) {
				clearTextBox(this.myText);
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[3];
				yCoor = yColumns[3].pop();
				columns[3][yColumns[3].length] = play;
				console.log(yColumns[3].length);
				console.log("Columns 2d Array = " + columns[3][yColumns[3].length]);
				win = checkWin(3, yColumns[3].length);
				console.log("win = " + win);
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++;
				console.log("pieces played = " + numberOfPiecesPlayed);
				if(win){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else {
					computerTurn();
				}
			} else {
				noMoreMoves(this.myText);
			}
		}
		
		// play in column 5
		function fl_ClickToLoadImageFromLibrary_5() {
			if (yColumns[4].length > 0) {
				clearTextBox(this.myText);
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[4];
				yCoor = yColumns[4].pop();
				columns[4][yColumns[4].length] = play;
				console.log(yColumns[4].length);
				console.log("Columns 2d Array = " + columns[4][yColumns[4].length]);
				win = checkWin(4, yColumns[4].length);
				console.log("win = " + win);
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++;
				console.log("pieces played = " + numberOfPiecesPlayed);
				if(win){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else {
					computerTurn();
				}
			} else {
				noMoreMoves(this.myText);
			}
		}
		
		// play in column 6
		function fl_ClickToLoadImageFromLibrary_6() {
			if (yColumns[5].length > 0) {
				clearTextBox(this.myText);
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[5];
				yCoor = yColumns[5].pop();
				columns[5][yColumns[5].length] = play;
				console.log(yColumns[5].length);
				console.log("Columns 2d Array = " + columns[5][yColumns[5].length]);
				win = checkWin(5, yColumns[5].length);
				console.log("win = " + win);
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++;
				console.log("pieces played = " + numberOfPiecesPlayed);
				if(win){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else {
					computerTurn();
				}
			} else {
				noMoreMoves(this.myText);
			}		
		}
		
		// play in column 7
		function fl_ClickToLoadImageFromLibrary_7() {
			if (yColumns[6].length > 0) {
				clearTextBox(this.myText);
				piece[numberOfPiecesPlayed] = new lib.playerPiece();
				player = false
				stage.addChild(piece[numberOfPiecesPlayed]);
				xCoor = xCoord[6];
				yCoor = yColumns[6].pop();
				columns[6][yColumns[6].length] = play;
				console.log(yColumns[6].length);
				console.log("Columns 2d Array = " + columns[6][yColumns[6].length]);
				win = checkWin(6, yColumns[6].length);
				console.log("win = " + win);
				dropPiece(piece[numberOfPiecesPlayed], xCoor, yCoor);
				numberOfPiecesPlayed++;
				console.log("pieces played = " + numberOfPiecesPlayed);
				if(win){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					this.gotoAndPlay("win");
				} else if (numberOfPiecesPlayed == 42){
					for(var i = 0; i < piece.length; i++){
						stage.removeChild(piece[i]);
					}
					game.gotoAndPlay("draw");
				} else {
					computerTurn();
				}
			} else {
				noMoreMoves(this.myText);
			}		
		}
		
		function noMoreMoves(outputBox) {
			outputBox.text = "No more moves in this column. Try again.";
		}
		
		function clearTextBox(outputBox){
			outputBox.text = "";
		}
	}
	this.frame_3 = function() {
		/* Play a Movie Clip
		Plays the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently stopped.
		*/
		
		this.letters.play();
	}
	this.frame_13 = function() {
		this.start.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop("startGame");
		}
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("instructions");
		}
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_113 = function() {
		this.stop();
	}
	this.frame_139 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(10).call(this.frame_13).wait(55).call(this.frame_68).wait(45).call(this.frame_113).wait(26).call(this.frame_139).wait(45).call(this.frame_184).wait(45).call(this.frame_229).wait(1));

	// Text Box
	this.myText = new cjs.Text("", "bold 35px 'Times'", "#00FF00");
	this.myText.name = "myText";
	this.myText.textAlign = "center";
	this.myText.lineHeight = 37;
	this.myText.lineWidth = 335;
	this.myText.setTransform(398.5,253.6);
	this.myText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myText).wait(1).to({_off:false},0).to({_off:true},1).wait(228));

	// Instructions
	this.instance = new lib.instructionsText();
	this.instance.setTransform(400,240.1,0.279,0.039,0,0,0,0,-259.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({regY:-259.1,scaleX:0.83,scaleY:0.67,y:240,alpha:1},25).to({_off:true},1).wait(90));

	// Play Buttons
	this.col_7 = new lib.play_btn();
	this.col_7.setTransform(660,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_7, 0, 1, 2);

	this.col_6 = new lib.play_btn();
	this.col_6.setTransform(573,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_6, 0, 1, 2);

	this.col_5 = new lib.play_btn();
	this.col_5.setTransform(485,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_5, 0, 1, 2);

	this.col_4 = new lib.play_btn();
	this.col_4.setTransform(404,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_4, 0, 1, 2);

	this.col_2 = new lib.play_btn();
	this.col_2.setTransform(230,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_2, 0, 1, 2);

	this.col_3 = new lib.play_btn();
	this.col_3.setTransform(316,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_3, 0, 1, 2);

	this.col_1 = new lib.play_btn();
	this.col_1.setTransform(142.5,567,1,1,0,0,0,0,-15);
	new cjs.ButtonHelper(this.col_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.col_1},{t:this.col_3},{t:this.col_2},{t:this.col_4},{t:this.col_5},{t:this.col_6},{t:this.col_7}]},1).to({state:[]},1).to({state:[{t:this.col_1},{t:this.col_3},{t:this.col_2},{t:this.col_4},{t:this.col_5},{t:this.col_6},{t:this.col_7}]},112).to({state:[]},26).wait(90));

	// Letters
	this.letters = new lib.LettersFalling();
	this.letters.setTransform(400,-370,1,1,0,0,0,0,-110);
	this.letters._off = true;

	this.timeline.addTween(cjs.Tween.get(this.letters).wait(3).to({_off:false},0).to({_off:true},66).wait(161));

	// Instructions button
	this.button_1 = new lib.instructs();
	this.button_1.setTransform(1160,500);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(13).to({_off:false},0).to({x:545},45).wait(11).to({alpha:0},0).to({alpha:1},44).to({_off:true},1).wait(26).to({_off:false,alpha:0},0).to({alpha:1},44).wait(1).to({alpha:0},0).to({alpha:1},44).wait(1));

	// Start button
	this.start = new lib.start();
	this.start.setTransform(-355,500);
	this.start._off = true;
	new cjs.ButtonHelper(this.start, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(13).to({_off:false},0).to({x:255},45).wait(11).to({alpha:0},0).to({alpha:1},44).wait(1).to({x:398.2,y:491.3,alpha:0},0).to({alpha:1},25).wait(1).to({x:255,y:500,alpha:0},0).to({alpha:1},44).wait(1).to({alpha:0},0).to({alpha:1},44).wait(1));

	// Win
	this.instance_1 = new lib.youWin();
	this.instance_1.setTransform(398,306,0.063,0.063,0,0,0,0,-284.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({regY:-284.6,scaleX:1,scaleY:1,rotation:360},44).to({_off:true},1).wait(116));

	// Lose
	this.instance_2 = new lib.youLose();
	this.instance_2.setTransform(400,300,0.057,0.057,0,0,0,0,-284.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,alpha:1},44).to({_off:true},1).wait(45));

	// Draw
	this.instance_3 = new lib.draw();
	this.instance_3.setTransform(395,300.2,0.043,0.043,0,0,0,0,-284.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(185).to({_off:false},0).to({regY:-284.6,scaleX:1,scaleY:1,rotation:360,alpha:1},44).wait(1));

	// Board
	this.instance_4 = new lib.board();
	this.instance_4.setTransform(403.5,294.5,1,1,0,0,0,0,-242.5);

	this.instance_5 = new lib.board1();
	this.instance_5.setTransform(403.5,294.5,1,1,0,0,0,0,-242.5);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},112).to({state:[]},26).wait(90));

	// Title Background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D76400","#FFFF7B"],[0,1],0,-403.9,0.1,404).s().p("Eg/QAwcMAAAhg2MB+iAAAMAAABg2g");
	this.shape.setTransform(395,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(110).to({_off:true},1).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;