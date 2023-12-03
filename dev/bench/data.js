window.BENCHMARK_DATA = {
  "lastUpdate": 1701566585992,
  "repoUrl": "https://github.com/mattwparas/steel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "65d63a3741ed80f76cba91e6ba25e934b7d82a14",
          "message": "Set up nightly benchmarks, add custom built in modules (#93)\n\n* set up benchmarks\r\n\r\n* flesh out custom built ins, fix output path in benchmark cron",
          "timestamp": "2023-11-03T04:06:35Z",
          "url": "https://github.com/mattwparas/steel/commit/65d63a3741ed80f76cba91e6ba25e934b7d82a14"
        },
        "date": 1699060512245,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 625861,
            "range": "± 2751",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1790778,
            "range": "± 32538",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 444056,
            "range": "± 7768",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 121,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 121,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 33548,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 60187834,
            "range": "± 1257814",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 40928283,
            "range": "± 1118406",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 207,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9014,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 119,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "mattwparas",
            "username": "mattwparas",
            "email": "matthewparas2020@u.northwestern.edu"
          },
          "committer": {
            "name": "mattwparas",
            "username": "mattwparas",
            "email": "matthewparas2020@u.northwestern.edu"
          },
          "id": "45f582560445da5faaaa19098c5b50e7f872c10e",
          "message": "use equality for functions that is compatible with rustc 1.65",
          "timestamp": "2023-11-05T17:43:18Z",
          "url": "https://github.com/mattwparas/steel/commit/45f582560445da5faaaa19098c5b50e7f872c10e"
        },
        "date": 1699233520394,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 107,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 608743,
            "range": "± 2375",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1474946,
            "range": "± 16295",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 424079,
            "range": "± 2873",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 33471,
            "range": "± 1976",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 58647553,
            "range": "± 2469113",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 41516397,
            "range": "± 962893",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 213,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 8713,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 107,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "12e6c7fd72810d34dbd90b0bd359ba76fc078e0e",
          "message": "Support proper ellipses expansion (#94)\n\n* support proper ellipses expansion\r\n\r\n* clean up\r\n\r\n* remove debug logs\r\n\r\n* remove more debug prints\r\n\r\n* fix formatting\r\n\r\n* swap panic for error\r\n\r\n* clean up, fix error with printer\r\n\r\n* fix issue in cycle collector\r\n\r\n* clean up\r\n\r\n* one more test\r\n\r\n* remove extra print\r\n\r\n* fix bug with color dependency",
          "timestamp": "2023-11-06T20:48:37Z",
          "url": "https://github.com/mattwparas/steel/commit/12e6c7fd72810d34dbd90b0bd359ba76fc078e0e"
        },
        "date": 1699320291120,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 637692,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1514177,
            "range": "± 7953",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 433632,
            "range": "± 1049",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 40657,
            "range": "± 1367",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 67651904,
            "range": "± 207965",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 51195965,
            "range": "± 1347197",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 342,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9258,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 114,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Angelo Ceccato",
            "username": "AngeloChecked",
            "email": "30749948+AngeloChecked@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "90784c0e8bd1b7a782e2f086490f333b87d9ff73",
          "message": "implementation of command test (#95)\n\n* implementation of command test\r\n\r\n* improve test command description\r\n\r\n---------\r\n\r\nCo-authored-by: Angelo Ceccato <angeloceccato@IT-mac-cean-669341865.local>",
          "timestamp": "2023-11-07T16:50:50Z",
          "url": "https://github.com/mattwparas/steel/commit/90784c0e8bd1b7a782e2f086490f333b87d9ff73"
        },
        "date": 1699406480051,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 639413,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1499364,
            "range": "± 4967",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 436448,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 40510,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 67323302,
            "range": "± 19738",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 50159140,
            "range": "± 972589",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 336,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9090,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dane Lipscombe",
            "username": "dlip",
            "email": "danelipscombe@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a7b26ee363a39fe4b8599d2f064c1911afb1cff",
          "message": "Add nix flake (#97)",
          "timestamp": "2023-11-11T17:15:30Z",
          "url": "https://github.com/mattwparas/steel/commit/9a7b26ee363a39fe4b8599d2f064c1911afb1cff"
        },
        "date": 1699752380087,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 120,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 634778,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1493076,
            "range": "± 1502",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 433458,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 41468,
            "range": "± 2276",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 69940752,
            "range": "± 48164",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 54175604,
            "range": "± 3083221",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 332,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 8987,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8bf3bfba586beefe7b6cea9f059e54b7052e87ad",
          "message": "Fix panics in parser (#96)\n\n* There were some issues with the parser - this should fix those obvious panics\r\n* Tests against some of the r7rs benchmarks\r\n* Adds some more built ins, fixes some issues with the garbage collector\r\n* Remove the dependency on the `colored` crate - that is now a steel library\r\n* Mutable local variables are now expanded to calls to `box`, `unbox`, and `set-box!`",
          "timestamp": "2023-11-14T06:15:21Z",
          "url": "https://github.com/mattwparas/steel/commit/8bf3bfba586beefe7b6cea9f059e54b7052e87ad"
        },
        "date": 1700011383901,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 136,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 752420,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1699005,
            "range": "± 11127",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 549445,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 131,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1934919,
            "range": "± 20013",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 38999,
            "range": "± 1544",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 72152664,
            "range": "± 80854",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 62692980,
            "range": "± 527984",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 310,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 10164,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 135,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "59b1c66e171b300533554f47231660a0c783f93b",
          "message": "Switch to use plain lets for anonymous function application (#99)\n\n* switch to use plain lets for anonymous function application\r\n\r\n* make box, unbox, and set-box! an opcode\r\n\r\n* make gc run during test\r\n\r\n* checkpoint\r\n\r\n* fix broken to-string impl\r\n\r\n* reduce iterations\r\n\r\n* reduce iterations\r\n\r\n* remove warning",
          "timestamp": "2023-11-17T05:30:08Z",
          "url": "https://github.com/mattwparas/steel/commit/59b1c66e171b300533554f47231660a0c783f93b"
        },
        "date": 1700270298537,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 113,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 651226,
            "range": "± 1940",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1587736,
            "range": "± 35111",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 444292,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 105,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1629292,
            "range": "± 16171",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 23882,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 58259348,
            "range": "± 2531566",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 55017982,
            "range": "± 2969105",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 210,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 8728,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a72bd5bba8f430072bad3ecab13a2313c1092ce2",
          "message": "Replace the lexer with a hand written one (#102)\n\n* dont immediately deep clone the whole stack\r\n\r\n* new lexer\r\n\r\n* drop logos\r\n\r\n* fix broken continuations implementation\r\n\r\n* fix printer\r\n\r\n* lower to closed continuation when closing\r\n\r\n* fix up remaining continuation references\r\n\r\n* clean up\r\n\r\n* rename continuation\r\n\r\n* dead code\r\n\r\n* stop constant evaluator from running an infinite loop\r\n\r\n* add handlers to gc\r\n\r\n* add parsing of octal hex and binary integers",
          "timestamp": "2023-11-24T19:15:31Z",
          "url": "https://github.com/mattwparas/steel/commit/a72bd5bba8f430072bad3ecab13a2313c1092ce2"
        },
        "date": 1700874972192,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 111,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 669685,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1583598,
            "range": "± 34056",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 423648,
            "range": "± 14149",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 869832,
            "range": "± 25285",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1650700,
            "range": "± 23688",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 24192,
            "range": "± 2163",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 59792945,
            "range": "± 854276",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 53976662,
            "range": "± 2120437",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 209,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9264,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 279357,
            "range": "± 13332",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c27807931a3cd33ad00b5b2e1b2a44b26f729bf7",
          "message": "Create another result type which does not automatically propagate the error (#103)\n\n* first pass, have two different result types\r\n\r\n* adjust libraries to use new representation\r\n\r\n* change test to not coerce to result\r\n\r\n* address test failures\r\n\r\n* start some docs\r\n\r\n* third kind of result type\r\n\r\n* fix redefinition not being handled by const evaluation pass, add more dylibs\r\n\r\n* install dylibs in ci\r\n\r\n* fuss with CI\r\n\r\n* typo in ci\r\n\r\n* make native directory\r\n\r\n* add caching\r\n\r\n* use sccache\r\n\r\n* sccache\r\n\r\n* typo in ci\r\n\r\n* revert ci changes\r\n\r\n* get cache in ci working\r\n\r\n* see if cache works\r\n\r\n* remove debug logging\r\n\r\n* fix opcode overriding with cons",
          "timestamp": "2023-11-27T04:20:08Z",
          "url": "https://github.com/mattwparas/steel/commit/c27807931a3cd33ad00b5b2e1b2a44b26f729bf7"
        },
        "date": 1701134398642,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 110,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 693713,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1610297,
            "range": "± 44882",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 434363,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 842442,
            "range": "± 25714",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1634863,
            "range": "± 5258",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 24196,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 60746066,
            "range": "± 1725421",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 51554718,
            "range": "± 904886",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 211,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9477,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 280440,
            "range": "± 11348",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ba17b8e7bb730829d52fd9a88ecce488daba9965",
          "message": "Port refactor, bug fixes with quasiquote (#105)\n\n* quasiquote fixes, mutable pair compatibility layer\r\n\r\n* refactor port implementation\r\n\r\n* fix warnings\r\n\r\n* new string functions\r\n\r\n* reader was a little broken",
          "timestamp": "2023-12-02T01:07:18Z",
          "url": "https://github.com/mattwparas/steel/commit/ba17b8e7bb730829d52fd9a88ecce488daba9965"
        },
        "date": 1701479774926,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 118,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 710592,
            "range": "± 3095",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1676564,
            "range": "± 53385",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 435125,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 864931,
            "range": "± 8292",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1647499,
            "range": "± 5669",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 24294,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 62341679,
            "range": "± 2054564",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 53634161,
            "range": "± 1213454",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 211,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9847,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 284860,
            "range": "± 21178",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matthew Paras",
            "username": "mattwparas",
            "email": "34500476+mattwparas@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "881262eb1cc34268f82b611312037b8d76875464",
          "message": "upgrade once cell and abi stable (#106)",
          "timestamp": "2023-12-02T03:08:27Z",
          "url": "https://github.com/mattwparas/steel/commit/881262eb1cc34268f82b611312037b8d76875464"
        },
        "date": 1701566585314,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 110,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 676120,
            "range": "± 1788",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1669433,
            "range": "± 19328",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 433604,
            "range": "± 29015",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 866989,
            "range": "± 3999",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1657947,
            "range": "± 30065",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 25040,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 62831131,
            "range": "± 401981",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 53755190,
            "range": "± 940833",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 211,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 9619,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 287350,
            "range": "± 7495",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}