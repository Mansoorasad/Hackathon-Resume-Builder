document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-head');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling as HTMLElement;
            if (content) {
                content.classList.toggle('show');
            }
        });
    });
});
