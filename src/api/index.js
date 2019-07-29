import $ from "jquery";

const url =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?";

function fetchImages(tags) {
  return new Promise((resolve, reject) => {
    $.getJSON(url, {
      tags: tags,
      tagmode: "all",
      format: "json"
    })
      .done(result => {
        resolve(result);
      })
      .fail(error => {
        reject(error);
      });
  });
}

export { fetchImages };
