// 两种字符，10或11表示2bit字符，0表示1bit字符, 最后一位固定为0。结尾只剩0的1bit的数组返回true，否则返回false。

/**
 * 最后一位固定为0，如果0前面有偶数个1那么则为1bit数，有奇数个1则为2bit数
 */

 function isOneBitCharacter(bits: number[]): boolean {
  let len = bits.length - 1;
  let k = 0;
  for(len; len > -1; len--) {
    if (bits[len - 1] === 1) {
      k++
    } else {
      len = 0
    }
  }
  if (k % 2 === 0) return true;
  return false;
};