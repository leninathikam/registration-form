var abc = [];
var def = [];
var ghi = [];
var jkl = [];
var i = 1;
var lg = 0;
function AddRow(){
    var AddRow = document.getElementById('show');
    var newRow = AddRow.insertRow(i);
    
    abc[lg] = document.getElementById('rock').value ;
    def[lg] = document.getElementById('email').value ;
    ghi[lg] = document.getElementById('web').value ;
    jkl[lg] = document.getElementById('gender').value ;
   
    if(!abc[lg] || !def[lg] || !ghi[lg] ||!jkl[lg]){
        alert("Fill all Details");
        return;
    }
    var a1 = newRow.insertCell(0);
    var a2 = newRow.insertCell(1);
    var a3 = newRow.insertCell(2);
    var a4 = newRow.insertCell(3);
   a1.innerHTML = abc[lg];
    a2.innerHTML = def[lg];
    a3.innerHTML = ghi[lg];
    a4.innerHTML = jkl[lg];
   
i++;
    lg++;
}