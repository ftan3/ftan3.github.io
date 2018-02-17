var table;


function preload() {
  table = loadTable('data/cancer.csv', 'csv', 'header');
}

var yearCountMap = new Map();

function setup() {
	createCanvas(1200, 1200);

	var targetColumn = table.getColumn("Count");

	var yearColumn = table.getColumn("Year");

		targetColumn.forEach(function(row, index) {
			var thisCount = targetColumn[index];
	  	if (yearColumn[index] === '1999') {
	    	if(yearCountMap.get('1999') == null){
	    		yearCountMap.set('1999', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('1999');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('1999', currentCount);
	    	}
	    }else if(yearColumn[index] === '2000'){
	    	if(yearCountMap.get('2000') == null){
	    		yearCountMap.set('2000', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2000');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2000', currentCount);
	    	}
	    }else if(yearColumn[index] === '2001'){
	    	if(yearCountMap.get('2001') == null){
	    		yearCountMap.set('2001', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2001');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2001', currentCount);
	    	}
	    }else if(yearColumn[index] === '2002'){
	    	if(yearCountMap.get('2002') == null){
	    		yearCountMap.set('2002', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2002');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2002', currentCount);
	    	}
	    }else if(yearColumn[index] === '2003'){
	    	if(yearCountMap.get('2003') == null){
	    		yearCountMap.set('2003', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2003');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2003', currentCount);
	    	}
	    }else if(yearColumn[index] === '2004'){
	    	if(yearCountMap.get('2004') == null){
	    		yearCountMap.set('2004', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2004');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2004', currentCount);
	    	}
	    }else if(yearColumn[index] === '2005'){
	    	if(yearCountMap.get('2005') == null){
	    		yearCountMap.set('2005', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2005');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2005', currentCount);
	    	}
	    }else if(yearColumn[index] === '2006'){
	    	if(yearCountMap.get('2006') == null){
	    		yearCountMap.set('2006', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2006');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2006', currentCount);
	    	}
	    }else if(yearColumn[index] === '2007'){
	    	if(yearCountMap.get('2007') == null){
	    		yearCountMap.set('2007', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2007');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2007', currentCount);
	    	}
	    }else if(yearColumn[index] === '2008'){
	    	if(yearCountMap.get('2008') == null){
	    		yearCountMap.set('2008', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2008');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2008', currentCount);
	    	}
	    }else if(yearColumn[index] === '2009'){
	    	if(yearCountMap.get('2009') == null){
	    		yearCountMap.set('2009', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2009');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2009', currentCount);
	    	}
	    }else if(yearColumn[index] === '2010'){
	    	if(yearCountMap.get('2010') == null){
	    		yearCountMap.set('2010', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2010');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2010', currentCount);
	    	}
	    }else if(yearColumn[index] === '2011'){
	    	if(yearCountMap.get('2011') == null){
	    		yearCountMap.set('2011', thisCount);
	    	}else{
	    		var currentCount = yearCountMap.get('2011');
	    		currentCount = int(currentCount) + int(thisCount);
	    		yearCountMap.set('2011', currentCount);
	    	}
	    }
	});

	for(var i = 1999; i < 2012 ; i++){
		print(i + ' count: ' + yearCountMap.get(i.toString()));
	}
}

function draw(){ 
	background(255);
	fill(0);
	var previousPointX;
	var previousPointY;

	line(160, 400, 1000, 400); // x axis
	line(160, 100, 160, 400); // y axis
	text('Year and how many people got cancer', 400, 100);
	text('Year', 1000, 410);
	text('Count', 135, 95);


	for(var i = 0; i < 5; i++){
		text(0+50*i + 'M', 110, 405 - 60 * i);
		line(155, 400 - 60 * i,165, 400 - 60 * i);
	}

	for(var i = 0; i < 13; i++){
		var currentYear = i + 1999;
		var countOfCurrentYear = yearCountMap.get(currentYear.toString());

		ellipse(200 + 50 * i, -(countOfCurrentYear/1000000)+400, 10, 10);

		text(currentYear, 180+50*i, 410);

		if(previousPointX != null && previousPointY != null){
				line(200 + 50 * i, -(countOfCurrentYear/1000000)+400, previousPointX, previousPointY);
		}

		previousPointX = 200 + 50 * i;
		previousPointY = -(countOfCurrentYear/1000000)+400;

		if(mouseX > 200 + 50 * i - 10 && 
			mouseY < -(countOfCurrentYear/1000000)+400+10 &&
			mouseX < 200 + 50 * i + 10 && // right boundary
			mouseY > -(countOfCurrentYear/1000000)+400 - 10)
		{
			text(countOfCurrentYear, mouseX, mouseY); 
		}

	}
}