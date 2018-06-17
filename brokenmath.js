function average(grades, types){
	var total = 0;
	for(i = 0; i < grades.length; i++){
		var hTotal = 0;
		var qTotal = 0;
		var tTotal = 0;
		var hCount = 0;
		var qCount = 0;
		var tCount = 0;
		
		if (types[i] = 'homework'){
			
			hCount++
			hTotal += grades[i]
		} else if (types[i] = 'quiz'){
			
			qCount++
			qTotal += grades[i]
		} else{
			
			tCount++
			tTotal += grades[i]
		}
		
		
		console.log(types[i]);

	}
	console.log()
	var avg = .6*(tTotal/tCount) +.2*(qTotal/qCount) + .2*(hTotal/hCount);


	console.log(avg)
}

var grades = [100, 70, 70, 70, 100];

var types = ['homework', 'test', 'test', 'quiz', 'test'];

average(grades, types);

