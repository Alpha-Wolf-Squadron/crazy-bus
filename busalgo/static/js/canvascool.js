
let baseSize = [window.innerWidth,window.innerHeight]






class FixEmCARHoare{
	constructor(app,points){
		this.app = app
		document.body.appendChild(this.app.view)
		this.points = points
		console.log("DERP",window.getComputedStyle(this.app.view).width);
		this.nodes = this.populateCanvas(4,0xffffff,null,10,300)
	}
	// Accepts circle size, Line Color, Fill Color, Radius and Timeout
	populateCanvas(circSize,color1,color2,radius,timeout){
		let circleGraphics = new PIXI.Graphics()
		let pointsArr = []
		console.log("HERE");
		for (let i = 0; i < this.points;i++){
			circleGraphics.lineStyle(circSize, color1, 1);
			let randPoint = this.randomCanvasPosition()
			let trueTimeout = timeout*i
			circleGraphics.beginFill(0xFFFF0B, 0.5);
			circleGraphics.drawCircle(randPoint[0],randPoint[1],radius)
			pointsArr.push(randPoint)
			console.log(trueTimeout);
			this.app.stage.addChild(circleGraphics)
		}
		return pointsArr
	}
	randomCanvasPosition(){
		let baseMeasure = [parseInt(window.getComputedStyle(this.app.view).width),parseInt(window.getComputedStyle(this.app.view).height)]
		console.log(baseMeasure);
		for (let dimension in baseMeasure){
			baseMeasure[dimension] = Math.floor(Math.random() * ((baseMeasure[dimension]-100)-100)) + 200
		}
		console.log(baseMeasure);
		return baseMeasure
	}
}


document.addEventListener('DOMContentLoaded',()=>{
	console.log("WOOOO!");
	let App = new PIXI.Application(baseSize[0],baseSize[1], {antialias:true})
	let canvasStuff = new FixEmCARHoare(App,16)
	window.onresize = fixApp(App);
})

var fixApp = (App)=>{
	let lazyResize = [window.innerWidth,window.innerHeight]
	console.log("WOOOO!",lazyResize,App.view.style);
	App.view.style.width = lazyResize[0]+"px",
	App.view.style.height = lazyResize[1]+"px";
}