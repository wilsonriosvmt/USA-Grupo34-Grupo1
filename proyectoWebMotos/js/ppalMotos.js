//*********************************** MODULO MOTOS ********************************//
/**
    Function:       traerInformacionMotos()
    Description:    Permite traer información de las motos almacenadas en la BdD
 */
    function traerInformacionMotos() {
        $.ajax({
            url: "http://localhost:8080/api/Moto/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaMotos(respuesta);
            }
        });
    }
    
    /**
        Function:       pintarRespuestaMotos()
        Description:    Permite mostrar información de las motos almacenadas en la BdD
     */
    function pintarRespuestaMotos(respuesta) {
        let myTable = "<table class='default' border='1'>";
        myTable += "<col span='2' background-color: lightblue><col> "
        myTable += "<tr>";
        myTable += "<th scope='row'>ID</th>";
        myTable += "<th>NOMBRE</th>";
        myTable += "<th>MARCA</th>";
        myTable += "<th>MODELO</th>";
        myTable += "<th>ID_CATEGORÍA</th>";
        myTable += "<th>DESCRIPCIÓN</th>";
        myTable += "</tr>";
        for (i = 0; i < respuesta.length; i++) {
            myTable += "<tr>";
            myTable += "<td>" + respuesta[i].id + "</td>";
            myTable += "<td>" + respuesta[i].name + "</td>";
            myTable += "<td>" + respuesta[i].brand + "</td>";
            myTable += "<td>" + respuesta[i].year + "</td>";
            myTable += "<td>" + respuesta[i].categoryId + "</td>";
            myTable += "<td>" + respuesta[i].description + "</td>";
            myTable += "<td> <button onclick='borrarMoto(" + respuesta[i].id + ")'><img class='button-img' src='./ico/btnEliminar.png'></button>";
            myTable += "</tr>";
        }
        myTable += "</table>";
        $("#resultadoMotos").html(myTable);
    }
    
    /**
        Function:       guardarInformacionMotos()
        Description:    Permite guardar información de las motos en la BdD
     */
    function guardarInformacionMotos() {
        let var3 = {
            name: $("#Mname").val(),
            brand: $("#Mbrand").val(),
            year: $("#Myear").val(),
            categoryId: $("#McategoryId").val(),
            description: $("#Mdescription").val(),
        };
        //console.log("(api/Moto/save) -> "+$("#Mname").val()+" - "+$("#Mbrand").val()+" - "+$("#Myear").val()+" - "+$("#McategoryId").val()+" - "+" - "+$("#Mdescription").val());
        console.log("(api/Moto/save) -> "+$("#McategoryId").val())
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var3),
            url: "http://localhost:8080/api/Moto/save",
            success: function (response) {
                console.log(response);
                console.log("(api/Moto/save) -> Registro almacenado correctamente");
                alert("Registro almacenado correctamente");
                window.location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("El registro NO fué almacenado correctamente");
            }
        });
    }

    /**
        Function:       borrarMoto()
        Description:    Permite eliminar información de una moto en la BdD
     */
    function borrarMoto(idElemento) {
        let myData = {
            id: idElemento
        };
        let dataToSend = JSON.stringify(myData);
        $.ajax({
            url: "http://localhost:8080/api/Moto/"+idElemento,
            type: "DELETE",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function (respuestaMotos) {
                $("#resultadoMotos").empty();
                traerInformacionMotos();
                alert("Se ha Eliminado la moto correctamente.")
            }
        });
    }

//*********************************** MODULO CLIENTES ********************************//
/**
    Function:       traerInformacionClientes()
    Description:    Permite traer información de los clientes almacenadas en la BdD
 */
function traerInformacionClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

/**
    Function:       pintarRespuestaClientes()
    Description:    Permite mostrar información de los clientes almacenadas en la BdD
 */
function pintarRespuestaClientes(respuesta) {
    let myTable = "<table class='default' border='1'>";
    myTable += "<col span='2' background-color: lightblue><col> "
    myTable += "<tr>";
    myTable += "<th scope='row'>ID</th>";
    myTable += "<th>CORREO</th>";
    myTable += "<th>PASSWORD</th>";
    myTable += "<th>NAME</th>";
    myTable += "<th>AGE</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClientes").html(myTable);
}

