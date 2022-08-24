
document.getElementById('bttn').onclick = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    ab.submitForm(title.value, author.value);
  };
  
  if (localStorage.getItem('bookdata') != null) {
    ab.getLocalStorageData();
  }
  
  const deleteBookObj = document.querySelectorAll('.remove-book');
  deleteBookObj.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      ab.deleteBooks(trigger.dataset.bookid);
    });
  });