function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
    var items = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    console.log(items)
    for (let i = 0; i < items.length; i++) {
        var a = parseInt(items[i].innerHTML,10)
        items[i].innerHTML = a + n
    }

}



function deepestChild() {
  const lis = document.querySelectorAll('div#grand-node div');
  var node = lis[0];
  while (node.children.length > 0) {
    node = node.children[0]
  }
  return node

}

