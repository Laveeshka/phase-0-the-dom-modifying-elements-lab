// remove DOM node 'main#main'
const main = document.getElementById("main");
main.remove();

// has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement("h1");
document.body.append(newHeader);

// the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id ='victory';

// the 'newHeader' variable that points to the <h1> node with an
//id of 'victory' has the text "YOUR-NAME is the champion" 
//(with your name in place of YOUR-NAME) inside it.

newHeader.textContent = "Lavee is the champion";