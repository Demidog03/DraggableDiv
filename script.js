const wrapper = document.querySelector(".wrapper")
const header = document.querySelector(".wrapper header")

//mousedown when clicking and holding the mouse
header.addEventListener('mousedown', () => {
    //mouse move when moving the mouse
    header.classList.add('active')
    header.addEventListener('mousemove', onDrag)
})
//trigger when release the mouse button
document.addEventListener('mouseup', () => {
    //mouse move when moving the mouse
    header.classList.remove('active')
    header.removeEventListener('mousemove', onDrag)
})

const onDrag = ({movementX, movementY}) => {
    //getting all styles of wrapper element
    let getStyle = window.getComputedStyle(wrapper)
    let left = parseInt(getStyle.left)
    let top = parseInt(getStyle.top)
    wrapper.style.left = `${left + movementX}px`
    wrapper.style.top = `${top + movementY}px`

    //they are strings
    //console.log(typeof left, typeof top )
}
