let mail = document.getElementById('mail')
        let pass = document.getElementById('pass')
        let login = document.getElementById('login_btn')

        login.addEventListener('click', login_event);

        document.getElementById('signup_btn').addEventListener('click', () => {
            window.location.href = "signup.html";
        })

        function login_event(){
            let users = JSON.parse(localStorage.getItem("users")) || [];

            let user = users.find(u => u.email === mail.value && u.password === pass.value);

            if(!user){
                alert("Invalid Credentials! Please check your Email or Password.");
                return;
            }

            localStorage.setItem("currentuser", JSON.stringify(user));

            window.location.href = "dashboard.html";
        }
