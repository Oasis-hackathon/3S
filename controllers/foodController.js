const foodJson = require("../assets/src/foods.json");
export const home = (req, res) => {
    res.render('home');
}

export const calfoodprint = (req, res) => res.render("calfoodprint");
export const explain = (req, res) => res.render("explain");
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
export const yogurt = (req, res) => res.render('yogurt');
export const dubu =(req, res) => res.render('dubu');
export const milk =(req, res) => res.render('milk');
export const egg =(req, res) => res.render('egg');


