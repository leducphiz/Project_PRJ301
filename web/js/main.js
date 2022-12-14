function OrdersChart() {
    var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    new Chart("myChart1", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                    data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                    borderColor: "sienna",
                    fill: true
                }]
        },
        options: {
            legend: {display: false}
        }
    });
}

function CustomersChart() {
    var xValues = ["Total", "New customer"];
    var yValues = [200, 50, 300];
    var barColors = ["green", "red"];

    new Chart("myChart2", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "New Customers (30 daily Avg)"
            }
        }
    });
}

OrdersChart();
CustomersChart();

function showMess(id) {
    var option = confirm('Do you want to delete product : ' + id + ' ? ');
    if (option === true) {
        window.location.href = 'delete?id=' + id;
    }


}


function deleteOrder(id) {
    var option = confirm('Do you want to delete order : ' + id + ' ? ');
    if (option === true) {
        window.location.href = 'cancel?oid=' + id;
    }


}

function buynow(id) {
    var option = confirm('Do you want to buy this product ? ');
    if (option === true) {
        window.location.href = 'buy?id=' + id + '&buy=true';
    }
}



function addToCart(id) {
    var option = confirm('Do you want to add this product to cart : ' + id + ' ? ');
    if (option === true) {
        window.location.href = 'buy?id=' + id;

    }
}

function show(o) {
    console.log(o)
    if (o.nextElementSibling.style.display === "flex") {
        o.nextElementSibling.style.display = "none";
    } else {
        o.nextElementSibling.style.display = "flex";
    }
}

document.getElementById('datePicker').valueAsDate = new Date();