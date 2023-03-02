console.log('testing')
const body = document.body
body.append('testing')

// scrape likes and views from twitter
   // traverse helper
 let likeLength = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-901oao r-1nao33i r-1loqt21 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0").length
 likeLength = likeLength - 1
   // select likes and views
let likes = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-901oao r-1nao33i r-1loqt21 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0")[likeLength].firstElementChild.firstChild.firstChild.firstChild.firstChild.data
let views = document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2")[0].lastChild.firstChild.firstElementChild.firstChild.firstChild.firstChild.firstChild.data

// format into usable numbers
if (views.includes('M')) {
    views = views.replace('M', '')
    views = views * 1000000
} else if (views.includes('K')) {
    views = views.replace('K', '')
    views = views * 1000
} else if (views.includes(',')) {
    views = views.replace(',', '')
}
if (likes.includes('M')) {
    likes = likes.replace('M', '')
    likes = likes * 1000000
} else if (likes.includes('K')) {
    likes = likes.replace('K', '')
    likes = likes * 1000
} else if (likes.includes(',')) {
    likes = likes.replace(',', '')
}
 // log values for debugging
console.log(`likes: ${likes}`)
console.log(`views: ${views}`)

// send to background.js using firefox api
let numbers = [likes, views]
browser.runtime.sendMessage({data: numbers})