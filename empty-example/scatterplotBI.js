var table;

function preload() {
  table = loadTable('data/cancer.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1200, 1600);
	// frameRate(10);
	var c = color(255, 204, 0);
	

}

function draw(){ 
	background(255);

	var targetColumn = table.getColumn("Count");
	var ageAdjustedColumn = table.getColumn("Age Adjusted Rate");

	line(10, 605, 1200, 605); // x axis
	line(10, 100, 10, 605); // y axis


	var c = color(0,0,0);
	fill(c);

	for(var i = 0; i < 5; i++){
		text(0+50*i + 'M', 20, 605 - 100 * i);
		line(10, 605 - 100 * i,20, 605 - 100 * i);
	}

	for(var i = 0; i < 12 ; i++){
		text(100*i, 10 + 100*i, 620);
		line(10 + 100*i, 605, 10 + 100*i, 615);
	}
	text('Age Adjusted Rate', 400, 650);
	text('Count', 20, 105);

	c = color(255, 204, 0);
	fill(c);
	targetColumn.forEach(function(row, index) {
		ellipse(ageAdjustedColumn[index]+5000, (-targetColumn[index]/10000)+600, 7, 7);
		if(mouseX > ageAdjustedColumn[index]+5000-5 && 
			mouseY < (-targetColumn[index]/10000)+600+5 &&
			mouseX < ageAdjustedColumn[index]+5000-5 + 5 && // right boundary
			mouseY > (-targetColumn[index]/10000)+600 - 5)
		{
			text('aa: ' + ageAdjustedColumn[index] + 'count: ' + targetColumn[index], mouseX, mouseY); 
		}
	});
}
