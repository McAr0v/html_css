let userName = prompt("Введите имя");

showMessage(userName);
   
function showMessage(userName1 = ""){
    let correctName = "";
    switch (userName1) {
        case "":
        correctName = prompt("Введите имя!!!!!", "Впиши сюда имя!!!");
        showMessage(correctName);
        break;
        case "Впиши сюда имя!!!":
        correctName = prompt("Ты реально издеваешься?)", "Впиши ИМЯ СЮДА!!!");
        showMessage(correctName);
        break;
        case "Впиши ИМЯ СЮДА!!!":
        correctName = prompt("Это уже не смешно(");
        showMessage(correctName);
        break;
        default:
        alert(`Привет ${userName1})`);
       }
}