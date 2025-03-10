// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('li');
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');
// li.textContent = input.value;
// deleteButton.textContent = '❌';
// li.append(deleteButton);
// list.append(li);

const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener("click", function() {
    const input = document.querySelector('#favchap');
    if (input.value.trim() !=='') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
    }
    else {
        input.focus();
    }
})
