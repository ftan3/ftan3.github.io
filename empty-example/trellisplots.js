var table;

function preload() {
  table = loadTable('data/cancer.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1200, 1200);
	frameRate(50);
	var c = color(255, 204, 0);
}

function draw(){ 
	background(255);

	var targetColumn = table.getColumn("Count");
	var ageAdjustedColumn = table.getColumn("Age Adjusted Rate");
	var raceColumn = table.getColumn("Race");

	c = color(255, 204, 0);
	fill(c);
	targetColumn.forEach(function(row, index) {
		if(raceColumn[index] === 'All Races'){
			strokeWeight(4);
			line(40, 305, 380, 305); // x axis
			line(40, 80, 40, 305); // y axis
			strokeWeight(1);

			c = color(0, 0, 0);
			fill(c);
			text('Age Adjusted Rate', 160, 350);
			text('Count', 30,70);
			c = color(255, 204, 0);
			fill(c);
			ellipse(ageAdjustedColumn[index]/4	 + 50, (-targetColumn[index]/20000)+300, 10, 10);

		}else if(raceColumn[index] === 'Black'){
			strokeWeight(4);
			line(460, 305, 800, 305); // x axis
			line(460, 80, 460, 305); // y axis
			strokeWeight(1);

			c = color(0, 0, 0);
			fill(c);
			text('Age Adjusted Rate', 580, 350);
			text('Count', 450, 70);
			c = color(255, 204, 0);
			fill(c);
			ellipse(ageAdjustedColumn[index]/4 + 500 , (-targetColumn[index]/20000)+300, 10, 10);
		}else if(raceColumn[index] === 'Hispanic'){
			strokeWeight(4);
			line(40, 605, 380, 605);
			line(40, 380, 40, 605);
			strokeWeight(1);

			c = color(0, 0, 0);
			fill(c);
			text('Age Adjusted Rate', 160, 650);
			text('Count', 30, 370);
			c = color(255, 204, 0);
			fill(c);
			ellipse(ageAdjustedColumn[index]/4 + 50 , (-targetColumn[index]/20000)+600, 10, 10);
		}else if(raceColumn[index] === 'White'){
			strokeWeight(4);
			line(460, 605, 800, 605);
			line(460, 380, 460, 605);
			strokeWeight(1);

			c = color(0, 0, 0);
			fill(c);
			text('Age Adjusted Rate', 580, 650);
			text('Count', 450, 370);
			c = color(255, 204, 0);
			fill(c);
			ellipse(ageAdjustedColumn[index]/4 + 500 , (-targetColumn[index]/20000)+600, 10, 10);
		}
	});
}
