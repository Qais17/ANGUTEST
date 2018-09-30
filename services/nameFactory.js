angular.module("app").factory("nameFactory", function(){

var angutest = [
  {id:1, fullName:'El Temblon', attaque: 'éclair'},
  {id:2, fullName:'Komodo', attaque: 'Or'},
  {id:3, fullName:'xxx', attaque: 'striker xxx'},
  {id:4, fullName:'Ryck', attaque: 'Morty'},
];

var getName = function(){
  return angutest;
};

return {
  getName: getName,
}


});
