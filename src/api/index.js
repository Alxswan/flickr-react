import $ from "jquery";

const url =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?";

export default function fetchImages(tags) {
  return $.getJSON(url, {
    tags: tags,
    tagmode: "all",
    format: "json"
  })
}
