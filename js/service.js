var ApiService = {
	post : function(requestData, tableId, url, successCallback, errorCallback){
		var request = {};
		var keyElems = "";
		var tokenElems = "";
		var count=0;
		for(var idx=0; idx<requestData.length; idx++){
			var packageItem = requestData[idx];
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
		var query = "INSERT INTO "+tableId+"("+keyElems+") VALUES ("+tokenElems+")";
		request.query = query;
	$.ajax({
		type: 'POST',
		url: url,
		crossDomain: true,
		contentType:'application/json',
		data: JSON.stringify(request),
		dataType: 'json',
		success: function(responseData, textStatus, jqXHR) {
			successCallback(responseData, textStatus);
		},
		error: function (responseData, textStatus, errorThrown) {
			errorCallback('POST failed.', textStatus);
		}
	});
	},
	put : function(requestData, tableId, url, successCallback, errorCallback){
		var request = {};
		var keyElems = "";
		var tokenElems = "";
		var count=0;
		for(var idx=0; idx<requestData.length; idx++){
			var packageItem = requestData[idx];
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
		var query = "INSERT INTO "+tableId+"("+keyElems+") VALUES ("+tokenElems+")";
		request.query = query;
	$.ajax({
		type: 'PUT',
		url: url,
		crossDomain: true,
		contentType:'application/json',
		data: JSON.stringify(request),
		dataType: 'json',
		success: function(responseData, textStatus, jqXHR) {
			successCallback(responseData, textStatus);
		},
		error: function (responseData, textStatus, errorThrown) {
			errorCallback('PUT failed.', textStatus);
		}
	});
	},
	getQuery : function(requestData, query, url, successCallback, errorCallback){
		var request = {};
		var keyElems = "";
		var tokenElems = "";
		var count=0;
		for(var idx=0; idx<requestData.length; idx++){
			var packageItem = requestData[idx];
			if(packageItem['localName'] === 'input'){
				if(packageItem['name'] !== "")
				request[packageItem['name']] = packageItem['value'];
			}
		}
		request.query = query;
	$.ajax({
		type: 'POST',
		url: url,
		crossDomain: true,
		contentType:'application/json',
		data: JSON.stringify(request),
		dataType: 'json',
		success: function(responseData, textStatus, jqXHR) {
			successCallback(responseData, textStatus);
		},
		error: function (responseData, textStatus, errorThrown) {
			errorCallback('POST failed.', textStatus);
		}
	});
	}
};