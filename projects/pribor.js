
//===================
// Приборные функции
//===================

function initPribor(id,p){
	var obj=document.getElementById(id);	
	obj.addEventListener("load",function(){		
		p.obj=document.getElementById(id);			
		p.view=this.contentDocument.defaultView;	
		p.view.init(p.params);
	},false);
}

