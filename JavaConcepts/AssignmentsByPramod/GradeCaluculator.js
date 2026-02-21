//given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:  A: 90-100  B: 80-89  C: 70-79  D: 60-69  F: 0-59

// Function to calculate grade based on score
//Defining function 
function gradeCaluculator(score) {
let grade ;
if(score>=90 && score<=100){
grade="A";
}
else if(score>=80 && score<=89){
grade="B" ;
}
else if(score>=70 && score<=79){
  grade="C"  ;
}
else if(score>=60 && score<=69){
  grade="D"  ;
}
else if(score>=0 && score<=59){
   grade="F" ;
}
else{
grade="Invalid";
}
console.log(`grade:${grade} -> score:${score}`);
return grade;
}
// calling function 
gradeCaluculator(60);
gradeCaluculator(0);
