// background.js
chrome.runtime.onInstalled.addListener(function() {
    // This event is triggered when the extension is installed or updated
    // You can start your Python script here or invoke it when needed
    startPythonScript();
  });
  
  function startPythonScript() {
    // Use chrome.runtime.sendNativeMessage to communicate with your Python script
    chrome.runtime.sendNativeMessage('ihlfiidgghahcmjfoncdbdkjmfpkifkd', { message: '' });
  }
  