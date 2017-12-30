var gv = "1.9.12.090705";
var wB = {
  'ynn': ['$1င္း'],
  'yn': ['$1င္', '$1င္း'],
  'ye': ['$1ိုင္း', '$1ိုင္', '$1ိုင့္'],
  'y': ['$1ိုင္', '$1ိုင္း', '$1ိုင့္'],
  'uz': ['$1ြဇ္', 'ေ$1ာဇ္'],
  'uu': ['$1ူး'],
  'ut': ['$1ြတ္', '$1ြပ္', 'ေ$1ာတ္', '$1ြဋ္'],
  'urt': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'urd': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'urr': ['$1ား'],
  'urk': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'urh': ['$1ာ့'],
  'urd': ['$1ာဒ္', '$1ာ႒္'],
  'urb': ['$1ာဘ္'],
  'ur': ['$1ာ', '$1ား', '$1ာ့'],
  'unt': ['$1ြန္႕', '$1ြံ႕', '$1ြမ့္'],
  'unn': ['$1ြန္း', '$1ြမ္း', '$1န္း', '$1ြဏ္း'],
  'un': ['$1ြန္', '$1ြန္း', '$1ြမ္', '$1ြံ', '$1ြဏ္', '$1ြဏ္း'],
  'umt': ['$1ြမ့္'],
  'umm': ['$1ြမ္း', '$1ြမ္'],
  'um': ['$1ြမ္', '$1ြမ္း'],
  'uh': ['$1ူ႕'],
  'u': ['$1ူ', '$1ု', '$1ူ႕'],
  't': ['ေ$1ာက္'],
  'rr': ['$1ား'],
  'rh': ['$1ာ့'],
  'r': ['$1ာ', '$1ား', '$1ာ့'],
  'oy': ['$1ိြဳင္'],
  'ove': ['$1ုဗ္'],
  'ov': ['$1ုဗ္'],
  'out': ['ေ$1ာက္', 'ေ$1ာတ္', 'ေ$1ာဂ္'],
  'ount': ['ေ$1ာင့္'],
  'ounh': ['ေ$1ာင့္'],
  'oung': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'oun': ['ေ$1ာင္', 'ေ$1ာင္း', 'ေ$1ာင့္'],
  'oun': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'ou': ['$1ိုး', '$1ို'],
  'oth': ['$1ို႕'],
  'ote': ['$1ုတ္', '$1ုပ္', '$1ုက္', '$1ုစ္', '$1ုဇ္', '$1ုဂ္', '$1ုဋ္'],
  'ot': ['ေ$1ာ့', '$1ုတ္', '$1ုပ္', '$1ုက္', '$1ုစ္', '$1ုဇ္', '$1ုဂ္', '$1ုဋ္'],
  'ot': ['$1ို႕', 'ေ$1ာ့', '$1ိုယ့္'],
  'ort': ['ေ$1ာ့'],
  'orh': ['ေ$1ာ့'],
  'or': ['ေ$1ာ္', 'ေ$1ာ'],
  'ope': ['$1ုပ္', '$1ုတ္'],
  'op': ['$1ုပ္', '$1ုတ္'],
  'op': ['$1ို႕', 'ေ$1ာ့', '$1ိုယ့္'],
  'ooz': ['$1ြဇ္', 'ေ$1ာဇ္'],
  'oot': ['$1ြတ္', '$1ြပ္'],
  'oont': ['$1ြန့္', '$1ြမ့္'],
  'oonh': ['$1ြန့္', '$1ြမ့္'],
  'oon': ['$1ြန္း', '$1ြန္', '$1ြမ္း', '$1ြမ္'],
  'oomt': ['$1ြမ့္', '$1ြန့္'],
  'oomh': ['$1ြမ့္', '$1ြန့္'],
  'oom': ['$1ြမ္း', '$1ြမ္'],
  'ood': ['$1ြဒ္', '$1ြတ္'],
  'oo': ['$1ိုး', '$1ူး'],
  'ont': ['$1ြန္႔', '$1ြံ႕', '$1ြမ့္', '$1ုန္႕', '$1ံု႕'],
  'one': ['$1ုန္း', '$1ုမ္း', '$1ုံး', '$1ုဥ္း', '$1ုန္', '$1ုမ္', '$1ုံ'],
  'on': ['$1ြန္', '$1ြံ', '$1ံု', '$1ြဏ္'],
  'ol': ['$1ိုလ္', 'ေ$1ာ', '$1ိုဠ္'],
  'oke': ['$1ုက္'],
  'ok': ['$1ုက္'],
  'oi': ['$1ိြဳင္'],
  'ohnh': ['$1ုန္႕', '$1ုမ့္'],
  'ohn': ['$1ုန္း', '$1ုမ္း'],
  'ohmh': ['$1ုန္႕', '$1ုမ့္'],
  'ohm': ['$1ုန္း', '$1ုမ္း'],
  'oh': ['$1ို႕', 'ေ$1ာ့', '$1ိုယ့္'],
  'oet': ['$1ို႕'],
  'oeh': ['$1ို႕'],
  'oe': ['$1ိုး'],
  'ode': ['$1ုဒ္', '$1ုဎ္'],
  'od': ['$1ုဒ္', '$1ုဎ္'],
  'oav': ['$1ုဗ္'],
  'oat': ['$1ုတ္', '$1ုပ္', '$1ုက္', '$1ုစ္', '$1ုဇ္', '$1ုဂ္', '$1ုဋ္'],
  'oap': ['$1ုပ္', '$1ုတ္'],
  'oant': ['$1ုန္႕', '$1ုမ့္', '$1ံု႔', '$1ုဥ့္'],
  'oann': ['$1ုန္း', '$1ုမ္း', '$1ံုး', '$1ုဥ္း'],
  'oanh': ['$1ုန္႕', '$1ုမ့္', '$1ံု႔', '$1ုဥ့္'],
  'oan': ['$1ုန္', '$1ုမ္', '$1ံု', '$1ုဏ္', '$1ုဥ္', '$1ုလ္'],
  'oak': ['$1ုက္'],
  'oad': ['$1ုဒ္', '$1ုဎ္', '$1ုသ္'],
  'oa': ['$1ြာ'],
  'o': ['$1ို', '$1ိုး', '$1ိုရ္', '$1ိုယ္', '$1ိုဠ္', '$1ိုဟ္'],
  'iz': ['$1ဇ္', '$1ာဇ္'],
  'ite': ['$1ိုက္'],
  'it': ['$1စ္', '$1တ္', 'ေ$1တ္', 'ေ$1က္', '$1ဋ္', 'ေ$1စ္'],
  'is': ['$1စ္', 'ေ$1စ္'],
  'is': ['$1စ္', '$1တ္', 'ေ$1တ္', 'ေ$1က္', '$1ဋ္', 'ေ$1စ္'],
  'int': ['$1င့္', '$1ဥ့္'],
  'inn': ['$1င္း', '$1ဥ္း'],
  'ing': ['$1င္း', '$1ဥ္း'],
  'ine': ['$1ိုင္', '$1ိုင္း', '$1ိုဏ္း'],
  'in': ['$1င္', '$1င္း', '$1ဥ္', 'ေ$1န္', '$1ဥ္း'],
  'ike': ['$1ိုက္'],
  'ik': ['$1စ္', '$1တ္', 'ေ$1တ္', 'ေ$1က္', '$1ဋ္', 'ေ$1စ္'],
  'ii': ['$1ီး', '$1ည္း', '$1ည့္'],
  'ih': ['$1ည့္'],
  'ide': ['$1ိုဒ္'],
  'id': ['$1စ္'],
  'i': ['$1ိ', '$1ီ', '$1ည္', '$1ည္း', '$1ည့္'],
  'g': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'f': ['$1္'],
  'eyy': ['ေ$1း', '$1ည္း'],
  'eyt': ['ေ$1့', '$1ည့္'],
  'eyh': ['ေ$1့', '$1ည့္'],
  'ey': ['ေ$1း', '$1ည္း'],
  'ey': ['ေ$1', '$1ည္', 'ေ$1း', 'ေ$1့', '$1ည္း'],
  'et': ['$1က္', '$1တ္', '$1ပ္'],
  'ert': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'ert': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'err': ['$1ား'],
  'erk': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'erh': ['$1ာ့'],
  'erd': ['$1ာဒ္', '$1ာ႒္'],
  'erb': ['$1ာဘ္'],
  'er': ['$1ာ', '$1ား', '$1ာ့'],
  'en': ['$1ဲန္း', '$1ဲန္', '$1န္'],
  'elh': ['$1ဲ့', '$1ယ့္', '$1ည့္'],
  'el': ['$1ဲ', '$1ယ္', '$1ည္', '$1ည္း', '$1ဲ့', '$1ည့္'],
  'ek': ['$1က္'],
  'eit': ['$1ိတ္', '$1ိပ္', '$1ိက္', '$1ိဋ္', '$1ိသ္'],
  'eint': ['$1ိန္႕', '$1ိမ့္'],
  'einn': ['$1ိန္း', '$1ိမ္း', '$1ိဏ္း'],
  'einh': ['$1ိန္႕', '$1ိမ့္'],
  'ein': ['$1ိန္', '$1ိမ္', '$1ႎ', '$1ိင္', '$1ိဥ္', '$1ိဏ္', '$1ိလ္'],
  'eih': ['ေ$1့', '$1ဲ့', '$1ယ့္', '$1ည့္'],
  'ei': ['ေ$1း', '$1ဲ', '$1ယ္', 'ေ$1', '$1ည္း', '$1ည္'],
  'eh': ['$1ဲ့', '$1ည့္', 'ေ$1့', '$1ဲ', '$1ည္'],
  'ee': ['$1ီး', '$1ည္း'],
  'eck': ['$1က္'],
  'ec': ['$1က္'],
  'e`': ['$1ဲ့', '$1ဲ'],
  'e': ['$1ီ', '$1ဲ', '$1ည္', '$1ယ္', 'ေ$1', 'ေ$1း', '$1ည့္', '$1ဲ့'],
  'ayy': ['ေ$1း', '$1ည္း'],
  'ayt': ['ေ$1့', '$1ည့္'],
  'ayh': ['ေ$1့', '$1ည့္'],
  'aye': ['ေ$1း', '$1ည္း'],
  'ay': ['ေ$1', '$1ည္', 'ေ$1း', 'ေ$1့', '$1ည္း'],
  'aww': ['ေ$1ာ'],
  'awt': ['ေ$1ာ့'],
  'awn': ['ေ$1ာန္'],
  'awh': ['ေ$1ာ့'],
  'aw': ['ေ$1ာ', 'ေ$1ာ္', 'ေ$1ာ့', 'ေ$1ာဝ္'],
  'ave': ['$1ိဗ္'],
  'av': ['$1ဗ္'],
  'aut': ['ေ$1ာက္', 'ေ$1ာတ္'],
  'aunt': ['ေ$1ာင့္'],
  'aunh': ['ေ$1ာင့္'],
  'aung': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'aun': ['ေ$1ာင္', 'ေ$1ာင္း', 'ေ$1ာင့္'],
  'aun': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'auk': ['ေ$1ာက္', 'ေ$1ာတ္'],
  'au': ['ေ$1ာ'],
  'ath': ['$1သ္'],
  'ate': ['$1ိတ္', '$1ိပ္', '$1ိဇ္', '$1ိစ္', '$1ိက္', '$1ိဋ္', '$1ိသ္'],
  'at': ['$1တ္', '$1က္', '$1ပ္', '$1ဟ္', '$1ဋ္'],
  'art': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'art': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'arr': ['$1ား'],
  'arnn': ['$1ာန္း', '$1ာဏ္း'],
  'arn': ['$1ာန္', '$1ာဏ္', '$1ာဟ္'],
  'arl': ['$1ာယ္', '$1ာည္'],
  'ark': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'arh': ['$1ာ့'],
  'ard': ['$1ာဒ္', '$1ာ႒္'],
  'arb': ['$1ာဘ္'],
  'ar': ['$1ာ', '$1ား', '$1ာ့'],
  'ape': ['$1ိပ္'],
  'ap': ['$1ပ္'],
  'ant': ['$1န္႕', '$1ံ့', '$1မ့္'],
  'ann': ['$1န္း', '$1မ္း', '$1ဏ္း'],
  'an': ['$1န္', '$1ံ', '$1မ္', '$1ဏ္', '$1လ္'],
  'amm': ['$1မ္း'],
  'am': ['$1မ္', '$1မ္း', '$1န္', '$1ံ'],
  'alh': ['$1ယ့္', '$1ဲ့', '$1ည့္', '$1ဲ', '$1ည္'],
  'al': ['$1ယ္', '$1ဲ', '$1ည္', '$1ည္း', '$1ဲ့', '$1ည့္', '$1လ္'],
  'ake': ['$1ိက္', '$1ိတ္'],
  'ak': ['$1က္'],
  'aiv': ['$1ိဗ္'],
  'ait': ['$1ိတ္', '$1ိပ္', '$1ိဇ္', '$1ိစ္', '$1ိက္'],
  'aid': ['$1ိတ္', '$1ိပ္', '$1ိက္', '$1ိဋ္', '$1ိသ္'],
  'aip': ['$1ိပ္'],
  'aint': ['$1ိန္႕', '$1ိမ့္'],
  'ainn': ['$1ိန္း', '$1ိမ္း', '$1ိဏ္း'],
  'ainh': ['$1ိန္႕', '$1ိမ့္'],
  'aing': ['$1ိုင္', '$1ိုင္း'],
  'ain': ['$1ိန္', '$1ိမ္', '$1ႎ', '$1ိင္', '$1ိဥ္', '$1ိဏ္', '$1ိလ္'],
  'aik': ['$1ိက္', '$1ိတ္'],
  'aid': ['$1ိဒ္'],
  'ai': ['$1ိုင္း', '$1ိုင္', '$1ိုဏ္း', '$1ိုင့္', 'ေ$1'],
  'ag': ['$1ဂ္'],
  'aeh': ['ေ$1့', '$1ည့္', '$1ဲ့'],
  'ae': ['$1ယ္', '$1ဲ', 'ေ$1', '$1ည္', 'ေ$1း'],
  'ade': ['$1ိဒ္'],
  'ad': ['$1ဒ္', '$1ဎ္'],
  'ack': ['$1က္'],
  'ac': ['$1က္'],
  'ab': ['$1ဘ္'],
  'a`': ['$1ဲ့', '$1ဲ'],
  'a': ['$1', '$1ာ့'],
  '`': ['$1ဲ့', '$1ဲ']
};
var wU = {
  'zz': ['စ်'],
  'zw': ['ဇြ'],
  'zh': ['စ်'],
  'z': ['ဇ', 'စ်'],
  'yy': ['ယ', 'ယ်'],
  'yw': ['ရြ', 'ယြ'],
  'yh': ['ယွ'],
  'yh': ['ယ', 'ယ်'],
  'y': ['ရ', 'ယ', 'လ်', 'ယ်'],
  'x': ['ဆ', 'စ'],
  'wh': ['ဝွ'],
  'w': ['ဝ'],
  'v': ['ဗ', 'ဘ'],
  'u': ['အ'],
  'ty': ['တ်', 'ၾတ'],
  'tw': ['တြ'],
  'tt': ['ဋ'],
  'tr': ['တ်', 'ၾတ'],
  'thw': ['သြ'],
  'th': ['သ'],
  't': ['တ', 'ဋ', 'ထ'],
  'sy': ['ၾဆ'],
  'sw': ['စြ', 'ဆြ'],
  'ss': ['ဆ'],
  'shw': ['ရႊ'],
  'sh': ['ရွ', 'လွ်', 'သွ်'],
  's': ['စ', 'ဆ'],
  'r': ['ရ', 'ယ', 'လ်'],
  'q': ['က'],
  'py': ['ျပ', 'ပ်'],
  'pw': ['ပြ'],
  'phy': ['ျဖ', 'ဖ်'],
  'phw': ['ဖြ'],
  'ph': ['ဖ'],
  'p': ['ပ'],
  'o': ['အ'],
  'ny': ['ည', 'ျင', 'ဉ'],
  'nw': ['ႏြ'],
  'nn': ['ဏ'],
  'nhy': ['ညွ', 'ျငွ', 'ဥွ'],
  'nhw': ['ႏႊ'],
  'nhg': ['ငွ'],
  'nh': ['ငွ', 'ႏွ', 'ဏွ'],
  'ngw': ['ငြ'],
  'ngh': ['ငွ'],
  'ng': ['င'],
  'n': ['န', 'ဏ'],
  'my': ['ျမ', 'မ်'],
  'mw': ['မြ', 'ျမြ'],
  'mhy': ['မွ်', 'ျမွ'],
  'mhw': ['မႊ', 'ျမႊ'],
  'mh': ['မွ'],
  'm': ['မ'],
  'ly': ['လ်', 'လွ်'],
  'lw': ['လြ', 'လႊ'],
  'll': ['ဠ'],
  'lhy': ['လွ်', 'လ်'],
  'lhw': ['လႊ'],
  'lh': ['လွ', 'ဠွ'],
  'l': ['လ', 'ဠ'],
  'kyw': ['ၾကြ', 'ကြၽ'],
  'ky': ['က်', 'ၾက'],
  'kw': ['ကြ'],
  'khw': ['ခြ'],
  'kh': ['ခ'],
  'k': ['က', 'ခ'],
  'j': ['ဂ်', 'ျဂ'],
  'i': ['အ'],
  'hw': ['ဟြ'],
  'htw': ['ထြ'],
  'htt': ['ဌ'],
  'ht': ['ထ', 'ဌ', '႒'],
  'hs': ['ဆ'],
  'hnw': ['ႏႊ'],
  'hn': ['ႏွ', 'ဏွ'],
  'hmy': ['မွ်', 'ျမွ'],
  'hmw': ['မႊ', 'ျမႊ'],
  'hm': ['မွ'],
  'hly': ['လွ်', 'လ်'],
  'hlw': ['လႊ'],
  'hl': ['လွ', 'ဠွ'],
  'hdd': ['ဎ'],
  'hd': ['ဍ', 'ဎ'],
  'h': ['ဟ'],
  'gy': ['ဂ်', 'ျဂ', 'ၾက'],
  'gw': ['ဂြ'],
  'gh': ['ဃ'],
  'gg': ['ဃ'],
  'g': ['ဂ', 'က', 'ဃ'],
  'fy': ['ျဖ', 'ဖ်'],
  'fw': ['ဖြ', 'ဘြ'],
  'f': ['ဖ'],
  'e': ['အ'],
  'dw': ['ဒြ', 'ျဒ'],
  'dr': ['ဒြ', 'ျဒ'],
  'dd': ['ဓ'],
  'd': ['ဒ', 'ဓ', 'တ', 'ဍ', 'ဎ'],
  'chw': ['ခြၽ', 'ျခြ'],
  'ch': ['ခ်', 'ျခ'],
  'c': ['က'],
  'by': ['ဗ်', 'ျဗ', 'ဘ်'],
  'bw': ['ဘြ', 'ဗြ', 'ပြ'],
  'b': ['ဘ', 'ဗ', 'ပ'],
  'a': ['အ']
};
var wj = [
  ['([^ျၾ][ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ', '$1ါ'],
  ['^([ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ', '$1ါ'],
  ['ါ္', 'ၚ'],
  ['န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])', 'ႏ$1'],
  ['([ၠ-ၼႇွုူႈႉြႊန်ဳဴ].?)[့႔]', '$1႕'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု', '$1ဳ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု', '$1ဳ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ', '$1ဴ'],
  ['ွ([ံိႎဲ]?)ု', '$1ႈ'],
  ['ွ([ံိႎဲ]?)ူ', '$1ႉ'],
  ['ရ([ံိႎဲ]?[ုူႈႉ])', '႐$1'],
  ['ွ([ိႎဲၽ်]?)ွ', 'ွ$1'],
  ['ြွ|ွြ|ႊွ', 'ႊ'],
  ['်ြ', 'ြၽ'],
  ['[ွႇ]([ိီ်ၽ]?)ြ', 'ႊ$1'],
  ['်ွ', 'ွ်'],
  ['([ျၾ].{0,2})ွ', '$1ႇ'],
  ['([ဝြႊ].{0,2})ြ', '$1'],
  ['([ဥ])[ုဳ]', '$1'],
  ['ၤ(.{0,2})ိ', 'ႋ$1'],
  ['ၤ(.{0,2})ီ', 'ႌ$1'],
  ['ာ႕', 'ာ့'],
  ['ၾ([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?ြ)', 'ႂ$1'],
  ['([^ျၾ][ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ္', '$1ၚ']
];
var wp = [
  ['[ၿႁႃ]', 'ျ'],
  ['[ႀႂႄ]', 'ၾ'],
  ['[့႔႕]+', '့'],
  ['\s+([ါ-ွ]+)', '$1'],
  ['(.?[ိံ].?)[ူ]', '$1ု'],
  ['ဳ', 'ု'],
  ['ဴ', 'ူ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု', '$1ဳ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု', '$1ဳ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)ၲ', '$1ၱ', 'ၱ', 'ၲ'],
  ['([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)ၴ', '$1ၳ', 'ၳ', 'ၴ'],
  ['([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)႓', '$1ၻ', 'ၻ', '႓'],
  ['[ျၿ-ႃ]([ကဃဆဏတထဘယလသဟ])', 'ၾ$1'],
  ['န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])', 'ႏ$1']
];
var wu = [
  ['([^ျၾ])?([ခဂငဒပဝ])ာ', '$1$2ါ'],
  ['ါ္', 'ၚ'],
  ['ၾ([ကအ])(ြ)', 'ႂ$1$2'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု', '$1ဳ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု', '$1ဳ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ြ][ိ-ံ]?)့', '$1႕'],
  ['[ွႇ]([ိီ်ၽ]?)ြ', 'ႊ$1'],
  ['န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])', 'ႏ$1']
];
var w9 = [
  ['အု', 'ဥ'],
  ['အိ(?![ု])', 'ဣ'],
  ['ေအာ(?![့္])', 'ဩ']
];
var wS = [
  ['တစ္', 'ႏွစ္', 'သံုး', 'ေလး', 'ငါး', 'ေျခာက္', 'ခုႏွစ္', 'ရွစ္', 'ကိုး'],
  [
    ['ဆယ္', 'ဆယ့္'],
    ['ရာ', 'ရာ့'],
    ['ေထာင္', 'ေထာင့္'],
    ['ေသာင္း', 'ေသာင္း'],
    ['သိန္း', 'သိန္း'],
    ['သန္း', 'သန္း'],
    ['ကုေဋ', 'ကုေဋ']
  ], '၀၁၂၃၄၅၆၇၈၉'
];
var wI = [
  ['kyarr', 'က်္ား', -1],
  ['kyunote', 'ကြၽႏု္ပ္', -1],
  ['nhite', '၌', -1],
  ['hnite', '၌', -1],
  ['shat', 'ယွက္', -1],
  ['nyin', 'ညာဥ္', -1],
  ['shin', 'ယွဥ္', -1],
  ['kyar', 'က်္ာ', -1],
  ['yway', '၍', -1],
  ['umm', 'အမ္'],
  ['imm', 'အင္းမ္...'],
  ['yin', 'ယာဥ္', -1],
  ['yin', 'ယ်ာဥ္', -1],
  ['ywe', '၍', -1],
  ['d', 'ဒီ'],
  ['u', 'ယူ'],
  ['own', 'အံုး', -1],
  ['it', 'ဧတ္'],
  ['el', 'ဧည့္'],
  ['ei', 'ဣ'],
  ['or', 'ဪ', -1],
  ['ei', '၏'],
  ['ei', 'ဤ'],
  ['oo', 'ဥ'],
  ['ah', 'အ'],
  ['aw', 'ဪ'],
  ['ay', 'ဧ'],
  ['ag', 'ေအာင္'],
  ['oo', 'ဦး'],
  ['oh', 'အိုး'],
  ['r', 'အာ'],
  ['ae', 'အဲ'],
  ['ei', 'အိ'],
  ['ei', 'အီ'],
  ['um', 'အမ္'],
  ['.', '။'],
  [',', '၊'],
  [',', 'ျပီး'],
  ['.', 'ျပီ'],
  ['4', '၎', -1],
  ['.', 'ဤ'],
  ['.', 'သည္'],
  ['.', '၏'],
  [',', '၌'],
  [',', '၍'],
  [',', 'ႏွင့္'],
  ['f', '--္', -1],
  ['b', 'ျပီ'],
  ['o', 'အို'],
  ['p', 'ျပီ'],
  ['e', 'ဤ'],
  ['a', 'အ'],
  ['a', 'ေအ', -1],
  ['u', 'ဥ'],
  ['u', 'ဦး'],
  ['h', '--့', -1],
  [';', 'း'],
  ['eu', 'အူ'],
  ['u', 'အူ'],
  ['u', 'အု'],
  ['a', 'အစ္', -1],
  ['tun', 'ထြန္း']
];
var wn = ['[ဍဋဌဣ][ႇွုူႈႉြႊ]', '[ဠ][ြႊ]', '[ၠ-ၼ႒][ႇွႈႉြႊ]'];
var w2 = ['က', 'ခ', 'ဂ', 'ဃ', 'င', 'စ', 'ဆ', 'ဇ', 'ဈ', 'ဉ', 'ၫ', 'ည', 'ဋ', 'ဌ', '႒', 'ဍ', 'ဎ', 'ဏ', 'တ', 'ထ', 'ဒ', 'ဓ', 'ႏ', 'န', 'ပ', 'ဖ', 'ဗ', 'ဘ', 'မ', 'ယ', '႐', 'ရ', 'လ', 'ဝ', 'သ', 'ႆ', 'ဟ', 'ဠ', 'အ', '--ဿ', '- ၠ', '- ၡ', '- ၢ', '- ၣ', '- ၥ', '- ၦ', '- ၧ', '- ၨ', '- ၩ', '- ၬ', '- ၭ', '- ၰ', '- ၱ', '- ၲ', '- ၳ', '- ၴ', '- ၵ', '- ၶ', '- ၷ', '- ၸ', '- ၹ', '- ၺ', '- ၻ', '- ႓', '- ၼ', '- ႅ', '၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', 'ေ', '- ိ', '- ီ', '- ္', '- ၤ', '- ာ', '- ါ', '- ၚ', '- ဲ', '- ြ', '- ႊ', '- ံ', '- း', '- ်', '- ၽ', 'ျ- ', 'ၾ- ', 'ၿ- ', 'ႀ- ', 'ႁ- ', 'ႂ- ', 'ႃ- ', 'ႄ- ', '- ့', '- ႔', '- ႕', '- ု', '- ူ', '- ဳ', '- ဴ', '- ႈ', '- ႉ', '- ွ', '- ႇ', '- ႋ', '- ႌ', '- ႎ', '- ႍ', 'ဣ', 'ဤ', 'ဥ', 'ၪ', 'ဦ', 'ဧ', 'ဩ', 'ဪ', '၍', '၌', '၎', '၏', '႗', 'ၮ', 'ၯ', '႑', '- ႖', '- ၊', '- ။'];
var w_ = ['က', 'ခ', 'ဂ', 'ဃ', 'င', 'စ', 'ဆ', 'ဇ', 'ဈ', 'ဉ', 'ည', 'ဋ', 'ဌ', 'ဍ', 'ဎ', 'ဏ', 'တ', 'ထ', 'ဒ', 'ဓ', 'န', 'ပ', 'ဖ', 'ဗ', 'ဘ', 'မ', 'ယ', 'ရ', 'လ', 'ဝ', 'သ', 'ဿ', 'ဟ', 'ဠ', 'အ', '၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', 'ေ', 'ိ', 'ီ', 'ု', 'ူ', '(--္)', '်', 'ာ', 'ါ', 'ဲ', 'ံ', '့', 'း', 'ျ', 'ြ', 'ွ', 'ှ', 'ဣ', 'ဤ', 'ဥ', 'ဦ', 'ဧ', 'ဩ', 'ဪ', '၍', '၌', '၎င်း', '၏', '-၊', '-။'];
var OD = new Object();

