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

   if(newObj.fName === "" || newObj.lName === "" || newObj.ID === "" || newObj.title === "" || newObj.salary === "") {
    alert("All input is required");
    return;
   }

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
        <td data-id="${arr.ID}">
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
    let salaryTotal = 0;

      for(let sal of employeeArr) {//Loop through entire array
         salaryTotal+= parseInt(sal.salary);//Find all the current array's salary values
       }
       total = salaryTotal/12;
         $('#total').empty();
       $('#total').append('<h3 id="totally">Total Monthly: $' + total.toFixed(2) +  '<h3>'); 
       if(total >= 20000) {

        $('#totally').addClass('tooMuch'); //add a css class if the value is as specified
       } else {
        $('#totally').addClass('safeZone');
        }
       
  }
   function onDelete(evt) {
    evt.preventDefault();
    let container = $(this).parent().parent().find('.celery').val();
     employeeArr.splice(container,1);

     $(this).closest('tr').remove();
      addTotal();
    }

