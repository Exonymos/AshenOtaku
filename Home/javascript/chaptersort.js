/* ====== Sort Chapters ====== */

const sortButton = document.getElementById('sort-button');
const chaptersContainer = document.getElementById('chapters');
const chapters = chaptersContainer.children;

let sortOrder = 'asc';

sortButton.addEventListener('click', () => {
  if (sortOrder === 'asc') {
    sortOrder = 'desc';
    sortChapters('desc');
  } else {
    sortOrder = 'asc';
    sortChapters('asc');
  }
});

function sortChapters(order) {
  const sortedChapters = Array.from(chapters).sort((a, b) => {
    const aIndex = parseInt(a.id.replace('chapter', ''));
    const bIndex = parseInt(b.id.replace('chapter', ''));
    if (order === 'asc') {
      return aIndex - bIndex;
    } else {
      return bIndex - aIndex;
    }
  });

  sortedChapters.forEach((chapter) => {
    chaptersContainer.appendChild(chapter);
  });
}
