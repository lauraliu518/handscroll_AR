const tapHotspotComponent = {
    init() {
      const id = this.el.getAttribute('id')
      const contents = document.getElementById('contents')
      const container = document.getElementById('container')
      const childElement = document.getElementById(`${id}-child`)
      const currentWorkingDiv = document.getElementById(`${id}-div`)  
  
      const handleClickEvent = (e) => {
        console.log(container.children.length)
        console.log(`hello${id}-div`)
        hideAll()  //hide all previous elements
        container.classList.remove('collapsed')
        childElement.setAttribute('visible', true)
        childElement.setAttribute('class', 'cantap')
  
        const title = childElement.getAttribute('value')
        document.getElementById(`${id}-div`).classList.remove('hidden')
        document.getElementById(`${id}-div`).classList.add('currentTarget')
      }
  
      this.el.addEventListener('click', handleClickEvent, true)
    },
  }
  
  export {tapHotspotComponent}
  
