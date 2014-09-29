$(function() {

    var pushupReps;
    var situpReps;
    var aerobicTime;
    var pushupScore = 0;
    var situpScore = 0;
    var aerobicScore = 0;
    var userAge = 23;
    var userSex = "male";
    var totalScore = 0;

    /*$("#pushups").on( 'slidestop', function( event ) { 
    	//Push-up event:
        pushupReps = parseInt($(this).val(), 10);
        myPushups = new Pushups(pushupReps, userAge, userSex);
    	pushupScore = myPushups.score();
        //APFT Score:
        myAPFT = new APFT(pushupScore, situpScore, 60);
        totalScore = getScore(myAPFT);
        result = getResult(myAPFT);
        $("#apft-score").replaceWith("<div id='apft-score' class='score'><span>Score</span>"+totalScore+"<span>"+result+"</span></div>");
     });*/

    $("#pushups").change(function( event ) { 
        userAge = parseInt($(".age .age-number").text());
        userSex = $(".sex .sex-denominator").text();
        userSex = userSex.toLowerCase();
        //Push-up event:
        pushupReps = parseInt($(this).val(), 10);
        myPushups = new Pushups(pushupReps, userAge, userSex);
        pushupScore = myPushups.score();
        //APFT Score:
        myAPFT = new APFT(pushupScore, situpScore, 60);
        totalScore = getScore(myAPFT);
        result = getResult(myAPFT);
        $("#apft-score").replaceWith("<div id='apft-score' class='score'><span>Score</span>"+totalScore+"<span>"+result+"</span></div>");
     });

    /*$("#situps").on( 'slidestop', function( event ) { 
        //Sit-up event:
        situpReps = parseInt($(this).val(), 10);
        mySitups = new Pushups(situpReps, userAge, userSex);
        situpScore = mySitups.score();
        //APFT Score:
        myAPFT = new APFT(pushupScore, situpScore, 60);
        totalScore = getScore(myAPFT);
        result = getResult(myAPFT);
        $("#apft-score").replaceWith("<div id='apft-score' class='score'><span>Score</span>"+totalScore+"<span>"+result+"</span></div>");
     });*/

    $("#situps").change(function( event ) { 
        userAge = parseInt($(".age .age-number").text());
        userSex = $(".sex .sex-denominator").text();
        userSex = userSex.toLowerCase();
        //Sit-up event:
        situpReps = parseInt($(this).val(), 10);
        mySitups = new Pushups(situpReps, userAge, userSex);
        situpScore = mySitups.score();
        //APFT Score:
        myAPFT = new APFT(pushupScore, situpScore, 60);
        totalScore = getScore(myAPFT);
        result = getResult(myAPFT);
        $("#apft-score").replaceWith("<div id='apft-score' class='score'><span>Score</span>"+totalScore+"<span>"+result+"</span></div>");
     });
});

function getScore(apft){
    return apft.score();   
}

function getResult(apft){
	return apft.result();
}