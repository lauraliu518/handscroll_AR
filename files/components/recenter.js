const recenterButtonComponent = {
    init() {
      const {sceneEl} = this.el
      const recenterBtn = document.getElementById('recenterButtonContainer')
      recenterBtn.classList.remove('hidden')
  
      const handleClickEvent = (e) => {
        if (!e.touches || e.touches.length < 2) {
          sceneEl.emit('recenter')
        }
        const models = document.querySelectorAll('.model')
        models.forEach(element => element.setAttribute('visible', false))
        hideAll()
      }
  
      recenterBtn.addEventListener('click', handleClickEvent, true)
    },
  }
  
  export {recenterButtonComponent}
  