function NP(wx) {
  OD.x = wx.id;
  var KV = OD[OD.x]["KV"];
  if (!KV) {
    if ($("burmese") && !OD[OD.x]["self"]) $("burmese").value = "";
    Kx(OD.x + "drop");
    return;
  }
  if (/\d/.test(KV) && OD.gz) {
    OD[OD.x]['KV'] = '';
    Kx(OD.x + "drop");
    return;
  }
  var Kf = gW(wx, KV);
  var KZ = Kf.length;
  Kf = gF(wx, KV, Kf);
  Kf = Nb(wx, KV, Kf);
  Kf = g3(wx, KV, Kf);
  if (!OD[OD.x]["hq"]) {
    OD[OD.x]["hE"] = Kf.length == 0 ? (OD[OD.x]["hE"] + 1) : 0;
    if (OD[OD.x]["hE"] == 0) {
      OD[OD.x]["w6"] = [];
      OD[OD.x]["w6"][0] = Kf[0];
    }
    if (OD[OD.x]["hE"] == 1 && KV.length > OD[OD.x]["hE"]) {
      var Ot = OD[OD.x]["KV"];
      OD[OD.x]["KV"] = OD[OD.x]["w6"][0][0];
      OD[OD.x]["list"] = [OD[OD.x]["w6"][0]];
      OD[OD.x]["Km"] = 1;
      NB(wx);
      OD[OD.x]["KV"] = KV.substring(KV.length - OD[OD.x]["hE"], KV.length);
      OD[OD.x]["hE"] = 0;
    }
  }
  N8(wx, KV, Kf);
  $("col" + OD.x + "0").style.width = /\d+/.test(KV) ? "auto" : '150';
};

