function swap(x)
{
    x.classList.toggle('fa-caret-right');
    x.classList.toggle('fa-caret-left');
}
function del(y)
{
    var x=confirm('Are you sure to delete all records of '+y.id+' table');
    var rows=y.rows.length;
    if(x==true)
        {
            if(rows==1)
                alert('No records to delete');
            while(rows>1)
            {
                y.deleteRow(1);
                rows--;
            }
        }


}
function search(val)
{
    var tr=document.getElementsByTagName('tr');
    for(var i=1;i<tr.length;i++){
        var td=tr[i].getElementsByTagName('td');
        if(td[0].innerHTML==val)
            return 1;
    }
    return 0;
}
function myfun()
{
    var x=document.getElementById('name');
    var y=document.getElementById('roll');
    var z=document.getElementById('email');
    var u=document.getElementById('age');
    var w=document.getElementById('stream');
    var v=document.getElementById('year');
    var t=document.getElementById('eng');
    var num=t.rows.length;

        if(search(y.value)==0)
        {
            var a=document.createElement('tr');
    var b=document.createElement('td');
   var row=t.insertRow(num);
   var cell1=row.insertCell(0);
   var cell2=row.insertCell(1);
   cell1.innerHTML=y.value;
   cell2.innerHTML=x.value;
   cell2=row.insertCell(2);
   cell2.innerHTML=u.value;
   cell2=row.insertCell(3);
   cell2.innerHTML=z.value;
   cell2=row.insertCell(4);
   cell2.innerHTML=w.value;
   cell2=row.insertCell(5);
   cell2.innerHTML=v.value;
    var bt=document.getElementById('mybt');
    var cln=bt.cloneNode(true);
    row.appendChild(cln);
    $("#mymodal").modal('hide');
    x.value=y.value=z.value=u.value=v.value=w.value="";
    $("#sub").addClass('hide');
}
else
    alert('An entry with same roll number already exists');
   $("#mymodal").modal('hide');
}
function changeB()
{
  $("#sub").removeClass('hide');
}

function edit(bt)
{
    //$("#mymodal").modal('show');
    $("#last").removeClass('hide');
    var r=bt.parentNode.parentNode;
    var td=r.getElementsByTagName('td');
     var x=document.getElementById('name');
    var y=document.getElementById('roll');
    var z=document.getElementById('email');
    var u=document.getElementById('age');
    var w=document.getElementById('stream');
    var v=document.getElementById('year');
     y.value=td[0].innerHTML;
    x.value=td[1].innerHTML;
      u.value=td[2].innerHTML;
    z.value=td[3].innerHTML;
    w.value=td[4].innerHTML;
    v.value=td[5].innerHTML;
    $("#last").unbind().click(function(){
      td[0].innerHTML=""+y.value;
      td[1].innerHTML=x.value;
      td[2].innerHTML=u.value;
      td[3].innerHTML=z.value;
      td[4].innerHTML=w.value;
      var myval=v.value;
      td[5].innerHTML=myval;
     x.value=y.value=z.value=u.value=v.value=w.value="";
      $("#last").addClass('hide');
      $("#out").click();
    });

}
function delR(cur)
{
    var i=cur.parentNode.parentNode.rowIndex;
    var r=confirm("Are you sure to delete this record?");
    if(r==true)
    {
        eng.deleteRow(i);
    }

}