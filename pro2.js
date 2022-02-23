var employeeData=[{
    "First":"Mickey",
    "Last":"Mouse",
    "Place":"Up",
    "state":"north",
  },
  {
    "First":"Minny",
    "Last":"M",
    "Place":"Down",
    "state":"south",
  },
  {
    "First":"Aman",
    "Last":"Kumar",
    "Place":"Delhi",
    "state":"east",
  },
   {
    "First":"Buggs",
    "Last":"Bunny",
    "Place":"Saket",
    "state":"delhi",
  },
  {
    "First":"Shivangi",
    "Last":"Gupta",
    "Place":"Noida",
    "state":"UP",
  },
  {
    "First":"Sagar",
    "Last":"Mandal",
    "Place":"malda",
    "state":"WB",
  },
  {
    "First":"Krishna",
    "Last":"G",
    "Place":"Mathura",
    "state":"UP",
  },
  {
    "First":"Vivek",
    "Last":"Kumar",
    "Place":"Agra",
    "state":"UP",
  },
  {
    "First":"Rishab",
    "Last":"Kumar",
    "Place":"Doon",
    "state":"Uk",
  },
  {
    "First":"Deepak",
    "Last":"Kumar",
    "Place":"Bhopal",
    "state":"MP",
  },
  {
    "First":"Adnan",
    "Last":"Khan",
    "Place":"Abc",
    "state":"def",
  },
  {
    "First":"Udhay",
    "Last":"Kumar",
    "Place":"Bangalore",
    "state":"KR",
  } ]

function hello(){
    var x="  ";
	var strEmployees = "";
	var strEmployeeTable = "";

	strEmployeeTable = '<table class="table table-hover table-striped ">';
	strEmployeeTable = strEmployeeTable + '<thead class="thead-dark">';
	strEmployeeTable = strEmployeeTable + '<tr><th scope="col">Employee No.</th><th scope="col">Name</th> <th scope="col">Place</th><th scope="col">state</th>  </tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';

	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=0;i<employeeData.length;i++) {
	strEmployeeTable = strEmployeeTable + '<tr> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td>  <td>'+employeeData[i].state+' </td> </tr>';
}
strEmployeeTable = strEmployeeTable + '</tbody>';
strEmployeeTable = strEmployeeTable + '</table>';




    for(var i=0;i<12;i++){
    x=x+[i+1]+"."+employeeData[i].First+"	"+","+"	";
    x=x+employeeData[i].Place+"<br><br>";
    }
    document.getElementById("demo").innerHTML=strEmployeeTable;
}


function even(){
    var evenTable="  ";
	

	evenTable = '<table class="table table-hover table-striped ">';
	evenTable = evenTable + '<thead class="thead-dark">';
	evenTable = evenTable  + '<tr><th scope="col">Employee No.</th><th scope="col">Name</th> <th scope="col">Place</th><th scope="col">state</th>  </tr>';
	evenTable = evenTable  + '</thead>';

	evenTable  = evenTable  + '<tbody>';
	for(i=0;i<employeeData.length;i++) {
		if((i+1)%2==0)  {     
		evenTable  = evenTable  + '<tr> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
	}}
evenTable  = evenTable  + '</tbody>';
evenTable  = evenTable + '</table>';


    document.getElementById("evendata").innerHTML=evenTable ;
}

function odd(){
    var oddTable="  ";
	
	

	oddTable = '<table class="table table-hover table-striped >';
	oddTable = oddTable + '<thead class="thead-dark">';
	oddTable = oddTable  + '<tr><th scope="col">Employee No.</th><th scope="col">Name</th> <th scope="col">Place</th><th scope="col">state</th>  </tr>';
	oddTable = oddTable  + '</thead>';

	oddTable  = oddTable  + '<tbody>';
	for(i=0;i<employeeData.length;i++) {
		if((i+1)%2!==0)  {     
	oddTable  = oddTable  + '<tr> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
	}}
oddTable  = oddTable  + '</tbody>';
oddTable  = oddTable + '</table>';


    document.getElementById("odddata").innerHTML=oddTable ;
}


function myFunction() {
 document.getElementById("demo").innerHTML="";
 document.getElementById("evendata").innerHTML="";
 document.getElementById("odddata").innerHTML="";
}
employeeData=[{
    "First":"Mickey",
    "Last":"Mouse",
    "Place":"Up",
    "state":"north",
  },
  {
    "First":"Minny",
    "Last":"M",
    "Place":"Down",
    "state":"south",
  },
  {
    "First":"Aman",
    "Last":"Kumar",
    "Place":"Delhi",
    "state":"east",
  },
   {
    "First":"Buggs",
    "Last":"Bunny",
    "Place":"Saket",
    "state":"delhi",
  },
  {
    "First":"Shivangi",
    "Last":"Gupta",
    "Place":"Noida",
    "state":"UP",
  },
  {
    "First":"Sagar",
    "Last":"mandal",
    "Place":"Malda",
    "state":"WB",
  },
  {
    "First":"Krishna",
    "Last":"G",
    "Place":"Mathura",
    "state":"UP",
  },
  {
    "First":"Vivek",
    "Last":"Kumar",
    "Place":"Agra",
    "state":"UP",
  },
  {
    "First":"Rishab",
    "Last":"Kumar",
    "Place":"Doon",
    "state":"UK",
  },
  {
    "First":"Deepak",
    "Last":"Kumar",
    "Place":"Bhopal",
    "state":"MP",
  },
  {
    "First":"Adnan",
    "Last":"Khan",
    "Place":"Abc",
    "state":"def",
  },
  {
    "First":"Udhay",
    "Last":"Kumar",
    "Place":"Bangalore",
    "state":"KR",
  } ]