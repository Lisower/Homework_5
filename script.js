function cost(event){
    event.preventDefault();
    type = document.getElementById("tovar-type").value;
    switch(type){
        case "tovar-1":
            price = 10;
            break;
        case "tovar-2":
            price = 20;
            break;
        case "tovar-3":
            price = 30;
            break;
        default:
            price = 10;
            break;
    }
    number = parseInt(document.getElementById("tovar-number").value);
    if (isNaN(number))
        if (document.getElementById("tovar-number").value == "") alert("Количество товара не указано!");
        else alert("Некорректный ввод количества товара!");
    else
        if (number > 0) alert("Количество товара не может быть отрицательным!");
        else document.getElementById("result").innerHTML = "Стоимость заказа: " + price*number + " р. ";
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", cost);
});
