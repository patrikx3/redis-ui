// -- Toast ---------------------------------------------------------------

let toastContainer = null
let currentToast = null

function getToastContainer() {
    if (!toastContainer) {
        toastContainer = document.getElementById('p3xre-toast-container')
    }
    return toastContainer
}

function dismissCurrentToast() {
    if (currentToast) {
        const el = currentToast
        currentToast = null
        el.classList.add('p3xre-toast-out')
        el.addEventListener('animationend', () => el.remove(), { once: true })
    }
}

function showToast(options) {
    if (typeof options === 'string') {
        options = { message: options }
    }

    console.log('p3xre-toast showToast', options.message, 'container:', getToastContainer())

    dismissCurrentToast()

    const el = document.createElement('div')
    el.className = 'p3xre-toast'
    el.textContent = options.message
    currentToast = el

    el.addEventListener('click', () => {
        if (currentToast === el) dismissCurrentToast()
    })

    getToastContainer().appendChild(el)

    if (!options.sticky) {
        const duration = options.duration || 5000
        setTimeout(() => {
            if (currentToast === el) dismissCurrentToast()
        }, duration)
    }
}

export const p3xToast = {
    action: showToast,
}
