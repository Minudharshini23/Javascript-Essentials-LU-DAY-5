

//USER CLASS
class User{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];  
    }
    //function of users
    login()
    {
        console.log(`${this.name} logged in`);
    }
    
    logout()
    {
        console.log(`${this.name} logged out`);
    }
}
let user_1=new User("minu",21,"m@yahoo.com");
let user_2=new User("papu",23,"p@gmail.com");
let user_3=new User("karthik",28,"k@gmail.com");
let users_collection=[user_1,user_2,user_3];
console.log("COMMUNITY USERS");
console.log(users_collection);
user_2.login();
user_1.logout();


//MODERATOR CLASS

class Moderator extends User{
    addcoins(user,coin)
    {
        user.coins=coin++;
        console.log(`${user.name} earned : ${coin} coins for his/her performance by the moderator`);
}
   removecoins(user,coin)
   {
    user.coins=coin-1;
    console.log(`${user.name} lost : ${coin} coins for her/his poor performance by the moderator`);
   }
}
let mod=new Moderator("naju",24,"N@gmail.com");
console.log("MODERATOR");
console.log(mod);
//function of moderator to add coins
mod.addcoins(user_1,3);
mod.addcoins(user_3,20);
mod.removecoins(user_3,10)


//ADMIN CLASS

class Admin extends Moderator{

    addcourse(user,course)
    {
      user.courses.push(course);
      console.log(`${user.name} is assigned with ${course} successfully by the admin`);

    }
    del_course_user(user,course)
    {
       user.courses=user.courses.filter(courses=>courses!=course);
       console.log(`${course} course is removed for ${user.name} assigned by the admin`);
    }
}

let adm=new Admin("darwin",26,"D@gmail.com");
console.log("THE ADMIN");
console.log(adm);
//functions of admin to add course
adm.addcourse(user_1,"c++");
adm.addcourse(user_2,"javascript")
adm.addcourse(user_3,"ML");

//function of admin to delete the course
adm.del_course_user(user_2,"javascript");

//array of all in the communtiy
console.log("FINAL UPDATED ARRAY OF THE COMMUNITY");
let user_col=[user_1,user_2,user_3,mod,adm];
console.log(user_col);





