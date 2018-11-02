function confirmation(){
	var warning = document.getElementById("warning").style.visibility;
	if(warning!="visible"){
		document.getElementById("warning").style.visibility="visible";
		return;
	}
	document.getElementById("warnings").remove()
	document.body.style.textAlign="left";
	showSortedJson(sorteddata,document.body,"");
}
function showSortedJson(data,source,prefix){
	for (obj in data){
		var div = document.createElement('div');
		if(typeof data[obj] != 'object'){
			div.innerHTML=obj+":"+data[obj];
		}else{
			var a = document.createElement('a');
			a.innerHTML = obj;
			a.href = "#";
			a.id = prefix+obj;
			a.onclick = expandthis;
			div.append(a);
			if(source.parentElement!=undefined)
			if(size(data[obj])==1&&source.parentElement.children.length<3){
				for(one in data[obj])
					expand(a);
			}
		}
		source.append(div);
	}
}
function expand(holder){
		var scope = sorteddata;
	var path = holder.id.split(".");
	for(index in path)
		scope = scope[path[index]];
	holder.onclick=toggleShow;
	showSortedJson(scope,holder.parentElement,holder.id+".")
}
function expandthis(){
	expand(this);
}

function toggleShow(){
	var elementz = this.parentElement.getElementsByTagName("div");
	var exampleElement = elementz[0];
	    if (exampleElement.style.display == "none") {
			for(var i=0;i<elementz.length;i++){
				if(elementz[i].parentElement==this.parentElement||this.parentElement.parentElement.children.length<3)
        elementz[i].style.display = "block";
			}
    } else {
        			for(var i=0;i<elementz.length;i++)
        elementz[i].style.display = "none";
    }
}
function size(object){
	var size = 0;
	for (i in object){size++;}
		return size
}