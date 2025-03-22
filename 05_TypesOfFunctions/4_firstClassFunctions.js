function a(fn) {
  fn();
}

a(function(){
  console.log("I am callback");
})
