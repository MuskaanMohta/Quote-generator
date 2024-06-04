let quote = document.getElementById("quote")
let author = document.getElementById("author")
let api_url = "https://api.quotable.io/random"
async function getquote(url){
    let response = await fetch(url)
    let data = await response.json()
    
    quote.innerHTML = data.content
    author.innerHTML = data.author
}
getquote(api_url)