// Module : Circle Generator 
// Project : 23 & Me
if (!ProjectFacade) {
    var ProjectFacade = {};
}




(function(d3) {

    var circleObject = (function() {

        var render = function(renderObject) {
            var circleConfig = {
                selector: renderObject.selector,
                jsonCircles: renderObject.jsonCircles,
                class: renderObject.class,
                groupClass: renderObject.groupClass || "circleGroup",
                transition: renderObject.transition || 0,
                "z-index": renderObject["z-index"] || 0
            };

            var svgContainer = d3.select(circleConfig.selector).append("g").attr("class", circleConfig.groupClass);



            var circles = svgContainer.selectAll("circle")
                .data(circleConfig.jsonCircles)
                .enter()
                .append("circle");



            var circleAttributes = circles
                .attr("cx", function(d) {
                    return d.x_axis;
                })
                .attr("cy", function(d) {
                    return d.y_axis;
                })
                .attr("r", function(d) {
                    return d.radius;
                })
                .style("fill", function(d) {
                    return d.color;
                })
                .attr("class", circleConfig.class)
                ;

            return circleAttributes;
        }; //render function Ends

        return {
            "render": render
        };

    })();

    //*** Module injection
    ProjectFacade.circleObject = circleObject;

})(d3);