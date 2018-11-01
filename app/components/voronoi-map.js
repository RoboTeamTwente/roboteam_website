
import D3 from 'd3'
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	didInsertElement() {

    // const points = [[0, 0], [0, 1], [1, 0], [1, 1]];
    // const delaunay = D3.Delaunay.from(points);
    // const voronoi = delaunay.voronoi([0, 0, 960, 500]);

	var svg = D3.select("svg");
	var circle = svg.append("circle").attr("cx", 30).attr("cy", 30).attr("r", 20);
	}
});



