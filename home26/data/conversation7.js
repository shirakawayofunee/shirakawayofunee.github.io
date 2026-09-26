/*
 * @Author: DCBZ
 * @Date: 2026-08-29 17:09:05
 * @LastEditors: your name
 * @LastEditTime: 2026-09-27 02:22:43
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home26\data\conversation7.js
 */
export default {
  meta: {
    title: `「登場」`,
    bgm: `mp3/bg/conversation7.mp3`,
    summary: `汝の行く先へ我も行き、汝の留まる地に我も留まる。
    汝の国は我が国、汝の神は我が神。
    汝の死ぬ地で私も死に、そこに葬られる。
    死を除いては、決して離れはしない。      ——《聖書·ルツ記》`
  },
  infoPanel: {
    glossary: [
      {
        term: `上庭`,
        desc: `人類文明の最高統治機関、その意思決定の中枢は、科学者によって設立された組織「<span>Edge</span>」であり、
        現在は再編を経て7人のメンバーによって構成されている。`
      },
      {
        term: `福音地`,
        desc: `工事中`
      },
      {
        term: `GARDEN`,
        desc: `工事中`
      }
    ],
    characters: [
      {
        name: `工事中`,
        avatar: `img/dh/leopold1.png`,
        note: `謎多きの女。`,
        basicStats: `謎多きの女。子供にとって世の終わりのような一大事は、大人にとっては、すべて大事に至らず無事に収められるものだ。`,
        profile: `危険度：S級\n能力：不明
        `
      },
      {
        name: `「Garofano」`,
        name2: `ガロファノ`,
        avatar: `img/dh/severo007.png`,
        note: `Lと同じ戦線に立つSも、福音地の者たちを決して歓迎しない。`,
        basicStats: `沉迷于爱之中的人渴望向一个偶像奉献自己，而不管那偶像是否接受。旁人也许以为这种执著十分痛苦，但对她来讲，要是没有这种执著反而更痛苦。
        `,
        profile: `所属：GARDEN
        危険度：A級
        能力：穿刺蚕食`
      },
    ],
    synopsis: `業師は福音地からFAC総司令の暗殺依頼を引き受け、「ガロファノ」は「GARDEN」に戻り体を休養する。`,
  },
  script: [

    {
      type: `narration`,
      text: `N.F.113年7月23日00:41<br>「GARDEN」アジト`,
    },
    {
      type: `image`,
      src: `img/cg/br_05.png`,
      bubbleStyle: "center",
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold1.png`,
      name: `業師`,
      text: `ただの上庭の犬、私の花を汚すなんて……ふふ`
    },
    {
      type: `image`,
      src: `img/cg/br_06.png`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold1.png`,
      name: `業師`,
      text: `地下に伝えて、「GARDEN」はこの依頼を受けたと。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold1.png`,
      name: `業師`,
      text: `リストをよこせ、私が直接行く。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold1.png`,
      name: `業師`,
      text: `君の願い通り、盛大に花を咲かせるわよ。上庭の執行人`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold1.png`,
      name: `業師`,
      text: `<span>シャーローム</span>`
    },
    {
      "type": "narration",
      "text": "序章「Blue rain」終了。\nTo be continued",
      "bubbleStyle": "end-cinematic" 
    },
  ]
};
