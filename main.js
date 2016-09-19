var searchResult = [];
var actorId = 0;

function successCB(data) {
		var dataResult = JSON.parse(data);
		console.log(dataResult);
		
		alert(dataResult.results[0]["id"]);
		actorId = dataResult.results[0]["id"]
		
		$("#resultPanel").append(actorId);
};

function errorCB(data) {
            console.log("Error callback: " + data);
    };



$(document).ready(function(){
	$("#resultPanel").hide();

	//search
	$("#submit").click(function(){
		var input = $("#userInput").val();
		//var result = theMovieDb.search.getPerson({"query": input}, successCB, errorCB);
		theMovieDb.search.getPerson({"query":"Brad%20Pitt"}, successCB, errorCB);


		$("#resultPanel").show();
	});
})

