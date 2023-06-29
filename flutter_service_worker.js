'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7c5b3c2e328ff5338a58f2cb77ce5314",
".git/config": "402797a4e6f32c9c2053fe58be64f069",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f17113f29d4fa657a6853208cc23b62e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e6780e0d89790c1b43155f40c126f3d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b6de97391b7bd3c83872069a73d2af7",
".git/logs/refs/heads/main": "0c7c06a301dee8b0637fb2eba7aed10a",
".git/logs/refs/remotes/origin/main": "f1b18e4f40fe7630cd2992fecfafb21f",
".git/objects/00/9d96c548fe56fa9c3f1888c2f08836b9a511b2": "cecc1945b5920684cd7c4dec1505da59",
".git/objects/00/f454bfb3b264642cdc9a40680e9ff6e4a2e416": "16918be50c569523cfde898f082dad0e",
".git/objects/01/52f44d922bd07d03d8fc4b6ca6038233d22943": "6796e56101aa1d922bae37b84fbd6e40",
".git/objects/01/b91f18c30e0afc617c5941567e79f897465c1a": "1069dc90a3c2a8c1c569c26febee1401",
".git/objects/02/260a48f5951b0ec4bd77e397d51e94e8a900aa": "72767f0d2e9782436233d3e04d934f49",
".git/objects/02/c666c467bb4761a1200e5736201489b3a9cfa7": "03016937f9507bafe57d9f2402b0a4a7",
".git/objects/03/3f741a22c9a00aabd121580f2abbd69a0a4274": "fb378342c5db15fc36191787aad76513",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/c8de5c51a328a416d9a58a23fc5fdbd33ceda5": "171b3a1a0bb6dad23e7b6cdb95c99e40",
".git/objects/05/c8eb04c57e9c461ee7ee5ade826b37e2d6be03": "3ebc6963d932b35296422f663c1477af",
".git/objects/05/fc91b2ce3d4a36a8c70b868eed6329eb2b895d": "44a038df85405e2b8b70239638f78126",
".git/objects/07/0be7a794104bd543c3ee88a42a77c955db6d64": "69175938df2bee8f044c17a0acad30aa",
".git/objects/08/71013f4862d36877ec48aa7f37590aedf74799": "bd7f3a1f1e8d1d046ca19d54235b9f02",
".git/objects/08/ca3e59771afad360b77887567156f4ba27bf81": "53b31c0e18559edf9f44f587e152c035",
".git/objects/0a/685a6eb29ce16d0668186fc18b46562dce7650": "e51d55b4456a3c8596d2ecf818ed4728",
".git/objects/0b/35acadfd4ff8f3d19df26ec4b8a6aa68c21030": "b9455ca2f3cab3d2de2eddaed8138ca1",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/3f227d3f40ccbce29062f779ff18ce76863895": "c444e85b255e304d32dc33f6f8af62ea",
".git/objects/0e/c039f5a5185e019daf83c0f897346b0bf528d6": "57ade2c35ab8370e04578b3a1088a026",
".git/objects/0f/a9a3360f78bc682767057eeb05b0562479a2bc": "342ebea5fc28f5117d24a05c0ebcdedd",
".git/objects/10/89246837b7e783b442a586faac502c8ff97ca2": "99094e91d0943c7fd9f74cc08d74362f",
".git/objects/16/3a4a5156e4333d826ca0c76a5684853b39a7df": "17108d701d1b7278b6b2ed5fa615510a",
".git/objects/17/32e4bb9d55d005a8417e569583b0be4d761ded": "5196723170351b3790d1f84d2e302869",
".git/objects/18/1c791d0e1ec5fc1c4c57e020e1121c659c8907": "14d0d72f539cc8874b87704e65bcb621",
".git/objects/18/54021cb1c51b0ea7dd5edb8448c958616875da": "defe45ef9c9b406077d969c882c076e3",
".git/objects/19/3fcf81575ad86ca52c669f756c8d7a7fc8abe2": "4522b121b1e9fed98a4d0e996a9fc613",
".git/objects/19/96b009d2a87ddf156d78d067189b917ae494f8": "f3436f3faee273726de8971b31be3620",
".git/objects/1b/de155e4173588f7ac48da9d65229d24006099b": "bd815e551553c7883efb8d5fd1f1c8ca",
".git/objects/1c/e5d94e4f6be2078abced8be6d91f1bb8a7e529": "7b4ec5d5ed314eacb42a07032844edac",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/93169c4b51e0baee5ba0a647a49e6330ca26f6": "786da8240cc988c7856ee3d003eebd88",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/dda756d9ddd834f42fbe3b9e0dcbc2d2825e18": "d01e2b1f53f6833bf54b7a9592b21f38",
".git/objects/21/0811d31e6c6dd0690f38b46660daddfaf95fe9": "798d0ddaa654991499999e85db527575",
".git/objects/23/13157233bd19973d58c921b151cbfa69c91fb4": "e84f90872f1f2b0bb9182c4bbc0150b3",
".git/objects/23/438d4f4d8b64391d3e5ee229a3302e30352637": "8fd076637ed125865ceb74e2c3377a88",
".git/objects/23/dfaf455894ace8281af4fe19a3a27f3e0f0b30": "61705ddf332974756a7721c2b0b290e4",
".git/objects/24/33e047f3afa2da3db6de67ffde753e8710adec": "61948ddbd62f20aa82c7d129f7cca704",
".git/objects/25/3f5af1497ed7351bb65b06997eeeaa1e6a20ea": "8f409a1212341583a8f51b4e821d5f73",
".git/objects/27/38ca1fb312519e3636b876c22d777e4e999580": "2b4234eb38138043dd407a5260bed2c6",
".git/objects/27/bb5636f6968f8288429dd7a9530b584aee44c0": "68ddb5d8c0c01bace3056c0cd534827d",
".git/objects/2a/f0053181e6455d4a583d5b7bdd83de9a3453ad": "78e6b56f8a40f587f01c814347304018",
".git/objects/2c/8490b3996bd01f21d863be32ceb68745acd69a": "430cf80002122765578cfa2c92ca11d5",
".git/objects/2d/0a92555fc4b903ff2c9ba38e69fffe9eee1f8b": "5d07459b301d6e5bf3db2dc13a68762b",
".git/objects/2e/8d22217cb74f10698cf6423ce81f0785dccabe": "e6f74c2b7d25694dc42ea58aecc16961",
".git/objects/2f/e4185f3b0706688a2b93967bccaefb8f0b25ee": "85fe6964146ac115cfa072f4dec4974e",
".git/objects/32/d0e477fb263f6927cb40784e65c6b87d2fd2be": "295254c66ade2ba5a1f0a58dd0ad65eb",
".git/objects/34/ad9e1d8b68be00aa6e642a78eadcb4b77c6afb": "f4fa801913e9948f6e873ce535a334a9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/edb790fa08f2d759c029f8d67486112a3aa907": "4311364b85b9290ed686bd3ee82c53b3",
".git/objects/37/00409830a5c225a8c59fa36baa253f50f11497": "47e9df6fffb4af1757b5432e429437e5",
".git/objects/37/54f5354d887a31ac1e3e76958d4a0b7385ab85": "0676595e3b09543ac7901f88fb68e9d2",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/03f0f903553494dd0d11ffd110a4c5d7a31241": "6a3a3b3f1396b466e22785be70be0b4f",
".git/objects/3a/0a54e8b909737a156dc829a4691f310b528727": "a6402bcfac40d6ee42941cf0369c6131",
".git/objects/3f/3792198031216bd108c4dfe69b901f14a9ec6d": "7b069fe1af37a981139dd6b8589965d1",
".git/objects/40/c43f5b9343489796689b388e5f687fe86d28b5": "dcf41f27a6f1010f269d48d36b4620b3",
".git/objects/41/e21a49b0ff571bbec92aed47c7534e39023683": "a1fa3b099b7da0dd9032c7be35ee5610",
".git/objects/42/b0e0160f5451ad2748e47f507ffdabe7df561f": "e4e60b0e1cf04b02cce71ac12be1b3d4",
".git/objects/44/1f41ade01b118dfe0f13a8e113651894dcae6c": "fa2117a64833624e80cc6a6e9682e884",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f04cf7b199d9af3e7abe3a4de8d690df65e27d": "cfce80fd8d425eb9ba139dc7d9fa1a18",
".git/objects/47/37f1d64df3a1f311c56e6cf03c41f7c4ebbed0": "d3866d28178997d5d0c655967bb69373",
".git/objects/47/a6b4ac27ecb58359d2f65b3a855cb76b35fbed": "609398542160f093b38670262e2dc0b5",
".git/objects/48/0ab9cf9230d767b6535e4e8e51cef3b75bf23a": "3fa35cf3dfd01fcc5de8e16e54c51e93",
".git/objects/4a/5a3b16109e42d4c8a912b1cd01ffc6f63b6d51": "5ae329ab3ba54179e0438174170f3423",
".git/objects/4a/cdbb81780e830f3f5db1d7e28c33d85e164769": "343b685b44dfc2ee504a505d7e8296dd",
".git/objects/4b/281592d0889ec4d07f3a9e4b17d7bdcd4bb0c4": "0ddfe7a371e56f7f42976d41596e2031",
".git/objects/4d/116ac2fde764bc448afefa036998033988df0f": "d77bbbfd8390c3bb3ad03babbb972965",
".git/objects/4d/6b912eef02b84ea0a1ace418edab135f7ab81a": "ad774adc573be0a2819545ab0643f63c",
".git/objects/4d/b6732374fe10732c8915ef1cff09281a9f3d39": "0a580c6c1a1c273fe5d7a794ccd0b28b",
".git/objects/4d/da5459b8b4cdb1559a7595a874b4bae13713e7": "0a5fcfe9d6336838f37077aec653dd43",
".git/objects/4e/7fa39b9be60aaf2bca28c8feaf07d21388972a": "363c586c32b94350e7ca69d25390f0bd",
".git/objects/4e/cba4a5aa5aaae6f0b63e28fb41dadb52039d0c": "36b40a5982f21719bf7ed4c91bc419b5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/14cf0fd3346f09745f01f2d76e389f643f5012": "e0c920151884bf9075ef15013fd4ce82",
".git/objects/52/c0afbc2d9492fb2a79f350952ccd12a8633179": "70c36ae74765f02f0ba1cd173f53dffd",
".git/objects/53/5ce81cf842ff7373f582ecf4ac39b14002fa9b": "bd311ca70e7863ef97734760bb1db90a",
".git/objects/54/05e5ab7f8f4776d5d3e763e4456d49eca3988c": "d893b8d110718f4afcf9026251a94b99",
".git/objects/56/d46f829ff77ecbf137485ae1bc737a0fd1141a": "adc83d540ca00497c143f2fcb68b794b",
".git/objects/57/6c1828a64d6484891013e03d55422f6123cb1e": "89906af6ded00429bc7a051b7b18b016",
".git/objects/59/6b1b5b848a6a5f0f43555addb532a918080d48": "6b0ff2bfa6db16085c7b89acf88b18d5",
".git/objects/5a/02083a1dace59688d9bde2b1fe2b1765171398": "12ce3cea4467ed3c3f40c39e7c5add21",
".git/objects/5c/a9edb54530ba56b59a41b2cd3d78e78244d87c": "d15a6160bede8201d6e4bd4ad294ed8b",
".git/objects/5d/75eb1dbb9b8e1857f2dd0418826e51303e52dc": "3689ca04e747b4e91aaf8a62234a5500",
".git/objects/5f/9301f82fac3cb8a2229d57d727ec446f6a37b8": "40e26435001c36a1b27577d8ebeaf7cd",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/18eca4e7797c4dc8f96624a276173bd733758e": "9d65fd91b43c357c959b152402f4cf20",
".git/objects/63/4780207304ad300ed6d3557c748c06a2bafb95": "719cfb94cb244a85557efbcd641e5027",
".git/objects/64/2f749cab8fd67492ad6d77d71582ea107e7eda": "d0c6ae9ee668a2292808d60f00860a39",
".git/objects/65/a55e1ef781ed48d1c3646301ba37d583e365c0": "ac057570b3784092bf02befad246fe5f",
".git/objects/65/b4e3a48254ae5c283c584699526f6ec05fbcb2": "b0ce55ec937b0b85aaa7fb9dc59581bc",
".git/objects/67/5f6a6d0fc7bdafa41add445d431f136f486208": "168f80418fecec11f28bdd489fde79aa",
".git/objects/69/13f49b29c9e19003ddce3eabaa7db48e6ad4a2": "a25d393c86c291049cbdd51ac36dbf71",
".git/objects/6c/0925cb0298bddc1fcaaff6684835160759df7b": "50568714f7d0821d3a39c0c722878532",
".git/objects/6e/c1895d2c0a84c6046a5681d284561ac7793094": "58e2394a4f94bb6c58829254261397d6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/c5529a2ebaf18896cb641c94ccc28a83426ea5": "230f1a8c11c2d1ed6669d08af9e40f75",
".git/objects/73/bc532ace820cf5559cc0ccbef5aa51983e5651": "477e82153e050ef1fb8fd3e4a036c574",
".git/objects/74/3bf7d4d86a4ad0c7bd1277ca7bc3fd9430bd7b": "04516e39a300e2558708ac3ed461b609",
".git/objects/74/5ec8145a74f6b65f0cfb5f5de64cb932e20948": "7d9f1ac414a47e31adea594efca4d99d",
".git/objects/74/61ea277eb845146f201cfcbd906c89800cfa98": "4e57e2d7369ee47110686872244c1db3",
".git/objects/76/feb0a6646c9ac68ba134709a67874762a28ee7": "94cdb674a6a4ef4c9526ff5093229917",
".git/objects/77/d2b9fadec6a94e669a9135531f532688069dba": "59814ef40a2bc06034e358b381e41e80",
".git/objects/78/31736b90abb56d79cda19583bd399bde7709f4": "4a9d291c203218f7648ac539270c998b",
".git/objects/78/f6dfff09141909e1ed86cfcd670709e2fa5ffb": "eeb8ac12d9019d1b1211b71c3c8a6ec3",
".git/objects/7b/18c9cbca0b7c251d86b5ba828f97bec562b24f": "cc04bf321768627c1de930699a26f32a",
".git/objects/7e/ac180bd86b811b3c42f249aae62b939639b647": "0fc1b1cadb971022aa8d722842957367",
".git/objects/81/1aa4cbc6d40c49c646ff978968183512db34cc": "b8a86651f300e86527a1ca2f93492abf",
".git/objects/81/6341208c8494a5dae114a5d2dd3665c222f6d6": "3d139e75d262426204920aaf41b3c276",
".git/objects/81/f91a664735f8ed2047f125479f790ddbfc4da5": "15a14ef7d9eff34b004ee9b386d486c5",
".git/objects/83/8f112f86c7f02688b2b819ea7925fa6aac5085": "c3a13e24b2d9cfce45f3afc693c2d4b7",
".git/objects/83/a3b0ee2c383d541d7d90c546bc854e3bc7aaae": "704fa1270c11dd9abb0f76554df1b790",
".git/objects/84/09f24eb43b850f1a588bb6b36609886e8a8ff9": "921fda02bdb62088b9146871e2dd27a8",
".git/objects/84/364554207b13e80c8b70c0145bd1f95212f5fe": "a396373e17afea1c8e8346af82e46d6a",
".git/objects/85/b5fe66651b7edff221094fa60bd98c1eedad9a": "12ca69b82d27d6ebc8fb95faa88eb2ca",
".git/objects/89/c1d271f1481e410861cfa7a820503dc0a30303": "a39afa1b8bf3d346fd317e3a457b5f8e",
".git/objects/8b/50037bfb670f635930ff4e899de8dc3796134b": "a1f96d4d77725b66213a3678b3e12d3e",
".git/objects/8b/d28e02d5531df3b13d70e62e4c65c2055e9c37": "f5d45ac523bd256181699448cd65298a",
".git/objects/8c/e70672402efdef6a0afbed36f29834244b29cb": "2f716598743e6c4af4cb278f83ff9832",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/dbf76b21a5f864b4fa92d1db36348f977201ed": "eed62275ba642f8be316a7b713da904f",
".git/objects/8f/86f9cfc9219eac451c510c6a0b2f8915f793ab": "c9741d89c1618c43e1447f95fe273636",
".git/objects/90/720b5b3bd794e7c9f90fb0a6e365faddbf4101": "bdb7f90be92a0ea50b20d83560092d2b",
".git/objects/91/b3142e41ad4147678279198235e79a96a1c043": "49d1ae3c2349c5f5b19da86b49ca85ac",
".git/objects/93/0e13862780039ac84965321334bb2c3921e000": "171028a08e4975f86379cd5459bb501a",
".git/objects/93/ed9ae362b9f0d8dd978a48ad612f6e427ef13d": "cc1b2a0428cbdcfb8a8d3d7716e02989",
".git/objects/94/bc2a2a9f7c759232b166ffff999c08a0cef8da": "8c260dbf60d31b1ba28f03e875051b4d",
".git/objects/9a/4e6dd48b5012577c1fc217b497bb88ea4defa3": "51591c145987541acbb278c1a3b73314",
".git/objects/9a/9744d37c3e00f1fac9a999188ef49b60e760b2": "1cecab70d40bd2a5fdfcf9ac5337d118",
".git/objects/9c/e2695a7de329afc937f85b1347b600cc3e4072": "bd4ceef20662c9280d548db7ca9da99f",
".git/objects/a6/8c77fda966d15f64c846647bba315be2175616": "c2294d297d47497a61669f6872fd5f87",
".git/objects/a6/b03b56b772aaa0f06f205c84b2198b0f658c80": "9412941eb0e0861620aae9bdd5bdfa24",
".git/objects/a7/8320cc2fd75c8df60ba3e1b8c60a4e96b80e19": "f7dfee332ffc9298a710befb340359bd",
".git/objects/a8/9aa7d20ebc3d626893b31266bb22059c00393d": "d9568c6cdba9195c1f51c8e550d2440a",
".git/objects/a9/4f5f5ca4a2a842d321baf2b656170655e2ff65": "9083f4c70d52c2008901153a9e915f07",
".git/objects/a9/d6495bdcf4d87affcfb15d86235140b79db7fb": "5898a6531c0a9ca6a4b3a82a85647246",
".git/objects/a9/f7823e81a9ca9e4366afcaefa082caab4a6056": "2f970759a2a4b3b56a4696e79327295e",
".git/objects/ab/b9be3ec79762b8ad9dfe5c8312273fb8e8d130": "b6e6add3671d58f0525496d9e8ce4707",
".git/objects/ad/291318119cb093e38a5219e809d3ee8c9f5cbe": "760a9372ca89981bf2c7e94514a6c1a0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/5500fd0f8fa13b92dec6c1852b537df28f307b": "0e011d831c459b2fb925381fab64afaf",
".git/objects/b0/aedbca9933c5e7089ac80f7badf14386f0e6c5": "fcd69415fefb299546b93066c932297a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/4cea28e4ace22d14f542a57e4095829b6d39e1": "7c383db1975c0eaf87c3bfed74c0073a",
".git/objects/b4/8c1b4c62a3788375428512785a23c0936871a7": "9986b7758d7523812d620daa696dc1a0",
".git/objects/b8/221ddce11117bb78909f94a4139aa8232e1e5c": "942b4c5faf25b6774e93044f99628d97",
".git/objects/b9/09e0a84131db0701b43c4d415012baf587cc98": "b81cf032cd57ece3deee551c09edb4bf",
".git/objects/b9/e0db2e90f1c10a9adb1355cfa3f7be1127a126": "2759c0f8b8d89ff0dfaa45038f7f1dd9",
".git/objects/bb/28a083f82461d0711ca1ada016e14f230655d9": "7418aa53d8fd9f2be118d28a1d74ecc0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/bb2e4d2571d2cffde8419e9ae86bd6bb7b53e9": "303558594509fdfc77a2665a3c8fb1fb",
".git/objects/bb/bda6bb09e75b0a806c2545c2f1a0a870dcf0e1": "f74c37028e4ab625d4d87855bb13e23e",
".git/objects/be/e343cee1cd701da41981e52c5da06eaed45325": "c5c444459633651f5972565679bc4f88",
".git/objects/c0/69ad01658f905e1868911872601e7b96cd559c": "9a08d944f35258c923605e592c1c1f83",
".git/objects/c1/0947f5551d50278af08358cf0c4bf2bc29c691": "a9a68862271a4bc42056f40d19a72b36",
".git/objects/c1/3c6632593f5cd9e67c0d3f64b7003dfeacaf2c": "661a7c81ac783d63833714fd47301386",
".git/objects/c1/ba74c075ebc4610b5f50eee71e54ec046eed57": "48fb0edde2250dd9965057999fd02f56",
".git/objects/c1/e8b547949c15cadfa720fad557dd7b7a935be7": "3241c94d7c9078580351d55976081d32",
".git/objects/c2/18fcbf25d86620829510f8b2bbf79e60833bcb": "9fc1d36bc559b10e876637d7c430a44d",
".git/objects/c4/00a8933c6a879ae884b546fa71134f7460f3a4": "976b81d56563714d06568e86b633879e",
".git/objects/c4/fee308f666ea3e984b52491c12d649a5bd045a": "553f53ff392196b429178add407a7c74",
".git/objects/c6/581ab2681233292d7456817b20ce177a81172b": "fd56731115b7d78b4a05343829b3d330",
".git/objects/c8/d101cf708a5f4ba779f44645d76241cdfe9edf": "9111e2f1b6c82dcc6237bffa76acc409",
".git/objects/ca/8d7efd322e47ff2c65acc402acf67849420686": "6771711e925fdf5fdb1ff0e0d8f7c5b3",
".git/objects/ce/04b01cbbdad99f1caab76dd606fcd31b41a50d": "a0ae526d77abcce415990c6b8c26bcf6",
".git/objects/cf/073dbd9dea181e495ca33fa0994230c81a0ac5": "a8d1f878ae7b155e8096e4c176fd57bc",
".git/objects/cf/b3fdbc48ac542d4efa76814e2ebf9928b0f9ec": "2b078cad4ce916b5d14f9a9caeed36ff",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/1d58e1fb54a8dcf39e40eee8e94d93f4dff606": "7f66cd94310e502464de02d4a1415b00",
".git/objects/d5/e0389ba68dc6cd964a0fd03b262e7fd1da6feb": "b3ee60fe241d15b2311f0717905a6594",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/08aef14406cffc0605a3e99af61727af8c6388": "fca1abca1bebc73a189050242d22c022",
".git/objects/da/54a47afa3a7c92558f2df70d45ac8c91152629": "0c013bfa4c90a904e2da30d8b3163519",
".git/objects/db/6e0933d8acd024229491acc1e508390a34a85d": "cf8946ac0798e2184a14ed60932e5629",
".git/objects/db/f6f2f7f2b7e94a01ab6e3309a301c97730e35f": "9f754a2df67438eeca78cb88bda96d74",
".git/objects/dc/38568f31c664813b16fcdc9487908e3f2d3809": "45a4a1f7869fc460dd014d6adfacf217",
".git/objects/df/591874789d3348a8ef1a657c3e08d9a35e1ec6": "a84ae9c3d5eca9d993ecf7b318180295",
".git/objects/e1/6ca847252aad6b87297e999abd069d49be3b50": "240502c70cb1968f08007dc1f68a8107",
".git/objects/e3/b884df6161373cf00b98a77b791108694c088b": "3e2fc9ec7b9eeaf3fc0bf0edf3ffdcce",
".git/objects/e4/de0b3cd2131cf4a2e4afe4a2edb71cddabc904": "fbcb6179e75153c91d2ff373c0e48045",
".git/objects/e7/3b8490cdc58ec6e8983ee8b6e7b30863085733": "a358102ebbf0fb0159cb7b21451d1f37",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/996d7e6fe4cab2fb40fce4761b922f3c2a88a7": "bb68647d5696ff8c3e12c2912e4ef691",
".git/objects/e8/f088749ffe94926a5951f7e0e7396e2ee15c2c": "8f9a923e790b4fd68ce95832e015b47a",
".git/objects/e9/42bef43c442e346c37e75b6ab277c6af601891": "23d43f672e3ebb6d65bdf704c0813e53",
".git/objects/eb/5b2926d34c1ad9076d1c9e9e2deed8259177a4": "bc1e50534756edc0e020d89b550f061e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d7c0078900e53449c97a6e47e138055663cc7e": "d4e5accdc5b66ba8abfdf92e88568537",
".git/objects/f1/fade7a6710667ecef5167ea54e4b208584338a": "39d73ab3019e6f8c18c5c8dc94dc9112",
".git/objects/f2/6753b726f59611847d44f1829bef2a27605a66": "80e029887a29dfc6bfd509e345bf0825",
".git/objects/fa/a8265dec32c4b18bc6d066a293cf5cce106311": "db51214b6f367b89e107e7d1437e76ca",
".git/objects/fa/b1a53000aec2932cb258c75773f9242e7f55e1": "da03b92743130c93c45f41840290f2f9",
".git/objects/fa/b3501bc61d462dc1392d6b4e09f13bfa7b9857": "70407124eb1afb48ba40f2863eea2909",
".git/objects/fe/f9ebd0f0ac45c3edbc4083c1afeef91f1d6a8a": "27405ba5056f9d035144d5f660b8afcf",
".git/ORIG_HEAD": "51c5b2fd4acf3fc64bebdb6fe0ee0970",
".git/refs/heads/main": "51c5b2fd4acf3fc64bebdb6fe0ee0970",
".git/refs/remotes/origin/main": "51c5b2fd4acf3fc64bebdb6fe0ee0970",
"assets/asset/images/5d8318ba-1c38-4450-a29d-29971df6c58f.jpg": "32282acd7a5df3a9d5a92a6b6545cd8e",
"assets/asset/images/appStore.svg": "ef9eea8572945f9d25ca74920b9e09cb",
"assets/asset/images/appstoreLight.svg": "a7f11e2433b771698d84a35d8e7b09ea",
"assets/asset/images/container6Mobile.svg": "1ff972d6082c5a272c4aacd160fb2c8f",
"assets/asset/images/cusotmerDp1.svg": "a10d1931d75c46181ee5a84afdfc4f67",
"assets/asset/images/discordIcon.svg": "d21b2867fbed534431a30838723ec5fd",
"assets/asset/images/fbIcon.svg": "3605008bb4c5a187f13feb4d23726cd9",
"assets/asset/images/googleplay.svg": "3d22c73ce5a64241e8e8b525cb535f83",
"assets/asset/images/googlePlayLight.svg": "ec5bd3fc4b679b47a1135dfe9a2e60de",
"assets/asset/images/haderIcon.svg": "e85029ef7fc890899c3156ba602f0fe5",
"assets/asset/images/heroImg.svg": "72f59d6eda339050ffc10cd8c5c0cb9a",
"assets/asset/images/heroImg2.png": "a66906110c40ea635040111efeca8b6e",
"assets/asset/images/heroImg2.svg": "44fbb0b2580fea5c0410266ca3adaade",
"assets/asset/images/heroImg3.png": "6a359697bbe0724714b3053cabdf7393",
"assets/asset/images/heroImg3.svg": "471297f47049d3e8203f486b5d4c8cfd",
"assets/asset/images/heroImg4.png": "cef26bd20eb87313df04b17964d02292",
"assets/asset/images/heroImg4.svg": "802f380114df5151415dc71be9fd651d",
"assets/asset/images/heroImg42.png": "12ff051abdbeac0211390e319c8a4f91",
"assets/asset/images/heroImg43.png": "bbea6ba1b924ec669a72b7f2d231c33f",
"assets/asset/images/heroImg5.svg": "29b7048377d16c490114058b4e409dc6",
"assets/asset/images/heroImg6.png": "70ba04df5ba1f39121b655b44c9fe108",
"assets/asset/images/heroImg6.svg": "3b97fe63181c4a648749879bd86b129e",
"assets/asset/images/HeroImg6ImgPhone.png": "b4804bed3df7be3824b72308fa5e0f8d",
"assets/asset/images/heroImgMobile1.1": "aaaab735809aa8ddc4bfc9d228d6e1b7",
"assets/asset/images/heroImgMobile1.2": "58374d91c923b4ae89ef5403110f7233",
"assets/asset/images/heroImgPng.png": "e2d9ad89abbfbdd4ffbd3cabd728384c",
"assets/asset/images/images.jpeg": "a269ec3e994c1a25192f0a52e401cab3",
"assets/asset/images/indian_tailor.jpg": "b01c712d20d265aa3a2668557c0f61f5",
"assets/asset/images/inrIcon.svg": "181e5d851b073e7e2c0bc24c3f99dfe2",
"assets/asset/images/insight.svg": "87a15470ca79006f90e168e808f90dac",
"assets/asset/images/Instagram.svg": "f8fb5b38c0e96c11243edf07db1118f3",
"assets/asset/images/invoice.svg": "c994127d411db8030dbdf972528116cc",
"assets/asset/images/ladiesTalior.png": "835db6a7341799608a2a342ad04ef957",
"assets/asset/images/linkedin.svg": "f52d114844891b4124f79e9642242b6c",
"assets/asset/images/measurementIcon.svg": "c142dc749b71fc41610e55cc9e45a1bc",
"assets/asset/images/menuIcon.svg": "21d54568a1e876a74edec64c8f40ff0c",
"assets/asset/images/mulitligual.svg": "a862c6c88ce64057887aecfdbdb22a20",
"assets/asset/images/panjabiTalior.png": "812f818dd9af1cc6ba19f2b10522afe6",
"assets/asset/images/peopleIcon.svg": "f12aad9043e309231af795787201aba1",
"assets/asset/images/peoplePaymentIonc.svg": "ceaff5f4bebe1c63f281083a69d2ab14",
"assets/asset/images/peopleTickIcon.svg": "758acf9dc0fd0773e60f6e22ad67a4b8",
"assets/asset/images/purpleCircle.svg": "6733d75894fbc76f1cba1d8cfac751c9",
"assets/asset/images/sheetTickIcon.svg": "c0cccdc008aae4b55b4eb3f9fac6714b",
"assets/asset/images/shielIcon.svg": "f975670eda5b45ab6320c4197e9c5ef0",
"assets/asset/images/taloir1-transformed.png": "a4041640aa45e51b87898370883a7740",
"assets/asset/images/testomonialImag1.png": "f3439dcc89ce82b7092c45939670aff0",
"assets/asset/images/twitterIcon.svg": "2be4d9e2a3c6057ec36839330db7db57",
"assets/asset/images/whatsAppIcon.svg": "c57dbe23d20498dcdd1099411db333e8",
"assets/AssetManifest.json": "f65cd0fb72c8eaaa700b02b2ef509533",
"assets/AssetManifest.smcbin": "8fb8c059aef95b1333eb8ecdd198f8bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e87190567d932952b9c6bc0181e73e89",
"assets/NOTICES": "bcca60e7e11ac32cdb935611daa4e68a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "3607234ffb1ce4fb046b015b5665b7a4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "27c2e05595a82bbfa32490274b07f759",
"icons/favicon-16x16.png": "da0237918d3796e01dce4897e085a91b",
"icons/favicon-32x32.png": "aa02784222fb8587c07fd3438c5d78c8",
"icons/favicon.ico": "f783984ad04cb93348592765e4e2d9cd",
"icons/Icon-192%20.png": "3ec984cae6791dbfe4c9be729f0c1684",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0d21c729ff74b4b8f45d4dcebba9038",
"/": "a0d21c729ff74b4b8f45d4dcebba9038",
"main.dart.js": "164456fa834ae382acc90bc594c8a4a0",
"manifest.json": "55ec68961c1fac122d4a2311cc70e711",
"README.md": "965e7a128a0702bec00471e637f0e93c",
"version.json": "1344d082b2c5a54e3ba619513aaaf88f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
