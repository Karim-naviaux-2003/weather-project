/**
 * Clears the content of the page.
 */
export const clearPage = () => {
  // Clear the content of the page.
  const main = document.querySelector('main');
  main.innerHTML = '';
};

/**
 * Changes the title of the page.
 * @param {string} titleOfPage - The new title for the page.
 */
export const changeTitle = (titleOfPage) => {
  console.log('Changing title to:', titleOfPage);
  document.title = titleOfPage;
};
