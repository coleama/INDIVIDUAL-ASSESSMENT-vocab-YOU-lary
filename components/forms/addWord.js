import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addWord = (user, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-group">
      <label for="title">New Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter New Word" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Definition</label>
      <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <div class="mb-3">
    <label for="select-language" class="form-label">Select language</label>
    <select id="select-language" class="form-select" aria-label="language select">
      <option selected>Select a language</option>
      <option value="JavaScript"}">JavaScript</option>
      <option value="General Term"}">General Terms</option>
      <option value="CSS"}">CSS</option>
    </select>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
      <label class="form-check-label" for="fav">Favorite?</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit New Word
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addWord;
