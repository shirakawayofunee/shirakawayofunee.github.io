/*
 * @Author: DCBZ
 * @Date: 2026-01-28 16:34:34
 * @LastEditors: your name
 * @LastEditTime: 2026-01-28 18:19:01
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home26\js\vomicdata.js
 */
// 一个短促的“哔”声，用于模拟加载后的音频
const MOCK_AUDIO = "./wav/CN/0722rain.m4a";

const COMIC_DATA = [
    {
        id: "section_1",
        images: [
            "./vomic/0722/101.png", 
            "./vomic/0722/102.png", 
            "./vomic/0722/103.png", 
        ],
        audioPlaylist: ["./wav/CN/0722/101.wav"], 
        autoDuration: 0
    },
    {
        id: "section_2",
        // 只有图，没有声音（留白）
        images: [
            "./vomic/0722/201.png", 
            "./vomic/0722/202.png", 
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