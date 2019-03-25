function onExecuted(result) {
  
  //document.querySelector("#debug").innerHTML = `<p>Running, result: ${result}</p>`;
  var errMsg = "";
  var i= 0;
  if (result[0]==null || result[0]==undefined) {
    document.querySelector("#status").innerHTML = `<p>Script returned no array</p>`;  
    return;
  }
  for (r of result[0]) {
    i++;
    try {
      browser.downloads.download({
        url: r,
      });
    } catch (e) {
      errMsg += e;
    }
    
  }
  if (errMsg!="") document.querySelector("#debug").innerHTML = `<p>There were error: ${errMsg}</p>`;
  document.querySelector("#status").innerHTML = `<p>Downloaded ${i} images</p>`;
}

function onError(error) {
  document.querySelector("#status").innerHTML = `<p>Error occured : ${error}</p>`;
}

var executing = browser.tabs.executeScript({
  file: "script.js",
});
executing.then(onExecuted, onError);
