import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showCards = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
      <p class="card-text bold">${item.favorite ? '<span class="badge badge-info favorite-badge"><i class="fa fa-star" aria-hidden="true"></i> Favorite</span>' : '<br>'}</p>
      <p class="card-text">${item.definition}</p>
      <p class="card-text"> Date created:${item.timestamp}</p>
      <i id="edit-word-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
      <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
    </div>
  </div>`;
  });
  renderToDOM('#main-page', domString);
};

export default showCards;
