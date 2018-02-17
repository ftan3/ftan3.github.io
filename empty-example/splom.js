var table;

function preload() {
  table = loadTable('data/cancer.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1600, 1600);
	frameRate(10);
	var c = color(0, 0, 0);
}

function draw(){ 
	background(255);

	var targetColumn = table.getColumn("Count");
	var crudeRateColumn = table.getColumn("Crude Rate");
	var ageAdjustedColumn = table.getColumn("Age Adjusted Rate");

	strokeWeight(4);
	line(300, 300, 1200, 300); // x ceil
	line(300, 600, 1200, 600); // x 1st layer
	line(300, 900, 1200, 900); // x 2nd layer
	line(300, 1200, 1200, 1200); // x floor

	line(300, 300, 300, 1200); // y left
	line(600, 300, 600, 1200); // y 1st layer
	line(900, 300, 900, 1200); // y 2nd layer
	line(1200, 300, 1200, 1200); // y right

	c = color(0,0,0);
	fill(c);
	textSize(20);
	text('Count', 425, 450); // +125, +150
	text('Crude Rate', 700, 750); 
	text('Age Adjusted Rate', 975, 1050);

	targetColumn.forEach(function(row, index) {
		

		ellipse(600 + int(crudeRateColumn[index])/3, -(int(targetColumn[index])/30000) + 600, 8, 8); // 2
		ellipse(int(targetColumn[index])/30000 + 300, 600 + int(crudeRateColumn[index])/3, 8, 8); // 4		
	
		ellipse(int(ageAdjustedColumn[index])/4 + 900, (-int(targetColumn[index])/30000) + 600, 8, 8); //3 
		ellipse((int(targetColumn[index])/30000) + 300, int(ageAdjustedColumn[index])/4 + 900, 8, 8); // 7

		ellipse(int(ageAdjustedColumn[index]/4) + 900, -int(crudeRateColumn[index])/3 + 900, 8, 8);
		ellipse(int(crudeRateColumn[index])/3 + 600, -int(ageAdjustedColumn[index])/4 + 1200, 8, 8);

		// ellipse(ageAdjustedColumn[index]+5000, (-targetColumn[index]/10000)+600, 7, 7);
	});

}
