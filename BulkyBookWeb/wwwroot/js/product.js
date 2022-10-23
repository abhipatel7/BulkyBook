var dataTable;

$(document).ready(function () {
    loadDataTable();
})

function loadDataTable() {
    dataTable = $('#productTable').DataTable({
        "ajax": {
            "url": "/Admin/Product/GetAll"
        },
        "columns": [
            { "data": "title", "width": "15%" },
            { "data": "isbn", "width": "15%" },
            { "data": "price", "width": "15%" },
            { "data": "author", "width": "15%" },
            { "data": "category.name", "width": "15%" },
            { "data": "coverType.name", "width": "15%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group">
                            <a href="/Admin/Product/Upsert/${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i> Edit</a>
                            <a href="/Admin/Product/Delete/${data}" class="btn btn-danger mx-2"><i class="bi bi-trash"></i></a>
                        </div>
                    `
                },
            },
        ]
    });
}