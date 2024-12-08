const Menu = require('../models/Menu');

// get all menus
const getMenus = async (req, res) => {
    try {
        const menus = await Menu.find().sort({ createdAt: -1 });
        res.render('menu/list', { title: 'Menu', menus });
    } catch(err) {
        res.status(500).send('Server Error');
    }
}

// get menu details
const getMenuDetail = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) {
            return res.status(404).send('Menu not found');
        }
        res.render('menu/detail', { title: 'Detail', menu });
    } catch(err) {
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getMenus,
    getMenuDetail
}