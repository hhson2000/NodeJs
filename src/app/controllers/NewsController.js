class NewsController {
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('news deatil');
  }
}

module.exports = new NewsController();
