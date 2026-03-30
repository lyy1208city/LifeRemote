// data.js - 共用使用者資料（所有頁面都會讀取）
window.userData = window.userData || {
    name: "May",
    icon: "asset/icon.jpg",
    xp: 0,
    money: 0
};

// 從 localStorage 讀取最新資料
window.loadUser = function() {
    const saved = localStorage.getItem('lifeRemoteUser');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            window.userData = {
                name: window.userData.name,
                icon: window.userData.icon,
                xp: parsed.xp ?? window.userData.xp,
                money: parsed.money ?? window.userData.money
            };
        } catch (error) {
            localStorage.removeItem('lifeRemoteUser');
        }
    }
    return window.userData;
};

// 儲存資料
window.saveUser = function() {
    localStorage.setItem('lifeRemoteUser', JSON.stringify(window.userData));
};