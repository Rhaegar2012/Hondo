//get the values from the interface form
//start or controller function
function getValues(){
    //Get values from the page 
    let startValue=document.getElementById("startValue").value;
    let endValue=document.getElementById("endValue").value;
    let numbers=[];
    //Reset startvalue to parse as int
    startValue=parseInt(startValue);
    endValue=parseInt(endValue);
    //Checks if the start and end values are integers and calls generateNumbers()
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
         //We call generateNumbers
         numbers=generateNumbers(startValue, endValue);

    }else{
        alert("Must enter integers");
    }
   
    //We call displayNumbers 
    displayNumbers(numbers);


}
//generate numbers from the start value to the end value
//get values from the page 
function generateNumbers(svalue, evalue){
    let numbers=[];
    //get all numbers from start to end 
    for(let i=svalue; i<=evalue;i++){
        numbers.push(i);
    }

    return numbers;
}
//display the numbers and mark the even numbers bold
function displayNumbers(numbers){
    //Format variable for table strings
    let templateRows="";
    for(let i=0; i<numbers.length;i++){
        let className="even";
        let element=numbers[i];
        if(element %2==0){
            className="even";

        }else{
            className="odd";
        }
        //Concatenate with the template literal of an HTML row
        templateRows+=  `<tr><td class=${className}>${element}</td></tr>`;
    }
    //Populate html table from app page , calls by table id
    document.getElementById("results").innerHTML=templateRows;

}
