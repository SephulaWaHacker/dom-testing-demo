describe('memory game tests',function () {
	// const { playAgain, closeModal, congratulations, 
		// enable, disable, unmatched, matched, displayCard, 
		// startGame, shuffle, openedCards, cards} = require()
	const jsdom = require('jsdom')
	const {JSDOM} = jsdom;

	// using jsDom's VirtualConsole
	// and telling it to use the default nodejs console. 
	const virtualConsole = new jsdom.VirtualConsole();
	virtualConsole.sendTo(console);
	
	beforeEach(()=>{
		dom = new JSDOM(`<!doctype html>
			<html lang="en"><head>
			<meta charset="utf-8"> 
			<title>Memory Game</title> 
			<meta name="description" content=""> 
			<meta name="viewport" content="width=device-width, initial-scale=1"> 
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> 
			<link rel="stylesheet" href="app.css"></head><body onload="startGame()">
			<div class="container"><header> 
			<h1>EYE CONTACT</h1> </header> 
			<ul class="deck" id="card-deck"> 
			<li class="card" type="border_clear"> <i class="large material-icons">border_clear</i> </li>
			<li class="card" type="border_left"> <i class="large material-icons">border_left</i> </li>
			<li class="card" type="center_focus_strong"> <i class="large material-icons">center_focus_strong</i> </li>
			<li class="card" type="dialpad" > <i class="large material-icons">dialpad</i> </li>
			<li class="card" type="crop_7_5"> <i class="large material-icons">crop_7_5</i> </li>
			<li class="card" type="border_left"> <i class="large material-icons">border_left</i> </li>
			<li class="card" type="border_clear"> <i class="large material-icons">border_clear</i> </li>
			<li class="card" type="code"> <i class="large material-icons">code</i> </li>
			<li class="card" type="center_focus_strong"> <i class="large material-icons">center_focus_strong</i> </li>
			<li class="card" type="dns"> <i class="large material-icons">dns</i> </li>
			<li class="card" type="center_focus_weak"> <i class="large material-icons">center_focus_weak</i> </li>
			<li class="card" type="code"> <i class="large material-icons">code</i> </li>
			<li class="card " type="crop_7_5"> <i class="large material-icons">crop_7_5</i> </li>
			<li class="card" type="dns"> <i class="large material-icons">dns</i> </li>
			<li class="card" type="dialpad"> <i class="large material-icons">dialpad</i> </li>
			<li class="card" type="center_focus_weak"> <i class="large material-icons">center_focus_weak</i> </li>
			</ul> 
			<div id="popup1" class="overlay"> 
			<div class="popup"> 
			<h2>Congratulations 🎉</h2>
			<a class="close" href=# >×</a> 
			<div class="content-1"> Congratulations you're a winner 🎉🎉 </div>
			<button id="play-again"onclick="playAgain()"> Play again 😄</a> </button> 
			</div></div></div>
			<script>class Global {
				constructor(){
					this.document=document;
				}
			}
				let global= new Global() 
			</script> 
			<script src="https://raw.githubusercontent.com/SweetBeard30/dom-testing-demo/master/src/app.js"></script>
			</body></html>`, {
				// enabling jsDom to run scripts and use external
				// resource via i.e <link>, <script>, <img>, etc
				runScripts: "dangerously",
				resources: "usable",
		})

		global.view = dom.window;
		global.window = dom.window.document;
		game = require("../src/app")
	})

	it("demo", function(){
		
		const clickSimulator = (arg)=>{

			let event = new global.view.MouseEvent('click', {
				view: global.view,
				bubbles: true,
				cancelable: false
			})

			let element = global.window.getElementsByTagName('LI')[0];
			element.dispatchEvent(event);
			let getClass = global.window.getElementsByClassName('show');
			console.log(getClass.length)
		};
		clickSimulator()
		const list = global.window.getElementsByClassName('open')
		console.log(list.length)
	})
})