/**
    Function:       guardarInformacionClientes()
    Description:    Permite almacenar información de los clientes en la BdD
 */
function guardarInformacionClientes() {
    let var4 = {
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        url: "http://localhost:8080/api/Client/save",
        success: function (response) {
            console.log(response);
            console.log("Registro almacenado correctamente");
            alert("Registro almacenado correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("El registro NO fué almacenado correctamente");
        }
    });
}

//*********************************** MODULO CATEGORIAS ********************************//    
/**
    Function:       traerInformacionCategorias()
    Description:    Permite traer información de las categrías almacenadas en la BdD
 */
    function traerInformacionCategorias() {
        $.ajax({
            url: "http://localhost:8080/api/Category/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaCategorias(respuesta);
            }
        });
    }
    
    /**
        Function:       pintarRespuestaCategorias()
        Description:    Permite mostrar la información en una tabla
     */
        function pintarRespuestaCategorias(respuesta) {
        let myTable = "<table class='default' border='1'>";
        myTable += "<col span='2' background-color: lightblue><col> "
        myTable += "<tr>";
        myTable += "<th scope='row'>ID</th>";
        myTable += "<th>NOMBRE</th>";
        myTable += "<th>DESCRIPCIÓN</th>";
        myTable += "</tr>";
        for (i = 0; i < respuesta.length; i++) {
            myTable += "<tr>";
            myTable += "<td>" + respuesta[i].id + "</td>";
            myTable += "<td>" + respuesta[i].name + "</td>";
            myTable += "<td>" + respuesta[i].description + "</td>";
            myTable += "</tr>";
        }
        myTable += "</table>";
        $("#resultadoCategorias").html(myTable);
    }
    
    /**
        Function:       guardarInformacionCategorias()
        Description:    Permite almacenar información de categorias en la BdD
     */
    function guardarInformacionCategorias() {
        let var2 = {
            name: $("#Cname").val(),
            description: $("#Cdescription").val()
        };
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var2),
            url: "http://localhost:8080/api/Category/save",
            success: function (response) {
                console.log(response);
                console.log("Registro almacenado correctamente");
                alert("Registro almacenado correctamente");
                window.location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("El registro NO fué almacenado correctamente");
            }
        });
    }

    //*********************************** MODULO MENSAJES ********************************//    
    /**
        Function:       traerInformacionMensajes()
        Description:    Permite traer información de los Mensajes almacenados en la BdD
    */
    function traerInformacionMensajes() {
        $.ajax({
            url: "http://localhost:8080/api/Message/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaMensajes(respuesta);
            }
        });
    }
    
    /**
        Function:       pintarRespuestaMensajes()
        Description:    Permite mostrar la información de Mensajes en una tabla
     */
        function pintarRespuestaMensajes(respuesta) {
        let myTable = "<table class='default' border='1'>";
        myTable += "<col span='2' background-color: lightblue><col> "
        myTable += "<tr>";
        myTable += "<th scope='row'>ID</th>";
        myTable += "<th>NOMBRE</th>";
        myTable += "<th>DESCRIPCIÓN</th>";
        myTable += "</tr>";
        for (i = 0; i < respuesta.length; i++) {
            myTable += "<tr>";
            myTable += "<td>" + respuesta[i].name + "</td>";
            myTable += "<td>" + respuesta[i].description + "</td>";
            myTable += "</tr>";
        }
        myTable += "</table>";
        $("#resultadoMensajes").html(myTable);
    }
    
    /**
        Function:       guardarInformacionMensajes()
        Description:    Permite almacenar información de Mensajes en la BdD
     */
    function guardarInformacionMensajes() {
        let var2 = {
            name: $("#MSid").val(),
            description: $("#MSmessagetext").val()
        };
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var2),
            url: "http://localhost:8080/api/Message/save",
            success: function (response) {
                console.log(response);
                console.log("Registro almacenado correctamente");
                alert("Registro almacenado correctamente");
                window.location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("El registro NO fué almacenado correctamente");
            }
        });
    }
