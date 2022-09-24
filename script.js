$(document).ready(onReady);
let employeeArr = [];
let total;
function onReady() {
   $('#addData').on('click',addPerson);//Call a function when clicked.

 }

 function addPerson(evt) {
    evt.preventDefault();

    let newObj = {
        fName: $('#fName').val(),
        lName: $('#lName').val(),
        ID: $('#ID').val(),
        title: $('#Title').val(),
        salary: $('#Salary').val()
    }
    
    employeeArr.push(newObj);
 
    $('#theTable').append(`
    <tr>
        <td>
        ${newObj.fName}
        </td> 
        <td>
        ${newObj.lName}
        </td>
        <td>
        ${newObj.ID}
        </td> 
        <td>
        ${newObj.title}
        </td>
        <td>
        ${newObj.salary}
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
    total=0;
      for(let sal of employeeArr) {
        total+= Number(sal.salary);
       }
       
       $('#total').text(Number(total/12));
       if($('#total').text() >= 20000) {
        $('#total').addClass('tooMuch')
       }
  }
