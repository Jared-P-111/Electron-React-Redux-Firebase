import db from '../db/firestore';

export const fetchChats = () => {
  return db
    .collection('chats')
    .get()
    .then((snapshot) => {
      //<== Snapshot is the object to extract from the promise given by firestore
      const data = snapshot.doc.map((doc) => {
        return doc.data();
      });

      return data;
    });
};
