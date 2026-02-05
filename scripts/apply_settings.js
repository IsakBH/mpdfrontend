window.addEventListener('load', apply_transparency);
function apply_transparency() {
    const istransparent = localStorage.getItem('transparent') === 'true';

    document.body.classList.toggle('transparent', istransparent);

    const toggleButton = document.getElementById('transparency-toggle');
    if (toggleButton) {
        toggleButton.checked = istransparent;
    }
}

function toggle_transparency() {
    const toggleButton = document.getElementById('transparency-toggle');
    document.body.classList.toggle('transparent');
    localStorage.setItem('transparent', toggleButton.checked);
    apply_transparency();
}