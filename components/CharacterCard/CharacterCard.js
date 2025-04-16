export function createCharacterCard(character) {
  const characterName = character["name"];
  const characterImage = character["image"];
  const characterStatus = character["status"];
  const characterType = character["type"];
  const occurences = character["episode"].length;
  const li = `<li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${characterImage}"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${characterName}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${characterStatus}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${characterType}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurences}</dd>
            </dl>
          </div>
        </li>`;
  return li;
}
