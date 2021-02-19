window.playableSDK.addEventListener('visibilityChange', init);function init(state) {
    if(state.viewable) {
    //页面可见
    $(function(){

        function daojishi(){
        var minute,second;//时 分 秒
                minute=0;
                second=30;//初始化
                var millisecond=00;//毫秒
                var int;
                start();
                function Reset()//重置
                {
                  window.clearInterval(int);
                  millisecond=minute=second=0;
                  document.getElementById('timetext').value='00:00:00';
                }
            
                function start()//开始
                {
                  int=setInterval(timer,10);
                }
            
                function timer()//计时
                {
                  millisecond=millisecond-1;
                  
                  if(millisecond<0)
                  {
                    millisecond=99;
                    second=second-1;
                   
                  }
                  if(second==0 && millisecond==0)
                  {
                    second=0;
                    window.clearInterval(int);
                  }
            
                  // if(minute>=60)
                  // {
                  //   minute=0;
                  //   hour=hour+1;
                  // }
                  document.getElementById('timetext').innerText=minute+':'+second+':'+millisecond;
                  
                 
                  if(second>=10 && millisecond<=10){
                    document.getElementById('timetext').innerText="0"+minute+':'+second+':'+'0'+millisecond;
                  }
                  if(second<=10 && millisecond>=10) {
                    document.getElementById('timetext').innerText="0"+minute+':'+'0'+second+':'+millisecond;
                  }
                  if(second>=10 && millisecond>=10) {
                    document.getElementById('timetext').innerText='0'+minute+':'+second+':'+millisecond;
                  }
                  if(second<10 && millisecond<10) {
                    document.getElementById('timetext').innerText="0"+minute+':'+'0'+second+':'+'0'+millisecond;
                  }
                }
            
                function stop()//暂停
                {
                  window.clearInterval(int);
                }
            }
    
        var b = document.getElementById('b');
        var wx = document.getElementById('wx');
        var succ = document.getElementById('succ');

        var currtime =0;
        
        var i=1;
        var timer = window.setInterval(function(){
            // $(".a"+i).show();
            
            wx.setAttribute("src", "audio/wx.mp3");
            wx.play();
            $(".a"+i).removeClass("hide");
            i++;
            if(i>3){
              wx.setAttribute("src", "audio/wx.mp3");
              wx.pause();
              $(".dianji").removeClass("hide");
              $(".hand").removeClass("hide");
              window.clearInterval(timer);
          }
            
        },600);
    
       
    
        $(".message2,.dianji,.hand").one("click", a);
        function a(){
          clearTimeout(timer1);
          if(new Date() - currtime>2000){
          $(".dianji").addClass("hide");
          $(".hand").addClass("hide");
          // $(".page1").hide();
          $(".page2").show();
          succ.setAttribute("src", "audio/succ.mp3");
          succ.play();
          setTimeout(function(){
              $(".dianji2").removeClass("hide");
              $(".hand2").removeClass("hide");
          },500)
        }
      }
    
        $(".page2").one("click",function(){
    
            clearTimeout(timer2);
            
            $(".dianji2").addClass("hide");
            $(".hand2").addClass("hide");
            $(".circle").addClass("open");
    
            b.setAttribute("src", "audio/b.mp3");
            b.play();
    
            $(".circle").on("animationend",function(){
                $(".circle").removeClass("open");
                $(".page1").hide();
                $(".page2").hide();
                $(".page3").show();
                daojishi();
            })
        })
    
        var timer1=setTimeout(function(){
          // $(".message2,.dianji,.hand").off();
            // $(".page1").hide();
            $(".message2,.dianji,.hand").off("click", a);
            $(".dianji").addClass("hide");
            $(".hand").addClass("hide");
            $(".page2").show();
            succ.setAttribute("src", "audio/succ.mp3");
            succ.play();
            setTimeout(function(){
                $(".dianji2").removeClass("hide");
                $(".hand2").removeClass("hide");
            },500)
        },5000)
    
        var timer2=setTimeout(function(){
            $(".page2").off("click");

            $(".dianji2").addClass("hide");
            $(".hand2").addClass("hide");
            $(".circle").addClass("open");
    
            b.setAttribute("src", "audio/b.mp3");
            b.play();
    
            $(".circle").on("animationend",function(){
                $(".circle").removeClass("open");
                $(".page1").hide();
                $(".page2").hide();
                $(".page3").show();
                daojishi();
            })
        },10000)
    
        $(".di,.dianji3,.hand3").on("click",function(){
            $(".dianji3").hide();
            $(".hand3").hide();
        })
    
    });
     } else {
   
    }
      
    window.playableSDK.removeEventListener('visibilityChange', init);
   }


