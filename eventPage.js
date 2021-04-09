var date = null;
chrome.storage.sync.get(["gitUser", "token"], function (user) {
	if (user.gitUser && user.token) {
		var Personal = {
			id: "Personal",
			title: "To Repo",
			contexts: ["selection"],
		};

		chrome.contextMenus.create(Personal);

		chrome.contextMenus.onClicked.addListener(function (clickData) {
			if (clickData.menuItemId == "Personal" && clickData.selectionText) {
				chrome.storage.sync.set({
					content: clickData.selectionText,
				});
				window.open(
					"Personal.html",
					"extension_popup",
					"width=500,height=500,status=no,scrollbars=yes,resizable=no"
				);
			}
		});
	}
});
