let color = '#3aa757';
chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color})
    console.log("default color set to", color)
})