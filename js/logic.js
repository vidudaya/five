function Create2DArray(rows,coloms) {
  var x = new Array(rows);
  for (var i = 0; i < rows; i++) {
    x[i] = new Array(coloms);
  }
  return x;

}

function getColAndRow(id){
var row= parseInt(id/10+"");
var column= id%10;
return [row,column];
} 

function getcellid(row,col)
{
	var a= row+""+col;
	var id=parseInt(a);
	return id;
}

function checkWin(divObj){
	
	var position= getColAndRow(divObj.id);
	var prow=position[0];
	var pcolumn=position[1];
	var win = new Boolean(false);
	cellArray[prow][pcolumn]=1;
	if(checkAlongRow(prow,pcolumn)>=5|| checkAlongColumn(prow,pcolumn)>=5 || checkAlongDiagonal1(prow,pcolumn)>=5 || checkAlongDiagonal2(prow,pcolumn)>=5)
		win=true;
	if(win==true){
		
		//alert("you win");
		for(var i=0;i<5;i++)
		{
		$("#"+cellsRow[i]).addClass("change");
		}
		
		
		//location.reload(true);
	}

}
 function checkAlongRow(row, column)
 {
	cellsRow=new Array(5);
	var i=0;
	var row1=row;
	var column1=column;
	var leftTot=0;
	var rightTot=0;
	while(cellArray[row1][column1]==1)
	{
	leftTot+=cellArray[row1][column1];
	if(i<5)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	
	if(column1==0)
	break;
	column1--;
	}
	column1=column;
	row1=row;
	while(cellArray[row1][column1]==1)
	{
	
	rightTot+=cellArray[row1][column1];
	if(i<5 && column1!=column)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(column1==9)
	break;
	column1++;
	}
	rowTot= leftTot+rightTot-1;
	
	return rowTot;
 }
 function checkAlongColumn(row, column)
 {
	cellsRow=new Array(5);
	var i=0;
	var row1=row;
	var column1=column;
	var upTot=0;
	var downTot=0;
	while(cellArray[row1][column1]==1)
	{
	upTot+=cellArray[row1][column1];
	if(i<5)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(row1==0)
	break;
	row1--;
	}
	column1=column;
	row1=row;
	while(cellArray[row1][column1]==1)
	{
	downTot+=cellArray[row1][column1];
	if(i<5 && row1!=row)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(row1==9)
	break;
	row1++;
	}
	columnTot=upTot+downTot-1;
	return columnTot;
 }
  function checkAlongDiagonal1(row, column)
  {
	cellsRow=new Array(5);
	var i=0;
	var row1=row;
	var column1=column;
	var upTot=0;
	var downTot=0;
	while(cellArray[row1][column1]==1)
	{
	upTot+=cellArray[row1][column1];
	if(i<5)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(row1==0 ||column1==9)
	break;
	row1--;
	column1++;
	}
	column1=column;
	row1=row;
	while(cellArray[row1][column1]==1)
	{
	downTot+=cellArray[row1][column1];
	if(i<5 && row1!=row)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(row1==9 || column1==0)
	break;
	row1++;
	column1--;
	}
	diagonal1Tot=upTot+downTot-1;
	return diagonal1Tot;
  }
  function checkAlongDiagonal2(row, column)
  {
	cellsRow=new Array(6);
	var i=0;
	var row1=row;
	var column1=column;
	var upTot=0;
	var downTot=0;
	while(cellArray[row1][column1]==1)
	{
	upTot+=cellArray[row1][column1];
	if(i<5)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(row1==0 ||column1==0)
	break;
	row1--;
	column1--;
	}
	column1=column;
	row1=row;
	while(cellArray[row1][column1]==1)
	{
	downTot+=cellArray[row1][column1];
	if(i<5 && row1!=row)
	{
	cellsRow[i]= getcellid(row1,column1);
	i++;
	}
	if(row1==9 || column1==9)
	break;
	row1++;
	column1++;
	}
	diagonal2Tot=upTot+downTot-1;
	return diagonal2Tot;
  } 
