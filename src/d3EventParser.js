(function(d3) {

    var activeElement = [],
     dispatchClick = d3.dispatch('element_click'),
     dispatchActive = d3.dispatch('element_active'),
     dispatchToDeactivate = d3.dispatch('element_deactivate'); // initial Dispatch layer

    // add events onClick
    for (var i = 1; i <= 23; i++) {
        d3.selectAll(".element-" + i).on('click', function() {
            dispatchClick.element_click(this);
        });
    }

    // Listen to Dispatched Layer
    dispatchClick.on('element_click', function(element) {

    var elementClassName = "." + element.className.baseVal;

        if (activeElement.indexOf(elementClassName) > -1) {
            dispatchToDeactivate.element_deactivate();

        } else {
            //deactivate all the registered elements
            dispatchToDeactivate.element_deactivate();

            d3.selectAll(elementClassName).transition()
            	.duration(ProjectFacade.config["svgElement/Duration"])
            	.ease("back").attr("transform", "translate(0,-400)");

            //register the element to the active current object
            dispatchActive.element_active(elementClassName);
        }

    });

    // Active Registered Elements
    dispatchActive.on('element_active', function(selector) {
        activeElement.push(selector);

        ProjectFacade.display.renderFor(selector);

    });

    // DeActive Registered Elements
    dispatchToDeactivate.on('element_deactivate', function(selector) {

        ProjectFacade.display.clear();

        for (var i = 0, j = activeElement.length; i < j; i++) {
            d3.selectAll(activeElement[i]).transition().duration(ProjectFacade.config["svgElement/Duration"]).ease("back")
                .attr("transform", "translate(0,0)");
            activeElement.pop();
        }
    });

})(d3);