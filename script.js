$(document).ready(onReady);
let employeeArr = [];
let total;
function onReady() {
   $('#addData').on('click',addPerson);//Call a function when clicked.
   $('#theTable').on('click', '.deleteEmp', onDelete);

 }

 function addPerson(evt) {
    evt.preventDefault(); //Prevent refreshing of page

    let newObj = {//Add the information from the form, as an object
        fName: $('#fName').val(),
        lName: $('#lName').val(),
        ID: $('#ID').val(),
        title: $('#Title').val(),
        salary: $('#Salary').val()
    }
   
    employeeArr.push(newObj); //add the object to the state array

    appendEmployee(newObj);
}
function appendEmployee(arr) {
    $('#tableRowTD').empty();

    employeeArr.push(arr);
// add the information to the DOM
     $('#theTable').append(` 
    <tr>
        <td>
        ${arr.fName}
        </td> 
        <td>
        ${arr.lName}
        </td>
        <td>
        ${arr.ID}
        </td> 
        <td>
        ${arr.title}
        </td>
        <td class="celery">
        ${arr.salary}
        </td>
        <td>
        <button class="deleteEmp">Del</button>
        </td>
    </tr>
    `)

addTotal();
//Clear the form input values
    $('#fName').val('');
    $('#lName').val('');
    $('#ID').val('');
    $('#Title').val('');
    $('#Salary').val('');
 }

 function addTotal() { 
    total=0;//Reset the total

      for(let sal of employeeArr) {//Loop through entire array
        total+= Number(sal.salary);//Find all the current array's salary values
       }
       
       $('#total').text(Number(total/12)); //Add the total salary values together & display on the DOM
       $('#total').empty();
       $('#total').append('<h3>Total Monthly: $' + total.toFixed(2) +  '<h3>'); 
       if($('#total').text() >= 20000) {
        $('#total').addClass('tooMuch') //add a css class if the value is as specified
       }
       
  }
   function onDelete(evt) {
    evt.preventDefault();
     
     $('#total').text($('#total').text());
      console.log($(this).parent().text());  
    $(this).parent().parent().remove();

    }

