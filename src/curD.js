//============================= SEND FRONT TO BACK A SVG ELEMENT
(function(d3) {
    d3.selection.prototype.moveToBack = function() {
        return this.each(function() {
            var firstChild = this.parentNode.parentNode.firstChild;
            if (firstChild) {
                this.parentNode.parentNode.insertBefore(this, firstChild);
            }
        });
    };
})(d3);

ProjectFacade.display = (function() {

    var activeSvgElements = [];

    function circleCreate(circleData, z) {
        var circle = ProjectFacade.circleObject.render({
            selector: ProjectFacade.config.svgSelector,
            jsonCircles: circleData,
            class: "circle",
            groupClass: "PictoCircle",
            transition: 1,
            "z-index": z
        });

        var hey = circle
            .style("z-index", function() {
                d3.select(this).moveToBack();
                return -3;
            })
            .style("opacity", 0).attr('r', 0).transition().delay(ProjectFacade.config["elementDescription/Delay"] + 100)

        .style("opacity", 0)
            .transition().duration(ProjectFacade.config["elementDescription/Duration"] - 100).ease('linear').attr('r', function(d) {
                return d.radius;
            }).style("opacity", function() {
                return 1;
            });

        activeSvgElements.push(circle);

        return hey;

    }

    function textCreate(textData) {
        var text = ProjectFacade.textObject.render({
            selector: ProjectFacade.config.svgSelector,
            jsonText: textData,
            class: "text",
            groupClass: "PictoText",
            transition: 1
        });

        text.style("visibility", "hidden").style("opacity", 0.9).transition().delay(ProjectFacade.config["elementDescription/Delay"] + 600)
            .ease('elastic')
            .style("visibility", "visible").style("opacity", 1);

        activeSvgElements.push(text);

    }

    function titleCreate(titleData) {
        var text = ProjectFacade.textObject.render({
            selector: ProjectFacade.config.svgSelector,
            jsonText: titleData,
            class: "text",
            groupClass: "PictoText",
            transition: 1
        });

        text.style("opacity", 0).transition().delay(400).style("opacity", 1);

        activeSvgElements.push(text);

    }

    var renderFor = function(selector) {
        var circle = ProjectFacade.data[selector].circle;
        var z = ProjectFacade.data[selector]["z-index"] || 0;

        var textData = ProjectFacade.data[selector]["text"];
        var titleData = ProjectFacade.data[selector]["title"];

        circleCreate(circle, z);
        textCreate(textData);
        titleCreate(titleData);
    };

    var clear = function() {
        for (var i = 0, j = activeSvgElements.length; i < j; i++) {
            activeSvgElements[i].transition().style("opacity", 0)
                .transition().delay(ProjectFacade.config['elementDescription/Delay']).remove();
        }
    }

    var displayObject = {
        renderFor: renderFor,
        clear: clear
    };

    return displayObject;

})();