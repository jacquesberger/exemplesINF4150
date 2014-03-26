casper.test.begin("Vérification du nombre d'articles", 1, function(test) {
  var articles = [];

  function getPosts() {
    var list = document.querySelectorAll(".post-title");
    var result = [];
    for (i = 0; i < list.length; i++) {
      result.push(list[i].textContent);
    }
    return result;
  }

  casper.start('http://jberger.org/', function() {
    articles = this.evaluate(getPosts);
  });

  casper.run(function(){
    test.assertEquals(articles.length, 4);
    test.done();
  });
});
