
$(document).ready(function () {
    $('#Sistemas').hide();
    $('#Marketing').hide();
    $('#Turismo').hide();
    $('#Enfermeria').hide();
    $('#Contable').hide();
    $('#Publica').hide();
    $('#SiAdeudaMaterias').hide();
    $('#sitrabaja').hide();
    $('#sitrabajah').hide();
    $('#vivesolo').hide();



    $('#CarreraId').change(function () {
        // console.log('cambió');
        // alert('ha cambiado');

        const carrera = $('#CarreraId option:selected').text();
        const val_carrera = $('#CarreraId option:selected').val();


        console.log(val_carrera)
        console.log(`Selector <b>${carrera}</b> contiene el valor: ${val_carrera}`);

        switch (true) {
            case val_carrera == 0:
                $('#Sistemas').hide(); $('#Marketing').hide(); $('#Turismo').hide(); $('#Enfermeria').hide(); $('#Contable').hide(); $('#Publica').hide();
                break;
            case val_carrera == 1:
                $('#Sistemas').show(); $('#Marketing').hide(); $('#Turismo').hide(); $('#Enfermeria').hide(); $('#Contable').hide(); $('#Publica').hide();
                break;
            case val_carrera == 2:
                $('#Sistemas').hide(); $('#Marketing').show(); $('#Turismo').hide(); $('#Enfermeria').hide(); $('#Contable').hide(); $('#Publica').hide();
                break;
            case val_carrera == 3:
                $('#Sistemas').hide(); $('#Marketing').hide(); $('#Turismo').show(); $('#Enfermeria').hide(); $('#Contable').hide(); $('#Publica').hide();
                break;
            case val_carrera == 4:
                $('#Sistemas').hide(); $('#Marketing').hide(); $('#Turismo').hide(); $('#Enfermeria').show(); $('#Contable').hide(); $('#Publica').hide();
                break;
            case val_carrera == 5:
                $('#Sistemas').hide(); $('#Marketing').hide(); $('#Turismo').hide(); $('#Enfermeria').hide(); $('#Contable').show(); $('#Publica').hide();
                break;
            case val_carrera == 6:
                $('#Sistemas').hide(); $('#Marketing').hide(); $('#Turismo').hide(); $('#Enfermeria').hide(); $('#Contable').hide(); $('#Publica').show();
                break;
            default:
                break;
        }
    })

    // si tiene titulo
    $("#TituloSecundarioNO").on('click', function () {
        $('#MateriasAdeuda').show();
        $('#DescripcionMateriasAdeuda').show();
        $('#SiAdeudaMaterias').show();

    })
    $("#TituloSecundarioSI").on('click', function () {
        $('#MateriasAdeuda').hide();
        $('#DescripcionMateriasAdeuda').hide();
        $('#SiAdeudaMaterias').hide();

    })

    // si trabaja
    $("#TrabajaSI").on('click', function () {
        $('#sitrabaja').show();
        $('#sitrabajah').show();

    })
    $("#TrabajaNO").on('click', function () {
        $('#sitrabaja').hide();
        $('#sitrabajah').hide();
    })

    $("#ViveSoloSI").on('click', function () {
        $('#vivesolo').hide();
    })
    $("#ViveSoloNO").on('click', function () {
        $('#vivesolo').show();
    })










});