/*
 * @Author: DCBZ
 * @Date: 2026-01-28 16:34:34
 * @LastEditors: your name
 * @LastEditTime: 2026-01-28 16:40:43
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home26\js\vomicdata.js
 */
// 一个短促的“哔”声，用于模拟加载后的音频
const MOCK_AUDIO = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTSVMAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw//OEAAABAAAAAgAAAASIAAAAAAA=";

const COMIC_DATA = [
    {
        id: "section_1",
        // 多图 + 多音频
        images: [
            "img/section_1/1.png", 
            ""
        ],
        // 音频播放列表：按顺序播放
        audioPlaylist: [MOCK_AUDIO, MOCK_AUDIO], 
        autoDuration: 0 // 有音频，此项忽略
    },
    {
        id: "section_2",
        // 只有图，没有声音（留白）
        images: [
            "https://placehold.co/800x300/666/FFF?text=Silence+Scene"
        ],
        audioPlaylist: [], 
        autoDuration: 3000 // 毫秒：无音频时，在此停留3秒
    },
    {
        id: "section_3",
        // 又是多图多音
        images: [
            "https://placehold.co/600x600/222/FFF?text=Action!",
            "https://placehold.co/600x500/888/FFF?text=Reaction"
        ],
        audioPlaylist: [MOCK_AUDIO, MOCK_AUDIO, MOCK_AUDIO], // 3段台词
        autoDuration: 0
    },
    {
        id: "section_4",
        images: ["https://placehold.co/600x400/000/FFF?text=To+Be+Continued"],
        audioPlaylist: [],
        autoDuration: 5000
    }
];