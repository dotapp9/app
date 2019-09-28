var Packages = {
	addPackage : function(callback){
		ApiService.post(document.packages, 'tour_package', 'http://localhost:9080/api/1/test', successCallback, errorCallback);

/*		var packages = document.packages;
		var request = {};
		var keyElems = "";
		var tokenElems = "";
		var count=0;
		for(var idx=0; idx<packages.length; idx++){
			var packageItem = packages[idx];
			if(packageItem['localName'] === 'input'){
				if(count>0){
					keyElems +=","+packageItem['name'];
					tokenElems += ",$"+packageItem['name'];
				}else{
					keyElems +=packageItem['name'];
					tokenElems += "$"+packageItem['name'];
				}
				count++;
				request[packageItem['name']] = packageItem['value'];
			}
		}
		var query = "INSERT INTO tour_package("+keyElems+") VALUES ("+tokenElems+")";
		request.query = query;
	$.ajax({
		type: 'POST',
		url: 'http://localhost:9080/api/1/test',
		crossDomain: true,
		contentType:'application/json',
		data: JSON.stringify(request),
		dataType: 'json',
		success: function(responseData, textStatus, jqXHR) {
			callback(responseData, textStatus);
		},
		error: function (responseData, textStatus, errorThrown) {
			alert('POST failed.');
		}
	});*/
		
	}/*,
	addParam : function(key, value, request){
		if(request != "")
			request += "&";
		request += key+"="+value;
		return request;
	},
	addQryParam : function(key, value, request){
		if(request != "")
			request += "&";
		request += key+"="+value;
		return request;
	},*/

}