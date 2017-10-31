var controlInit = () =>{
    
    $(document).ready(function () {
        // Setup BART
        var bOpts = {
            min_pump: 2, 
            earnings: 30,
            onstart: function(){ this.start_time= $.now(); },
            onexplode: function(){ this.end_time = $.now(); },
            oncashin: function(){ this.end_time = $.now(); }
        };

        // create a BART with default values using 10 balloons
        $("#bart").bart(
            {b: [
                    {b: 7, o: $.extend({color: 'blue', popprob: 8 }, bOpts)},
                    {b: 6, o: $.extend({color: 'yellow', popprob: 32}, bOpts)},
                    {b: 7, o: $.extend({color: 'red', popprob: 128 }, bOpts)}
                ],
                s: {
                    txt_cashin: 'Colectar $$$',
                    txt_inflate: 'Inflar',
                    txt_next: 'Próximo',
                    txt_balloon_number: 'Globos: ',
                    txt_number_of_pumps: 'Cantidad inflado: ',
                    txt_current_earned: 'Ganancias: ',
                    txt_total_earned: 'Total acumulado: R$ ',
                    txt_prob_explosion: 'Probabilidad de explotar: ',
                    txt_pumps_used: 'Inflados utilizados: ',
                    showpopprob: false,
                    sounds: true,
                    onload: function () {
                        this.start_time = $.now();
                    },
                    onend: function () {
                        this.end_time = $.now();
                        this.balloon = null;
                        console.log(this);
                        console.log(JSON.stringify(this));
                        data = {bart: JSON.stringify(this), subjid: "rut"};
                        $.post('save.php', data);
                    }
                }
            }
        );

    });
}

var intervenidosInit = () => {
    
    $(document).ready(function () {
        // Setup BART
        var bOpts = {
            min_pump: 2, 
            earnings: 30,
            onstart: function(){ this.start_time= $.now(); },
            onexplode: function(){ this.end_time = $.now(); },
            oncashin: function(){ this.end_time = $.now(); }
        };

        // create a BART with default values using 10 balloons
        $("#bart").bart(
            {b: [
                    {b: 7, o: $.extend({color: 'blue', popprob: 8 }, bOpts)},
                    {b: 6, o: $.extend({color: 'yellow', popprob: 32}, bOpts)},
                    {b: 7, o: $.extend({color: 'red', popprob: 128 }, bOpts)}
                ],
                s: {
                    txt_cashin: 'Colectar $$$',
                    txt_inflate: 'Inflar',
                    txt_next: 'Próximo',
                    txt_balloon_number: 'Globos: ',
                    txt_number_of_pumps: 'Cantidad inflado: ',
                    txt_current_earned: 'Ganancias: ',
                    txt_total_earned: 'Total acumulado: R$ ',
                    txt_prob_explosion: 'Probabilidad de explotar: ',
                    txt_pumps_used: 'Inflados utilizados: ',
                    showpopprob: false,
                    sounds: true,
                    onload: function () {
                        this.start_time = $.now();
                    },
                    onend: function () {
                        this.end_time = $.now();
                        this.balloon = null;
                        console.log(this);
                        console.log(JSON.stringify(this));
                        data = {bart: JSON.stringify(this), subjid: "rut"};
                        $.post('save.php', data);
                    }
                }
            }
        );

    });

}
