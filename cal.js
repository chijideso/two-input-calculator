// alert("hello world")
function fnCall(){
    var nResult;
        var nFirst1
        var nSecond1;
    
nFirst1 = parseInt( form1.nFirst.value);
nSecond1 = parseInt(form1.nSecond.value);
nResult=fnAdd(nFirst1, nSecond1);
form1.operation.value =nResult;
// nResult=form1.operation

function fnAdd(nFirst1,nSecond1){
    return nFirst1+nSecond1 ;
    
}
}
function subCall(){
    var nResult;
    var nFirst, nSecond;
    nFirst= parseInt(form1.nFirst.value);
    nSecond =parseInt(form1.nSecond.value);
    nResult= subCall(nFirst,nSecond)
    form1.operation.value =nResult;

    function subCall(nFirst,nSecond){
        return nFirst-nSecond
    }
}
function mulCall(){
    var nResult;
    var nFirst, nSecond;
    nFirst= parseInt(form1.nFirst.value);
    nSecond =parseInt(form1.nSecond.value);
    nResult= mulCall(nFirst,nSecond)
    form1.operation.value =nResult;

    function mulCall(nFirst,nSecond){
        return nFirst*nSecond
    }
}
function divCall(){
    var nResult;
    var nFirst, nSecond;
    nFirst= parseInt(form1.nFirst.value);
    nSecond =parseInt(form1.nSecond.value);
    nResult= divCall(nFirst,nSecond)
    form1.operation.value =nResult;

    function divCall(nFirst,nSecond){
        return nFirst/nSecond
    }
}
















// const operation =document.getElementsByName("operation");
// let arr =[]
// const getval = (nFirstEntry,nSecondEntry)=>{
//     // console.log(e.value)
//     operation=eval(nFirstEntry.value+nSecondEntry.value)
//     operation.value=arr.join("")
// }
