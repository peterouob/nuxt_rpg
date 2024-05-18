<!-- src/components/OldLetter.vue -->

<template>
    <v-container class="letter-container">
        <div class="letter-content">
            <h1>救世主</h1>
            <p>
                當你看到這封信的時候，我應該已經離開了，不要去相信商人的話，他的目的是統一這個分裂的王國
            </p>
            <p>
                我們的王國之所以分裂，就是因為他將我們最重要的法典偷走了，為了保護剩餘的寶物而分裂成了不同國家
            </p>
            <p>
                我希望你可以擊敗商人，並且拯救這個王國。將你所知道的一切告訴商人並且擊敗他吧！
            </p>
            <p>祝福你<br />國王</p>
        </div>
    </v-container>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");

.letter-container {
    background-color: #f4e8c1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background-image: url("/images/old.jpeg"); /* 書信背景圖 */
    background-size: cover;
}

.letter-content {
    padding: 20px;
    border: 2px solid #d3c1a1;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8); /* 透明度 */
    width: 100%;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h1,
p {
    margin: 0 0 20px;
}

h1 {
    font-size: 2em;
    text-align: center;
}

p {
    font-size: 1.2em;
    line-height: 1.5;
    text-align: justify;
}
</style>
