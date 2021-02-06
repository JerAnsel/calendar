
let addedCourses = new Array();
let myCourses =
[
	{ 
		id : 1 ,
		name : "Data",
		startTime : 8 ,
		endTime : 9 ,
		days : ["sun" , "mon"] ,
	}
	,
	{
		id : 2 ,
		name : "Algorithem",
		startTime : 8 ,
		endTime : 9 ,
		days : ["sun" , "mon"]
	}
	,
	{
		id : 3 ,
		name : "Angular",
		startTime : 8 ,
		endTime : 9 ,
		days : ["thu"]
	}
	,
	{
		id : 4 ,
		name : "Web",
		startTime : 10 ,
		endTime : 11 ,
		days : ["sun" , "mon"]
	}
	,
	{
		id : 5 ,
		name : "AI",
		startTime : 8 ,
		endTime : 9 ,
		days : ["wed","tue"]
	}
];



function createTable(tableData) {

  var table = document.createElement('table');//table tag
  table.style.border = "5px solid black";
  table.style.borderCollapse= "collapse separate";
  table.style.margin = "auto";
  table.style.borderRadius = "10px";
  var tableBody = document.createElement('tbody');//tbody tag
  tableData.forEach(function(rowData) {//for each element in my courses
 
    var row = document.createElement('tr');
    var cell = document.createElement('td');
  
    Object.values(rowData).forEach(val => {//for each element in my row course
      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(val));//put val in cell
      cell.style.border = "1px solid #333";
      cell.style.width = "80px";
      cell.style.padding = "10px";
      cell.style.textAlign = "center";
      row.appendChild(cell);
});
    cell = document.createElement('td');
    var bt = document.createElement('button');
    cell.style.border = "1px solid #333";
    bt.style.padding = "10px" ;
    bt.style.width = "100px";
    bt.style.height = "40px";
    bt.style.backgroundColor = "#333";
    bt.style.color = "white";
    bt.appendChild(document.createTextNode("Register"));
    cell.appendChild(bt);
    bt.addEventListener("click", function() {
    	addCourseToCalender(rowData);
});
     bt.addEventListener("mouseover", function() {
    	bt.style.background = "tomato"
}); 
     bt.addEventListener("mouseout", function() {
    	bt.style.background = "#333"
});
    row.appendChild(cell);
    tableBody.appendChild(row);

  });

  table.appendChild(tableBody);
  document.body.appendChild(table);	
}

createTable(myCourses);

function addCourseToCalender(course) {
	console.log(course);
	var isId=false;
	var isTime=false;
	if (addedCourses.length != 0) {
		for (var i = 0; i < addedCourses.length; i++){
			if(addedCourses[i].id == course.id) {
				isId=true;
				alert("you have registered alreday");
				break;
			}else{
				if (checkDays(addedCourses[i].days,course.days)) {
					if(addedCourses[i].startTime == course.startTime){
						isTime=true;
				alert("you have course with same days and hour ")

					}
				}
			}

		}
		if(!isId && !isTime)
		{
		
		addCourse(course);
		}
	
	}else{
		
		addCourse(course);
	}

			console.log(addedCourses);

}


function addCourse(course){
        addedCourses.push(course) ;
		alert("Done !!");
		for (var i = 0; i < course.days.length; i++) {
			var x=document.getElementById(course.days[i]+course.startTime);
		    x.style.backgroundColor='tomato';
		    x.style.color="white";
		    x.style.textAlign = "center";
		    var node = document.createTextNode(course.name);
		   // node.style.color = "white";
		    x.appendChild(node);
		}

		
}
function checkDays(days1,days2) {
	for (var i = 0; i < days1.length; i++) {
		for (var j = 0; j < days2.length; j++) {
			if(days1[i] === days2[j]){return true}
				else{return false;}

		}
	}
}

function addToMyCourses() {

	let idn = myCourses.length+1;
	let namen = document.getElementById("name").value;
	let startTimen = document.getElementById("startTime").value;
	let endTimen = document.getElementById("endTime").value;
	let daysn = [];
	if (document.getElementById("sun").checked == true) {
		daysn.push(document.getElementById("sun").value)
	}if (document.getElementById("mon").checked == true) {
		daysn.push(document.getElementById("mon").value)
	}if (document.getElementById("tue").checked == true) {
		daysn.push(document.getElementById("tue").value)
	}if (document.getElementById("wed").checked == true) {
		daysn.push(document.getElementById("wed").value)
	}if (document.getElementById("thu").checked == true) {
		daysn.push(document.getElementById("thu").value)
	}
		
	let newCourseOb = {
		id : idn,
		name : namen,
		startTime : startTimen,
		endTime : endTimen,
		days : daysn
	}

	myCourses.push(newCourseOb);
	//console.log(newCourseOb);
}
let addPlat = document.getElementById("addPlat");
addPlat.addEventListener("click", function() {
    	addToMyCourses();
    	let x = document.getElementsByTagName("table");
		x[1].remove();
		createTable(myCourses);
});




