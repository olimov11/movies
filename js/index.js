const KINOLAR = movies.slice(0, 50)
const elForm = document.querySelector('.js-form')
const elCardList = document.querySelector('.card-list')
const elCardTemplate = document.getElementById('card-template').content;
const elCategorySelect = document.querySelector('.category-select')

let getMoviesCategory = (films) => {
   let categories = []
   films.forEach(film => {
      film.categories.forEach(category => {
         if (!categories.includes(category)) {
            categories.push(category);
         }

      });
   });

   return categories
}
getMoviesCategory(movies)

let renderCategories = () => {
   let allCategories = getMoviesCategory(KINOLAR)


   allCategories.forEach((category) => {
      let categoryOption = document.createElement('option')

      categoryOption.textContent = category
      categoryOption.value = category

      elCategorySelect.appendChild(categoryOption)
   });
}
renderCategories()

let renderMovies = (arr) => {
   elCardList.innerHTML = null
   arr.forEach(movie => {
      const elCard = elCardTemplate.cloneNode(true)
      let title = elCard.querySelector('.card-title')
      title.textContent = movie.title
      let img = elCard.querySelector('.card-img-top')
      img.src = movie.bigPoster
      elCardList.appendChild(elCard)

   });
}


let handleFilter = (evt) => {
   evt.preventDefault();

   let filterdMovies = []

   let janr = elCategorySelect.value

   if (janr === 'all') {
      filterdMovies = KINOLAR
   } else filterdMovies = KINOLAR.filter(movie => movie.categories.includes(janr))

   renderMovies(filterdMovies);
}

elForm.addEventListener('submit', handleFilter)
renderMovies(KINOLAR)