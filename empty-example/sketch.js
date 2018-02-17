var x = 100, y = 100; 
var values = [10, 20, 30, 40]; 
var sex;
var sexArray;
var femaleCount;
var maleCount;
var totalSexCount;
var blackCount;
var hispanicCount;
var whiteCount;
var allRacesCount;
var Count;
var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('data/cancer.csv', 'csv', 'header');
  // table = loadTable("http://www.cdc.gov/cancer/npcr/uscs/download_data.htm", "csv", "header");
  //the file can be remote
  // table = loadTable("http://p5js.org/reference/assets/mammals.csv", "csv", "header");
}

function setup() {
	createCanvas(800, 800);
	var c = color(0, 0, 0);
	sex = table.getObject("Sex");

	count = table.getObject("Count");
	sexArray = table.getColumn("Sex");
	var race = table.getObject("Race");

  	print('whats this: '+ table.getColumnCount());
  	print('sexArray length: ' + sexArray.length);

  	var targetColumn = table.getColumn("Count");
	var genderColumn = table.getColumn("Sex");

	targetColumn.forEach(function(row, index) {
	  	if (genderColumn[index] == "Female") {
	    // sum female
	    // print('targetColumn: ' + targetColumn[index]);
	    	femaleCount = int(femaleCount)+ int(targetColumn[index]);

	  	} else if(genderColumn[index] === "Male"){
	    // sum male
	    // print('targetColumn: ' + targetColumn[index]);
	    	maleCount = int(maleCount)+ int(targetColumn[index]);
	  	}
	});

	var raceColumn = table.getColumn("Race");

		targetColumn.forEach(function(row, index) {
	  	if (raceColumn[index] == "All Races") {
	    // sum female
	    // print('targetColumn: ' + targetColumn[index]);
	    	allRacesCount = int(allRacesCount)+ int(targetColumn[index]);

	  	} else if(raceColumn[index] === "Black"){
	    // sum male
	    // print('targetColumn: ' + targetColumn[index]);
	    	blackCount = int(blackCount)+ int(targetColumn[index]);
	  	}else if(raceColumn[index] === "Hispanic"){
	  		hispanicCount = int(hispanicCount)+ int(targetColumn[index]);
	  	}else if(raceColumn[index] === "White"){
	  		whiteCount = int(whiteCount) + int(targetColumn[index]);
	  	}
	});
}

function draw(){ 
	background(255);

	var values = [allRacesCount, blackCount, hispanicCount, whiteCount]; 
	c = color(0, 0, 0);
	fill(c);
	line(160, 400, 500, 400); // x axis
	line(160, 100, 160, 400); // y axis

	for(var i = 0; i < 5; i++){
		text(0+50*i + 'M', 110, 405 - 60 * i);
		line(155, 400 - 60 * i,165, 400 - 60 * i);
	}

	text('Race', 500, 410);
	text('Count', 135, 95);
	text('All Races', 190 + 50 * 0, 420);
	text('Black', 200 + 50 * 1, 420);
	text('Hispanic', 190 + 50 * 2, 420);
	text('White', 200 + 50 * 3, 420);


	for(var i = 0; i < 4; i++){
		if(i == 0){
			c = color(175, 100, 220);
			fill(c);
			rect(200 + 50 * i, 400, 20, -allRacesCount/1000000);
			// text('All Races', 190 + 50 * i, 420);
		}else if(i == 1){
			c = color(80, 100, 200);
			var greenValue = green(c);
			fill(0, greenValue, 0);
			rect(200 + 50 * i, 400, 20, -blackCount/1000000);
			// text('Black', 200 + 50 * i, 420);
		}else if(i == 2){
			c = color(200, 90, 10);
			fill(c);
			rect(200 + 50 * i, 400, 20, -hispanicCount/1000000);
			// text('Hispanic', 190 + 50 * i, 420);
		}else if(i == 3){
			c = color(250, 200, 150);
			fill(c);
			rect(200 + 50 * i, 400, 20, -whiteCount/1000000);

			// text('White', 200 + 50 * i, 420);
		}

		if(mouseX > 200 + 50 * i && 
			mouseY < 400 &&
			mouseX < 200 + 50 * i + 20&& // right boundary
			mouseY > 400 - values[i]/1000000)
		{
			text(values[i], mouseX, mouseY); 
		}
	}
	
}