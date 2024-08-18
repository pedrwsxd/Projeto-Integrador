export function scrollUp() {
    const container = document.querySelector('.scroll-content');
    container.scrollBy({ top: -100, behavior: 'smooth' });
}

export function scrollDown() {
    const container = document.querySelector('.scroll-content');
    container.scrollBy({ top: 100, behavior: 'smooth' });
}