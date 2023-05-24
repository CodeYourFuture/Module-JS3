When writing a unit test in Jest or Jasmine when do you use describe or it?

describe breaks your test suite into components. Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality.

You can also nest describes to further subdivide the suite.

it is where you perform individual tests. You should be able to describe each test like a little sentence, such as "it calculates the area when the radius is set". You shouldn't be able to subdivide tests further-- if you feel like you need to, use describe instead.

describe('Circle class', function() {
  describe('area is calculated when', function() {
    it('sets the radius', function() { ... });
    it('sets the diameter', function() { ... });
    it('sets the circumference', function() { ... });
  });
});
