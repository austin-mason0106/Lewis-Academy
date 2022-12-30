 /*2d array, the first position is the student's array holding thier grade
        The second position will be a specfific grade
        1st position in the 2nd array is Math
        2nd position in the 2nd array is Reading
        3rd position in the 2nd array is Science
        4th position in the 2nd array is Social Study
        5th position in the 2nd array is Physical Education
        6th position in the 2nd array is Elective One
        7th position in the 2nd array is Elective Two
        */
        let grades = [[97,89,76,65,57,90,67],
                    [70,50,34,63,77,43,53],
                    [89,77,79,68,57,80,75],
                    [75,88,98,95,87,90,97],
                    [69,70,76,65,77,90,67],
                    [90,89,76,90,85,90,89]];

        function sumArray(array) {
            let sum = 0; 
            for (let i = 0; i < array.length; i += 1) {
                sum += array[i];
            }
            return sum;
        }
        
        //Arguments are the array with the grades and the ID of the card you are using
        function showGrades(x,y){

            let AverageGrade= sumArray(grades[x])/7;

            if(AverageGrade>= 90){
                document.getElementById("grade1").innerHTML = "A";
            }
            else if(AverageGrade>= 80){
                document.getElementById("grade1").innerHTML = "B";
            }
            else if(AverageGrade>= 70){
                document.getElementById("grade1").innerHTML = "C";
            }
            else if(AverageGrade>= 65){
                document.getElementById("grade1").innerHTML = "D";
            }
            else {
                document.getElementsByClassName("grade1").innerHTML = "F";
                
            }
        }

        showGrades(1,"grade1");
