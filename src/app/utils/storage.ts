export function addNewEvent(event: any) {
  const favoriteEvents = getFavoriteEvents();
  const nextFavoriteEvents = [...favoriteEvents, event];
  localStorage.setItem('favoriteEvents', JSON.stringify(nextFavoriteEvents));
  return nextFavoriteEvents;
}

export function getFavoriteEvents() {
  const favoriteEvents = localStorage.getItem('favoriteEvents');
  return favoriteEvents ? JSON.parse(favoriteEvents) : [];
}

export function removeEvent(removeEvent: any) {
  const favoriteEvents = getFavoriteEvents();

  const nextFavoriteEvents = favoriteEvents.filter(
    (event: any) => event.id !== removeEvent.id
  );

  localStorage.setItem('favoriteEvents', JSON.stringify(nextFavoriteEvents));
  return nextFavoriteEvents;
}



