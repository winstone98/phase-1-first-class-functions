function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction()
{
    return function funName() {
        return number
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        return number
    }
}
