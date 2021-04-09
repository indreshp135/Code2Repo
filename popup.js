var backend = "http://localhost:8000";
$(function () {
	chrome.storage.sync.get(["gitUser", "pwd", "token"], function (user) {
		if (user.gitUser && user.token) {
			$("#helloMessage").text("Hello " + user.gitUser);
			document.getElementById("formDiv").innerHTML = "";
		} else {
			$("#reminders").hide();
			$("#logoutBtn").hide();
		}
	});

	$("#logoutBtn").click(function (e) {
		chrome.storage.sync.clear();
		chrome.runtime.reload();
	});

	$("#signInForm").submit(function (e) {
		e.preventDefault();
		//prettier-ignore
		chrome.storage.sync.set({ "gitUser": $("#gitUser").val(), "pwd": $("#pwd").val(), "token": $("#token").val() }, function() {
            chrome.runtime.reload();
            location.reload();
        });
	});
});
