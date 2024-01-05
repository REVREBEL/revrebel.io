
var byId = function (id) { return document.getElementById(id); }
var url;
if(byId('thrive_connection_tag')){
	url = byId('thrive_connection_tag').src; // no I18N
}else{
	url = byId('thrive_script').src; // no I18N
}
var arr = url.split("/");
var apiDomain = arr[0] + "//" + arr[2] + '/';

var referralID = getUrlParameter('thrive_ref_id'); // NO I18N
var widget_code = getUrlParameter('widget_code'); // NO I18N
function ZTsetRefID(){
	var consent = getConsentCookieInLocalStorage();
	if (referralID && widget_code && (consent === "accepted" || consent === "disabled")) {
		setRefCookieInLocalStoarge();
	}
}

// Http Request
function httpRequest(method, url, data, credRequired) {
	//var isCredRequired = !credRequired ? true : credRequired
	var isCredRequired = (typeof credRequired === undefined) ? true : credRequired

	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, apiDomain + 'thrive-publicapi/' + url);
		xhr.withCredentials = isCredRequired;
		if (typeof getData !== 'undefined' && getData && getData.member_auth_token !== null && getData.member_auth_token !== undefined) {
			xhr.setRequestHeader('thriveauthorization', getData.member_auth_token);
		}
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				var data = {};
				if (!xhr.response) {
					data.status = this.status;
				} else {
					data = JSON.parse(xhr.response);
					data.status = this.status;
				}
				resolve(data);
			} else {
				resolve({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		// Added
		if (method === "POST") {
			xhr.send(data);
		} else {
			xhr.send();
		}
	});
}

function externalHttpRequest(method, url, data, credRequired) {
	var isCredRequired = (typeof credRequired === undefined) ? true : credRequired
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.withCredentials = isCredRequired;
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				var data = {};
				if (!xhr.response) {
					data.status = this.status;
				} else {
					data = JSON.parse(xhr.response);
					data.status = this.status;
				}
				resolve(data);
			} else {
				resolve({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		if (method === "POST") {
			xhr.send(data);
		} else {
			xhr.send();
		}
	});
}

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName;
	for (var i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

function getRefCookieInLocalStorage(widgetCode){
	try{
		if(widgetCode !== null){
			var thriveRefVal =  localStorage.getItem(widgetCode+'_thrive_ref_id'); // NO I18N
			return thriveRefVal;
		}
	}catch(e){
	}
	return null;
}

function getConsentCookieInLocalStorage(){
	try{
		var userConsent =  localStorage.getItem("ZTuserConsent"); // NO I18N
		return userConsent;
	}catch(e){
	}
	return null;
}

function setConsentCookieInLocalStorage(consentValue){
	try{
		localStorage.setItem('ZTuserConsent', consentValue); // NO I18N
	}catch(e){
	}
	return null;
}

function deleteRefCookieInLocalStorage(widgetCode){
	try{
		if(widgetCode !== null){
			localStorage.removeItem(widgetCode+'_thrive_ref_id');// NO I18N
			return true;
		}
	}catch(e){
	}
	return null;
}

async function setRefCookieInLocalStoarge(){
	try {
		var finalCookie;
		if(referralID !== undefined && referralID !== null && widget_code !== undefined && widget_code !== null){
			var old_cookie = getRefCookieInLocalStorage(widget_code);
			var new_cookie = referralID;
			if(new_cookie !== null && old_cookie === null){
				finalCookie = new_cookie;
			}else if(old_cookie !== new_cookie){
				var data ={
					"old_cookie_value":old_cookie, // NO I18N
					"new_cookie_value":new_cookie // NO I18N
				};
				var cookieResponse = await httpRequest('POST', 'widget/' + widget_code + '/validatecookie', JSON.stringify(data),false); // NO I18N
				finalCookie = cookieResponse.data.cookie_to_set;
			}else{
				finalCookie = new_cookie;
			}
			if(finalCookie !== null && finalCookie !== undefined && (typeof finalCookie === 'string' || finalCookie instanceof String)){
				localStorage.setItem(widget_code+'_thrive_ref_id', finalCookie); // NO I18N
			}
			return true;
        }
        } catch (e) {
                return false;
        }
}

async function userNewPurchase(data){
	if(data['widgetcode']){
		var refCookie = getRefCookieInLocalStorage(data.widgetcode);
		if(refCookie){
			//data.purchase_cookie = refCookie;
			data.thrive_ref_id = refCookie;
		}
		purchaseResponse = await httpRequest('POST', 'widget/' + data.widgetcode + '/purchase', JSON.stringify(data),false); // NO I18N
		if(purchaseResponse.status === 201){
			var cookieData = {
				'widget_code':data.widgetcode,// NO I18N
				'messageType':'delete_Thrive_Cookie'// NO I18N
			}
			deleteRefCookieInLocalStorage(data.widgetcode);
			ZTthrivePostMessage(cookieData);
		}
		return purchaseResponse;
	}
	return null;
}
