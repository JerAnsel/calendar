function addCourse(){
    let times = this.getElementsByClassName("time")[0].innerText.split('- ');
    let startTime = times[0];
    let endTime = times[1];
    let day = this.getElementsByClassName("course-day")[0].innerText;
    let courseName = this.getElementsByClassName("course-name")[0].innerText;
    console.log(courseName);
    let hours = startTime - 8;
    let q = "#" + day + " .hour:nth-child(" + hours + ")"
    let startHour = calendar.querySelector(q);
    startHour.innerText = courseName;
    console.log(startHour);
    
}

let courses = document.getElementsByClassName("course");
let calendar = document.getElementById("calendar");
for(course of courses){
    course.addEventListener("click", addCourse);
    console.log(course);
}