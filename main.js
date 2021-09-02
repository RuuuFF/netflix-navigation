const Nav = {
  open_btn: document.querySelector('.open-btn'),
  close_btn: document.querySelector('.close-btn'),
  boxes: document.querySelectorAll('.nav'),

  addListeners() {
    Nav.open_btn.addEventListener('click', () => Nav.boxes.forEach(nav_el => nav_el.classList.add('visible')))
    Nav.close_btn.addEventListener('click', () => Nav.boxes.forEach(nav_el => nav_el.classList.remove('visible')))
  }
}

Nav.addListeners()