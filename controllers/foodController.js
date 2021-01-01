export const home = (req, res) => {
    res.render('home');


}

export const foods = (req, res) => res.send('FOOD INDEX');
export const cheese = (req, res) => res.render('cheese');
export const dubu =(req, res) => res.render('dubu');
export const milk =(req, res) => res.render('milk');
export const egg =(req, res) => res.render('egg');

