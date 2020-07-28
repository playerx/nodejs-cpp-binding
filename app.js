const { performance } = require("perf_hooks");
var addon = require("bindings")("hello");

// Banch Sync Call
{
  const syncCallDuration = banchSyncOp(addon, 100000);

  console.log("Pure Sync Op call duration (ms)");
  console.table([
    ["Min", "Avg", "Max"],
    [syncCallDuration.min, syncCallDuration.avg, syncCallDuration.max],
  ]);
  console.log("");
  console.log("");
}

function banchSyncOp(addon, sampleSize) {
  const results = new Array(sampleSize).fill(0).map(() => {
    const startedAt = performance.now();

    let response = addon.hello();

    return performance.now() - startedAt;
  });

  return {
    min: Math.min(...results),
    avg: results.reduce((a, b) => a + b, 0) / results.length,
    max: Math.max(...results),
  };
}
