import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navBar';
// import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../Events/domEvents';
import navigationEvents from '../Events/navEvents';
import formEvents from '../Events/FormEvents';
import showCards from '../pages/vocabCards';
import { getAllWords } from '../api/vocabData';

const startApp = (user = null) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  navigationEvents(user);
  if (user) {
    getAllWords(user.uid).then((cards) => showCards(cards));
  }
};

export default startApp;
