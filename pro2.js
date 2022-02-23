var employeeData;
function hello(){
	var x=" " ,i;
	var xTable = " ";
	
	xTable = '<table class="table table-bordered  table-striped ">';
	xTable = xTable + '<thead class="thead-dark">';
	xTable = xTable + '<tr> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
	xTable = xTable + '</thead>';
	
	xTable = xTable + '<tbody>';
	for(var i=0;i<employeeData.length;i++){ 
	xTable = xTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
}
	xTable = xTable + '</tbody>';
	xTable = xTable + '</table>';

    for(var i=0;i<employeeData.length;i++){
    x= x+(i+1) + "," + " " + employeeData[i].First+" , ";
    x= x+employeeData[i].Place+" <br> ";
    }
    document.getElementById("demo").innerHTML= xTable;
}

function Even(){
	var EvenTable= " ";
	
	EvenTable = '<table class="table table-bordered  table-striped ">';
	EvenTable = EvenTable + '<thead class="thead-dark">';
	EvenTable = EvenTable + '<tr> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
	EvenTable = EvenTable + '</thead>';
	
	EvenTable = EvenTable + '<tbody>';
	for(var i=0;i<employeeData.length;i++){ 
	if((i+1)%2==0){
	EvenTable = EvenTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
}
	}
	EvenTable = EvenTable + '</tbody>';
	EvenTable = EvenTable + '</table>';

    
    document.getElementById("evendata").innerHTML= EvenTable;
}
function Odd(){
	var OddTable= " ";
	
	OddTable = '<table class="table table-bordered  table-striped ">';
	OddTable = OddTable + '<thead class="thead-dark">';
	OddTable = OddTable + '<tr> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
	OddTable = OddTable + '</thead>';
	
	OddTable = OddTable + '<tbody>';
	for(var i=0;i<employeeData.length;i++){ 
	if((i+1)%2!=0){
	OddTable = OddTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
}
	}
	OddTable = OddTable + '</tbody>';
	OddTable = OddTable + '</table>';

    document.getElementById("odddata").innerHTML= OddTable;
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