const getRating = (likes, views) => {
    i = likes / views
    return i * 100
}



const insertRating = () => {
    if (document.querySelector('#likes').value == "" || document.querySelector('#views').value == "") {
        return
    } else {
        document.getElementById("value").innerHTML = getRating(document.querySelector('#likes').value, document.querySelector('#views').value)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("get-button").addEventListener("click", insertRating);
  });