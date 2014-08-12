// JavaScripts

function test(){
    return 'Hello World';
}
function middleMan(){
    test();
}
function anotherTest(){
    //middleMan();
    return 'Hello Again';
}

(function(){
    anotherTest();
})();