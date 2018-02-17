var table;

function preload() {
  table = loadTable('data/cancer.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1200, 1600);
	frameRate(10);
	var c = color(255, 204, 0);
	

}

function draw(){ 
	background(255);

	var targetColumn = table.getColumn("Count");
	var ageAdjustedColumn = table.getColumn("Age Adjusted Rate");
	var raceColumn = table.getColumn("Race");

	line(10, 605, 1500, 605); // x axis
	line(10, 100, 10, 605); // y axis

	var c = color(0,0,0);
	fill(c);

	text('Age Adjusted Rate', 500, 615);
	text('Count', 20, 105);

	c = color(255, 204, 0);
	fill(c);
	targetColumn.forEach(function(row, index) {
		if(raceColumn[index] === 'Black'){
			c = color(80, 100, 200);
			var greenValue = green(c);
			fill(0, greenValue, 0);
		}else if(raceColumn[index] === 'Hispanic'){
			c = color(200, 90, 10);
			fill(c);
		}else if(raceColumn[index] === 'White'){
			c = color(250, 200, 150);
			fill(c);
		}else if(raceColumn[index] === 'All Races'){
			c = color(175, 100, 220);
			fill(c);
		}

		ellipse(ageAdjustedColumn[index]+5000, (-targetColumn[index]/10000)+600, 7, 7);
	});
}
