$(document).ready(onReady);
let employeeArr = [];

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
 }
