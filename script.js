const chapters = [
  {
    image: 'assets/aurora-and-phillip.webp',
    alt: 'Devansh and Pari dressed as Aurora and Prince Phillip',
    tag: 'Aurora & Prince Phillip',
    title: 'A storybook kind of beginning',
    message: "Even in a fairytale full of magic, I'd still look for you first. My favourite plot twist was finding you — and getting to stand beside you in all the chapters that followed.",
    wide: true
  },
  {
    image: 'assets/belle-and-beast.webp',
    alt: 'Devansh and Pari in a Beauty and the Beast-inspired royal look',
    tag: 'Belle & the Beast',
    title: 'A little golden magic',
    message: 'A golden ballgown, a royal-looking prince and my favourite girl making an ordinary outing feel like a scene from a storybook. I love your sense of fun, Pari — never lose it.'
  },
  {
    image: 'assets/cinderella-portrait.webp',
    alt: 'Pari wearing a sparkling blue Cinderella-inspired ballgown',
    tag: 'Cinderella',
    title: 'The girl behind the glass slipper',
    message: 'The crown and that blue dress are lovely, but they are not what make you a princess to me. It is your kind heart, your determination and the way you keep dreaming even when the day is difficult.'
  },
  {
    image: 'assets/blue-ballroom.webp',
    alt: 'Devansh and Pari dressed in Cinderella and prince-inspired outfits',
    tag: 'The royal rehearsal',
    title: 'Our kind of royal date',
    message: 'Who says a fairytale needs a ballroom? Apparently ours can find a royal moment just about anywhere. I would still save you the first dance — even if we have to make our own music.'
  },
  {
    image: 'assets/mulan.webp',
    alt: 'Devansh and Pari in Mulan-inspired outfits',
    tag: 'Mulan',
    title: 'For my brave girl',
    message: 'May you always trust your own voice, stand tall for what matters and make room for every dream that belongs to you. I admire your strength, your opinions and that wonderfully stubborn spark.'
  },
  {
    image: 'assets/pocahontas.webp',
    alt: 'Devansh and Pari in Pocahontas-inspired outfits',
    tag: 'Pocahontas',
    title: 'To all the places still waiting',
    message: 'There are so many places we have not seen and so many stories we have not made yet. I hope we keep saying yes to little adventures, discovering new corners of the world and collecting memories along the way.'
  },
  {
    image: 'assets/tangled-cafe.webp',
    alt: 'Devansh and Pari in Tangled-inspired outfits at a cafe',
    tag: 'Rapunzel',
    title: 'A little lantern-light magic',
    message: 'Some days do not need a grand castle. A cosy café, your smile and a little time together can feel like the whole kingdom to me. You have a way of making the everyday feel special.'
  },
  {
    image: 'assets/tangled-selfie.webp',
    alt: 'A close selfie of Devansh and Pari in Tangled-inspired outfits',
    tag: 'The lantern chapter',
    title: 'You make my world brighter',
    message: 'If I could put every warm little moment with you into a lantern, we would have enough light for a thousand nights. Keep that lovely curiosity of yours glowing, my girl.' ,
    wide: true
  },
  {
    image: 'assets/lavender-fairy.webp',
    alt: 'Pari in a lavender fairy-princess outfit with wings and a wand',
    tag: 'The little fairy chapter',
    title: 'Never outgrow your magic',
    message: 'For the girl who can get excited about sparkles, flowers and the tiniest magical details: please never lose that playful wonder. The world needs more of the joy you bring into it.'
  },
  {
    image: 'assets/lavender-bridal.webp',
    alt: 'Devansh and Pari in lavender royal and bridal-inspired outfits',
    tag: 'A dream in lavender',
    title: 'A glimpse of a someday',
    message: 'One day, I hope we look back at all these dress-up dreams from the home we have built together. Until then, keep dreaming in every shade you love. I will be cheering for every version of your future.'
  }
];

const photoGrid = document.getElementById('photoGrid');
const dialog = document.getElementById('photoDialog');
const dialogImage = document.getElementById('dialogImage');
const dialogKicker = document.getElementById('dialogKicker');
const dialogTitle = document.getElementById('dialogTitle');
const dialogMessage = document.getElementById('dialogMessage');

chapters.forEach((chapter, index) => {
  const card = document.createElement('article');
  card.className = `photo-card${chapter.wide ? ' wide' : ''}`;
  card.innerHTML = `
    <div class="photo-visual"><img src="${chapter.image}" alt="${chapter.alt}" loading="lazy"></div>
    <div class="photo-copy">
      <p class="photo-kicker">${String(index + 1).padStart(2, '0')} · ${chapter.tag}</p>
      <h3>${chapter.title}</h3>
      <p>${chapter.message}</p>
      <button class="photo-more" type="button" aria-label="View ${chapter.tag} photo and message">A closer look <span aria-hidden="true">↗</span></button>
    </div>`;
  card.querySelector('.photo-more').addEventListener('click', () => openPhoto(chapter));
  card.querySelector('img').addEventListener('click', () => openPhoto(chapter));
  card.querySelector('img').style.cursor = 'zoom-in';
  photoGrid.appendChild(card);
});

function openPhoto(chapter) {
  dialogImage.src = chapter.image;
  dialogImage.alt = chapter.alt;
  dialogKicker.textContent = chapter.tag;
  dialogTitle.textContent = chapter.title;
  dialogMessage.textContent = chapter.message;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.getElementById('openStory').addEventListener('click', () => {
  bloomPetals(24);
  document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
});

const envelopeButton = document.getElementById('envelopeButton');
const loveLetter = document.getElementById('loveLetter');
envelopeButton.addEventListener('click', () => {
  const isOpen = envelopeButton.classList.toggle('is-open');
  envelopeButton.setAttribute('aria-expanded', String(isOpen));
  envelopeButton.querySelector('.envelope-label').innerHTML = isOpen
    ? 'Your letter is open <span aria-hidden="true">♡</span>'
    : 'Tap to open your letter <span aria-hidden="true">♡</span>';
  if (isOpen) {
    window.setTimeout(() => {
      loveLetter.hidden = false;
      loveLetter.scrollIntoView({ behavior: 'smooth', block: 'center' });
      bloomPetals(18);
    }, 470);
  } else {
    loveLetter.hidden = true;
  }
});

function bloomPetals(count = 12) {
  const layer = document.getElementById('petalLayer');
  const symbols = ['✿', '❀', '✽', '✧'];
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${12 + Math.random() * 17}px`;
    petal.style.animationDuration = `${4 + Math.random() * 4}s`;
    petal.style.animationDelay = `${Math.random() * .9}s`;
    petal.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
    layer.appendChild(petal);
    petal.addEventListener('animationend', () => petal.remove(), { once: true });
  }
}
