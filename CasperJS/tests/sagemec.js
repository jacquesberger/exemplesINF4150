casper.test.begin("Création d'un membre stagiaire, vérification du dossier et de la présence dans la recherche", 7, function(test) {

  casper.start('http://localhost:3003/', function() {
    test.assertEquals(this.getCurrentUrl(), "http://localhost:3003/login");

    this.fill("form[action='/login']", {username:"code3", password:"1337"}, true);
  });

  casper.then(function() {
    test.assertEquals(this.getCurrentUrl(), "http://localhost:3003/");
  });

  casper.thenOpen('http://localhost:3003/membre/nouveau', function() {
    this.fill("form", {nom: "Berger", prenom: "Jacques", sexe: "1", date_naissance: "1982-03-05"}, false);
    this.click("button");
  });

  casper.then(function() {
    this.wait(1000);
  });

  casper.then(function() {
    test.assertVisible("#profile");
    test.assertUrlMatch(/^http:\/\/localhost:3003\/membre\/#\/[0-9a-f]{24}\/fiche\/parcours/);
    test.assertMatch(this.getElementAttribute("#tab-parcours", "class"), /active/);
  });

  casper.then(function() {
    this.fillSelectors("form.form-search", {"#search-field": "Jacques Berger"}, false);
    this.click("form.form-search button");
  });

  casper.then(function() {
    test.assertEquals(this.getCurrentUrl(), "http://localhost:3003/recherche?q=Jacques Berger");

    var getTrCount = function() {
      return __utils__.findAll("tr").length;
    };
    var trCount = this.evaluate(getTrCount);
    test.assert(trCount > 0);
  });

  casper.run(function(){
    test.done();
  });
});
