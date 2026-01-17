let container = document.getElementsByClassName('container')
        let name = document.getElementById('name')
        let mail = document.getElementById('mail')
        let pass = document.getElementById('pass')
        let sign = document.getElementById('sign_btn')

        document.getElementById('signup-form').addEventListener('submit', function(e){
            e.preventDefault();  
            sign_event();
        });


        document.getElementById('login-btn').addEventListener('click', () => {
            window.location.href = "login.html";
        })

        function sign_event(){
            let users = JSON.parse(localStorage.getItem("users")) || [];
            
            let user_dup = users.some(u => u.username === name.value);
            let exists = users.some(u => u.email == mail.value);

            if(exists){
                alert("E-Mail Already exists please try another email or try Logging in.");
                return;
            }

            if(user_dup){
                alert("The Username have been already taken. Try different Username.");
                return;
            }

            let user = {
            id : Date.now(),
            username : name.value,
            email : mail.value,
            password : pass.value
        }

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        name.value = "";
        pass.value = "";
        mail.value = ""
        
        alert("Success!!!");
        window.location.href = "login.html"
        }