import {
  getAllWords, getFavWord, getJsWords, getCSSWords, getGenWords
} from '../api/vocabData';
import { signOut } from '../utils/auth';
import showCards from '../pages/vocabCards';
import addWord from '../components/forms/addWord';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // get favorite words
  document.querySelector('#fav-cards').addEventListener('click', () => {
    getFavWord(user.uid).then(showCards);
  });

  // get all words
  document.querySelector('#all-cards').addEventListener('click', () => {
    getAllWords(user.uid).then(showCards);
  });

  // add new word
  document.querySelector('#add-word').addEventListener('click', () => {
    addWord(user.uid);
  });

  // filtering for javascript
  document.querySelector('#js-cards').addEventListener('click', () => {
    getJsWords(user.uid).then(showCards);
  });

  // filtering for css
  document.querySelector('#css-cards').addEventListener('click', () => {
    getCSSWords(user.uid).then(showCards);
  });

  // filtering for general terms
  document.querySelector('#general-cards').addEventListener('click', () => {
    getGenWords(user.uid).then(showCards);
  });
};

export default navigationEvents;
