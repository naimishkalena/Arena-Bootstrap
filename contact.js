function selectOnlyThis(id){
    for(i=1; i<=3; i++){
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked= true;
    
}