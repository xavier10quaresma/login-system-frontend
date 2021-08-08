<template>
    <div id="app">
        <div class="container-fluid">
            <img src="./assets/background-lecdt.png" id="bg"  alt="Full Screen Background Image">   
            <div class="row">
                <div class="col-lg-12">
                    <img src="./assets/ninja-lecdt-1.png" class="img-fluid float-left" id="imageBg1">
                    <img src="./assets/ninja-lecdt-2.png" class="img-fluid float-right" id="imageBg2">
                </div>
            </div>
            
            <!-- Login / Register -->
            <router-view/>

        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    
}
</script>

<style>

.inputButton, .fontMaster {
    font-family: fontTitle;
}
.loginCard {
    background-image: url('./assets/sombra-login-lecdt.png');
}


.inputField {
    background-image: linear-gradient(to right, #4b659ea9, #5574b6a9);
    border-radius: 7px;
    opacity: 0.5;
    font-size: 17px;
    color: black

}

.inputField:focus {
    color: #000000;
    opacity: 1;
}

.inputField::placeholder {
    color: #0000008f;
    opacity: 1;
}

.inputButton {
    border-radius: 7px;
    font-size: 24px;
}

.card-img-top {
    flex-grow: 1;
    object-fit: fill;
}
.card-body {
    flex-grow: 0;
}

.backGradient {
    background-image: linear-gradient(to right, #3c5b9e, #27478b, #1c315f);
    border-radius: 20px;
}
@font-face {
    font-family: fontTitle;
    src: url(./assets/fonts/cc-monster-master.woff);

}

.fontMaster {
    font-family: fontTitle;
}

@font-face {
    font-family: fontBody;
    src: url(./assets/fonts/poppins-semibold.woff);
}

#app {
    font-family: fontBody;
}

#bg {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -2;
}
#imageBg1 {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: -1;
}

#imageBg2{
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    z-index: -1;
}
</style>