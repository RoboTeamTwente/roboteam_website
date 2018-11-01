import { select } from 'd3-selection'
import { Delaunay } from 'd3-delaunay'
import { interval } from 'd3-timer'
import Component from '@ember/component';

export default Component.extend({
	height: 560,
	didInsertElement() {
		let amountOfParticles = 22;
		let maxParticleSpeed = .5;
		let width;
		let height;
		let canvas;
		let context;
		let points;
		let movements;
		let container = document.getElementById("voronoi-map");


		let initialize = () => {
			width = window.innerWidth;
			height = this.get('height');
			canvas = select(container).append('canvas').attr('width', width).attr('height', height);
			context = canvas.node().getContext("2d");
			points = Array.from({length: amountOfParticles}, () => [Math.random() * width, Math.random() * height]);
			movements = Array.from({length: amountOfParticles}, () => [Math.random() * (maxParticleSpeed*2) - maxParticleSpeed, Math.random() * (maxParticleSpeed*2) - maxParticleSpeed]);
		}

		let update = () => {
			for (let i = 0; i<points.length; i++) {
				points[i][0] += movements[i][0];
				points[i][1] += movements[i][1];

				if (points[i][0] > width || points[i][0] < 0 ) { movements[i][0] = -movements[i][0] }
				if (points[i][1] > height || points[i][1] < 0) { movements[i][1] = -movements[i][1] }

			}

			const delaunay = Delaunay.from(points);
			const voronoi = delaunay.voronoi([0, 0, width, height]);

			context.clearRect(0, 0, width, height);

			// delaunay vectors
			context.beginPath();
			delaunay.render(context);
			context.strokeStyle = "rgba(150, 150, 200, .1)";
			context.stroke();

			// voronoi bounds
			context.beginPath();
			voronoi.render(context);
			voronoi.renderBounds(context);
			context.strokeStyle = "rgba(120, 150, 200, .2)";
			context.strokeOpacity = .4;
			context.stroke();

			// the points
			context.beginPath();
			delaunay.renderPoints(context, 3);
			context.fillStyle = "rgba(120, 150, 200, .3)";
			context.fill();
		}

		initialize();
		update();

		interval(update, 10);

		window.addEventListener("resize", initialize);
		context.canvas.ontouchmove = context.canvas.onmousemove = event => {
			event.preventDefault();
			points[0] = [event.layerX, event.layerY];
			update();
		};
	}
});



