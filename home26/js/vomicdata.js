

const BGM_CONFIG = {
    source: "./wav/CN/0722/rain.m4a", // 你的 BGM 路径
    volume: 0.5 // 音量 (0.0 - 1.0)
};

const COMIC_DATA = [
    {
        id: "section_1",
        images: [
            "./vomic/0722/101.webp", 
            "./vomic/0722/102.webp", 
            "./vomic/0722/103.webp", 
        ],
        audioPlaylist: [], 
        autoDuration: 1000
    },
    {
        id: "section_2",
        // 只有图，没有声音（留白）
        images: [
            "./vomic/0722/201.webp", 
            "./vomic/0722/202.webp", 
        ],
        audioPlaylist: [], 
        autoDuration: 3000 // 毫秒：无音频时，在此停留3秒
    },
    {
        id: "section_3",
        // 又是多图多音
        images: [
            "./vomic/0722/301.webp", 
            "./vomic/0722/302.webp", 
        ],
        audioPlaylist: [], // 3段台词
        autoDuration: 0
    },
    {
        id: "section_4",
        images: ["https://placehold.co/600x400/000/FFF?text=To+Be+Continued"],
        audioPlaylist: [
            "./vomic/0722/401.webp", 
            "./vomic/0722/402.webp", 
            "./vomic/0722/403.webp", 
            "./vomic/0722/404.webp", 
        ],
        autoDuration: 5000
    },
    // === 特殊排版的一页 ===
    {
        id: "section_special",
        // 这里指定使用刚才写的 CSS 样式
        layout: "layout-stagger-row", 
        
        // 放入 3 张切好的分镜图
        images: [
            "./vomic/0722/501.webp",   // 左边那张
            "./vomic/0722/502.webp", // 中间那张
            "./vomic/0722/503.webp"   // 右边那张
        ],
        
        // 声音依然按顺序播
        audioPlaylist: ["./wav/CN/0722/501.wav"], 
        autoDuration: 0
    },
    {
        id: "section_5",
        images: [
            "./vomic/0722/504.webp", 
            "./vomic/0722/505.webp", 
        ],
        audioPlaylist: ["./wav/CN/0722/501.wav"], 
        autoDuration: 0
    },
    {
        id: "section_6",
        images: [
            "./vomic/0722/601.webp", 
        ],
        audioPlaylist: ["./wav/CN/0722/601.wav"], 
        autoDuration: 0
    },
    {
        id: "section_7",
        images: [
            "./vomic/0722/101.webp", 
            "./vomic/0722/102.webp", 
            "./vomic/0722/103.webp", 
        ],
        audioPlaylist: ["./wav/CN/0722/101.wav"], 
        autoDuration: 0
    },
    {
        id: "section_8",
        images: [
            "./vomic/0722/801.webp", 
            "https://placehold.co/600x400/000/FFF?text=To+Be+Continued"],
        audioPlaylist: [],
        autoDuration: 5000
    },
];