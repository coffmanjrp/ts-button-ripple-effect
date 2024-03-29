const buttons = document.querySelectorAll(
  '.ripple'
) as NodeListOf<HTMLButtonElement>;

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = (e.target as HTMLButtonElement).offsetTop;
    const buttonLeft = (e.target as HTMLButtonElement).offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
