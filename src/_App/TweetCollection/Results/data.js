
const results = [
    //{'date': '2019-12-02', 'status_count': 2, 'user_count': 2, 'retweet_count': 1, 'retweeter_count': 1},
    {'date': '2019-12-12', 'status_count': 1060213, 'user_count': 287917, 'retweet_count': 865312, 'retweeter_count': 217047},
    {'date': '2019-12-13', 'status_count': 1437739, 'user_count': 347893, 'retweet_count': 1212960, 'retweeter_count': 272245},
    {'date': '2019-12-14', 'status_count': 1584545, 'user_count': 405634, 'retweet_count': 1330033, 'retweeter_count': 325055},
    {'date': '2019-12-15', 'status_count': 1544645, 'user_count': 362342, 'retweet_count': 1326744, 'retweeter_count': 297648},
    {'date': '2019-12-16', 'status_count': 975811, 'user_count': 256905, 'retweet_count': 847816, 'retweeter_count': 212919},
    {'date': '2019-12-17', 'status_count': 1375460, 'user_count': 333553, 'retweet_count': 1156336, 'retweeter_count': 259160},
    {'date': '2019-12-18', 'status_count': 521527, 'user_count': 158361, 'retweet_count': 440258, 'retweeter_count': 123212},
    {'date': '2019-12-19', 'status_count': 119835, 'user_count': 70208, 'retweet_count': 98982, 'retweeter_count': 56430},
    {'date': '2019-12-20', 'status_count': 1597653, 'user_count': 581882, 'retweet_count': 1305285, 'retweeter_count': 469664},
    {'date': '2019-12-21', 'status_count': 1284565, 'user_count': 409392, 'retweet_count': 1055120, 'retweeter_count': 324718},
    {'date': '2019-12-22', 'status_count': 1097591, 'user_count': 403273, 'retweet_count': 911429, 'retweeter_count': 331340},
    {'date': '2019-12-23', 'status_count': 1090418, 'user_count': 331667, 'retweet_count': 908217, 'retweeter_count': 266392},
    {'date': '2019-12-24', 'status_count': 876813, 'user_count': 258098, 'retweet_count': 727512, 'retweeter_count': 201694},
    {'date': '2019-12-25', 'status_count': 386933, 'user_count': 163920, 'retweet_count': 313626, 'retweeter_count': 130274},
    {'date': '2019-12-26', 'status_count': 628637, 'user_count': 203955, 'retweet_count': 517628, 'retweeter_count': 158415},
    {'date': '2019-12-27', 'status_count': 605423, 'user_count': 201376, 'retweet_count': 500191, 'retweeter_count': 158493},
    {'date': '2019-12-28', 'status_count': 618151, 'user_count': 199001, 'retweet_count': 511203, 'retweeter_count': 158041},
    {'date': '2019-12-29', 'status_count': 513430, 'user_count': 191576, 'retweet_count': 426624, 'retweeter_count': 156015},
    {'date': '2019-12-30', 'status_count': 437483, 'user_count': 170431, 'retweet_count': 367286, 'retweeter_count': 139794},
    {'date': '2019-12-31', 'status_count': 482198, 'user_count': 181839, 'retweet_count': 395585, 'retweeter_count': 144474},
    {'date': '2020-01-01', 'status_count': 377653, 'user_count': 151799, 'retweet_count': 310349, 'retweeter_count': 120768},
    {'date': '2020-01-02', 'status_count': 440369, 'user_count': 167531, 'retweet_count': 364248, 'retweeter_count': 134038},
    {'date': '2020-01-03', 'status_count': 786669, 'user_count': 371080, 'retweet_count': 609628, 'retweeter_count': 287139},
    {'date': '2020-01-04', 'status_count': 526353, 'user_count': 255415, 'retweet_count': 417853, 'retweeter_count': 202244},
    {'date': '2020-01-05', 'status_count': 579521, 'user_count': 251472, 'retweet_count': 458948, 'retweeter_count': 195583},
    {'date': '2020-01-06', 'status_count': 739704, 'user_count': 258664, 'retweet_count': 603771, 'retweeter_count': 201295},
    {'date': '2020-01-07', 'status_count': 734675, 'user_count': 242751, 'retweet_count': 612184, 'retweeter_count': 193818},
    {'date': '2020-01-08', 'status_count': 635542, 'user_count': 260442, 'retweet_count': 506250, 'retweeter_count': 202404},
    {'date': '2020-01-09', 'status_count': 788997, 'user_count': 244938, 'retweet_count': 659033, 'retweeter_count': 193818},
    {'date': '2020-01-10', 'status_count': 738434, 'user_count': 243683, 'retweet_count': 608261, 'retweeter_count': 191704},
    {'date': '2020-01-11', 'status_count': 512821, 'user_count': 188297, 'retweet_count': 421782, 'retweeter_count': 148609},
    {'date': '2020-01-12', 'status_count': 572828, 'user_count': 197103, 'retweet_count': 470076, 'retweeter_count': 154178},
    {'date': '2020-01-13', 'status_count': 761320, 'user_count': 232477, 'retweet_count': 633793, 'retweeter_count': 184082},
    {'date': '2020-01-14', 'status_count': 849253, 'user_count': 245560, 'retweet_count': 711062, 'retweeter_count': 195659},
    {'date': '2020-01-15', 'status_count': 1132836, 'user_count': 291834, 'retweet_count': 944458, 'retweeter_count': 227948},
    {'date': '2020-01-16', 'status_count': 1604074, 'user_count': 394007, 'retweet_count': 1339730, 'retweeter_count': 305375},
    {'date': '2020-01-17', 'status_count': 1507721, 'user_count': 432515, 'retweet_count': 1257350, 'retweeter_count': 338653},
    {'date': '2020-01-18', 'status_count': 916062, 'user_count': 271135, 'retweet_count': 773900, 'retweeter_count': 217659},
    {'date': '2020-01-19', 'status_count': 999971, 'user_count': 265158, 'retweet_count': 843759, 'retweeter_count': 210689},
    {'date': '2020-01-20', 'status_count': 963410, 'user_count': 263577, 'retweet_count': 806340, 'retweeter_count': 209015},
    {'date': '2020-01-21', 'status_count': 1237542, 'user_count': 309832, 'retweet_count': 1035997, 'retweeter_count': 242531},
    {'date': '2020-01-22', 'status_count': 1315843, 'user_count': 345005, 'retweet_count': 1114219, 'retweeter_count': 276388},
    {'date': '2020-01-23', 'status_count': 1831816, 'user_count': 408284, 'retweet_count': 1530953, 'retweeter_count': 319772},
    {'date': '2020-01-24', 'status_count': 1339780, 'user_count': 342937, 'retweet_count': 1107616, 'retweeter_count': 264838},
    {'date': '2020-01-25', 'status_count': 1402090, 'user_count': 348677, 'retweet_count': 1169322, 'retweeter_count': 275538},
    {'date': '2020-01-26', 'status_count': 1138960, 'user_count': 307745, 'retweet_count': 962584, 'retweeter_count': 247597},
    {'date': '2020-01-27', 'status_count': 1417708, 'user_count': 349384, 'retweet_count': 1194533, 'retweeter_count': 277968},
    {'date': '2020-01-28', 'status_count': 1291823, 'user_count': 325522, 'retweet_count': 1080723, 'retweeter_count': 255137},
    {'date': '2020-01-29', 'status_count': 1418242, 'user_count': 355538, 'retweet_count': 1186309, 'retweeter_count': 280012},
    {'date': '2020-01-30', 'status_count': 1513465, 'user_count': 375124, 'retweet_count': 1271991, 'retweeter_count': 299267},
    {'date': '2020-01-31', 'status_count': 1428779, 'user_count': 365788, 'retweet_count': 1190972, 'retweeter_count': 287598},
    {'date': '2020-02-01', 'status_count': 1405240, 'user_count': 404500, 'retweet_count': 1161500, 'retweeter_count': 320405},
    {'date': '2020-02-02', 'status_count': 956303, 'user_count': 288457, 'retweet_count': 797266, 'retweeter_count': 229477},
    {'date': '2020-02-03', 'status_count': 804771, 'user_count': 248869, 'retweet_count': 653996, 'retweeter_count': 189915},
    {'date': '2020-02-04', 'status_count': 897232, 'user_count': 269621, 'retweet_count': 738940, 'retweeter_count': 207387},
    {'date': '2020-02-05', 'status_count': 1072623, 'user_count': 376192, 'retweet_count': 871091, 'retweeter_count': 290895},
    {'date': '2020-02-06', 'status_count': 1397273, 'user_count': 425039, 'retweet_count': 1126758, 'retweeter_count': 319176},
    {'date': '2020-02-07', 'status_count': 1192747, 'user_count': 355619, 'retweet_count': 992374, 'retweeter_count': 280112},
    {'date': '2020-02-08', 'status_count': 948365, 'user_count': 306949, 'retweet_count': 793567, 'retweeter_count': 245172},
    {'date': '2020-02-09', 'status_count': 604967, 'user_count': 213395, 'retweet_count': 504138, 'retweeter_count': 168604},
    {'date': '2020-02-10', 'status_count': 524017, 'user_count': 199032, 'retweet_count': 443006, 'retweeter_count': 162421},
    {'date': '2020-02-11', 'status_count': 430673, 'user_count': 174571, 'retweet_count': 356469, 'retweeter_count': 140362},
    {'date': '2020-02-12', 'status_count': 499591, 'user_count': 202927, 'retweet_count': 402162, 'retweeter_count': 158810},
    {'date': '2020-02-13', 'status_count': 459289, 'user_count': 187378, 'retweet_count': 370282, 'retweeter_count': 145860},
    {'date': '2020-02-14', 'status_count': 371506, 'user_count': 170939, 'retweet_count': 303089, 'retweeter_count': 137351},
    {'date': '2020-02-15', 'status_count': 280133, 'user_count': 138594, 'retweet_count': 230014, 'retweeter_count': 112281},
    {'date': '2020-02-16', 'status_count': 189839, 'user_count': 104442, 'retweet_count': 151627, 'retweeter_count': 82897},
    {'date': '2020-02-17', 'status_count': 240760, 'user_count': 127177, 'retweet_count': 191830, 'retweeter_count': 100307},
    {'date': '2020-02-18', 'status_count': 283022, 'user_count': 140027, 'retweet_count': 228930, 'retweeter_count': 111992},
    {'date': '2020-02-19', 'status_count': 216275, 'user_count': 123466, 'retweet_count': 170861, 'retweeter_count': 97652},
    {'date': '2020-02-20', 'status_count': 210191, 'user_count': 112728, 'retweet_count': 162954, 'retweeter_count': 87506},
    {'date': '2020-02-21', 'status_count': 239367, 'user_count': 124227, 'retweet_count': 188150, 'retweeter_count': 97531},
    {'date': '2020-02-22', 'status_count': 159032, 'user_count': 97131, 'retweet_count': 126720, 'retweeter_count': 78275},
    {'date': '2020-02-23', 'status_count': 122331, 'user_count': 77692, 'retweet_count': 97048, 'retweeter_count': 62760},
    {'date': '2020-02-24', 'status_count': 98755, 'user_count': 65450, 'retweet_count': 74735, 'retweeter_count': 50849},
    {'date': '2020-02-25', 'status_count': 108235, 'user_count': 69443, 'retweet_count': 79739, 'retweeter_count': 51973},
    {'date': '2020-02-26', 'status_count': 101482, 'user_count': 65939, 'retweet_count': 73233, 'retweeter_count': 48511},
    {'date': '2020-02-27', 'status_count': 134661, 'user_count': 81552, 'retweet_count': 105801, 'retweeter_count': 64216},
    {'date': '2020-02-28', 'status_count': 139735, 'user_count': 87346, 'retweet_count': 109706, 'retweeter_count': 69649},
    {'date': '2020-02-29', 'status_count': 119447, 'user_count': 72446, 'retweet_count': 94493, 'retweeter_count': 57672},
    {'date': '2020-03-01', 'status_count': 98312, 'user_count': 64331, 'retweet_count': 76456, 'retweeter_count': 51177},
    {'date': '2020-03-02', 'status_count': 140837, 'user_count': 92671, 'retweet_count': 116537, 'retweeter_count': 78314},
    {'date': '2020-03-03', 'status_count': 96027, 'user_count': 64614, 'retweet_count': 70746, 'retweeter_count': 48845},
    {'date': '2020-03-04', 'status_count': 136608, 'user_count': 86946, 'retweet_count': 101730, 'retweeter_count': 66253},
    {'date': '2020-03-05', 'status_count': 223165, 'user_count': 127011, 'retweet_count': 174658, 'retweeter_count': 100734},
    {'date': '2020-03-06', 'status_count': 133965, 'user_count': 86429, 'retweet_count': 103004, 'retweeter_count': 67558},
    {'date': '2020-03-07', 'status_count': 101162, 'user_count': 66653, 'retweet_count': 80749, 'retweeter_count': 53938},
    {'date': '2020-03-08', 'status_count': 78752, 'user_count': 53315, 'retweet_count': 59822, 'retweeter_count': 41409},
    {'date': '2020-03-09', 'status_count': 126977, 'user_count': 80747, 'retweet_count': 93820, 'retweeter_count': 60833},
    {'date': '2020-03-10', 'status_count': 157456, 'user_count': 97432, 'retweet_count': 123299, 'retweeter_count': 76347},
    {'date': '2020-03-11', 'status_count': 145111, 'user_count': 87940, 'retweet_count': 111829, 'retweeter_count': 67725},
    {'date': '2020-03-12', 'status_count': 230785, 'user_count': 132114, 'retweet_count': 186200, 'retweeter_count': 107365},
    {'date': '2020-03-13', 'status_count': 275271, 'user_count': 144651, 'retweet_count': 228240, 'retweeter_count': 119799},
    {'date': '2020-03-14', 'status_count': 168994, 'user_count': 100129, 'retweet_count': 133566, 'retweeter_count': 79604},
    {'date': '2020-03-15', 'status_count': 129920, 'user_count': 84702, 'retweet_count': 101881, 'retweeter_count': 67577},
    {'date': '2020-03-16', 'status_count': 123374, 'user_count': 81101, 'retweet_count': 90764, 'retweeter_count': 61706},
    {'date': '2020-03-17', 'status_count': 134361, 'user_count': 86612, 'retweet_count': 97450, 'retweeter_count': 65545},
    {'date': '2020-03-18', 'status_count': 118044, 'user_count': 83076, 'retweet_count': 85327, 'retweeter_count': 62305},
    {'date': '2020-03-19', 'status_count': 151724, 'user_count': 110283, 'retweet_count': 118568, 'retweeter_count': 89290},
    {'date': '2020-03-20', 'status_count': 156790, 'user_count': 113082, 'retweet_count': 121863, 'retweeter_count': 91732},
    {'date': '2020-03-21', 'status_count': 132670, 'user_count': 87330, 'retweet_count': 98113, 'retweeter_count': 67335},
    {'date': '2020-03-22', 'status_count': 160331, 'user_count': 100295, 'retweet_count': 122610, 'retweeter_count': 78771},
    {'date': '2020-03-23', 'status_count': 268206, 'user_count': 142095, 'retweet_count': 209128, 'retweeter_count': 112650},
    {'date': '2020-03-24', 'status_count': 226520, 'user_count': 121449, 'retweet_count': 184280, 'retweeter_count': 99633},

]
export default results
