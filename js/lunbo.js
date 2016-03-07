
        window.onload = function (){
            var banner = document.getElementById('banner');   
            var list  = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var animated = false;
            var interval = 3000;
            var timer;

            function showbutton(){
                for (var i = 0; i<buttons.length; i++) {
                    if(buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function animate(offset){   
                if (offset == 0) {
                    return ;
                }
                animated = true;
                var time = 300;//It is the total time of change one page
                var internal = 10;//The spilt of each change
                var speed = offset/internal;
                var newleft = parseInt(list.style.left) + offset;
                
                var go = function (){
                    if ((speed >0 && parseInt(list.style.left)< newleft)||(speed <0 && parseInt(list.style.left)> newleft)) 
                    {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go,internal);
                    }
                    else{
                        list.style.left = newleft + 'px';
                        if (newleft>-960) {
                            list.style.left = -2880  + 'px';
                        }
                        if (newleft<(-2880)) {
                            list.style.left = '-960px';
                        }
                        animated = false;
                    }
                }
                go();
            }
            
            
            next.onclick = function(){
                if(animated){
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else{
                     index += 1;
                }
                showbutton();
                animate(-960);
            }
            
            prev.onclick = function(){
                if(animated){
                    return;
                }
                if (index == 1) {
                    index  = 3;
                }
                else{
                    index -= 1;
                }
                showbutton();
                animate(960);
            }
            
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick= function(){
                    if(animated){
                        return;
                    }
                    if (this.className == 'on') {
                        return;
                    }
                    var myIndex = this.getAttribute('index');
                    var offset = -960 *(myIndex - index);
                    animate(offset);
                    index = myIndex;
                    showbutton();
                }
            }
            function play(){
                timer = setInterval(function(){
                    next.onclick();
                },interval);
            } 
            
            function stop(){
                clearInterval(timer);
            }


            banner.onmouseover = stop;
            banner.onmouseout = play;

            play();
        }