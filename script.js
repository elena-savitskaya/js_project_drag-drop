const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}
function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
    // или
    // event.target.className = 'item'
}

function dragover(event) {
    console.log('drag over')
    event.preventDefault()
}
function dragenter(event) {
    console.log('drag enter')
    event.target.classList.add('hovered')
}

function dragleave(event) {
    console.log('drag leave')
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    console.log('drag drop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}
