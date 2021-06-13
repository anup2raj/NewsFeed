async function getData(url){
    return await fetch(url)
    .then(res => res.json())
    .then(data => data.items);
    // console.log(feed);
}
function addDiv(arr, id){
    // console.log(arr);
    // var flag=0;
    var mainDiv = document.querySelector(id)
    for(var i=0; i<arr.length; i++){
        var div = document.createElement("div");
        if(i == 0)  div.setAttribute("class", "carousel-item active");
        else    div.setAttribute("class", "carousel-item");
        div.innerHTML = `<a href="${arr[i].link}"><img class="card-img-top" src="${arr[i].enclosure.link}" alt="Card image cap" style="max-height: 450px;"></a><div class="card-body"><h5 class="card-title">${arr[i].title}</h5><p class="card-text">${arr[i].content}</p>`;
        mainDiv.appendChild(div);
    }
}

async function caroFun(){
    var feedPolitics = await getData("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thenewsdesk/the-latest-on-coronavirus-covid-19-t82no8kmz.rss");
    addDiv(feedPolitics, "#politics");

    var feedSpace = await getData("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss");
    addDiv(feedSpace, "#space");

    var feedSports = await getData("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thehindu/sportstarlive-rj3ttinvz.rss");
    addDiv(feedSports, "#sports");
}