function Nb(wx, KV, Kf) {
  var ON;
  var OQ;
  var Og;
  var Kc;
  var K5;
  var K0;
  var Kr;
  var help = "" + KV + "";
  OD[OD.x]["lower"] = (KV.charCodeAt(0) > 64 && KV.charCodeAt(0) < 91) ? true : false;
  if (/^[aeiou]/i.test(KV)) {
    KV = KV.replace(/^([aeiou])/, "$1$1");
  }
  var KX = KV.toLowerCase();
  var wH = KX[0];
  var i = 0;
  while (wU[KX.substr(0, ++i)] && i <= KX.length) wH = KX.substr(0, i);
  var KT = KX.slice(i - 1) || "a";
  if (!wB[KT]) return Kf;
  ON = eval("/^" + wH + "/i");
  for (var Oy = 0; Oy < wU[wH].length; Oy++) {
    Kc = wU[wH][Oy];
    if (OD[OD.x]["lower"]) {
      if (wC(OD[OD.x]["plChar"]) != 4) {
        Kc = h4(wU[wH][Oy], OD[OD.x]["gM"]);
      }
    }
    K5 = KV.replace(ON, Kc);
    OQ = eval("/" + "(.*)" + KT + "$/");
    for (var n = 0; n < wB[KT].length; n++) {
      K0 = K5.replace(OQ, wB[KT][n]);
      if (!/\w/.test(K0)) {
        var exist = false;
        for (var p = 0; p < Kf.length; p++) {
          if (Kf[p][1] === K0) {
            exist = true;
            break;
          }
        }
        if (!exist) {
          var gY = false;
          for (var OC = 0; OC < wn.length; OC++) {
            if (eval("/" + wn[OC] + "/").test(K0)) {
              gY = true;
              break;
            }
          }
          if (!gY && OD[OD.x]["hq"]) {
            if (gQ[hz] && K0.length > 1) {
              if (gQ[hz].indexOf("," + K0 + ",") == -1) gY = true;
            }
          }
          if (!gY) {
            Kf[Kf.length] = [help, (OD[OD.x]["lower"] ? "---" : "") + K0];
            OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
          }
        }
        if (Kf.length > 20) return Kf;
      }
    }
  }
  var Kw = "";
  for (var i = 0; i < Kf.length; i++) {
    Kw += (i > 0 ? "||" : "") + Kf[i][1];
  }
  for (var l = 0; l < wj.length; l++) {
    Og = eval("/" + wj[l][0] + "/g");
    if (Og.test(Kw)) {
      Kw = Kw.replace(Og, wj[l][1]);
    }
  }
  Kw = Kw.split("||");
  for (var i = 0; i < Kf.length; i++) {
    Kf[i][1] = Kw[i];
  }
  return Kf;
};

