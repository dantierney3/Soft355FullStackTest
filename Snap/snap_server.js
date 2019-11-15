var express = require("express");

var db = require ("./db");

var app = express();

app.use(express.static("resources"));

app.get("/card/:id", function(request, responce)
{
	logic.getCard(request.params.id).then(function(card)
	{
		responce.redirect("/" + card.filename);
	});
});

app.listen(9000, function()
{
	console.log("Listening on port: 9000");
});