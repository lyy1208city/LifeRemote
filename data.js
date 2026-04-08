// data.js - 共用使用者資料（所有頁面都會讀取）
window.userData = window.userData || {
    name: "May",
    icon: "asset/icon.jpg",
    xp: 0,
    money: 0,
    focus: 10,
    stamina: 10,
    knowledge: 10,
    affinity: 10,
    social: 10,
    finance: 10,
    perseverance: 10,
    creativity: 10,
    luck: 10,
    charisma: 10,
    adaptability: 10,
    discipline: 10,
    empathy: 10,
    leadership: 10,
    communication: 10,
    problemSolving: 10,
    innovation: 10,
    action: 10
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
                money: parsed.money ?? window.userData.money,
                focus: parsed.focus ?? window.userData.focus,
                stamina: parsed.stamina ?? window.userData.stamina,
                knowledge: parsed.knowledge ?? window.userData.knowledge,
                affinity: parsed.affinity ?? window.userData.affinity,
                social: parsed.social ?? window.userData.social,
                finance: parsed.finance ?? window.userData.finance,
                perseverance: parsed.perseverance ?? window.userData.perseverance,
                creativity: parsed.creativity ?? window.userData.creativity,
                luck: parsed.luck ?? window.userData.luck,
                charisma: parsed.charisma ?? window.userData.charisma,
                adaptability: parsed.adaptability ?? window.userData.adaptability,
                discipline: parsed.discipline ?? window.userData.discipline,
                empathy: parsed.empathy ?? window.userData.empathy,
                leadership: parsed.leadership ?? window.userData.leadership,
                communication: parsed.communication ?? window.userData.communication,
                problemSolving: parsed.problemSolving ?? window.userData.problemSolving,
                innovation: parsed.innovation ?? window.userData.innovation,
                action: parsed.action ?? window.userData.action
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