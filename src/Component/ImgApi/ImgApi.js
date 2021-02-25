const ImgApi = (searchQuery, page) => {
  return fetch(
    `https://pixabay.com/api/?key=16360208-b38b3071e12220d724142a6b1&q=${searchQuery}&image_type=photo&pretty=true&page=${page}&per_page=12`
  )
    .then((response) => response.json())
    .then((data) => data.hits);
};

export default ImgApi;
