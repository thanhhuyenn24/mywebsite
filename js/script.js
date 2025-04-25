/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";


/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;

// Kiểm tra xem có theme đã lưu không
if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    // Không có theme đã lưu - thiết lập mặc định là light
    $HTML.dataset.theme = "light";
    sessionStorage.setItem("theme", "light");
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);


/**
 * TAB
 */

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */[lastActiveTab] = document.querySelectorAll("[data-tab-content].active");
let /** {NodeElement} */[lastActiveTabBtn] = document.querySelectorAll("[data-tab-btn].active");

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /** {NodeElement} */ tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

        tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = tabContent;
        lastActiveTabBtn = this;
    });
});