import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Your Vocab Cards</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-cards">
                All Cards <span class="sr-only">All Languages</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="general-cards">General Terms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="js-cards">Javascript</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="css-cards">CSS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="fav-cards">Favorite Words</a>
            </li>
          </ul>
          <span class="navbar-text">
            <button id="add-word" class="btn btn-info">Add New Word</button>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
