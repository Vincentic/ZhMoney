function check2()
    {
        username=document.getElementById("username").value;
        password =document.getElementById("password").value;
        if (username=="" || password=="")
        {
            alert("用户名和密码不能为空");
            return false;
        }
        if (username=="admin"&& password=="admin") {
            alert("登录成功");
        }
        else{
            alert("登录失败");
        }
        if (username=="register"&& password=="register") {
            alert("注册成功");
        }
        else{
           alert("注册失败");
        }
        return true;
    }