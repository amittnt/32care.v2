/* global __webpack_public_path__:writable */
if(window.CONST && window.CONST.CDN_URL){
	__webpack_public_path__ = window.CONST.CDN_URL + "/";
}

window.CONST = (window.CONST || {});
window.CONST.APP = window.CONST.APP || "admin";
var pathname = location.pathname;
if(/^\/[a-z]+\/plugin\/customer\/.*$/.test(pathname)){
	window.CONST.APP  = "customer";
} else if(pathname.indexOf("/admin") == 0){
	window.CONST.APP  = "admin";
} else if(pathname.indexOf("/agent") == 0){
	window.CONST.APP = "agent";
} else if(pathname.indexOf("/dev") == 0){
	window.CONST.APP = "dev";
}