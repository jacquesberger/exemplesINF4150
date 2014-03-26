casper.test.begin("Vérification du click d'un site de cours", 1, function(test) {
  casper.start('http://jberger.org/');

  casper.then(function(){
    this.click("a[href='/inf4150']");
  });

  casper.run(function(){
    test.assertEquals(this.getCurrentUrl(), 'http://jberger.org/inf4150/');
    test.done();
  });
});
