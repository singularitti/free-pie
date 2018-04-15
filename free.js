/**
 * created by Qi Zhang on Apr 14, 2018
 */

const pie = require("cli-pie");
const si = require('systeminformation');

si.mem(function (data) {
    let gigabyte = Math.pow(1024, 3);
    let freeMemory = data["free"] / gigabyte; // Not used in gigabytes
    let usedMemory = data["used"] / gigabyte; // Used (include buffers/cache)
    let buffache = data["buffcache"] / gigabyte; // Used by buffers+cache, not applicable to Windows system
    let activeMemory = data["active"] / gigabyte; // Used actively (exclude buffers/cache)
    let availableMemory = data["available"] / gigabyte; // Potentially available (total - active)

    let p = new pie(
        10,
        [
            {label: "free: ".concat(freeMemory.toFixed(2)).concat(" GB"), value: freeMemory, color: [0, 0, 255]},
            {label: "buffers/cache: ".concat(buffache.toFixed(2)).concat(" GB"), value: buffache, color: [255, 240, 0]},
            {label: "active: ".concat(activeMemory.toFixed(2)).concat(" GB"), value: activeMemory, color: [255, 0, 0]},
        ],
        {
            legend: true,
            display_total: true,
            total_label: "total",
        });
    console.log(p.toString());
});