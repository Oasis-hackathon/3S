const foodJson = require("../assets/src/foods.json");
export const home = (req, res) => {
    res.render('home');
}
export const foodsearch = (req, res) => {

    var {
        query:{food :searching}
    } = req;
/*
    for (var item of foodJson.foods){
        console.log(`${item.name} ${searching}`);
        if(item.name === searching){
            const result = item;
            console.log(`${item.name} ${searching} result: ${result}`);
        }

    }
*/
    
    res.render('search',{searching });
};

export const foods = (req, res) => res.send('FOOD INDEX');
export const cheese = (req, res) => res.render('cheese');
export const dubu =(req, res) => res.render('dubu');
export const milk =(req, res) => res.render('milk');
export const egg =(req, res) => res.render('egg');


