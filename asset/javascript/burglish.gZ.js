function gZ(OT, g5) {
  OD[OT.id] = {
    'list': [],
    'hC': -1,
    'Km': 0,
    'KV': '',
    'w5': '',
    'Ke': '',
    'hE': 0,
    'Kv': 1,
    'K6': true,
    'hq': false,
    'Qo': false,
    'NW': false,
    'hk': false,
    'K3': true,
    'Qe': 0,
    'hc': 1,
    'wv': '',
    'Qa': {
      'K6': {
        text: 'Burglish menu(F2)',
        class: 'icon-tasks'
      },
      'K3': {
        text: 'Tips',
        class: 'icon-show-tips'
      },
      'Qe': {
        text: 'follow Cursor',
        class: 'icon-follow-cursor'
      },
      'hq': {
        text: 'only known Syllables',
        class: 'icon-known-syllable'
      },
      'NW': {
        text: 'characters list',
        class: 'icon-character-list',
        cb: 'NM'
      },
      'Qo': {
        text: 'TypeWriter(F8)',
        class: 'icon-typewriter'
      }
    },
    // 'gM': 'Zawgyi',
    // 'Ow': 'WinInnwa'
    'gM': gM.source.name,
    'Ow': gM.target.name
  };
  for (var i in OT) {
    if (i != "id") OD[OT.id][i] = OT[i];
  };
  if (!g5) {
    if ($(OT.id)) {
      if ($(OT.id).tagName == "TEXTAREA") gx(OT);
    } else {
      go(OT);
    }
    gu(OT.id);
  }
  hz = OD[OT.id].gM;
};