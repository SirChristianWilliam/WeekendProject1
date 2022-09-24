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
    console.log(newObj);
 }