function g3(wx, KV, Kf) {
  for (var OM = 0; OM < Kf.length; OM++) {
    for (var OC = 0; OC < w9.length; OC++) {
      var OL = eval("/" + w9[OC][0] + "/");
      if (OL.test(Kf[OM][1])) {
        var K0 = Kf[OM][1].replace(OL, w9[OC][1]);
        var exist = false;
        for (var Oe = 0; Oe < Kf.length; Oe++) {
          if (Kf[Oe][1] == K0) {
            exist = true;
            break;
          }
        }
        if (!exist) {
          var gY = false;
          for (var Oe = 0; Oe < wn.length; Oe++) {
            if (eval("/" + wn[Oe] + "/").test(K0)) {
              gY = true;
              break;
            }
          }
          if (!gY) {
            Kf[Kf.length] = [Kf[OM][0], K0];
          }
        }
      }
    }
  }
  var Q3 = [];
  for (var OM = 0; OM < Kf.length; OM++) {
    if (Kf[OM].length >= 3) {
      if (Kf[OM][2] != -1) {
        Q3[Q3.length] = Kf[OM];
      }
    } else {
      Q3[Q3.length] = Kf[OM];
    }
  }
  for (var OM = 0; OM < Kf.length; OM++) {
    if (Kf[OM].length >= 3) {
      if (Kf[OM][2] == -1) {
        Q3[Q3.length] = Kf[OM];
      }
    }
  }
  Kf = Q3;
  if (OD[OD.x]["gM"] != "Zawgyi") {
    var Ot = "";
    for (var OM = 0; OM < Kf.length; OM++) {
      Ot += (OM > 0 ? '\f' : '') + Kf[OM][1];
    }
    Ot = Ot.Ng("Zawgyi", OD[OD.x]["gM"], {
      "Qv": true
    }).split('\f');
    for (var OM = 0; OM < Kf.length; OM++) {
      Kf[OM][1] = Ot[OM];
    }
  }
  OD[OD.x]["list"] = Kf;
  return Kf;
};

