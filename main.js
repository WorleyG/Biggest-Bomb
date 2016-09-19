function successCB(data) {
		var dataResult = JSON.parse(data);
		//console.log(dataResult);
		actorId = dataResult.results[0]["id"];
		theMovieDb.people.getMovieCredits({"id":actorId}, idSuccessCB, errorCB);
};

function idSuccessCB(data){
		var idResult = JSON.parse(data);
		console.log(idResult);
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
		theMovieDb.search.getPerson({"query":input}, successCB, errorCB);
	});
});









