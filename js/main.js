require(['Models/User', 'Router'], function(User, Router){
     
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
     
    localStorage.users = JSON.stringify(users);
 
    Router.startRouting(); 
});

/*
require(['Models/User', 'Controllers/ListController'], function(User, ListController){
     
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
     
    localStorage.users = JSON.stringify(users);
     
    ListController.start();
});
*/

;
/*
require(['MyMath'], function(MyMath){
     
    alert(MyMath.add(1, 2)); 
    console.log(MyMath.add(1, 2)); 
 
});
*/