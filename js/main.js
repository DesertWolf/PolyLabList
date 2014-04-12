/* Set variables*/
var labLocation = '';
var labProgram = '';
var labType = '';
var labShow ='';

/* doc ready function, and the location drop down change function */
$(document).ready(function(){
    $("#locat").change(function(){
        labLocation= $(this).attr("value");
        if (labLocation != ''){
            labLocation = '.'+labLocation;
        }
setClassesVisible();

});
/*program drop down change function*/
$("#prog").change(function(){
    labProgram= $(this).attr("value");
    if (labProgram != ''){
    labProgram = '.'+labProgram;
    }
setClassesVisible();
});
/*labtype drop down change function*/
$("#lt").change(function(){
    labType= $(this).attr("value");
    if (labType != ''){
    labType = '.'+labType;
    }
setClassesVisible();
});
/*build the selector variable toset which classes are visible*/
function setClassesVisible(){

    labShow= labLocation+labProgram+labType;
    if(labShow == ''){
/*change listing to meet filter requirements and hide ones that dont match*/
    location.reload();
    }else{
    $('.rl').slideUp("1000");
    $('.learning').slideUp("1000");
    $('.research').slideUp("1000");
    $(labShow).slideDown("1000");
    }
}
/*Reset page*/
$('#resetPage').click( function resetPage(){
    location.reload();
    });
});

