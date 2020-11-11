
exports.getLogoInfo = (req, res, next) => {
  let logoImageName;
  let logoName;
  let theme;
  let vodUrl;
  let vodPcUrl;

  switch (req.headers.host) {
    case 'trainee-artandheart.edu1004.kr':
      logoImageName = 'artandheart.png';
      logoName = '아트앤하트';
      theme = 'skin-blue-light';
      vodUrl = 'http://mst.aquan.artandheart.edu1004.kr/orangenamu/artandheart/';
      vodPcUrl = 'http://pcst.aquan.artandheart.edu1004.kr/orangenamu/artandheart/';
      break;

    case 'pspedu.edu1004.kr':
      logoImageName = 'pspfnd2.png';
      logoName = '피에스피에프앤디주식회사';
      theme = 'skin-red-light';
      vodUrl = 'http://mst.aquan.pspfnd.edu1004.kr/orangenamu/pspfnd/';
      vodPcUrl = 'http://pcst.aquan.pspfnd.edu1004.kr/orangenamu/pspfnd/';
      break;

    case 'trainee-dev.edu1004.kr':
    default:
      logoImageName = 'orangenamu.png';
      logoName = '오렌지나무시스템';
      theme = 'skin-yellow-light';
      vodUrl = 'http://mst.aquan.dev.edu1004.kr/orangenamu/dev/';
      vodPcUrl = 'http://pcst.aquan.dev.edu1004.kr/orangenamu/dev/';
      break;
  }
  res.locals.logoImageName = logoImageName;
  res.locals.logoName = logoName;
  res.locals.theme = theme;
  res.locals.vodUrl = vodUrl;
  res.locals.vodPcUrl = vodPcUrl;

  return next();
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
exports.isTermsApproved = (req, res, next) => {
  if (req.user.terms_approved === 1) {
    return next();
  }
  res.redirect('/terms');
};

exports.microtime = (getAsFloat) => {
  // php microtime 함수를 javascript 로 제작
  // https://stackoverflow.com/questions/38758655/php-microtime-in-javascript-or-angularjs
  var s, now, multiplier;

  now = (Date.now ? Date.now() : new Date().getTime()) / 1000;
  multiplier = 1e3; // 1,000

  // Getting microtime as a float is easy
  if (getAsFloat) {
    return Math.round(now);
  }

  // Dirty trick to only get the integer part
  s = now | 0;

  return (Math.round((now - s) * multiplier) / multiplier) + ' ' + s;
};
