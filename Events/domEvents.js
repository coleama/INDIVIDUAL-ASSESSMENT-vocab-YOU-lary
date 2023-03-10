import { getAllWords, deleteWord, getSingleWord } from '../api/vocabData';
import showCards from '../pages/vocabCards';
import addWord from '../components/forms/addWord';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // delete word
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getAllWords(user.uid).then(showCards);
        });
      }
    }

    // edit/update word
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWord(user.uid, wordObj));
    }
  });
};

export default domEvents;
