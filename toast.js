const toastContainer = document.getElementById('toastContainer');
const newToast = document.createElement('div');
newToast.className = 'toast';
newToast.setAttribute('role', 'alert');
newToast.setAttribute('aria-live', 'assertive');
newToast.setAttribute('aria-atomic', 'true');

function showToast(message, symbol) {
    newToast.innerHTML = `
    <div class="toast-header">
        <strong class="me-auto fs-5 fw-bold">${symbol} Notificación</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body fs-6">
        <i class="fa-solid fa-circle-check fa-lg" style="color: #00ff00;"></i>${message}
    </div>
`;
    toastContainer.appendChild(newToast);
    const toast = new bootstrap.Toast(newToast);


    const buttons = document.querySelectorAll('#encript, #decript');

    toast.show();
}