function gW(wx, KV) {
  var Nu = 0;
  var Kf = [];
  var qtmp = KV.Ql();
  var isBur = OD[OD.x]["isburmese"] ? 1 : 0;
  var re = eval("/^" + qtmp + "/");
  for (var i = 0; i < wI.length; i++) {
    if (Nu > 10) break;
    if (re.test(wI[i][isBur])) {
      OD[OD.x]["list"][Nu] = Kf[Nu] = wI[i].slice();
      Nu++;
    }
  }
  return Kf;
};

function gF(wx, KV, Kf) {
  if (!isNaN(KV) && !/[^\d]+/.test(KV) && !OD["ignore"]) {
    var Oh = KV.gp();
    Kf[Kf.length] = [KV, Oh];
    OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
    var dig = "";
    var az = true;
    var O0 = KV.reverse();
    var d = 0;
    if (O0.length <= wS[1].length + 1) {
      for (var i = 0; i < O0.length; i++) {
        if (d > 0) az = false;
        d = parseInt(O0.charAt(i));
        if (i == 0 && d > 0) {
          dig = wS[0][d - 1];
        } else if (d > 0) {
          dig = wS[0][d - 1] + wS[1][i - 1][az ? 0 : 1] + dig;
        }
      }
    }
    if (dig != "") {
      Kf[Kf.length] = [KV, dig];
      OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
    }
  }
  return Kf;
};
var K3 = {
  "Zawgyi": ['ဘယ္ညာArrow Key ကိုသံုးျပီးColumnကိုေရြးပါ။', 'အေပၚေအာက္Arrow Key ျဖင့္စာလံုးတစ္ခုစီေရြးသြားႏိုင္ပါသည္။', 'Enter ကီး Tab ကီးစသည္တို႕ျဖင့္ စာလံုးကို အတည္ျပဳႏိုင္ပါသည္။', '၀ မွ ၉ အထိ Shortcut ကီးမ်ားကိုသံုးပါ။', 'ပုဒ္ကေလးပုဒ္မအတြက္,ႏွင့္ . ကိုသံုးပါ။', '"စ္က္" စသည့္တို႕ကိုရိုက္ခ်င္လွ်င္ sf,kf စသည္ျဖင့္ရိုက္ပါ။', 'ေအာက္ကျမစ္သပ္သပ္ရိုက္ခ်င္လွ်င္ h ျဖင့္ရိုက္ပါ။', 'ဝစ္စေပါက္သပ္သပ္ရိုက္ခ်င္လွ်င္;ျဖင့္ရိုက္ပါ။', 'ပတ္ဆင့္မ်ားကို ရိုက္ခ်င္လွ်င္ စာလံုးအၾကီးျဖင့္ရိုက္ပါ။ tak Ka thol - တကၠသိုလ္', 'ေမာင္ ကို mg,ေအာင္ ကို ag,ကာ ကို kr,ပါကို pr ျဖင့္ရိုက္ႏိုင္သည္။', 'ဉာဏ္ကို nyarn,ပါယ္ ကို parl စသည္ျဖင့္ရိုက္ပါ။', 'ျမန္မာစာလံုး မေရြးလိုပါက Esc ႏွိပ္ႏိုင္ပါသည္။']
};

function hO() {
  var Oc = K3[hz][Math.round(Math.random() * (K3[hz].length - 1))];
  return Oc;
};

function N8(wx, KV, Kf) {
  var Nu = 0;
  var Nm = $(OD.x + "drop");
  var Ks = '<div>';
  if (OD[OD.x]["K3"]) Ks += '<div id="help' + OD.x + '" class="ge">' + hO() + '<\/div>';
  Ks += '<div id="col' + OD.x + '0" class="gH">';
  if (Kf.length == 0) Ks = "&lt;No Items available>";
  for (var i = 0; i < Kf.length; i++) {
    if (i % 10 == 0 && i > 9 && i != Kf.length) {
      Ks += '<\/div><div id="col' + OD.x + (i / 10) + '" class="gH">';
    }
    if (OD[OD.x]["isburmese"]) {
      Ks += '<div id="wO' + OD.x + i + '" onmousedown="NB();" onmouseup="Qp();" onmouseover="N2(' + i + ');" onmouseout="this.className=\'off\';"> ' + (i % 10) + '. ' + Kf[i][0] + ' ' + Kf[i][1] + '</div>';
    } else if (OD[OD.x]["K6"]) {
      Ks += '<div id="wO' + OD.x + i + '" onmousedown="NB();" onmouseup="Qp();" onmouseover="N2(' + i + ');" onmouseout="this.className=\'off\';"> ' + (i % 10) + '. ' + Kf[i][0].replace(KV, '<b>' + KV + '</b>') + ' ' + Kf[i][1] + '</div>';
    }
  }
  Ks += '<\/div><\/div>';
  Nm.innerHTML = Ks;
  if (Kf.length >= 1) {
    wQ(OD.x + "drop");
    OD[OD.x]["hC"] = -1;
  }
  OD[OD.x]["Km"] = Kf.length;
  if (!w1) {
    var wY = OX(OD.x);
    var w7 = wY[1] - Nm.offsetHeight - 2;
    var KB = 0;
    if (OD[OD.x]["Qe"]) {
      var hA = wx.value.substring(0, wx.selectionEnd).split(/\n/);
      var NY = 1;
      var Kd = $(OD.x + "span");
      Kd.innerHTML = hA[0][0];
      var Qh = 0;
      var QQ = Kd.offsetHeight;
      for (var Oy = 0; Oy < hA.length; Oy++) {
        var gO = 0;
        for (var OM = 0; OM < Math.floor(hA[Oy].length / 200); OM++) {
          Kd.innerHTML = hA[Oy].substring(OM * 200, OM * 200 + 200);
          gO += Kd.offsetWidth;
        }
        Kd.innerHTML = hA[Oy].slice(OM * 200);
        gO += Kd.offsetWidth;
        if (Oy == hA.length - 1) {
          NY += Math.floor(gO / wx.offsetWidth);
          Qh = gO % wx.offsetWidth;
        } else {
          NY += Math.ceil(gO / wx.offsetWidth) || 1;
        }
      }
      if (document.body.clientHeight + document.body.scrollTop > wx.offsetTop + wx.offsetHeight + Nm.offsetHeight) {
        var posY = (QQ * NY) - wx.scrollTop;
        KB = wY[1] + posY;
      }
      Nm.style.left = wY[0] + Qh + 8 - wx.scrollLeft;
      if ((Nm.offsetLeft + Nm.offsetWidth) > document.body.clientWidth) Nm.style.left = document.body.clientWidth - Nm.offsetWidth;
      Nm.style.top = w7 < 0 ? KB : w7;
    } else if (OD[OD.x]["hc"]) {
      Nm.style.left = wY[0];
      Nm.style.top = wY[1] + wx.offsetHeight;
    } else {
      if (document.body.clientHeight + document.body.scrollTop > wx.offsetTop + wx.offsetHeight + Nm.offsetHeight) {
        KB = wY[1] + wx.offsetHeight;
      }
      Nm.style.left = wY[0];
      Nm.style.top = w7 < 0 ? KB : w7;
    }
  }
};

