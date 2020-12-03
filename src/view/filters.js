const createNavMenuTemplate = (filters) => {
  const filterCounts = [];
  const getFilterCounts = () => {
    return filters.map((filter) => {
      filterCounts.push(filter.count);
    });
  };
  getFilterCounts();

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filterCounts[0]}</span></a>
        <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">${filterCounts[1]}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${filterCounts[2]}</span></a>
      </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`);
};


export {createNavMenuTemplate};
