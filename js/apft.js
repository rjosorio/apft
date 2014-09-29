function APFT (pushups, situps, aerobic) {
	this.pushups = pushups;
	this.situps = situps;
	this.aerobic = aerobic;
	
	APFT.prototype.score = function() {
		var score;
		this.score = this.pushups + this.situps + this.aerobic;
		return this.score;
	}
	
	APFT.prototype.result = function() {
		var result;
		var score;
		this.score = this.pushups + this.situps + this.aerobic;
		if (this.score >= 180 && this.pushups >= 60 && this.situps >= 60 && this.aerobic >= 60) {
			this.result = "Pass";
		} else {
			this.result = "Fail";
		}
		return this.result;		
	}
}