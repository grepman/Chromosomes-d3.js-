// Module : Text Generator 
// Project : 23 & Me
if (!ProjectFacade) {
    var ProjectFacade = {};
}


(function(d3) {

    var textObject = (function() {

        var render = function(renderObject) {
            var textConfig = {
                selector: renderObject.selector,
                jsonText: renderObject.jsonText,
                class: renderObject.class,
                groupClass: renderObject.groupClass || "textGroup",
                transition: renderObject.transition || 0,
                title: renderObject.title || 0

            };

            var svgContainer = d3.select(textConfig.selector).append("g").attr("class", textConfig.groupClass);



            var text = svgContainer.selectAll("text")
                .data(textConfig.jsonText)
                .enter()
                .append("text");

            //for transitions
            if (textConfig.transition === 1) {
                text.transition();
            }


            var textAttributes = text
                .attr("x", function(d) {
                    return d.x;
                })
                .attr("y", function(d) {
                    return d.y;
                })
                .attr("font-family", function(d) {
                    return d["font-family"];
                })
                .attr("font-size", function(d) {
                    return d["font-size"];
                })
                .attr("font-weight", function(d) {
                    return d["font-weight"];
                })
                .attr("title", function(d) {
                	return d["title"];
                })
                .style("fill", function(d) {
                    return d.fill;
                })
                .text(function(d) {
                    return d["text"];
                });

            return textAttributes;
        }; //render function Ends

        return {
            "render": render
        };

    })();

    //*** Module injection
    ProjectFacade.textObject = textObject;

})(d3);