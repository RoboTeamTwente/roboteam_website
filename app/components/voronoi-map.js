
import { select, mouse } from 'd3-selection'
import { range } from 'd3-array'
import { path } from 'd3-path'
import { transition } from 'd3-transition'
import { Delaunay } from 'd3-delaunay'
import { randomUniform } from 'd3-random'
import { scaleLinear } from 'd3-scale';
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	height: 560,
	didInsertElement() {
		let width = window.innerWidth;
		let height = this.get('height');

  		const points = Array.from({length: 22}, () => [Math.random() * width, Math.random() * height]);
		let container = document.getElementById("voronoi-map");
		let canvas = select(container).append('canvas').attr('width', width).attr('height', height);
		let context = canvas.node().getContext("2d");

	let update = () => {

		const delaunay = Delaunay.from(points);
		const voronoi = delaunay.voronoi([0, 0, width, height]);

	    context.clearRect(0, 0, width, height);

	    context.beginPath();
	    delaunay.render(context);
	    context.strokeStyle = "#ccc";
	    context.stroke();

	 	context.beginPath();
	    voronoi.render(context);
	    voronoi.renderBounds(context);
	    context.strokeStyle = "#00ff00";
	    context.stroke();

	    context.beginPath();
	    delaunay.renderPoints(context);
	    context.fill();
		}

update();
		context.canvas.ontouchmove = 
		  context.canvas.onmousemove = event => {
		    event.preventDefault();
		    points[0] = [event.layerX, event.layerY];
		    update();
		  };
  	}
});



