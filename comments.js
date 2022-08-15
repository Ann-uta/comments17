const button = document.querySelector('button');
const comments = document.querySelector('.comments');
const textarea = document.querySelector('textarea');

let array = [];

button.addEventListener('click', function () {
    let text = textarea.value;
    textarea.value = "";

    array.push(text);

    comments.innerHTML = "";
    render(comments, array);    
});

function render (parentNode, data) {
    for (let i = 0; i < data.length; i++){
        let item = data[i];

        const filterWords = ["viagra", "xxx"];        
        let filteredText = item;
        for (let word of filterWords) {
            let reg = new RegExp(word, 'ig');
            filteredText = filteredText.replace(reg, '***');
        }

    let node = document.createElement("div");
    node.classList.add("comment");
    node.textContent = filteredText;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("comment__button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", () => {
        node.remove();
        data.splice(i, 1);
    });

    node.append(deleteButton);
    parentNode.append(node);
    }
}
