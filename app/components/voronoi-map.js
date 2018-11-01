
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
	poll: service(),
	didInsertElement() {
  		this.createPollingRequest();
	},

 	// Make a poll request to change the header automatically
 	createPollingRequest() {

			var svg = select("svg"),
			    width = +svg.attr("width"),
			    height = +svg.attr("height");

    		var x = scaleLinear().range([50, width]);
			var y = scaleLinear().range([height, 50]);

			var points = [];
			var wanderDirections = [];
			for (var i = 0; i < 22; i++) {
			  var x = randomUniform(0,width)();
			  var y = randomUniform(0,height)();
			  points.push([x, y]);

			    var wanderx = randomUniform(-10,10)();
			  var wandery = randomUniform(-10,10)();
			  wanderDirections.push[[wanderx,wandery]];
			}

 		// D3 draw loop here
        let loop = () => { 


        	for (let i = 0; i < wanderDirections.length; i++) {
        		points[i][0] += wanderDirections[i][0];
        		points[i][1] += wanderDirections[i][1];
        	}

			const delaunay = Delaunay.from(points);
			const voronoi = delaunay.voronoi([0, 0, 960, 500]);
		    var path = svg.append('path').attr('d', voronoi.render()).attr('stroke', 'red');
		    for (let i = 0; i < delaunay.triangles.length; i++) {
		      var path = svg.append('path').attr('d', delaunay.renderTriangle(i)).attr('stroke', 'gray').attr('fill', 'transparent');
		    }
      	}

      let pollingRequest = this.get('poll').addPoll({
        interval: 10, //10 milliseconds
        callback: loop
      });
      this.set('pollingRequest', pollingRequest);
  }
});



