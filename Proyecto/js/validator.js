$( document ).ready(function() {
    
	 var VarPreNoticia1  = $(".PreNoticia1 p").text(); 
	 var valor =LimitarCampos(VarPreNoticia1,115);
	 $(".PreNoticia1 p").text(valor);
});


  function LimitarCampos(campo,limite)
{
	var temp = campo;
	var str = "..."
	if(temp.length>=limite)
	{
		temp=temp.substring(0,limite);
		temp=temp.concat(str);
		//console.log(temp);	
		
	}
	return temp;
}