const gifts = ["礼物1", "礼物2", "礼物3", "礼物4", "礼物5"];

function drawGift() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    const selectedGift = gifts[randomIndex];
    document.getElementById('result').innerText = `恭喜你抽中了：${selectedGift}！`;
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');
    setTimeout(() => {
        document.getElementById('letter').style.display = 'block';
        const giftList = document.getElementById('gift-list');
        giftList.innerHTML = gifts.map(gift => `<li>${gift}</li>`).join('');
    }, 500);  // 等待动画完成再显示信和礼物列表
}

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    music.play().catch(() => {
        console.log('Background music autoplay was prevented.');
        // 用户交互后播放音乐
        document.body.addEventListener('click', () => music.play(), { once: true });
    });
});
