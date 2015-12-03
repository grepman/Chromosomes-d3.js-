
(function(d3){
			var leftArrow = d3.select(ProjectFacade.config.arrow.left),
			 rightArrow = d3.select(ProjectFacade.config.arrow.right),
			 svgElement = d3.select(ProjectFacade.config.svgElement),
			 step = {
			 	slide : -30,
			 	maxSlide:-54
			 },
			 currentPos = 0;
			 leftArrow.style("opacity", 0.7);

			leftArrow.on('click', function(){

				// console.log(typeof (svgElement.node().style["margin-left"]));

				if(currentPos === 0){
					leftArrow.style("opacity", 0.7);

				}
				else if(currentPos < 0 ) {

					svgElement.transition().style("margin-left", (currentPos - step.slide));
					currentPos = currentPos-step.slide;
				}
				
				console.log(currentPos);
			});

			rightArrow.on('click', function(){

				if(currentPos === 0){
					// svgElement.transition().style("margin-right", step.slide+"%");
					svgElement.style("margin-left", currentPos);
					svgElement.transition().style("margin-left", step.slide+"%");
					currentPos = currentPos + step.slide;

					// svgElement.node().style["margin-left"]  = currentPos;
					

					console.log(svgElement.node().style["margin-left"] + " svgElement");
				}

				else if(currentPos <= step.maxSlide+"%") {
					rightArrow.style("opacity", 0.7);
				}
				else if(currentPos > step.maxSlide){

				svgElement.style("margin-left", currentPos);
				// svgElement.transition().style("margin-right", step.slide+currentPos+"%");
				 svgElement.transition().style("margin-left", step.slide+currentPos+"%");
				// currentPos = parseInt(svgElement.node().style["margin-left"]) + currentPos;
				currentPos = currentPos + step.slide;

				// svgElement.node().style["margin-left"]  = currentPos;


				console.log(svgElement.node().style["margin-left"] +" svgElement");

				}

				console.log(currentPos);
				console.log(svgElement.node().style["margin-left"]);

			});
})(d3)