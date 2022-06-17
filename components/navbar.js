let navbar =()=>{
    return `
    <div id="top_div">
    <p class="top_para">Delivering in Mumbai and Delhi | Same day delivery!</p>
</div>
<div id="navbar">
    <div id="nav1">
        <p><a href="" id="navshop">shop</a></p>
        <p><a href="" id="navlearn">learn</a></p>
        <p><a href="" id="navgrow">grow</a></p>
    </div>
    <div id="nav2">
        <a href="index.html"><img id="navlogo" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt=""></a>
    </div>
    <div id="nav3">
        <img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png" style="height:30px ;width:30px;">
        <p id="navlocation">Mumbai</p>
        <a href=""><img src="./logos/search_50px.png" style="height: 25px ;width:25px;"></a>
        <button id="user-icon"><img src="./logos/user_50px.png" style="height: 25px ;width:25px;"></button>
        <a href="../cart.html" id="cart-item"><img src="./logos/shopping_bag_50px.png"style="height: 25px ;width:25px;"></a>
    </div>
</div>
<div id="shop">
    <div id="shop1">
        <p><a href="../allfruit.html">all fruits</a></p>
        <p><a href="../fresh.html">fresh cuts</a></p>
        <p><a href="../combos.html">fruits combos</a></p>
        <p><a href="../gifts.html">gifts by kimaye</a></p>
        <p><a href="">grapes family by kimaye</a></p>
        <p><a href="">return and replacement</a></p>
        <p><a href="">fruits x subscription</a></p>
        <p><a href="">community buying</a></p>
    </div>
</div>
<div id="learn">
    <div id="learn1">
        <p><a href="">our story</a></p>
        <p><a href="">why kimaye</a></p>
        <p><a href="">tracebility</a></p>
        <p><a href="">beyond fruits</a></p>
    </div>
</div> 

<div class="auth">
    <div class="">
        <i class="bi bi-x-lg" id="nav-close"></i>
        <div class="content logactive">
            <h3>SIGN IN</h3>
            <form>
                <label for="">Email address<sup>*</sup></label><br>
                <input type="email" id="login-mail"><br><br>
                <label for="">Password<sup>*</sup></label><br>
                <input type="password" id="login-pass"><br><br>
                <p class="forgot">Forgot your Password?</p>
            </form>
            <button id="login-btn">LOGIN</button><br>
            <a href="https://www.facebook.com/" target="blank" class="fb-login">Sign in with Facebok</a><br>
            <a href="https://myaccount.google.com/" target="blank" class="google-login">Sign in with Google</a><br>
            <h5>No account yet?</h5>
            <p class="desc">Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p><br>
            <button id="create-acc">Create an Account</button>
        </div>
        <div class="reg regactive">
        <i class="bi bi-arrow-left"></i>
            <h3>SIGN UP</h3>
            <form>
                <label for="">First Name</label><br>
                <input type="text" id="f-name"><br><br>
                <label for="">Last Name</label><br>
                <input type="text" id="l-name"><br><br>
                <label for="">Email address<sup>*</sup></label><br>
                <input type="email" id="signup-mail"><br><br>
                <label for="">Password<sup>*</sup></label><br>
                <input type="password" id="signup-pass"><br><br>
            </form>
            <button id="reg-btn">REGISTER</button><br>
            <h5>No account yet?</h5><br>
            <p class="desc1">Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p><br>

        </div>
    </div>
</div>

`;
};



export default navbar;