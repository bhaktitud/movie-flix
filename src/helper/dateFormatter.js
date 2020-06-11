export default function dateToRelativeFormat(str) {
    const currentDate = new Date(str)
    let s = ( +new Date() - Date.parse(str) ) / 1e3,
      m = s / 60,
      h = m / 60,
      d = h / 24,
      w = d / 7,
      y = d / 365.242199,
      M = y * 12;
    
    function approx(num) {
      return num < 5 ? 'a few' : Math.round(num);
    };
    
    return s <= 1 ? 'just now'
         : m < 1  ? approx(s) + ' seconds ago'
         
         : m <= 1 ? 'a minute ago'
         : h < 1  ? approx(m) + ' minutes ago'
         
         : h <= 1 ? 'an hour ago'
         : d < 1  ? approx(h) + ' hours ago'
         
         : d <= 1 ? 'yesterday'
         : w < 1  ? approx(d) + ' days ago'
         
         : `${currentDate.getMonth()}/${currentDate.getDay()}/${currentDate.getFullYear()}`;
};
