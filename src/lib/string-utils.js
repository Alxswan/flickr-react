function getAuthorName(author) {
  return author.split('"')[1];
}

function getDateString(date) {
  return `${new Date(date).toLocaleDateString()}`;
}

function limitTags(tags, count) {
  return tags
    .split(" ")
    .map((tag, i) => {
      return count > i ? tag : "";
    })
    .join(" ");
}

function getTagString(tags) {
  return tags ? `Tags: ${limitTags(tags, 15)}` : "";
}

export { getAuthorName, getDateString, getTagString };
