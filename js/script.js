function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    
    console.log(sisiLuas);
    
    document.getElementById("output-luas").innerText = '<span>'+sisiLuas+'</span>';

    document.getElementsByClassName("result-luas").style = "visible";
}