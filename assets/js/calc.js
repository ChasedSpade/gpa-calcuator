function calculator() {
    var aValue = parseInt(document.getElementById("inputA").value);
    var bValue = parseInt(document.getElementById("inputB").value);      
    var cValue = parseInt(document.getElementById("inputC").value);      
    var dValue = parseInt(document.getElementById("inputD").value);     
    var fValue = parseInt(document.getElementById("inputF").value); 
    var gpaValue = ((aValue * 4) + (bValue * 3) + (cValue * 2) + (dValue * 1));

        
    var APaValue = parseInt(document.getElementById("inputAPA").value);
    var APbValue = parseInt(document.getElementById("inputAPB").value);
    var APcValue = parseInt(document.getElementById("inputAPC").value);
    var APdValue = parseInt(document.getElementById("inputAPD").value);
    var APfValue = parseInt(document.getElementById("inputAPF").value);
    var APgpaValue = ((APaValue * 5) + (APbValue * 4) + (APcValue * 3) + (APdValue * 1));

    var totalClasses = (aValue+APaValue+bValue+APbValue+cValue+APcValue+dValue+APdValue+fValue+APfValue);
    var tgpaValue = ((gpaValue + APgpaValue) / totalClasses);
    document.getElementById("classValue").innerHTML = "Total classes: " + totalClasses;
    document.getElementById("gpaValue").innerHTML = "GPA : " + tgpaValue;

}
