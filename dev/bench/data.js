window.BENCHMARK_DATA = {
  "lastUpdate": 1700011385016,
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
      }
    ]
  }
}