suite('nomon', function() {
  var testText = $('.testText');
  var text = testText.text();

  beforeEach(function() {
    testText.html(text);
  });

  test('Should have nomon method', function() {
    assert.equal(typeof $.fn.nomon, 'function');
  });

  test('Should have readmore text', function() {
    testText.nomon();

    assert.ok(testText.text().indexOf('Read More') !== -1);
  });
});