function Ns(e) {
  var wx = e.target ? e.target : e.srcElement;
  OD.x = wx.id;
  OD["ignore"] = false;
  var wV = e.keyCode ? e.keyCode : e.charCode;
  OD.ctrl = e.ctrlKey || e.ctrl;
  OD.alt = e.altKey || e.altLeft;
  OD.shift = e.shiftKey || e.shift || e.shiftLeft;
  OD.gz = (OD.alt ? 1 : 0) | (OD.ctrl ? 2 : 0) | (OD.shift ? 4 : 0);
  OD.hR = (wV >= 112 && wV <= 123) || wV < 20 || (wV >= 37 && wV <= 40) || (wV >= 33 && wV <= 36) || wV == 45 || wV == 46;
  OD.QB = 0;
  OD.Qg = wV;
  if (wV == 13) {
    var Oc = OD[OD.x]["Km"] == 0;
    if (!Oc) {
      NB(wx);
      if (QT) OD.QB = 1;
      return false;
    }
    return Oc;
  } else if (wV == 113) {
    var Kg = $("chk" + wx.id + "K6");
    Kg.checked = !Kg.checked;
    gD(Kg, wx.id, "K6");
    return false;
  } else if (wV == 38 && OD[OD.x]["Km"] > 0) {
    OD[OD.x]["hC"] = OD[OD.x]["hC"] - 1;
    N2(OD[OD.x]["hC"]);
    if (QT) OD.QB = 1;
    return !OD[OD.x]["K6"];
  } else if (wV == 40) {
    if (!OD[OD.x]["KV"]) return;
    if (OD[OD.x]["Km"] == 0) {
      NP(wx);
    } else if (OD[OD.x]["hC"] < OD[OD.x]["Km"] - 1) {
      OD[OD.x]["hC"] = OD[OD.x]["hC"] + 1;
      N2(OD[OD.x]["hC"]);
    }
    if (QT) OD.QB = 1;
    return !OD[OD.x]["K6"];
  } else if (wV == 32) {
    if (OD[OD.x]["K6"]) {
      if (!OD[OD.x]["KV"]) return;
      if (OD[OD.x]["Km"] > 1) {
        OD[OD.x]["hC"] += 1;
        if (OD[OD.x]["hC"] >= OD[OD.x]["Km"]) OD[OD.x]["hC"] = 0;
        N2(OD[OD.x]["hC"]);
      } else {
        hX(wx);
      }
      if (QT) OD.QB = 1;
      return false;
    }
  } else if (wV == 9) {
    hX(wx);
    if (QT) wx.blur();
    return false;
  } else if (wV == 37 && OD[OD.x]["Km"] > 10 && OD[OD.x]["hC"] > -1) {
    OD[OD.x]["hC"] = (OD[OD.x]["hC"] > 10 ? OD[OD.x]["hC"] - 10 : 0);
    N2(OD[OD.x]["hC"]);
    if (QT) OD.QB = 1;
    return false;
  } else if (wV == 39 && OD[OD.x]["Km"] > 0 && OD[OD.x]["hC"] > -1) {
    OD[OD.x]["hC"] = (OD[OD.x]["hC"] + 10 < OD[OD.x]["Km"] ? OD[OD.x]["hC"] + 10 : OD[OD.x]["Km"] - 1);
    N2(OD[OD.x]["hC"]);
    if (QT) OD.QB = 1;
    return false;
  } else if (wV == 8) {
    if (OD[OD.x]["KV"].length > 0) {
      OD[OD.x]["KV"] = OD[OD.x]["KV"].substr(0, OD[OD.x]["KV"].length - 1);
      if (OD[OD.x]["K6"]) NP(wx);
    }
    if (OD[OD.x]["Qo"]) OD[OD.x]["w5"] = "";
  } else if (wV == 46) {} else if (wV == 35 || wV == 36) {} else if (wV >= 48 && wV <= 57) {
    if (/[^\d]+/.test(OD[OD.x]["KV"])) {
      OD["ignore"] = true;
      OD[OD.x]["hC"] = (OD[OD.x]["hC"] >= 10 ? OD[OD.x]["hC"] - OD[OD.x]["hC"] % 10 : 0) + wV - 48;
      N2(OD[OD.x]["hC"]);
      hX(wx);
      if (QT) OD.QB = 1;
      return false;
    }
  } else if (wV == 27) {
    OD[OD.x]["KV"] = "";
    OD[OD.x]["Km"] = 0;
    OD[OD.x]["hC"] = -1;
    Kx(OD.x + "drop");
    return false;
  } else if (wV == 118) {
    return false;
  } else if (wV == 119 || (OD.gz == 1 && wV == 78)) {
    var Kg = $("chk" + wx.id + "Qo");
    Kg.checked = !Kg.checked;
    gD(Kg, wx.id, "Qo");
    return false;
  }
  if (w1 && (OD.gz & 3 == 3)) NL(e);
};

function QF(e) {
  var wx = e.target ? e.target : e.srcElement;
  gt(wx);
};

