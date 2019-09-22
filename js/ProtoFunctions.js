function parseInt(x){
//alert (x);
	var parsedInt = 0;
	var n = x.search(/\d/);
	var m = x.search(/(\d\D*$)/);
	alert(x.substring(n, m + 1));
	return x.substring(n, m + 1);
}