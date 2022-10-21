<!--取消鼠标右键-->
function refreshCache() {
"serviceWorker" in window.navigator && navigator.serviceWorker.controller ? confirm("是否确定刷新博文缓存") &&
navigator.serviceWorker
.controller.postMessage("refresh") : GLOBAL_CONFIG.Snackbar ? btf.snackbarShow("ServiceWorker未激活") : alert(
"ServiceWorker未激活")
}

function cn() {
window.close(), window.location = "about:blank"
}

function click(e) {
document.all && (2 != event.button && 3 != event.button || (alert("欢迎光临，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！"), oncontextmenu =
"return false")), document.layers && 3 == e.which && (oncontextmenu = "return false")
}
navigator.serviceWorker.addEventListener("message", (e => {
"success" === e.data && location.reload(!0)
})), "http://localhost:4000/" != window.location.href && "https://butterfly.top/" != window.location.href &&
"https://butterfly.top/" != window.location.href && "https://butterfly.top/" != window.location.href || "" == window.name
&&
(window.name = "hytc", Snackbar.show({
text: "欢迎来到丨米尔嘉丨的小站！",
actionText: "关闭",
backgroundColor: '#fb7299',
actionTextColor: "#ffffff",
pos: "bottom-center",
duration: "2000"
})), document.layers && (cn(), document.captureEvents(Event.MOUSEDOWN)), document.onmousedown = click,
document.oncontextmenu =
new Function("return false;"), document.onkeydown = document.onkeyup = document.onkeypress = function() {
if (123 == window.event.keyCode) return cn(), window.event.returnValue = !1, !1
}, $(document).keydown((function(e) {
if (1 == e.ctrlKey && 83 == e.keyCode) return console.log("ctrl+s"), !1
}));
