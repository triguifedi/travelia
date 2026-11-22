// Menu pour le telephone
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });
}


// Filtre des destinations
const filterButtons = document.querySelectorAll('.filter-btn');
const destinationCards = document.querySelectorAll('.destination-card');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const filter = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    destinationCards.forEach(function (card) {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


// Calcul du prix d'un voyage
const calculateBtn = document.getElementById('calculateBtn');

if (calculateBtn) {
  calculateBtn.addEventListener('click', function () {
    const price = Number(document.getElementById('destinationPrice').value);
    const people = Number(document.getElementById('people').value);
    const result = document.getElementById('priceResult');

    if (people <= 0) {
      result.textContent = 'Entrez le nombre de voyageurs.';
    } else {
      result.textContent = 'Prix total : ' + (price * people) + ' DT';
    }
  });
}


// Verification simple du formulaire de contact
const contactForm = document.getElementById('contactForm');


if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Veuillez remplir les champs obligatoires.';
      formMessage.className = 'form-message error';
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      formMessage.textContent = 'Veuillez entrer une adresse e-mail correcte.';
      formMessage.className = 'form-message error';
    } else {
      formMessage.textContent = 'Merci ' + name + ' ! Votre demande est bien remplie.';
      formMessage.className = 'form-message success';
      contactForm.reset();
    }
  });
}
