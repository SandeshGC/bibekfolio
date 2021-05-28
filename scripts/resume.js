function changeFunc(){ //creating a function to change button text
    var x= document.getElementById("nav-button").textContent; //gets text content if the element by id
    element=document.getElementById("nav-button");
    firstTable =document.getElementById("table1");
    secondTable=document.getElementById("table2");
    var a="< Previous";
    var b="Next >";
//to change button from previous to next and vice versa.
    if (x==a){
        element.textContent="Next >";
    }
        else if(x==b){
            element.textContent= "< Previous";
            
        }

        //to change the content of the table
        var x= document.getElementById("nav-button").textContent; //gets text content if the element by id
        if (x==b){
            firstTable.style.display="inline-block";
            secondTable.style.display="none";
        }
        else if(x==a){
            firstTable.style.display="none";
            secondTable.style.display="inline-block";
        }
}

