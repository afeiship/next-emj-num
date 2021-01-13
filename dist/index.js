/*!
 * name: @jswork/next-emj-num
 * description: Number for emoji.
 * homepage: https://github.com/afeiship/next-emj-num
 * version: 1.0.1
 * date: 2021-01-13 21:52:17
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nums = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

  nx.emjNum = function (inNumber) {
    var num = parseInt(inNumber);
    var list = num > 10 ? String(num).split('') : [num];
    return list
      .map(function (item) {
        return nums[item];
      })
      .join('');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.emjNum;
  }
})();
