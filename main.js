function successCB(data) {
		var dataResult = JSON.parse(data);
		console.log(dataResult);
		
		actorId = dataResult.results[0]["id"];
		$("#actor").append(actorId);
		return actorId;
};

function errorCB(data) {
            console.log("Error callback: " + data);
};

$(document).ready(function(){
	$("#resultPanel").hide();

	//search
	$("#submit").click(function(){
		$("#resultPanel").show();
		var input = $("#userInput").val();
		var taco = theMovieDb.search.getPerson({"query":"Brad%20Pitt"}, successCB, errorCB);
	});
});









