
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

  		const points = Array.from({length: 44}, () => [Math.random() * width, Math.random() * height]);
		let container = document.getElementById("voronoi-map");
		let canvas = select(container).append('canvas').attr('width', width).attr('height', height);
		let context = canvas.node().getContext("2d");

		let update = () => {

			const delaunay = Delaunay.from(points);
			const voronoi = delaunay.voronoi([0, 0, width, height]);

		    context.clearRect(0, 0, width, height);

		    context.beginPath();
		    delaunay.render(context);
		    context.strokeStyle = "rgba(0, 165, 255, .2)";
		    context.stroke();

		 	context.beginPath();
		    voronoi.render(context);
		    voronoi.renderBounds(context);
		    context.strokeStyle = "rgba(0, 165, 255, .5)";
		    context.strokeOpacity = .4;
		    context.stroke();

		    context.beginPath();
		    delaunay.renderPoints(context, 5);
		    context.fillStyle = "rgba(0, 165, 255, .4)";
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



