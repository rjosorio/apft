function Pushups (reps, age, sex) {	
	
	this.reps = reps;
	this.age = age;
	this.sex = sex;
	
	Pushups.prototype.score = function() {
		var score;
		
		//If Male
		if (this.sex == "male") {
			


			//Younger than 21
			if (this.age <= 21){
				/******** SCORES ********/
			}
			


			//Between 22-26
			else if (this.age >= 22 && this.age <= 26){
				/******** SCORES ********/
				//75+ Reps
				if (this.reps > 75) {
					this.score = 100;
				}
				else if (this.reps <= 75 && this.reps >= 72){
					this.score = this.reps + 25;
				}
				else if (this.reps <= 71 && this.reps > (71 - 7)) {
					this.score = this.reps + 24;
				}
				else if (this.reps <= 64 && this.reps > (64 - 7)){
					this.score = this.reps + 23;
				}
				else if (this.reps <= 57 && this.reps > (57 - 7)){
					this.score = this.reps + 22;
				}
				else if (this.reps <= 50 && this.reps > (50 - 7)){
					this.score = this.reps + 21;
				}
				else if (this.reps <= 43 && this.reps > (43 - 7)){
					this.score = this.reps + 20;
				}
				else if (this.reps <= 36 && this.reps > (36 - 7)){
					this.score = this.reps + 19;
				}
				else if (this.reps <= 29 && this.reps > (29 - 7)){
					this.score = this.reps + 18;
				}
				else if (this.reps <= 22 && this.reps > (22 - 7)){
					this.score = this.reps + 17;
				}
				else if (this.reps <= 15 && this.reps > (15 - 7)){
					this.score = this.reps + 16;
				}
				else if (this.reps <= 8 && this.reps > (8 - 7)){
					this.score = this.reps + 15;
				}
				/*else if (this.reps >= 1 && this.reps <= 71){
					/*for (var x=1;x>=7;x++){
						for (var i=24;i>=15;i--){
							for (var a=71;a>=this.reps;a--) {
								this.score = this.reps + i;
							}
						}
					}
				}*/
				else {
					this.score = 0;
				}
			}



			//Between 27-31
			else if (this.age >= 27 && this.age <= 31){
				/******** SCORES ********/
				if (this.reps >= 77){
					this.score = 100;
				}
				else if (this.reps <= 76 && this.reps >= 68){
					this.score = this.reps + 23;
				}
				else if (this.reps <= 67 && this.reps >= 49){
					this.score = this.reps + 22;
				}
				else if (this.reps <= 48 && this.reps >= 31){
					this.score = this.reps + 21;
				}
				else if (this.reps <= 30 && this.reps >= 11){
					this.score = this.reps + 20;
				}
				else if (this.reps <= 10 && this.reps >= 1){
					this.score = this.reps + 19;
				}
				else {
					this.score = 0;
				}
			}
			


			//Between 32-36
			else if (this.age >= 32 && this.age <= 36){
				/******** SCORES ********/
				//75+ Reps
				if (this.reps >= 75) {
					this.score = 100;
				}
				//56-75 Reps
				else if (this.reps < 75 && this.reps >= 56) {
					this.score = this.reps + 25;
				}
				//17-55 Reps
				else if (this.reps <= 55 && this.reps >= 17) {
					this.score = this.reps + 24;
				}
				//1-16 Reps
				else if (this.reps <= 16 && this.reps >= 1) {
					this.score = this.reps + 23;
				}
				else {
					this.score = 0;
				}
			}



			//Between 37-41
			else if (this.age >= 37 && this.age <= 41){
				/******** SCORES ********/
				if (this.reps >= 73){
					this.score = 100;
				}
				else if (this.reps <= 72 && this.reps >= 54){
					this.score = this.reps + 27;
				}
				else if (this.reps <= 53 && this.reps >= 15){
					this.score = this.reps + 26;
				}
				else if (this.reps <= 14 && this.reps >= 1){
					this.score = this.reps + 25;
				}
				else {
					this.score = 0;
				}
			}



			//Between 42-46
			else if (this.age >= 42 && this.age <= 46){
				/******** SCORES ********/
				if (this.reps >= 66){
					this.score = 100;
				}
				else if (this.reps <= 65 && this.reps >= 62){
					this.score = this.reps + 34;
				}
				else if (this.reps <= 61 && this.reps >= 53){
					this.score = this.reps + 33;
				}
				else if (this.reps <= 52 && this.reps >= 44){
					this.score = this.reps + 32;
				}
				else if (this.reps <= 43 && this.reps >= 35){
					this.score = this.reps + 31;
				}
				else if (this.reps <= 34 && this.reps >= 26){
					this.score = this.reps + 30;
				}
				else if (this.reps <= 25 && this.reps >= 17){
					this.score = this.reps + 29;
				}
				else if (this.reps <= 16 && this.reps >= 8){
					this.score = this.reps + 28;
				}
				else if (this.reps <= 7 && this.reps >= 5){
					this.score = this.reps + 27;
				}
				else {
					this.score = 0;
				}
			}



			//Between 47-51
			else if (this.age >= 47 && this.age <= 51){
				/******** SCORES ********/
				if (this.reps >= 66){
					this.score = 100;
				}
				else if (this.reps <= 58 && this.reps >= 57){
					this.score = this.reps + 41;
				}
				else if (this.reps <= 56 && this.reps >= 51){
					this.score = this.reps + 40;
				}
				else if (this.reps <= 50 && this.reps >= 45){
					this.score = this.reps + 39;
				}
				else if (this.reps <= 44 && this.reps >= 40){
					this.score = this.reps + 38;
				}
				else if (this.reps <= 39 && this.reps >= 34){
					this.score = this.reps + 37;
				}
				else if (this.reps <= 33 && this.reps >= 28){
					this.score = this.reps + 36;
				}
				else if (this.reps <= 27 && this.reps >= 23){
					this.score = this.reps + 35;
				}
				else if (this.reps <= 22 && this.reps >= 17){
					this.score = this.reps + 34;
				}
				else if (this.reps <= 16 && this.reps >= 11){
					this.score = this.reps + 33;
				}
				else if (this.reps <= 10 && this.reps >= 6){
					this.score = this.reps + 32;
				}
				else if (this.reps == 5){
					this.score = 36;
				}
				else {
					this.score = 0;
				}
			}



			//Between 52-56
			else if (this.age >= 52 && this.age <= 56){
				/******** SCORES ********/
			}



			//Between 57-61
			else if (this.age >= 57 && this.age <= 61){
				/******** SCORES ********/
			}



			//Older than 62
			else {
				/******** SCORES ********/
			}

		}


		//If Female
		else if (this.sex == "female") {
			//Younger than 21
			if (this.age <= 21){
				//scores matching reps
			}
			//Between 22-26
			else if (this.age >= 22 && this.age <= 26){
				//scores matching reps
			}
			//Between 27-31
			else if (this.age >= 27 && this.age <= 31){
				//scores matching reps
			}
			//Between 32-36
			else if (this.age >= 32 && this.age <= 36){
				//scores matching reps
			}
			//Between 37-41
			else if (this.age >= 37 && this.age <= 41){
				//scores matching reps
			}
			//Between 42-46
			else if (this.age >= 42 && this.age <= 46){
				//scores matching reps
			}
			//Between 47-51
			else if (this.age >= 47 && this.age <= 51){
				//scores matching reps
			}
			//Between 52-56
			else if (this.age >= 52 && this.age <= 56){
				//scores matching reps
			}
			//Between 57-61
			else if (this.age >= 57 && this.age <= 61){
				//scores matching reps
			}
			//Older than 62
			else {
				//scores matching reps
			}
			
		}

		//window.alert(this.score);
		return this.score;
	}
}