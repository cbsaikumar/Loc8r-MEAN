export const homepageController = (req, res, next) => {
    res.render('index', { title: 'Express' });
}