function NL(e) {
  if (OD.QB) return false;
  var wx = e.target ? e.target : e.srcElement;
  var wV = e.keyCode ? e.keyCode : e.charCode;
  if (OD.gz & 4) wV = OD.Qg;
  var KD = hT(wV);
  var Kk = String(OD.gz) + KD;
  if (((OD.gz == 1) || (OD.gz == 2) || OD.hR || !OD.x) && !Oa[hz]["Ow"][Kk]) return;
  var re = /[\w;\.\,`]/;
  if (re.test(KD) && OD[OD.x]["K6"]) {
    if (!OD["ignore"] && (e.charCode != 0 || !Ku(e.charCode))) {
      if (OD[OD.x]["KV"] == "") {
        OD[OD.x]["spos"] = wx.selectionStart;
      }
      OD[OD.x]["KV"] += "" + KD;
      NP(wx);
    }
  } else if (OD[OD.x]["Qo"]) {
    var Oi = null;
    if (w1) {
      if (Oa[hz]["Ow"][Kk]) {
        Oi = Oa[hz]["Ow"][Kk];
        e.keyCode = null;
        return QC(wx, Oi, "");
      } else {
        Oi = ((OD.gz == 3) ? h4(hT(hG(wV))) : hG(wV));
        if (Oa[hz].unicode == 51) {
          var hx = OD[OD.x]["w5"];
          var hS = hT(Oi);
          if (g_(wx, hS, hx)) {
            e.keyCode = null;
            OD[OD.x]["w5"] = hx;
            return;
          }
          OD[OD.x]["w5"] = hT(Oi);
        }
        if (Oi) e.keyCode = Oi;
      }
      return;
    } else if (Qn(String(wV)) || Oa[hz]["Ow"][Kk]) {
      if (Oa[hz]["Ow"][Kk]) {
        Oi = Oa[hz]["Ow"][Kk];
      } else {
        if (hG(wV) == 0) return;
        Oi = ((OD.gz == 3) ? h4(hT(hG(wV))) : hT(hG(wV)));
      }
      var OT = wx.selectionStart;
      if (Oa[hz].unicode == 51) {
        var hx = wx.value.substr(OT - 1, 1);
        if (g_(wx, Oi, hx)) return false;
      }
      return Q0(wx, Oi, "");
    }
  }
};

function g_(wx, Oi, wZ) {
  if (OD[OD.x]["Q7"] != (/[က-အ]/.test(Oi) ? "M" : Oi) + wZ) {
    if (/[ေ]/.test(wZ) && /[က-အ]/.test(Oi) || /[ြ]/.test(wZ) && /[က-အ]/.test(Oi) || /[ေ]/.test(wZ) && /[ြ]/.test(Oi)) {
      OD[OD.x]["Q7"] = (/[က-အ]/.test(Oi) ? "M" : Oi) + wZ;
      KR(wx, Oi + wZ, "", wZ.length);
      return true;
    }
  }
  OD[OD.x]["Q7"] = '';
  return false;
};

function hX(wx) {
  var KF = $(OD.x);
  var h9 = 0;
  if (!OD[OD.x]["KV"]) return;
  var wG = OD[OD.x]["list"][OD[OD.x]["hC"]] != null ? OD[OD.x]["list"][OD[OD.x]["hC"]] : OD[OD.x]["list"][0];
  var KU = wG[1].replace(/\-/g, '');
  var hU = OD[OD.x]["Ke"];
  if (OD[OD.x]["lower"] && hU.length > 0) {
    var Nj = hU.charAt(hU.length - 1);
    var wJ = 1;
    if (wC(Nj) != 82) {
      wJ = 0;
      Nj = '';
    }
    var KJ = hU.charAt(hU.length - 1 - wJ);
    var NF = hU.substr(0, hU.length - 1 - wJ);
  }
  if (hz == "Zawgyi") {
    if (OD[OD.x]["lower"] && hU.length > 0) {
      if (KW(KU.charAt(0)) != 3) {
        var re = eval("/" + hU + OD[OD.x]["KV"] + "/gi");
        h9 = 1 + wJ;
        var KN = 0;
        for (var Oy = 0; Oy < KU.length; Oy++) {
          switch (wC(KU.charAt(Oy))) {
            case 77:
            case 99:
            case 100:
              NF += KU.charAt(Oy);
              KN++;
              h9--;
              break;
          }
        }
        KU = KU.substr(KN, KU.length - KN);
        var hM = KU.charAt(0);
        if (wC(KJ) == 4) {
          if (wC(hM) >= 99 && wC(hM) <= 106) {
            KU = hM + KU.charAt(1) + 'ၤ' + KU.substr(2, KU.length - 1);
          } else {
            KU = hM + 'ၤ' + KU.substr(1, KU.length - 1);
          }
        } else if (wC(KJ) == 14 && wC(hM) == 12) {
          KU = '႑' + KU.substr(1, KU.length - 1);
        } else if (wC(KJ) == 10 && wC(hM) == 43) {
          KU = '႗' + KU.substr(1, KU.length - 1);
        } else if (wC(KJ) == 12 && wC(hM) == 12) {
          KU = 'ၮ' + KU.substr(1, KU.length - 1);
        } else if (wC(KJ) == 13 && wC(hM) == 12) {
          KU = 'ၯ' + KU.substr(1, KU.length - 1);
        } else if (wC(hM) == 29) {
          KU = 'ႆ' + KU.substr(1, KU.length - 1);
        } else if (wC(hM) == 117) {} else if (wC(hM) == 31) {} else {
          if (KJ) NF += KJ;
          h9--;
        }
        var Kj = NF + KU;
        for (var l = 0; l < wp.length; l++) {
          if (wp[l].length >= 4) {
            Kj = Kj.replace(wp[l][2], wp[l][3]);
          }
          var Og = eval("/" + wp[l][0] + "/");
          if (Og.test(Kj)) {
            Kj = Kj.replace(Og, wp[l][1]);
          }
        }
      }
    }
  } else if (Oa[hz].unicode == 51) {
    if (OD[OD.x]["lower"] && NF.length > 1) {
      Kj = '္' + KU;
    }
  }
  if (!wG) {
    OD[OD.x]["KV"] = "";
    return;
  }
  if (typeof(wG) != "string") wG = KU;
  wG = OD[OD.x]["lower"] ? Kj : wG;
  wG = wG.replace(/\-/g, '');
  KR(KF, wG, '', OD[OD.x]["KV"].length + (OD[OD.x]["lower"] ? h9 + NF.length : 0), OD[OD.x]["hE"]);
  QO(OD[OD.x]["KV"], wG);
};

function QO(KV, wG) {
  var hU = OD[OD.x]["Ke"] = wG;
  if (wC(hU.substr(hU.length - 1, 1)) == 82) {
    OD[OD.x]["plChar"] = hU.substr(hU.length - 2, 1);
  }
  OD[OD.x]["w5"] = KV;
  OD[OD.x]["KV"] = "";
  OD[OD.x]["Km"] = 0;
  OD[OD.x]["hC"] = -1;
  Kx(OD.x + "drop");
};

function NB() {
  var wx = $(OD.x);
  var hC = OD[OD.x]["hC"];
  if (hC == -1 && OD[OD.x]["K6"]) hC = 0;
  if (hC > -1 && hC < OD[OD.x]["Km"]) {
    var KG = OD[OD.x]["list"][hC];
    if (typeof(KG) == "array") KG = KG[0];
    hX(wx);
  }
};

function Qp() {
  var wx = $(OD.x);
  wx.focus();
  gt(wx);
};

function NE(wx) {
  if (wx) {
    OD.x = wx.id;
    wx.focus();
  }
};

function N2(index) {
  OD[OD.x]["hC"] = index;
  if (index < 0) {
    Kx(OD.x + "drop");
    OD[OD.x]["hC"] = -1;
    return false;
  }
  if (OD[OD.x]["Km"] < 1) return false;
  for (var i = 0; i < OD[OD.x]["Km"]; i++) {
    var itemX = $("wO" + OD.x + i);
    itemX.className = i == index ? "Nh" : "ga";
  }
  for (var i = 0; i < Math.ceil(OD[OD.x]["Km"] / 10); i++) {
    $("col" + OD.x + i).className = i == Math.floor(OD[OD.x]["hC"] / 10) ? "gH" : "gV";
  }
  wQ(OD.x + "drop");
  return false;
};

function Ki(wx) {
  if ($(wx.id + "drop")) Kx(wx.id + "drop");
  return false;
};

function onFocus(wx) {};

function gt(OT) {
  if (document.selection) {
    var range = document.selection.createRange();
    $(OT.id + "drop").style.top = range.offsetTop + OT.Ox;
    $(OT.id + "drop").style.left = range.offsetLeft;
  }
};

function go(OT) {
  if (!OT.tag) return;
  $(OT.tag).innerHTML = '<textarea style="height:' + (OT.rows ? OT.rows * 30 : 30) + ';" rows="' + (OT.rows ? OT.rows : 1) + '" id="' + OT.id + '"' + ' autocomplete="off" ' + 'onkeydown="return Ns(event);"' + (w1 ? 'onkeypress="NL(event);"' : '') + 'onkeyup="QF(event);"' + 'onmouseup="QF(event);"' + 'onblur="Ki(this);"' + 'onfocus="onFocus(this);">' + '</textarea>';
  document.body.innerHTML += '<span id="' + OT.id + 'drop"' + ' class="g7">' + '</span>';
};

function gx(OT) {
  var wx = $(OT.id);
  var Q4 = wx.value;
  var Qk = wx.parentNode;
  var w8 = Qk.innerHTML;
  w8 = w8.replace(/textarea/gim, "textarea");
  w8 = w8.replace("<textarea ", "\n<textarea ");
  w8 = w8.replace("\n\n", "\n");
  w8 = w8.replace("\t", "");
  var ws = "";
  var hI = w8.split("\n");
  for (var i = 0; i < hI.length; i++) {
    var wo = hI[i];
    if (wo.indexOf(OT.id) != -1) {
      var re = /autocomplete=[\'\"]on[\'\"]/i;
      if (re.test(wo)) {
        wo = wo.replace(re, 'autocomplete="off" burglish="true" ');
      } else {
        wo = wo.replace("<textarea ", '<textarea burglish="true" autocomplete="off" ');
      }
      var rex = eval('/(id=[\"\']?' + OT.id + '[\"\']?)/');
      re = /\=([^'"<>]+)\ /gim;
      wo = wo.replace(re, '\="$1" ');
      re = /(onkeydown=[\'\"](?!Ns))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, ' $1return Ns(event,this);');
      } else {
        wo = wo.replace(rex, '$1 onkeydown="return Ns(event,this);" ');
      }
      re = /(onkeyup=[\'\"](?!QF))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, '$1return QF(event,this);');
      } else {
        wo = wo.replace(rex, '$1 onkeyup="return QF(event,this);" ');
      }
      if (w1) {
        re = /(onkeypress=[\'\"](?!NL))/i;
        if (re.test(wo)) {
          wo = wo.replace(re, '$1return NL(event,this);');
        } else {
          wo = wo.replace(rex, '$1 onkeypress="return NL(event,this);" ');
        }
      }
      re = /(onmouseup=[\'\"](?!QF))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, '$1 QF(event,this);');
      } else {
        wo = wo.replace(rex, '$1 onmouseup="QF(event,this);" ');
      }
      re = /(onmouseover=[\'\"](?!NE))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, '$1 NE(this);');
      } else {
        wo = wo.replace(rex, '$1 onmouseover="NE(this);" ');
      }
      re = /(onblur=[\'\"](?!Ki))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, '$1 Ki(this);');
      } else {
        wo = wo.replace(rex, '$1 onblur="Ki(this);" ');
      }
      re = /(onfocus=[\'\"](?!onFocus))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, '$1 onFocus(this);');
      } else {
        wo = wo.replace(rex, '$1 onfocus="onFocus(this);" ');
      }
      re = /(style=[\'\"](?!gM))/i;
      if (re.test(wo)) {
        wo = wo.replace(re, '$1 font-family:Zawgyi-One,Arial,Sans-Serif;');
      } else {
        wo = wo.replace(rex, '$1 style="font-family:Zawgyi-One,Arial,Sans-Serif;" ');
      }
    }
    ws += wo + "\n";
  }
  wo = '<span style="display:' + (OD[wx.id]["Q_"] ? "none" : "") + ';color:#000;font-size:90%;">';
  for (x in OD[wx.id]["Qa"]) {
    // wo += '<input id="chk' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="checkbox" onclick="gD(this,\'' + wx.id + '\',\'' + x + '\',\'' + OD[wx.id]["Qa"][x]["cb"] + '\');">' + OD[wx.id]["Qa"][x].text + '<\/input> ';
    wo += '<input id="chk' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="checkbox" onclick="gD(this,\'' + wx.id + '\',\'' + x + '\',\'' + OD[wx.id]["Qa"][x]["cb"] + '\');">' + OD[wx.id]["Qa"][x].text;
  }
  wo += '<select ' + OD[wx.id]["wv"] + ' name="Choose Font" id="Nk" onchange="hV(this.value)" style="vertical-align:middle;">';
  for (var O4 in Oa) {
    if (Oa[O4].wg && Oa[O4].unicode) wo += '<option value="' + O4 + '">' + Oa[O4].QJ + '<\/option>';
  }
  wo += "<\/select>";
  if (OD[OT.id]["KY"]) {
    wo += ' <input id="btn' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="button" onclick="ND();" value="Add Font BBCode"><\/input> ';
  }
  wo += ' <input id="btn' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="button" onclick="gL();" value="Correct Syntax!"><\/input> ';
  if (OD[OT.id]["Nt"] != false) wo += " Burglish v" + gv;
  wo += "<\/span>";
  if ($("Qi")) {
    $("Qi").innerHTML = wo;
  } else {
    ws += "<br>" + wo;
  }
  wo = '';
  if ($("hQ")) {
    $("hQ").innerHTML = wo;
  } else {
    ws += '<br><div id="hQ" class="gk dragme" style="width:90%;display:none;"><div>Draggable Box:You can move this anywhere<\/div><div id="Na">' + wo + '</div><div style="clear:both;text-align:right;">This idea is inspired from<a href="http://saturngod.net/">SaturnGod<\/a>\'s<a href="http://www.mysteryzillion.org/project/webtext/">Web Text Editor<\/a><\/div><\/div><br>';
  }
  ws += '<span id="' + OT.id + 'drop"' + ' class="g7">' + '</span>';
  ws += '<br><span id="' + OT.id + 'span"' + ' style="border:0;padding:0;margin:0;width:0;height:0;visibility:hidden;font-family:Zawgyi-One,Arial,Sans-Serif;" visible="false">' + '</span>';
  Qk.innerHTML = ws;
  $(OT.id)["autocomplete"] = OD[OT.id]["K6"] ? "Off" : "On";
  if (document.selection) {
    wx = $(OT.id);
    wx.select();
    var range = document.selection.createRange();
    wx.Ox = range.boundingHeight;
  }
  OD.x = OT.id;
  setTimeout(function() {
    $(OT.id).focus();
    $(OT.id).value = Q4;
  }, 50);
};
var gI = document.onkeypress ? document.onkeypress : function() {};
if (!w1) document.onkeypress = NL;

function gD(wx, Oz, O4, O7) {
  if (wx.checked) {
    if (O4 == "K6") {
      OD[Oz]["Qo"] = false;
    } else if (O4 == "Qo") {
      OD[Oz]["K6"] = false;
    }
  }
  OD[Oz][O4] = wx.checked;
  gu(Oz);
  if (OD[Oz]["Qo"] && O4 == "Qo") hV($("Nk").value);
  $(Oz)["autocomplete"] = OD[Oz]["K6"] ? "Off" : "On";
  if (Ku(O7)) eval(O7)(Oz, O4, true);
  return false;
};

function gu(Oz) {
  for (var x in OD[Oz]["Qa"]) {
    $('chk' + Oz + x).checked = OD[Oz][x];
  }
  return false;
};

function hV(O4) {
  OD[OD.x]["gM"] = hz = O4;
  if (!OD.x) return;
  var OT = $(OD.x);
  OT.focus();
  var i = Oa[O4]["css"].length - 1;
  while (i >= 0) {
    OT.style.fontFamily = Oa[O4]["css"][i] + "," + OT.style.fontFamily.replace(Oa[O4]["css"][i] + ",", "");
    i--;
  }
  OT.style.fontSize = Oa[O4].QG + "pt";
  $(OD.x + "span").style.fontFamily = $(OD.x + "drop").style.fontFamily = String(Oa[O4]["css"]);
  $(OD.x + "span").style.fontSize = $(OD.x + "drop").style.fontSize = Oa[O4].QG + "pt";
  if ($("help" + OD.x)) {
    $("help" + OD.x).style.fontFamily = String(Oa[O4]["css"]);
    $("help" + OD.x).style.fontSize = Oa[O4].QG + "pt";
  }
  if (!K3[hz]) {
    K3[hz] = [];
    K3[hz] = K3["Zawgyi"].join('\f').Ng("Zawgyi", hz, {
      "Qv": true
    }).split("\f");
  }
  if ($("chk" + OD.x + 'NW').checked) NM(OD.x, 'NW');
  return false;
};

function ND() {
  var OT = $(OD.x);
  if (OD[OD.x]['KY']) {
    KR(OT, '[gM="' + Oa[hz].QJ + '"]', '[/gM]');
  }
  return false;
};

function gL() {
  var OT = $(OD.x);
  var OO = OT.value;
  OO = OO.gL(hz);
  for (var l = 0; l < wp.length; l++) {
    if (wp[l].length >= 4) {
      OO = OO.replace(wp[l][2], wp[l][3]);
    }
    var Og = eval("/" + wp[l][0] + "/g");
    if (Og.test(OO)) {
      OO = OO.replace(Og, wp[l][1]);
    }
  }
  for (var l = 0; l < wj.length; l++) {
    var Og = eval("/" + wj[l][0] + "/g");
    if (Og.test(OO)) {
      OO = OO.replace(Og, wj[l][1]);
    }
  }
  OT.value = OO;
  return false;
};

function NM(Oz, O4, OW) {
  var wo = '';
  if (hz == "Zawgyi") {
    for (var i = 0; i < w2.length; i++) {
      var hr = w2[i].replace(/[\-\s]+/g, '');
      wo += '<span onclick="Os(\'' + hr + '\');">' + w2[i] + '<\/span>';
    }
  } else if (Oa[hz].unicode == 51) {
    for (var i = 0; i < w_.length; i++) {
      var hr = w_[i].replace(/[\-\s\w()]+/g, '');
      wo += '<span onclick="Os(\'' + hr + '\');">' + w_[i] + '<\/span>';
    }
  } else {
    for (var i = 0; i < Oa[hz].OE.length - 16; i++) {
      if (!Oa[hz].OE[i]) continue;
      var hr = hT(Oa[hz].OE[i]);
      wo += '<span onclick="Os(\'' + hr + '\');">' + ((i >= 79 && i <= 98) ? '--' : '') + hr + '<\/span>';
    }
  }
  $('Na').innerHTML = wo;
  $('Na').className = Oa[hz].QJ;
  if (OW) Ne("hQ", $("chk" + Oz + O4).checked);
  return false;
};

function Os(Oz) {
  var OT = $(OD.x);
  KR(OT, Oz);
  OT.focus();
};

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
        text: 'Burglish Menu(F2)'
      },
      'K3': {
        text: 'Tips'
      },
      'Qe': {
        text: 'Follow Cursor'
      },
      'hq': {
        text: 'Known Syllables Only'
      },
      'NW': {
        text: 'Characters List',
        cb: 'NM'
      },
      'Qo': {
        text: 'TypeWriter(F8)'
      }
    },
    'gM': 'Zawgyi',
    'Ow': 'WinInnwa'
  };
  for (var wO in OT) {
    if (wO != "id") OD[OT.id][wO] = OT[wO];
  };
  if (!g5) {
    if ($(OT.id)) {
      if ($(OT.id).tagName == "TEXTAREA") gx(OT);
    } else {
      go(OT);
    }
    gu(OT.id);
  }
  hz = OD[OT.id]["gM"];
};
gJ.burglish = true;