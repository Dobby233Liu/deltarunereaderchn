var sorteddata = {};
$.getJSON("lang_en.json", function(json) {
	doIndexing(json);
});
function doIndexing(data){
var splitname;
function recursiveSort(input,index,indexofindex){
	if(input[index[indexofindex]]==undefined)
		input[index[indexofindex]]={};
	if(index[indexofindex+1]==undefined){
		input[index[indexofindex]]=data[line];
		return
    }
	recursiveSort(input[index[indexofindex]],index,indexofindex+1)
}
for(line in data){
splitname =  line.split("_");
recursiveSort(sorteddata,splitname,0);
}
}