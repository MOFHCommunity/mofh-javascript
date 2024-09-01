const query_string_vpscriptsjs = window.location.search;
const url_params_vpscriptsjs = new URLSearchParams(query_string_vpscriptsjs);
const mj_username = document.getElementById("lblUserNameTxt").innerHTML;

function get_page_info() {
    /* 
    * This code was written by SpookyKipper (https://github.com/SpookyKipper/) and Deveroonie (https://github.com/Deveroonie/)
    */ 	
    return url_params_vpscriptsjs.get('option');
}

function set_php_version(version) {
    /* 
    * This code was written by SpookyKipper (https://github.com/SpookyKipper/) and Deveroonie (https://github.com/Deveroonie/)
    */ 
    if (get_page_info() === "accountsettings") {
        const php_ver_choose_btn = document.querySelector("#content > div > table.table > tbody > tr:nth-child(29) > td:nth-child(2) > a");
        if (php_ver_choose_btn) {
            php_ver_choose_btn.parentNode.removeChild(php_ver_choose_btn);
        }
        const php_ver = document.querySelector("#content > div > table.table > tbody > tr:nth-child(29) > td:nth-child(2)");
        if (php_ver) {
            php_ver.innerHTML = version;
        }
    }
}

function set_ssl_page_text(text) {
    /* 
    * This code was written by SpookyKipper (https://github.com/SpookyKipper/) and Deveroonie (https://github.com/Deveroonie/)
    */ 
    if (get_page_info() === "sslconfigure") {
        const alert = document.querySelector("#content > div > div");
        if (alert) {
            alert.classList.remove('alert-warning');
            alert.classList.add('alert-info');

            const alert_logo = document.querySelector("#content > div > div > span");
            if (alert_logo) {
                alert_logo.classList.remove('glyphicon-exclamation-sign');
                alert_logo.classList.add('glyphicon-info-sign');
            }

            const alert_text = document.querySelector("#content > div > div > div");
            if (alert_text) {
                alert_text.innerHTML = text;
            }
        }
    }
}

function get_vp_logo_image() {
    return document.getElementById("imgLogo").src;
}

function set_vp_logo_image(image_url) {
    const logo = document.getElementById("imgLogo");
    if (logo) {
        logo.src = image_url;
    }
}

function set_element_details(k, u, d, a) {
    a.forEach(section => {
        section.items.forEach(item => {
            if (item.feature === k) {
                if (d === 'url') item.url = u;
                if (d === 'itemdesc') item.itemdesc = u;
                if (d === 'searchtext') item.searchtext = u;
            }
        });
    });
}

function hide_element_details(k, a) {
    a.forEach(section => {
        section.items.forEach(item => {
            if (item.feature === k) {
                const elem = document.getElementById(item.id);
                if (elem) {
                    elem.style.display = 'none';
                }
            }
        });
    });
}

function hide_sidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

function get_vp_username() {
    return document.getElementById("lblUserNameTxt").innerHTML;
}

function get_vp_version() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://panel.myownfreehost.net/xml-api/version.php');
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error('Request failed. Returned status of ' + xhr.status));
            }
        };
        xhr.send();
    });
}

function load_stylesheet(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
}
