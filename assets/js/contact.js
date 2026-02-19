const form = document.querySelector('#contact-form');
const msg = document.querySelector('#form-message');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nom = form.nom.value.trim();
    const telephone = form.telephone.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value.trim();
    const message = form.message.value.trim();

    if (!nom || !telephone || !service || !message) {
      msg.textContent = 'Merci de remplir les champs obligatoires.';
      msg.style.color = '#b42318';
      return;
    }

    const emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      msg.textContent = 'Veuillez entrer un email valide.';
      msg.style.color = '#b42318';
      return;
    }

    msg.textContent = 'Merci ! Votre demande est prête à être envoyée. (Intégration backend à connecter)';
    msg.style.color = '#157347';
    form.reset();
  });
}
