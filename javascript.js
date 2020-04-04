var clicktoggl = true;
var toggleExpand = false;
/*
function isMobile() {
    if (navigator.userAgent.match(/Mobi/)) {
        return true;
    }
    if ('screen' in window && window.screen.width < 1366) {
        return true;
    }
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && connection.type === 'cellular') {
        return true;
    }
    return false;
}*/
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function deleteText(str) {
  var strCurr = str;
  for (var i = 0; i < str.length; i++) {
    (function (i) {
      setTimeout(function () {
        strCurr = str.substring(0, str.length - i - 1);
        document.getElementById('textBox').value = strCurr;
      }, 30 * i);
    })(i);
  }
}

const writeTypeText = async (speed, str) => {
  var strCurr = document.getElementById('textBox').value;
  for (var i = 0; i < str.length; i++) {
    (function (i) {
      setTimeout(function () {
        if (clicktoggl) {
          strCurr = strCurr + str.charAt(i);
          document.getElementById('textBox').value = strCurr;
        }
      }, speed * i);
    })(i);
  }
};

function setColor() {
  document.getElementById('textBox').style.color = 'var(--col-text-nofoc)';
  //document.getElementById("textBox").style.transition = "all 1s";
}

const showButtons = async () => {
  document.getElementById('textBox').style.top = '0';
  var slp = 150;
  var btns = ['ham', 'twit', 'redd', 'patr', 'purch', 'downl'];
  for (var i = 0; i < btns.length; i++) {
    document.getElementById(btns[i]).style.left = '0';
    slp -= 20;
    await sleep(slp);
    //console.log(btns[i]);
  }
};

const intro = async () => {
  showButtons();

  document.getElementById('yx').style.zIndex = '3';

  await sleep(300);
  document.getElementById('textBox').style.color = 'var(--col-text-main)';

  await sleep(2400);
  deleteText(document.getElementById('textBox').value);
  document.getElementById('container').style.color = 'transparent';
  await sleep(1000);
  writeTypeText(60, 'Anything can be written here.');
  await sleep(1900);
  writeTypeText(60, ' Just try it out.');
  await sleep(2900);
  deleteText(document.getElementById('textBox').value);

  await sleep(1600);

  document.getElementById('textBox').disabled = false;
  document.getElementById('textBox').style.cursor = 'pointer';
  writeTypeText(60, 'Write here.');

  await sleep(1000);
  setColor();
  await sleep(200);

  await sleep(4500);
  if (!varExpand) {
    funcExpand(false);
  }

  writeTypeText(50, ' Come on.. Give it a go.');
  await sleep(4200);
  writeTypeText(
    50,
    " Ok Ok. Seems like you are a shy fella'. I will write some words for you."
  );
  await sleep(6500);

  writeTypeText(
    130,
    '\n Arrowroot\n Barley\n Chervil\n Dumpling\n Endive\n Flaxseed\n Garbanzo\n Hijiki\n Ishtu\n Jicama\n Kale\n Lychee\n Marjoram\n Nectarine\n Oxtail\n Pizza\n Quinoa\n Roquefort\n Squash\n Tofu\n Uppuma\n Vanilla\n Wheat\n Xergis\n Yogurt\n Zweiback'
  );
};

const makeWritable = async () => {
  if (clicktoggl) {
    if (!toggleExpand) {
      /*!isMobile() &&*/

      if (!varExpand) {
        funcExpand(false);
      }
      toggleExpand = true;
    }
    document.getElementById('options').style.opacity = '1';
    document.getElementById('options').style.visibility = 'visible';
    document.getElementById('textBox').style.color = 'var(--col-light)';
    await sleep(600);
    document.getElementById('textBox').value = '';
    await sleep(300);
    //if (!isMobile()) {
    //    document.getElementById("options").style.display = "inline-block";
    //} else {
    document.getElementById('options').style.position = 'unset';
    //}

    document.getElementById('textBox').style.color = 'var(--col-text-main)';
    await sleep(1400);
    //if (!isMobile()) {
    //    document.getElementById("options").style.top = "0px";
    //}
  }
};
var varMobileExpand = false;
var varExpand = false;
var varMode = false;
var varCase = false;

var fontsz = 0;

const showTxt = async () => {};

const funcExpand = async (val) => {
  toggleExpand = true;
  $('#textwrap')
    .children()
    .each(function (i) {
      //$( this ).delay( 1800 ).fadeIn( 400 );
      //$( this ).toggleClass( "example" ).delay( 1000 );
      //console.log( index + ": " + $( this ).text() );
      //$('.menuitem').each(function(i) {
      var elm = $(this);
      setTimeout(function () {
        elm.toggleClass('example');
      }, i * 10);
    });
  $('.txtx').removeClass('txtx');
  if (!varExpand) {
    varExpand = true;
    document.getElementById('container').style.width = 'calc(100% - 500px)';
    document.getElementById('container').style.left = '500px';
    document.getElementById('xp').className = 'nomarg fas fa-times';
    await sleep(250);

    // $( "#textwrap" ).each(function( index ) {
    // document.getElementById(btns[i]).style.left = "0";
    // await sleep(300);
    // console.log( index + ": " + $( this ).text() );
    // $(this).style.top = "0";
    // });
  } else {
    txt = document.getElementById('textBox');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    funcSize((fontsz - fontsz / 2) * 1);
    varExpand = false;
    document.getElementById('container').style.width = 'calc(100% - 60px)';
    document.getElementById('container').style.left = '60px';
    document.getElementById('xp').className = 'nomarg fas fa-bars';
  }
};

