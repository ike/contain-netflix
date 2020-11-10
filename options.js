function onOptionsPageSave(e)
{
	e.preventDefault();

	// Save settings
	browser.storage.sync.set({
		"dont_override_containers": document.querySelector("#dont_override_containers").checked
	});

	browser.runtime.reload();
}

function onOptionsPageLoaded()
{
	// Load saved settings or use defaults when nothing was saved yet
	var storageItem = browser.storage.sync.get();
	storageItem.then((res) =>
	{
		document.querySelector("#dont_override_containers").checked = res.override_containers || false;
	});
}

document.addEventListener("DOMContentLoaded", onOptionsPageLoaded);
document.querySelector("form").addEventListener("submit", onOptionsPageSave);
