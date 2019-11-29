console.log("hi!");
// Get News and Announcements from DIT University API
var ditNewsRequest = new XMLHttpRequest();

ditNewsRequest.open('GET', 'https://gscditu.com/blog/?rest_route=/wp/v2/posts', true);
ditNewsRequest.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (ditNewsRequest.status >= 200 && ditNewsRequest.status < 400) {
        var result = data;
        // console.log(result);
        var count = 1;
        result.some(event => {
            if(count===4){return true;}
            var title = event.title.rendered;
            var excerpt = event.excerpt.rendered;
            var imageurl = event.better_featured_image.media_details.sizes['type-medium'].source_url;
            // console.log(imageurl);
            if(count === 1){
                document.getElementById('article_title_1').innerHTML = title;
                document.getElementById('article_body_1').innerHTML = excerpt;
                document.getElementById('article_image-1').src = imageurl;
                document.getElementById('article_title_1').setAttribute('href',event.guid.rendered);
            }
            else if(count ===2){
                document.getElementById('article_title_2').innerHTML = title;
                document.getElementById('article_body_2').innerHTML = excerpt;
                document.getElementById('article_image-2').src = imageurl;
                document.getElementById('article_title_2').setAttribute('href',event.guid.rendered);
            }
            else{
                document.getElementById('article_title_3').innerHTML = title;
                document.getElementById('article_body_3').innerHTML = excerpt;
                document.getElementById('article_image-3').src = imageurl;
                document.getElementById('article_title_3').setAttribute('href',event.guid.rendered);
            }

            count++;
        });
  } else {
        console.log('error');
}
}
                        
ditNewsRequest.send();





