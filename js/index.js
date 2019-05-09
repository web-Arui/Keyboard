
var keys = {
  0: { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
  1: { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
  2: { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', 7: 'i', length: 8 },
  length: 3
}
var hash = {
  'q': 'baidu.com', 'w': 'txrui.cn', 'e': 'sina.com', 'r':'taobao.com','t':'github.com','y':'mi.com','u':'4399.com'
}
var tan = document.querySelector('#tan')
for (var i = 0; i < keys.length; i++) {
  var big = document.createElement('div')
  tan.appendChild(big)
  for (var j = 0; j < keys[i].length; j++) {
    var somall = document.createElement('kbd')       
    big.appendChild(somall)
    somall.innerHTML = keys[i][j]
    somall.className = 'key'
    if(hash[keys[i][j]]==undefined){
     
    }else{
      var img = document.createElement('img')
    img.src = 'http://' + hash[keys[i][j]] + '/favicon.ico'
      somall.appendChild(img)
    }
    
    
  }
}
document.onkeypress = function (e) {
  let key = e['key']
  let rui = hash[key]
  //location.href = 'http://'+ rui
  window.open('http://' + rui, '_blank')
}