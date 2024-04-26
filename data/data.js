const data  = [
        //send
        {
            displace: process.client ? JSON.parse(localStorage.getItem("babyClue")) : false,
            place: "send",
            name:"寶物線索",
            img:"",
            description:
                "似乎是個很重要的東西"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("placePoint")) : false,
            place: "埃及",
            name: "犯罪現場",
            description: "歐買尬得斯"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("prove")) : false,
            place: "埃及",
            name: "辦案證明",
            description: "證明自己有辦案資格的道具"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("gotYou")) : false,
            place: "埃及",
            name: "逮捕令",
            description: "被關的時間比皇子交大還久"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("white")) : false,
            place: "埃及",
            name: "清白證明",
            description: "能夠避免說出你們是誰？」「你們要幹嘛？」「你們要帶我去哪裡？"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dieTime")) : false,
            place: "埃及",
            name: "死亡時間",
            description: "上面有著法老死亡多久的時間"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("babyStone")) : false,
            place: "埃及",
            name: "寶石",
            description: "閃閃亮亮的，石頭人好像很喜歡"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dieProve")) : false,
            place: "埃及",
            name: "寶物（死者蘇生的法器）",
            description: "似乎和死者蘇生有關係，如果可以復活的話，或許地點在{}比較好"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("peopleProve")) : false,
            place: "埃及",
            name: "身分證明",
            description: "和身分證依樣的東西，用丟很麻煩"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("goOut")) : false,
            place: "埃及",
            name: "出境人口簿",
            description: "上面有著密密麻麻的時間，[圖表示]"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("greatGoOut")) : false,
            place: "埃及",
            name: "正確的出境人口簿",
            description: "上面有著密密麻麻的時間，[圖表示]"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bigBag")) : false,
            place: "埃及",
            name: "一大袋埃及金幣",
            description: "如果我有那麼多錢，我就可以不用上學了吧"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("diePeople")) : false,
            place: "埃及",
            name: "驗屍單",
            description: "有著對遺體的各種線索[圖表示]"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("formalin")) : false,
            place: "埃及",
            name: "福馬林",
            description: "癢癢臭臭的"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sweating")) : false,
            place: "埃及",
            name: "出汗劑",
            description: "似乎可以得到一些奇怪的東西"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sweetSweating")) : false,
            place: "埃及",
            name: "香汗",
            description: "有些人覺得香，有些人覺得奇怪"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("mouthWater")) : false,
            place: "埃及",
            name: "很臭的口水",
            description: "幹真的臭"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("finger")) : false,
            place: "埃及",
            name:"指紋採樣樣本",
            description: "上面有一些奇怪的指紋"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("lookmouth")) : false,
            place: "埃及",
            name:"目擊者口證",
            description: "你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹你從桃園新竹"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("pencile")) : false,
            place: "埃及",
            name:"偵查筆錄",
            description: "警方的偵查筆錄",
        },
        // 日本
        {
            displace: process.client ? JSON.parse(localStorage.getItem("please")) : false,
            place: "日本",
            name: "木匠的委託單",
            description: "我需要一點人手，報酬兩個諭吉"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("graph")) : false,
            place: "日本",
            name: "葡萄",
            description: "吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("send")) : false,
            place: "日本",
            name: "沙子",
            description: "可能是從獅身人面像弄下來的"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("glasses")) : false,
            place: "日本",
            name: "玻璃瓶",
            description: "為什麼不是自己合"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("blue")) : false,
            place: "日本",
            name: "藍染植物",
            description: "ㄖㄢˊㄖㄢˇ?ㄌㄢˊㄖㄢˇ?ㄖㄢˊㄌㄢˇ?ㄌㄢˊㄌㄢˇ?"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("wood")) : false,
            place: "日本",
            name: "木材",
            description: "為什麼不能自己分解"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("swood")) : false,
            place: "日本",
            name: "特殊木材",
            description: "怎麼又是這個圓"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sfoodtail")) : false,
            place: "日本",
            name: "祈福斧頭",
            description: "耐久III,幸運III,效率V,修補"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("circleWood")) : false,
            place: "日本",
            name: "特殊圓木",
            description: "這是幸運的效果嗎?"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("fixbox")) : false,
            place: "日本",
            name: "修復專用工具",
            description: "你砍完樹了嗎...?"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("foodtail")) : false,
            place: "日本",
            name: "一般斧頭",
            description: "可能是從非常河裡撈上來的吧"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai1")) : false,
            place: "日本",
            name: "崇高道德的讚許-1",
            description: "好像在哪裡出現過"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai2")) : false,
            place: "日本",
            name: "崇高道德的讚許-2",
            description: "好像在哪裡出現過"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai3")) : false,
            place: "日本",
            name: "崇高道德的讚許-3",
            description: "好像在哪裡出現過"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dai4")) : false,
            place: "日本",
            name: "崇高道德的讚許-4",
            description: "好像在哪裡出現過"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("giantbook")) : false,
            place: "日本",
            name: "散落的劇本",
            description: "真的是被吹走的嗎"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("book")) : false,
            place: "日本",
            name: "裝訂劇本",
            description: "‎米奇魔法音樂世界"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("avoidsun")) : false,
            place: "日本",
            name: "遮陽棚材料",
            description: "就材料，不然你以為?"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("circleWood")) : false,
            place: "日本",
            name: "圓木",
            description: "似乎是這種木頭"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("breaktool")) : false,
            place: "日本",
            name: "壞掉的工具",
            description: "阿，壞掉了..."
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("tool")) : false,
            place: "日本",
            name: "修好的工具",
            description: "ㄟ，修好了..."
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("yugi")) : false,
            place: "日本",
            name: "諭吉",
            description: "希爾斯陵依流通的貨幣"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("look")) : false,
            place: "日本",
            name: "會面單",
            description: "批准穿越者與家主會面\n\t批准人：荻士霓垃垣"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("boliou")) : false,
            place: "日本",
            name: "布料",
            description: "修復旗幟的材料"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("drewhorse")) : false,
            place: "日本",
            name: "繪馬",
            description: "上面寫著人民的願望"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bigGood")) : false,
            place: "日本",
            name: "大吉籤",
            description: "代表著非常好運"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("key")) : false,
            place: "日本",
            name: "寶庫鑰匙",
            description: "可能被烏鴉拿去築巢了"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("rice")) : false,
            place: "日本",
            name: "寶物(阿托米克)",
            description: "不知道"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("cat")) : false,
            place: "日本",
            name: "招財貓護身符",
            description: "或許工匠很需要"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("giou")) : false,
            place: "日本",
            name: "祭祀用酒(杉碘伊世依武酒)",
            description: "π=3.14159..."
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("gioubotal")) : false,
            place: "日本",
            name: "釀酒容器",
            description: "圓的周長和其直徑的比"
        },

    // 中國
        {
            displace: process.client ? JSON.parse(localStorage.getItem("topgood")) : false,
            place: "中國",
            name: "皇上聖旨",
            description: "國內已分為兩派 有穿越者之協助 內部將和平一世 鬼怪皆無所遁形(藏頭)"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("daedeu")) : false,
            place: "中國",
            name: "道德經",
            description: "孔子的所有物，據說是為了世仇(老子)而特製的應對手法大全"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("grandfather")) : false,
            place: "中國",
            name: "祖傳書法用具",
            description: "管仲的所有物，據本人所述這個用具所寫的字可以改變歷史"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("cash")) : false,
            place: "中國",
            name: "一百貝殼幣",
            description: "仁無國的專屬貨幣"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("ya")) : false,
            place: "中國",
            name: "茶葉",
            description: "阿里山上姑娘所產的茶葉"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("fiveto")) : false,
            place: "中國",
            name: "武士刀",
            description: "用大馬士革鋼所做的神兵利器"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("wize")) : false,
            place: "中國",
            name: "藥草清單",
            description: "裏頭寫了⸢靈芝、玫瑰、四葉草⸥"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("zerozhi")) : false,
            place: "中國",
            name: "靈芝",
            description: "吃下去保你長命百歲"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("rose")) : false,
            place: "中國",
            name: "玫瑰",
            description: "有埃及豔后的味道"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("fore")) : false,
            place: "中國",
            name: "四葉草",
            description: "給人帶來幸運之物"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("farmer")) : false,
            place: "中國",
            name: "鐮刀和槌子",
            description: "農物工具"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("medice")) : false,
            place: "中國",
            name: "安眠藥",
            description: "吃下去連大象都可以睡好幾天"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("body")) : false,
            place: "中國",
            name: "皇上的身體檢查書",
            description: "內容顯示：各項數值皆如正常人，並無外傷或內傷之情形"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("whiteyes")) : false,
            place: "中國",
            name: "白起的合作同意書",
            description: "仁家對於合作一事並無意見，望周之。"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("yes")) : false,
            place: "中國",
            name: "管仲的合作同意書",
            description: "無家於此同意穿越者之提案，望仁家可一同合作。"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("gotyou")) : false,
            place: "中國",
            name: "抓捕令",
            description: "皇上親自下令的抓捕令！"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("success")) : false,
            place: "中國",
            name: "抓捕成功的證明",
            description: "圖片(一個人被綁著躺在地上)"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("girl")) : false,
            place: "中國",
            name: "女媧石",
            description: "仁無國的鎮國之寶，只有仁無國的皇上所信任之人才有資格碰觸。"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("bitfultea")) : false,
            place: "中國",
            name:"東方美人茶",
            description: "喝下之後能體會到東方的美好",
        },

    // 歐洲
        {
            displace: process.client ? JSON.parse(localStorage.getItem("farmeone")) : false,
            place: "歐洲",
            name: "作物收成表1",
            description: "記錄了作物與一個月前的生長程度幾乎不變等評估"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("farmtwo")) : false,
            place: "歐洲",
            name: "作物收成表2",
            description: "記錄了作物恢復之前的生長速度等評估"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("pic")) : false,
            place: "歐洲",
            name: "遺跡照片",
            description: "圖示意"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("maohxioun")) : false,
            place: "歐洲",
            name: "國家級冒險委託書",
            description: "與一般的委託書沒啥不同，但有著國王親筆簽名與皇室火漆章"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("cando")) : false,
            place: "歐洲",
            name: "實力證明",
            description: "上面記錄了你的力量、反應等各項身體數值"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("smart")) : false,
            place: "歐洲",
            name: "智力測驗單",
            description: "上面記錄了你的智商、情商等各項精神數值"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("maou")) : false,
            place: "歐洲",
            name: "冒險者徽章",
            description: "身為冒險者的證明，材質代表著你的等級，只能接取該等級的委託"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("todo")) : false,
            place: "歐洲",
            name: "任務資訊",
            description: "圖示意"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("dorgan")) : false,
            place: "歐洲",
            name: "屠龍之劍",
            description: "用來屠龍的神兵利器"
        },{
            displace: process.client ? JSON.parse(localStorage.getItem("drogangay")) : false,
            place: "歐洲",
            name: "龍鱗護甲",
            description: "龍鱗為材料的護甲，對龍特防+200%，心態直接破防"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("stone")) : false,
            place: "歐洲",
            name: "遺跡石板",
            description: "圖示意"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("droganbaby")) : false,
            place: "歐洲",
            name: "龍的寶玉",
            description: "巨龍經年累月下所孕育出的寶玉"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("originLiou")) : false,
            place: "歐洲",
            name: "鍛造原料",
            description: "不論是合成還是升級都需要的重要原料"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("sgay")) : false,
            place: "歐洲",
            name: "神秘的棍杖",
            description: "牛頭人給予的禮物，有著神秘複雜的雕刻，上方似乎有個鑲嵌槽..."
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("invite")) : false,
            place: "歐洲",
            name: "王宮邀請函",
            description: "國王給予英雄的邀請函，可以換取王室中的寶物"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("beatiful")) : false,
            place: "歐洲",
            name: "彩虹寶石",
            description: "散發著燦爛奪目的光芒，有種吸引人目光的魔力..."
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("synthesisPlatform")) : false,
            place: "歐洲",
            name: "合成台",
            description: "上面有3*3的格子，在工匠手上可以合成無數的東西"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("relicLegend")) : false,
            place: "歐洲",
            name: "遺跡傳說",
            description: "圖示意"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("baby")) : false,
            place: "歐洲",
            name: "寶物",
            description: "待討論"
        },
        {
            displace: process.client ? JSON.parse(localStorage.getItem("chocolate")) : false,
            place: "歐洲",
            name:"歐洲進口巧克力",
            description: "比狗迪馬還好吃的巧克力"
        }
    ]


export default data