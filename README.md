## birthday-mobile

### 说明
css代码确实很乱(ಡωಡ)，简单改了一下，电脑和手机都可以正常排版显示(现在不能了)，iPad显示图片可能会遮挡文字，没有作特别适配，估计也很少有人会拿iPad去扫码看网页....

### 使用前提

#### 修改密码
 在当前目录下，有js/index.js文件：
 ```javascript
 //修改此处的123,123即可修改登录的用户名和密码
 if(userName=="123" &&  pwd=="123"){
   event.preventDefault();
   $('form').fadeOut(500);
   $('.wrapper').addClass('form-success');
   setTimeout(function(){location.href="BirthdayCake.html";},2000);
 }
 ```


```




## <a id="important" style="color: #000;">注意点</a>

Google Chrome浏览器更新后会拦截自动播放音乐，暂时无解（有没有我也不知道，没研究(ಡωಡ)）

其他Chrome内核浏览器无影响，如新版Edge

Firfox未测试

**手机屏幕大小不同，建议根据实际屏幕大小修改Memories.html页面，防止图片遮挡文字。**