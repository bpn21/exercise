function grandFather(name) {

    function elderSon(name) {
        console.log('i am elder son and my name is ' + name);
        return ('elder')
    }

    function youngerSon(name) {
        console.log('i am younger son and My name is ' + name);
        return ("younger");
    }

    return {
        elder: elderSon,
        younger: youngerSon,
    }
}
var result = grandFather(null).elder("Gopal prasad gaire");
