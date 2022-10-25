var dataTable;

$(document).ready(function () {
    var url = window.location.search;
    switch (url.split('=')[1]) {
        case "inprocess":
            loadDataTable("inprocess");
            break;
        case "completed":
            loadDataTable("completed");
            break;
        case "pending":
            loadDataTable("pending");
            break;
        case "approved":
            loadDataTable("approved");
            break;
        default:
            loadDataTable("all");
            break;
    }
})

function loadDataTable(status) {
    dataTable = $('#orderTable').DataTable({
        "ajax": {
            "url": "/Admin/Order/GetAll?status=" + status
        },
        "columns": [
            { "data": "id", "width": "5%" },
            { "data": "name", "width": "25%" },
            { "data": "phoneNumber", "width": "15%" },
            { "data": "applicationUser.email", "width": "15%" },
            { "data": "orderStatus", "width": "15%" },
            { "data": "orderTotal", "width": "10%" },
            {
                "data": "id",
                "width": "5%",
                "render": function (data) {
                    return `
                        <div class="btn-group">
                            <a href="/Admin/Order/Details/?orderId=${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i></a>
                        </div>
                    `
                },
            },
        ]
    });
}
