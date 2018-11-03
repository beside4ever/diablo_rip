var lang = {
  EN: {
    message: 'DIABLO "IS" IMMORTAL',
    button: 'Like',
    result: 'people liked this page',
    like: 'May Deckard Cain be with you',
    likeError: 'already liked'
  },
  CHS: {
    message: '暗黑破坏神 "永垂" 不朽',
    button: '烧纸',
    result: '人已为暗黑烧纸',
    like: '迪卡凯恩与你同在',
    likeError: '已经烧过纸了'
  }
}

var userLang = navigator.language || navigator.userLanguage;
var area = userLang === 'zh-CN' ? 'CHS' : 'EN';

$(document).ready(function() {
  renderText(area);

  $.get('http://diablorip.leadsoftware.cn/count.php?sum=1', function (ret) {
    $('#count').text(ret || 0);
  });

  $('.footer a').click(function() {
    area = $(this).data('value');
    renderText(area);
  });

  $('.btn-like').click(function() {
    $.get('http://diablorip.leadsoftware.cn/count.php', function (ret) {
      if(ret == '1') {
        alert(lang[area].like);
        location.reload();
      }else {
        alert(lang[area].likeError);
      }
    });
  });
});

function renderText(_area) {
  var text = lang[_area];
  $('.message').text(text.message);
  $('.btn-like').text(text.button);
  $('.result').text(text.result);
}
