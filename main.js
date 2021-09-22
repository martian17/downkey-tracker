let Keys = function(){
    let that = this;
    this.down = {};
    // Events
    window.addEventListener("keydown", function(e){
        console.log("down",e);
        that.key["k"+e.keyCode] = true;
    });
    window.addEventListener("keyup", function(e){
        console.log("up",e);
        that.key["k"+e.keyCode] = false;
    });
}