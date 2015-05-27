describe('pigLatin', function(){
  it("adds ay to words that begin with a vowel", function () {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("moves the beginning consonant to the end and adds ay", function () {
    expect(pigLatin("cold")).to.equal("oldcay");
  });

  it("moves the beginning consonants to the end and adds ay", function () {
    expect(pigLatin("phew")).to.equal("ewphay");
  });
});
