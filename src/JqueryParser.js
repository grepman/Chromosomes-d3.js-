(function($){

$('body').bind('circleClicked', function(e){
  var $element = e.target;
  d3.select($element).transition().ease("back").duration(500).attr("transform", "translate(80,0)").attr("r",5);

});


	var _OnClick_EventConstructor = function(selector, triggerEvent){
			$(selector).on("click", function(){
				var that = $(this);
				that.trigger(triggerEvent);
				console.log(triggerEvent);

				return that;
			});
	};


var circleClicked = _OnClick_EventConstructor(".circle", "circleClicked");



})(jQuery);