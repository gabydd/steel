window.BENCHMARK_DATA = {
  "lastUpdate": 1699060513328,
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
      }
    ]
  }
}