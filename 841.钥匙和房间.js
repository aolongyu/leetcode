/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if (rooms.length === 0) {
        return true;
    }

    let keys = [0];
    let opened = [];

    while(keys.length) {
        let curRoom = keys.shift();
        if (opened.includes(curRoom)) {
            continue;
        }

        opened.push(curRoom);
        keys.push(...rooms[curRoom]);
    }

    return rooms.length === opened.length;
};

// @lc code=end

