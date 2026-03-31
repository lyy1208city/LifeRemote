// index.js
function renderIndex() {
    const user = window.loadUser();
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <!-- Top Bar -->
        <div class="top-bar fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-[92%] max-w-7xl mx-auto px-6 py-4 rounded-3xl text-white shadow-2xl">

            <!-- 右側金幣 + 個人檔案 -->
            <div class="flex flex-wrap items-center gap-3 md:gap-6">
                <div class="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-3xl">
                    <span class="text-3xl">💰</span>
                    <span id="moneyDisplay" class="font-mono font-bold text-2xl">${user.money}</span>
                </div>
                <div class="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-3xl">
                    <span class="text-3xl">XP</span>
                    <span id="xpDisplay" class="font-mono font-bold text-2xl">${user.xp}</span>
                </div>
                <button onclick="goToProfile()" 
                        class="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-3xl text-lg font-medium transition-all active:scale-95">
                    <span class="text-3xl">👤</span>
                    <span class="font-medium">個人檔案</span>
                </button>
            </div>
        </div>

        <!-- 主島嶼區域 -->
        <div class="relative mx-auto mt-24 island-stage">
            
            <!-- 中央海洋 -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-96 md:h-96 bg-[#3b8cff] rounded-full ocean shadow-[0_0_80px_#3b8cff,inset_0_30px_40px_rgba(255,255,255,0.3)] flex items-center justify-center border-[14px] border-white/30">
                <div class="text-center">
                    <div class="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">🌊</div>
                    <div class="text-white/90 text-base md:text-xl font-bold tracking-widest mt-1">LifeRemote Hub</div>
                </div>
            </div>

            <!-- 橋樑 + 三座島嶼 SVG 容器 -->
            <svg width="860" height="620" class="absolute inset-0 pointer-events-none" viewBox="0 0 860 620" xmlns="http://www.w3.org/2000/svg">
                <!-- 發光橋樑 1 (公司 → 中央) -->
                <path id="bridge1" class="bridge" d="M210 220 Q 310 340 390 390" stroke="#f0f0ff" stroke-width="18" stroke-linecap="round" fill="none"/>
                <!-- 發光橋樑 2 (銀行 → 中央) -->
                <path id="bridge2" class="bridge" d="M650 220 Q 550 340 470 390" stroke="#f0f0ff" stroke-width="18" stroke-linecap="round" fill="none"/>
                <!-- 發光橋樑 3 (學校 → 中央) -->
                <path id="bridge3" class="bridge" d="M430 510 Q 430 420 430 390" stroke="#f0f0ff" stroke-width="18" stroke-linecap="round" fill="none"/>
            </svg>

            <!-- 公司島 -->
            <div onclick="goToProfileWithMode('company')" 
                 class="island-3d absolute left-[12%] top-[22%] w-32 h-36 md:w-48 md:h-52 bg-gradient-to-b from-[#7cffb8] via-[#4ade80] to-[#e8b38f] rounded-[42px] cursor-pointer flex flex-col items-center justify-center border-8 border-white/70 overflow-hidden">
                <div class="w-28 h-20 md:w-40 md:h-28 bg-[#4ade80] rounded-3xl mt-3 flex items-center justify-center text-5xl md:text-7xl shadow-inner">🏢</div>
                <div class="mt-3 md:mt-4 text-xl md:text-3xl font-bold text-white drop-shadow-md">公司</div>
                <div class="absolute top-4 left-4 md:top-6 md:left-6 bg-white text-emerald-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-3xl shadow">7日</div>
            </div>

            <!-- 銀行島 -->
            <div onclick="goToProfileWithMode('bank')" 
                 class="island-3d absolute right-[12%] top-[22%] w-32 h-36 md:w-48 md:h-52 bg-gradient-to-b from-[#7cffb8] via-[#4ade80] to-[#e8b38f] rounded-[42px] cursor-pointer flex flex-col items-center justify-center border-8 border-white/70 overflow-hidden">
                <div class="w-28 h-20 md:w-40 md:h-28 bg-[#4ade80] rounded-3xl mt-3 flex items-center justify-center text-5xl md:text-7xl shadow-inner">🏦</div>
                <div class="mt-3 md:mt-4 text-xl md:text-3xl font-bold text-white drop-shadow-md">銀行</div>
                <div class="absolute top-4 right-4 md:top-6 md:right-6 bg-white text-cyan-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-3xl shadow">7日</div>
            </div>

            <!-- 學校島 -->
            <div onclick="goToProfileWithMode('school')" 
                 class="island-3d school-island absolute left-1/2 bottom-[18%] -translate-x-1/2 w-32 h-36 md:w-48 md:h-52 bg-gradient-to-b from-[#7cffb8] via-[#4ade80] to-[#e8b38f] rounded-[42px] cursor-pointer flex flex-col items-center justify-center border-8 border-white/70 overflow-hidden">
                <div class="w-28 h-20 md:w-40 md:h-28 bg-[#4ade80] rounded-3xl mt-3 flex items-center justify-center text-5xl md:text-7xl shadow-inner">🏫</div>
                <div class="mt-3 md:mt-4 text-xl md:text-3xl font-bold text-white drop-shadow-md">學校</div>
                <div class="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-violet-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-3xl shadow">7日</div>
            </div>
        </div>

        <!-- 漂浮雲朵 -->
        <div class="absolute top-12 left-10 text-7xl opacity-30 cloud">☁️</div>
        <div class="absolute top-28 right-20 text-6xl opacity-30 cloud" style="animation-delay: 6s;">☁️</div>
        <div class="absolute top-16 left-1/3 text-5xl opacity-30 cloud" style="animation-delay: 11s;">☁️</div>
        
        <!-- 星星 -->
        <div class="absolute top-24 left-1/4 text-2xl sparkle">✨</div>
        <div class="absolute top-36 left-1/3 text-xl sparkle" style="animation-delay: 0.7s;">✨</div>
        <div class="absolute top-20 right-1/4 text-3xl sparkle" style="animation-delay: 1.4s;">✨</div>
        <div class="absolute bottom-1/4 left-1/4 text-2xl sparkle" style="animation-delay: 2.1s;">✨</div>

        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <button onclick="clearRecord()"
                    class="bg-red-500/90 hover:bg-red-400 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-2xl transition-all active:scale-95">
                清除記錄
            </button>
        </div>

    `;
}

function goToProfileWithMode(mode) {
    window.location.href = `profile.html?mode=${mode}`;
}

function goToProfile() {
    window.location.href = 'profile.html';
}

function claimCoins() {
    const user = window.userData;
    user.money += 50;
    window.saveUser();
    document.getElementById('moneyDisplay').textContent = user.money;
    const banner = document.querySelector('.bg-gradient-to-r');
    banner.style.transform = 'scale(0.95)';
    setTimeout(() => banner.style.transform = 'scale(1)', 180);
}

function clearRecord() {
    const user = window.userData;
    user.xp = 0;
    user.money = 0;
    window.saveUser();
    const xpDisplay = document.getElementById('xpDisplay');
    const moneyDisplay = document.getElementById('moneyDisplay');
    if (xpDisplay) xpDisplay.textContent = user.xp;
    if (moneyDisplay) moneyDisplay.textContent = user.money;
}

// 啟動
window.onload = renderIndex;