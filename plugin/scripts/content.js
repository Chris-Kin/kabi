console.log('ctjs');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd == 'test') alert(request.value);
  sendResponse('我收到了你的消息！');
});


setInterval(() => {
  chrome.runtime.sendMessage({ greeting: '你好，我是content-script呀，我主动发消息给后台！' }, function (response) {
    console.log('收到来自后台的回复：' + response);
  });
}, 3000);