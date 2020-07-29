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
  const startedAt = performance.now();

  for (let i = 0; i < sampleSize; i++) {
    let response = addon.hello([1, 2, 3, 4]);
  }

  const duration = performance.now() - startedAt;

  return {
    min: NaN,
    avg: duration / sampleSize,
    max: NaN,
  };
}
