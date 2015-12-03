function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByClassName('Grepman_scriptLoader')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

loadScript("./src/ProjectFacade.js", function() {
    ProjectFacade.registerModules.push("./src/ProjectFacade.js");
});

loadScript("./src/circleObject.js", function() {
    ProjectFacade.registerModules.push("./src/circleObject.js");
});

loadScript("./src/textObject.js", function() {
    ProjectFacade.registerModules.push("./src/textObject.js");
});

loadScript("./src/d3EventParser.js", function() {
    ProjectFacade.registerModules.push("./src/d3EventParser.js");
});

loadScript("./src/curD.js", function() {
    ProjectFacade.registerModules.push("./src/curD.js");
});

loadScript("./src/arrowInteraction.js", function() {
    ProjectFacade.registerModules.push("./src/arrowInteraction.js");
});