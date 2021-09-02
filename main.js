const Nav = {
  open_btn: document.querySelector('.open-btn'),
  close_btn: document.querySelector('.close-btn'),
  boxes: document.querySelectorAll('.nav'),

  addListeners() {
    Nav.open_btn.addEventListener('click', () => Nav.boxes.forEach(box => box.classList.add('visible')))
    Nav.close_btn.addEventListener('click', () => Nav.boxes.forEach(box => box.classList.remove('visible')))
  }
}

Nav.addListeners()