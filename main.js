function successCB(data) {
    console.log("Success callback: " + data);
};

function errorCB(data) {
            console.log("Error callback: " + data);
    };



$(document).ready(function(){
	$("#resultPanel").hide();

	//search
	$("#submit").click(function(){
		var input = $("#userInput").val();
		var result = theMovieDb.search.getPerson({"query": input}, successCB, errorCB);
		$("p").append();
		$("#resultPanel").show();
	});
})

