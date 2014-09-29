$(function() {
	// Controllable progress bar with slider
	var $slider;
	var $combinedValue;
	var $pushupValue = 0;
	var $situpValue = 0;
	var $runValue = 60;
	var $controllableLoader = $("#topLoader").percentageLoader({
		width: 140,
		height: 140,
		controllable : true,
		progress : 0,
		onProgressUpdate : function(value) {
			$("#sliderPushups").slider('value', Math.round(value));
			$("#sliderSitups").slider2('value', Math.round(value));
		}
	});
	function setProgress(value) {
		var volumeDb = Math.round(-100.00 + value);
		$controllableLoader.setValue(volumeDb + ' db');
	}
	$("#slider2").change(function() {
		$pushupValue = $(this).attr("value");
		window.alert($pushupValue);
	});
			$pushupValue = ui.value;
			$combinedValue = (($runValue + $situpValue + $pushupValue));
			$controllableLoader.setProgress($combinedValue);
		}
	}); 
	$slider2 = $("#sliderSitups").slider({
		slide: function(event, ui) {
			$situpValue = ui.value;
			$combinedValue = (($runValue + $situpValue + $pushupValue));
			$controllableLoader.setProgress($combinedValue);
		}
	}); 

}); 
