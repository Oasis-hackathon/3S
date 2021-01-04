const foodJson = require("../assets/src/foods.json");
export const home = (req, res) => {
    res.render('home');
}

export const calfoodprint = (req, res) => res.render("calfoodprint");
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


