var color = ["red", "blue", "green", "yellow"];
var SecuenciaAleatoria = [];
var SecuenciaUsuario = [];
var level = 0;
var started = false;

function nextStepSequence() {

    level++;
    $("h1").text("level "+ level)
    SecuenciaUsuario =[];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = color[randomNumber];
    SecuenciaAleatoria.push(randomColor);


    $("#" + randomColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

   playSound(randomColor);

};

$ (document).keydown(function(){
    if  (!started){
        nextStepSequence();
        started= true;
    }
});

$("div.btn").click(function(){
    var SecuenciaColorUsuario = this.id;
    SecuenciaUsuario.push(SecuenciaColorUsuario);
    playSound(SecuenciaColorUsuario);
    animatePress(SecuenciaColorUsuario);
    checkAnswer();
    

});

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();

};

function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100);
};

function checkAnswer(){
    var ultimaPosicion = SecuenciaUsuario.length - 1;

    if (SecuenciaUsuario[ultimaPosicion]=== SecuenciaAleatoria[ultimaPosicion]){
        
        if(SecuenciaUsuario.length === SecuenciaAleatoria.length){
            setTimeout(function(){
                nextStepSequence();
            },1000);
        } 
    } else {
        playSound("wrong"); 
        $("body").addClass("game-over"); 
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $ ("h1").text ("Game over, preciona cualqueir tecla para reiniciar")
        starOver();
    }
}

function starOver(){
    level = 0;
    started = false;
    SecuenciaAleatoria = [];
}