let formReg = document.getElementById('formReg');
let userReg = document.getElementById('emailReg');
let passwordReg = document.getElementById('passwordReg');
let notifMassage = document.getElementById('notif');

if (formReg) {
    formReg.addEventListener('submit', function (event) {
        event.preventDefault();
        let valueUserReg = userReg.value.trim();
        let valuePasswordReg = passwordReg.value.trim();
        
        if (valueUserReg === '' || valuePasswordReg === '') {
            notification("Maydonlarni to`ldiring !!!", "red", "rgba(255, 0, 0, 0.507)");
            return;
        }
        let existUser = users.find(user => user.name === valueUserReg);
        if (existUser) {
            notification("Bunday foydalanuvchi mavjud!", "yellow", "rgba(255, 255, 0, 0.507)");
            return;
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let newUser = {
            id: new Date().getTime(),
            name: valueUserReg,
            password: valuePasswordReg,
        };
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        notification("Muvoffaqiyatli ro`yxatdan o`tdinggiz", "green", "rgba(0, 128, 0, 0.507)");
        setTimeout(() => {
            window.location = './admin.html';
        }, 3500);
    });
}
let formLogin = document.getElementById('formLogin');
let usernameLogin = document.getElementById('usernameLogin');
let passwordLogin = document.getElementById('passwordLogin');

if (formLogin) {
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        let valueUserLogin = usernameLogin.value.trim();
        let valuePasswordLogin = passwordLogin.value.trim();

        if (valuePasswordLogin === '' || valueUserLogin === '') {
            notification("Maydonlarni to`ldiring !!!", "red", "rgba(255, 0, 0, 0.507)");    
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [] 
        if (users.length === 0) {
            notification("Bunday foydalanuvchi yo`q!", "yellow", "rgba(255, 255, 0, 0.507)");
            return;
        }

        let foundUser = users.find(user => user.name === valueUserLogin && user.password === valuePasswordLogin);

        if (foundUser) {
            notification("Xush kelibsiz!", "green", "rgba(0, 128, 0, 0.507)");
            setTimeout(() => {
                window.location = './admin.html';
            }, 3500);
        } else {
            notification("Login yoki parol xato!", "yellow", "rgba(255, 255, 0, 0.507)");
        }
    });
}


function notification(msg, color, bg) {
    notifMassage.textContent = msg;
    notifMassage.style.transition = "0.5s ease";
    notifMassage.style.top = "56px";
    notifMassage.style.border = `1px solid ${color}`;
    notifMassage.style.backgroundColor = `${bg}`;
    setTimeout(() => {
        notifMassage.style.transition = "0.5s ease";
        notifMassage.style.top = "-56px";
    }, 3000);
}