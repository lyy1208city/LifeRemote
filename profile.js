// profile.js
function renderProfile() {
    const user = window.loadUser();
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    const content = document.getElementById('profileContent');
    content.innerHTML = `
        <div class="max-w-4xl mx-auto px-6 py-8">
            <div class="flex flex-col gap-6 md:flex-row md:justify-between md:items-center mb-10">
                <div class="flex items-center gap-3">
                    <div class="text-4xl">👤</div>
                    <h1 class="text-4xl font-bold">個人檔案</h1>
                </div>
                <button onclick="goHome()" 
                        class="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-7 py-4 rounded-3xl text-xl font-medium transition-all">
                    <span class="text-3xl">🏠</span>
                    <span>返回首頁</span>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- 左：資料 -->
                <div class="card bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/30">
                    <div class="flex items-center gap-6 mb-8">
                        <img id="userIcon" src="${user.icon}" alt="avatar" class="w-28 h-28 rounded-2xl object-cover ring-4 ring-white/40">
                        <div>
                            <div id="userName" class="text-4xl font-bold">${user.name}</div>
                            <div class="flex gap-8 mt-4 text-lg">
                                <div>XP <span id="xp" class="font-mono font-bold">${user.xp}</span></div>
                                <div>💰 <span id="money" class="font-mono font-bold">${user.money}</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右：QR Code -->
                <div class="card bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 flex flex-col">
                    <button onclick="showQR()" 
                            id="qrBtn"
                            class="flex-1 bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 text-2xl font-bold py-6 rounded-3xl transition-all active:scale-95 flex items-center justify-center gap-4">
                        📱 出示 QR code
                    </button>
                    
                    <div id="qrContainer" class="hidden mt-8 flex flex-col items-center">
                        <img id="qrImage" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&amp;data=LifeRemote-User-Tom-12345" alt="QR Code" class="rounded-2xl shadow-2xl">
                        <p class="text-sm text-white/70 mt-4">掃描後 3 秒自動執行任務</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 彈窗 -->
        <div id="modal" onclick="if(event.target.id==='modal')hideModal()" class="hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div onclick="event.stopImmediatePropagation()" class="bg-white text-gray-900 rounded-3xl px-10 py-8 max-w-md text-center card">
                <div id="modalIcon" class="text-7xl mx-auto mb-4"></div>
                <div id="modalTitle" class="text-3xl font-bold mb-2"></div>
                <div id="modalText" class="text-xl text-gray-600"></div>
                <button onclick="hideModal()" class="mt-8 bg-gray-900 text-white px-10 py-4 rounded-3xl text-lg font-medium">確定</button>
            </div>
        </div>
    `;
}

function showQR() {
    document.getElementById('qrContainer').classList.remove('hidden');
    document.getElementById('qrBtn').classList.add('opacity-40', 'pointer-events-none');
    
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        const user = window.userData;

        if (mode === 'company') {
            user.xp += 10;
            showModal('🎉 你成功找到工作！', `+10 XP<br>目前 XP：${user.xp}`, '🧳');
        } else if (mode === 'bank') {
            user.money += 200;
            showModal('🏦 你成功存入 200！', `+200 元<br>目前存款：${user.money}`, '💰');
        } else if (mode === 'school') {
            user.xp += 5;
            showModal('📚 你成功學習新技能！', `+5 XP<br>目前 XP：${user.xp}`, '🎓');
        } else {
            showModal('📊 目前狀態', `XP：${user.xp}<br>存款：${user.money}`, '📈');
        }
        
        window.saveUser();
        // 更新畫面
        document.getElementById('xp').textContent = user.xp;
        document.getElementById('money').textContent = user.money;
    }, 3000);
}

function showModal(title, text, icon) {
    document.getElementById('modalIcon').innerHTML = icon;
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalText').innerHTML = text;
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function goHome() {
    window.location.href = 'index.html';
}

// 啟動
window.onload = renderProfile;