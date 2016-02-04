$( window ).resize(function() {
  console.log("rez");
  var w = window.innerWidth; 
    var limite;
	 
	 if(w <= 349 )
	 {
	 	limite =100;
	 }
	 else if(w <= 768)
	 {
	 	limite =100
	 }
	 else if( w <=1264 )
	 {
	 	limite =220;
	 }
	 else if(w <= 1680)
	 {
	 	limite =300
	 }

	 var VarPreNoticia1  = $(".PreNoticia1 p").text();
	 var valor =LimitarCampos(VarPreNoticia1,limite);
	 $(".PreNoticia1 p").text(valor);
});

$( document ).ready(function() {
    var w = window.innerWidth; 
    var limite;
	 console.log(w);
	 if(w <= 349 )
	 {
	 	limite =100;
	 }
	 else if(w <= 768)
	 {
	 	limite =100
	 }
	 else if( w <=1264 )
	 {
	 	limite =220;
	 }
	 else if(w <= 1680)
	 {
	 	limite =300
	 }

	 var VarPreNoticia1  = $(".PreNoticia1 p").text();
	 var valor =LimitarCampos(VarPreNoticia1,limite);
	 $(".PreNoticia1 p").text(valor);

	 var varNoticia2desc = $(".Noticia2desc p").text();
	 valor = LimitarCampos(varNoticia2desc, 200);
	 $(".Noticia2desc p").text(valor);

	 var VarDescSabiasQue =$(".DescSabiasQue p").text();
	 var valor =LimitarCampos(VarDescSabiasQue,limite);
	 $(".DescSabiasQue p").text(valor);


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