const funcMobileExpand = async (val) => {
  toggleExpand = true;
  if (!varMobileExpand) {
    varMobileExpand = true;

    document.getElementById('container').style.right = '100%';
    document.getElementById('ham').className = 'fas fa-angle-left';
  } else {
    varMobileExpand = false;
    document.getElementById('container').style.right = '0px';
    document.getElementById('ham').className = 'fas fa-bars';
  }
};

const name = 'Brad';

function funcCase(val) {
  if (!varCase) {
    varCase = true;
    document.getElementById('textBox').style.textTransform = 'uppercase';
  } else {
    varCase = false;
    document.getElementById('textBox').style.textTransform = 'unset';
  }
}

function funcMode(val) {
  if (!varMode) {
    varMode = true;

    document.documentElement.style.setProperty('--col-light', '#15131a');
    document.documentElement.style.setProperty('--col-text-main', '#e6e6e6');
    document.documentElement.style.setProperty('--col-text-nofoc', '#2c2a32');
    document.documentElement.style.setProperty('--col-grayer-light', '#110f14');
  } else {
    varMode = false;

    document.documentElement.style.setProperty('--col-light', '#fafafa');
    document.documentElement.style.setProperty('--col-text-main', '#272727');
    document.documentElement.style.setProperty('--col-text-nofoc', '#cacaca');
    document.documentElement.style.setProperty('--col-grayer-light', '#f5f5f5');
  }
}

function funcSize(val) {
  txt = document.getElementById('textBox');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize + val + 'px';
}

function funcSpacing(val) {
  txt = document.getElementById('textBox');
  style = window.getComputedStyle(txt, null).getPropertyValue('letter-spacing');
  currentSize = parseFloat(style);
  console.log(currentSize);
  txt.style.letterSpacing = currentSize + val + 'px';
}

const setScroll = async () => {
  while (true) {
    if (clicktoggl) {
      document.getElementById('textBox').scrollTop = document.getElementById(
        'textBox'
      ).scrollHeight;
    }
    await sleep(200);
  }
};

const funcMobile = async () => {
  document.getElementById('content').style.margin = 'unset';

  var paragraphs = document.getElementsByTagName('p');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.maxWidth = 'unset';
  }
  document.getElementById('textwrap').style.width = '100%';

  document.getElementById('expand').style.display = 'none';

  document.getElementById('buttons').style.display = 'flex';
  document.getElementById('buttons').style.flexDirection = 'column';

  document.getElementById('legal').style.display = 'flex';
  document.getElementById('legal').style.flexDirection = 'column-reverse';

  document.getElementById('social').style.display = 'flex';
  document.getElementById('social').style.flexDirection = 'row';
  document.getElementById('social').style.justifyContent = 'center';

  document.getElementById('contx').style.boxSizing = 'border-box';
  document.getElementById('contx').style.padding = '14px 14px 0px 14px';
  document.getElementById('contx').style.display = 'flex';
  document.getElementById('contx').style.flexDirection = 'column';

  document.getElementById('container').style.margin = '0px';

  hgt = $(window).height() - 64 + 'px';

  document.getElementById('container').style.height = hgt;
  document.getElementById('container').style.fontSize = '4em';

  document.getElementById('textBox').style.fontSize = '1em';
  document.getElementById('push').style.display = 'inline-block';
  document.getElementById('ham').style.display = 'inline-block';

  document.getElementById('push').onclick = function () {
    $('html,body').animate(
      {
        scrollTop: document.body.scrollHeight,
      },
      'slow'
    );
  };
  document.getElementById('ham').onclick = function () {
    funcMobileExpand(varMobileExpand);
  };
};

window.onload = function () {
  $('#textwrap')
    .children()
    .each(function (index) {
      //$( this ).delay( 1800 ).fadeIn( 400 );

      $(this).addClass('default');
      console.log(index + ': ' + $(this).text());
    });

  document.getElementById('ham').onclick = function () {
    funcExpand(varExpand);
  };
  document.getElementById('twit').onclick = function () {
    window.open('https://twitter.com/someone08152');
  };
  document.getElementById('redd').onclick = function () {
    window.open('https://www.reddit.com/user/someone0815');
  };
  document.getElementById('downl').onclick = function () {
    window.open('https://magnoliatype.000webhostapp.com/Magnolia%20Sup_8.ttf');
  };

  intro();

  document.getElementById('textBox').onclick = function () {
    makeWritable();
    clicktoggl = false;
  };

  document.getElementById('btn-sizeplus').onclick = function () {
    funcSize(10);
  };
  document.getElementById('btn-sizeminus').onclick = function () {
    funcSize(-10);
  };
  document.getElementById('btn-spaceplus').onclick = function () {
    funcSpacing(1);
  };
  document.getElementById('btn-spaceminus').onclick = function () {
    funcSpacing(-1);
  };
  document.getElementById('btn-mode').onclick = function () {
    funcMode(varMode);
  };
  document.getElementById('btn-case').onclick = function () {
    funcCase(varCase);
  };
  /*
    if (isMobile()) {
        funcMobile();
    } else {
        //document.getElementById("content").style.marginLeft = "50%";
    }*/
  setScroll();
};
