const localStorage = window.localStorage;

if (document.getElementsByClassName('btn-order') !== null) {
    let orderButtons = document.getElementsByClassName("btn-order");

    for (let item of orderButtons) {
        item.addEventListener("click", () => {
            localStorage.setItem(item.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,item.previousElementSibling.innerHTML);
        })
    }
}




if (document.getElementById('order') !== null) {
    let orderList = document.getElementById('order'),
        price = 0;
    for (let i = 0; i < localStorage.length; i++) {
        price += parseInt(localStorage.getItem(localStorage.key(i)).split(" Gel")[0]);
        orderList.insertAdjacentHTML('beforeend', "<div style='border-bottom: solid 1px gray'>" +
                                                                "<button type='button' class='close' onclick='localStorage.removeItem(localStorage.key(" + i + ")); this.parentElement.remove()'" + "aria-label='Close'>" +
                                                                    "<span aria-hidden='true'>&times;</span>"
                                                                + "</button>" + localStorage.key(i) + " " + localStorage.getItem(localStorage.key(i)) + "</br></div>");
    }
    orderList.insertAdjacentHTML('beforeend', '<div>Total Price: ' + price + '</br></div>');
}


