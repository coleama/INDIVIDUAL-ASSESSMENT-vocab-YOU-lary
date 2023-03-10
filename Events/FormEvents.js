import { getAllWords, createWord, updateWord } from '../api/vocabData';
import showCards from '../pages/vocabCards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // create new term
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#select-language').value,
        favorite: document.querySelector('#favorite').checked,
        uid: user.uid,
        timestamp: new Date(Date.now()).toLocaleString(),
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getAllWords(user.uid).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#select-language').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
        uid: user.uid
      };

      updateWord(payload).then(() => {
        getAllWords(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
