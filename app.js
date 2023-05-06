//GEt the modal
var modal = document.getElementById('dltModal');

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}



document.getElementById("dlt").style.backgroundColor ="#dc3545";
document.getElementById("dlt").style.color ="white";
document.getElementById("dlt").style.fontWeight ="bold";
document.getElementById("dlt").style.fontSize ="14px";
document.getElementById("dlt").style.border ="none";
