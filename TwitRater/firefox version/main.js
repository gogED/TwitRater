const getRating = (likes, views) => {
    i = likes / views
    return i * 100
}


// manually input likes and views
const insertRating = () => {
    let likes = document.querySelector('#likes').value
    let views = document.querySelector('#views').value
    let output = document.getElementById("value").innerHTML

    if (likes == "" || views == "") {
        return
    } else {
        document.getElementById("value").innerHTML = getRating(likes, views)
    }
}

// recieve data from content.js
browser.runtime.onMessage.addListener((message) => {
    console.log(message.data)
    let likes = message.data[0]
    let views = message.data[1]
    document.getElementById("value").innerHTML = getRating(likes, views)
})
// send singal to content.js when extension is clicked
browser.tabs.query({active: true, currentWindow: true}).then(function(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {data: "Hello from background.js!"});
  });
  

// get button functionality
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("get-button").addEventListener("click", insertRating);
  });
