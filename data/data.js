const data  = [
        {
            displace: process.client ? JSON.parse(localStorage.getItem("babyClue")) : false,
            place: "send",
            name:"寶物線索",
            img:"/images/babyClue.jpeg",
            description:
                "似乎是個很重要的東西"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("placePoint")) : false,
            place: "埃及",
            name: "犯案地點",
            img:"/images/placePoint.jpeg",
            description: "歐買尬得斯"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("prove")) : false,
            place: "埃及",
            name: "辦案證明",
            img:"/images/prove.png",
            description: "證明自己有辦案資格的道具"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("gotYou")) : false,
            place: "埃及",
            name: "逮捕令",
            img:"/images/gotYou.jpeg",
            description: "被關的時間比皇子交大還久"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("white")) : false,
            place: "埃及",
            name:"清白證明",
            img: "/images/white.jpeg",
            description: "能夠避免說出「你們是誰？」「你們要幹嘛？」「你們要帶我去哪裡？"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("blue")) : false,
            name:"藍染植物",
            description: "藍染死了",
            img:"/images/blue.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sofa")) : false,
            name:"書法用具",
            description: "拿來寫書法的",
            img:"/images/sofa.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dieTime")) : false,
            place: "埃及",
            name: "死亡時間",
            img:"/images/dieTime.jpg",
            description: "上面有著法老死亡多久的時間"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("babyStone")) : false,
            place: "埃及",
            name: "寶石",
            img:"/images/babyStone.jpeg",
            description: "閃閃亮亮的，石頭人好像很喜歡"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dieProve")) : false,
            place: "埃及",
            name: "寶物（死者蘇生的法器）",
            img:"/images/dieProve.jpeg",
            description: "似乎和死者蘇生有關係，如果可以復活的話，或許地點在{}比較好"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("peopleProve")) : false,
            place: "埃及",
            name: "身分證明",
            img:"/images/peopleProve.jpeg",
            description: "和身分證依樣的東西，用丟很麻煩"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("goOut")) : false,
            place: "埃及",
            name: "出境人口簿",
            img:`/images/goOut.png`,
            description: "上面有著密密麻麻的時間，[圖表示]"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("greatGoOut")) : false,
            place: "埃及",
            name: "正確的出境人口簿",
            img:"/images/greatGoOut.jpeg",
            description: "這次好像更奇怪了..."
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bigBag")) : false,
            place: "埃及",
            name: "一大袋金幣",
            img:"/images/bigBag.jpeg",
            description: "如果我有那麼多錢，我就可以不用上學了吧"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("diePeople")) : false,
            place: "埃及",
            name: "驗屍單",
            img:"/images/diePeople.jpeg",
            description: "有著對遺體的各種線索[圖表示]"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("formalin")) : false,
            place: "埃及",
            name: "福馬林",
            img:"/images/formalin.webp",
            description: "癢癢臭臭的"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sweating")) : false,
            place: "埃及",
            name: "出汗劑",
            img:"/images/sweating.jpeg",
            description: "似乎可以得到一些奇怪的東西"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sweetSweating")) : false,
            place: "埃及",
            name: "香汗",
            img:"/images/sweetSweating.jpeg",
            description: "有些人覺得香，有些人覺得奇怪"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("mouthWater")) : false,
            place: "埃及",
            name: "很臭的口水",
            img:"/images/mouthWater.png",
            description: "幹真的臭"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("finger")) : false,
            place: "埃及",
            name:"指紋採樣樣本",
            img:"/images/finger.jpeg",
            description: "上面有一些奇怪的指紋"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("lookmouth")) : false,
            place: "埃及",
            name:"目擊者口證",
            img:"/images/lookmouth.jpeg",
            description: "你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("pencile")) : false,
            place: "埃及",
            name:"偵查筆錄",
            img:"/images/pencil.webp",
            description: "警方的偵查筆錄",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sayWrong")) : false,
            place: "埃及",
            name:"說謊證明",
            img:"/images/sayWrong.jpeg",
            description: "看來有人說謊點點點",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("knife")) : false,
            place: "埃及",
            name:"詭異的刀",
            img:"/images/knife.jpeg",
            description: "恩～刺刺的",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sc")) : false,
            name:"艷后密令",
            description: "從我這邊到你這邊，一共五步",
            img:"/images/sc.png",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("rose")) : false,
            description: "很香",
            name:"玫瑰",
            img:"/images/rose.png",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("uncall")) : false,
            description: "唉唷威雅抓錯人了",
            name:"撤訴書",
            img:"/images/撤訴書.gif",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("yanho")) : false,
            name:"艷后剪影",
            img:"/images/yanho.jpeg",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("tong")) : false,
            name:"臨時通行證",
            img:"/images/tong.jpeg",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bodyHair")) : false,
            name:"沙漠哺乳動物的體毛",
            img:"/images/bodyHair.jpeg ",
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("send")) : false,
            name:"沙子",
            img:"/images/send.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("please")) : false,
            place: "日本",
            name: "木匠的委託單",
            description: "我需要一點人手，報酬兩個諭吉",
            img: "images/please.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("graph")) : false,
            place: "歐洲",
            name: "葡萄",
            description: "吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮",
            img: "images/graph.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("glasses")) : false,
            place: "日本",
            name: "玻璃瓶",
            description: "為什麼不是自己合",
            img: "images/glasses.png"
        },

        {
            displace: process.client ? JSON.parse(localStorage.getItem("swood")) : false,
            place: "日本",
            name: "特殊木材",
            description: "怎麼又是這個圓",
            img: "images/swood.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sfoodtail")) : false,
            place: "日本",
            name: "祈福斧頭",
            description: "耐久III,幸運III,效率V,修補",
            img: "images/sfoodtail.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("fixbox")) : false,
            place: "日本",
            name: "修復專用工具",
            description: "你砍完樹了嗎...?",
            img: "images/fixbox.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("foodtail")) : false,
            place: "日本",
            name: "一般斧頭",
            description: "可能是從非常河裡撈上來的吧",
            img: "images/foodtail.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai1")) : false,
            place: "日本",
            name: "崇高道德的讚許-1",
            description: "好像在哪裡出現過",
            img: "images/dai.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai2")) : false,
            place: "日本",
            name: "崇高道德的讚許-2",
            description: "好像在哪裡出現過",
            img: "images/dai.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai3")) : false,
            place: "日本",
            name: "崇高道德的讚許-3",
            description: "好像在哪裡出現過",
            img: "images/dai.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai4")) : false,
            place: "日本",
            name: "崇高道德的讚許-4",
            description: "好像在哪裡出現過",
            img: "images/dai.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("synthesisPlatform")) : false,
            place: "日本",
            name: "合成台",
            img: "images/synthesisPlatform.jpeg",
            description: "上面有3*3的格子，在工匠手上可以合成無數的東西"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("giantbook")) : false,
            place: "日本",
            name: "散落的劇本",
            description: "真的是被吹走的嗎",
            img: "images/giantbook.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("book")) : false,
            place: "日本",
            name: "裝訂劇本",
            description: "‎米奇魔法音樂世界",
            img: "images/book.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("avoidsun")) : false,
            place: "日本",
            name: "遮陽棚材料",
            description: "就材料，不然你以為?",
            img: "images/avoidsun.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("circleWood")) : false,
            place: "日本",
            name: "圓木",
            description: "似乎是這種木頭",
            img: "images/circleWood.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("breaktool")) : false,
            place: "日本",
            name: "壞掉的工具",
            description: "阿，壞掉了...",
            img: "images/breaktool.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("tool")) : false,
            place: "日本",
            name: "修好的工具",
            description: "ㄟ，修好了...",
            img: "images/tool.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("yugi")) : false,
            place: "日本",
            name: "諭吉",
            description: "希爾斯陵依流通的貨幣",
            img: "images/yugi.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("look")) : false,
            place: "日本",
            name: "會面單",
            description: "批准穿越者與家主會面\n\t批准人：荻士霓垃垣",
            img: "images/look.jpeg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("boliou")) : false,
            place: "日本",
            name: "布料",
            description: "修復旗幟的材料",
            img: "images/boliou.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("drewhorse")) : false,
            place: "日本",
            name: "繪馬",
            description: "上面寫著人民的願望",
            img: "images/drewhorse.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bigGood")) : false,
            place: "日本",
            name: "大吉籤",
            description: "代表著非常好運",
            img: "images/bigGood.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("key")) : false,
            place: "日本",
            name: "寶庫鑰匙",
            description: "可能被烏鴉拿去築巢了",
            img: "images/key.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("rice")) : false,
            place: "日本",
            name: "寶物(阿托米克)",
            description: "不知道",
            img: "images/rice.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("cat")) : false,
            place: "日本",
            name: "招財貓護身符",
            description: "或許工匠很需要",
            img: "images/cat.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("giou")) : false,
            place: "日本",
            name: "祭祀用酒(杉碘伊世依武酒)",
            description: "π=3.14159...",
            img: "images/giou.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("gioubotal")) : false,
            place: "日本",
            name: "釀酒容器",
            description: "圓的周長和其直徑的比",
            img: "images/gioubotal.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("fiveto")) : false,
            place: "日本",
            name: "武士刀",
            img: "images/fiveto.jpeg",
            description: "用大馬士革鋼所做的神兵利器"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("topgood")) : false,
            place: "中國",
            name: "皇上聖旨",
            description: "國內已分為兩派 有穿越者之協助 內部將和平一世 鬼怪皆無所遁形(藏頭)",
            img: "/images/topgood.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("daedeu")) : false,
            place: "中國",
            name: "道德經",
            description: "孔子的所有物，據說是為了世仇(老子)而特製的應對手法大全",
            img: "/images/daedeu.png"
        },
        {

            displace: process.client ? JSON.parse(localStorage.getItem("pic")) : false,
            name:"合照",
            description: "看著看著就哭了...",
            img:"/images/pic.jpeg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("med")) : false,
            place: "中國",
            name: "大寶丹",
            description: "比剛哥的仙丹還有用",
            img: "/images/med.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("cash")) : false,
            place: "中國",
            name: "一百貝殼幣",
            description: "仁無國的專屬貨幣",
            img: "/images/cash.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("ya")) : false,
            place: "中國",
            name: "茶壺",
            description: "阿里山上姑娘所產的茶葉",
            img: "/images/ya.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("wize")) : false,
            place: "中國",
            name: "藥草清單",
            description: "裏頭寫了⸢靈芝、玫瑰、四葉草⸥",
            img: "/images/wize.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("zerozhi")) : false,
            place: "中國",
            name: "靈芝",
            description: "吃下去保你長命百歲",
            img: "/images/zerozhi.JPG"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("body")) : false,
            place: "中國",
            name: "皇上的身體檢查書",
            description: "內容顯示：各項數值皆如正常人，並無外傷或內傷之情形",
            img: "/images/body.JPG"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("whiteyes")) : false,
            place: "中國",
            name: "白起的合作同意書",
            description: "仁家對於合作一事並無意見，望周之。",
            img: "/images/whiteyes.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("yes")) : false,
            place: "中國",
            name: "管仲的合作同意書",
            description: "無家於此同意穿越者之提案，望仁家可一同合作。",
            img: "/images/yes.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("gotyou")) : false,
            place: "中國",
            name: "抓捕令",
            description: "皇上親自下令的抓捕令！",
            img: "/images/gotyou.jfif"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("success")) : false,
            place: "中國",
            name: "抓捕成功的證明",
            description: "圖片(一個人被綁著躺在地上)",
            img: "/images/success.JPG"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("girl")) : false,
            place: "中國",
            name: "女媧石",
            description: "仁無國的鎮國之寶，只有仁無國的皇上所信任之人才有資格碰觸。",
            img: "/images/girl.JPG"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bitfultea")) : false,
            place: "中國",
            name: "東方美人茶",
            description: "喝下之後能體會到東方的美好",
            img: "/images/bitfultea.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("maohxioun")) : false,
            name:"國家及冒險委託書",
            description: "超級委託書",
            img: "images/maohxioun.jpg"
        },
        {
             displace: process.client ? JSON.parse(localStorage.getItem("baby")) : false,
            name:"伊麗絲的嘆息",
            description: "這次不會再被教授聽到黏黏的了",
            img: "images/spider.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("fore")) : false,
            name:"四葉草",
            description: "四葉贏了",
            img: "images/fore.jpeg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("friendProve")) : false,
            name: "牛頭人友情的象徵",
            description: "這代表我們間的友情",
            img: "images/friendProve.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("lpic")) : false,
            name:"遺跡照片",
            description: "上面怎麼好像寫著雲*樓",
            img: "images/lpic.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sleep")) : false,
            name:"安眠藥",
            description: "一顆可以讓你睡一年",
            img: "images/sleep.jpeg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("smart")) : false,
            place: "歐洲",
            name: "智力測驗單",
            description: "上面記錄了你的智商、情商等各項精神數值",
            img: "images/smart.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dorgan")) : false,
            place: "歐洲",
            name: "屠龍劍",
            description: "用來屠龍的神兵利器",
            img: "images/dorgan.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("drogangay")) : false,
            place: "歐洲",
            name: "龍鱗護甲",
            description: "龍鱗為材料的護甲，對龍特防+200%，心態直接破防",
            img: "images/dorgangay.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("droganbaby")) : false,
            place: "歐洲",
            name: "龍的寶玉",
            description: "巨龍經年累月下所孕育出的寶玉",
            img: "images/droganbaby.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("originLiou")) : false,
            place: "歐洲",
            name: "鍛造原料",
            description: "不論是合成還是升級都需要的重要原料",
            img: "images/originLiou.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sgay")) : false,
            place: "歐洲",
            name: "神秘的棍杖",
            description: "牛頭人給予的禮物，有著神秘複雜的雕刻，上方似乎有個鑲嵌槽...",
            img: "images/sgay.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("invite")) : false,
            place: "歐洲",
            name: "王宮邀請函",
            description: "國王給予英雄的邀請函，可以換取王室中的寶物",
            img: "images/invite.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("beatiful")) : false,
            place: "歐洲",
            name: "彩虹寶石",
            description: "散發著燦爛奪目的光芒，有種吸引人目光的魔力...",
            img: "images/beatiful.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("cando")) : false,
            place: "歐洲",
            name: "實力證明",
            description: "證明實力的東西",
            img: "images/cando.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("todoprove")) : false,
            name:"任務證明",
            description: "證明完成任務的道具",
            img: "images/todoprove.jpeg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("chocolate")) : false,
            place: "歐洲",
            name: "歐洲進口巧克力",
            description: "比狗迪馬還好吃的巧克力",
            img: "images/chocolate.png"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("farmeone")) : false,
            name:"作物收成表1",
            description: "上面記載著農作物的資訊，但好像怪怪的",
            img: "images/farmeone.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("farmtwo")) : false,
            name:"作物收成表2",
            description: "上面記載著農作物的資訊",
            img: "images/farmtwo.jpg"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("landk")) : false,
            name:"鐮刀和捶子",
            description: "怎麼握起來會有紅色畫面跑過",
            img:"images/landk.png"
        }
    ]


export default data