chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      if (details.url.includes("google.com/search?q=Pujan+Sharma")) {
        return { redirectUrl: "https://pujansharma.github.io/" };
      }
    },
    { urls: ["*://www.google.com/*"] },
    ["blocking"]
  );
  