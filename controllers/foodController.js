const foodJson = require("../assets/src/foods.json");
const calFoodJson = require("../assets/src/foodsForCal.json");
export const home = (req, res) => {
    res.render('home');
}

export const calfoodprint = async (req, res) =>{
    const {
        query: { expiration,foodname } 
    } = req ; 
    
    const foods = await calFoodJson.foodsForCal.find(food => food.name === foodname) || {};
    const usebydate = parseInt(foods.usebydate);

    const parseDate = (str) =>{
        let y = str.substr(0, 4);
        let m = str.substr(4, 2);
        let d = str.substr(6, 2);
        return new Date(y,m-1,d);
    }
   
    
  


    //소비기한 더해주기 
    const str = expiration;
    let date = parseDate(str) ;
    

    const now = new Date();
    console.log(`date : ${typeof(date)} usebydate : ${typeof(usebydate)}`);

    let dday  = date ; //d-day 9월29일(유통기한 + 소비기한)
    dday.setDate(dday.getDate()+usebydate);

    let diffDays = Math.floor((dday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) ;

    diffDays  = diffDays > 0 ? diffDays : 0 ;
  

    console.log(`소비기한까지 ${diffDays < 10 ? `0${diffDays}` : diffDays}일 남았습니다.`);

  

    try{
       

    }catch(error){
        console.log("error");
    }
    
    res.render("calfoodprint",{ expiration , foodname, diffDays ,usebydate } );
  
}
export const explain = (req, res) => res.render("explain");


export const foodsearch = async (req, res) => {
    const {
        query:{ food :searching }
    } = req;
    let foods = [];
        
    try{
        foods = await foodJson.foods.find(food => food.name === searching) || {};
        console.log(`length : ${Object.keys(foods).length}` );
        console.log(foods);
    } catch(error){
        console.log(`length : ${Object.keys(foods).length}` );
        console.log("error");
    }

    res.render('search',{ searching, foods });
    
};



export const foods = (req, res) => res.send('FOOD INDEX');
export const yogurt = (req, res) => res.render('yogurt');
export const dubu =(req, res) => res.render('dubu');
export const milk =(req, res) => res.render('milk');
export const egg =(req, res) => res.render('egg');


