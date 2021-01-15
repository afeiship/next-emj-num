(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.emjNum should return number with emojis', function () {
      expect(nx.emjNum('0')).toBe('0️⃣');
      expect(nx.emjNum('10')).toBe('🔟');
      expect(nx.emjNum('11')).toBe('1️⃣1️⃣');
      expect(nx.emjNum('12')).toBe('1️⃣2️⃣');
      expect(nx.emjNum('1200')).toBe('1️⃣2️⃣0️⃣0️⃣');
    });
  });
})();
