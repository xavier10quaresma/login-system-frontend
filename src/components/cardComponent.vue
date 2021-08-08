<template>
    <div class="row" style="height: 90vh">
        <div class="m-auto" :class="colSize">
            <div class="card backGradient">
                <div class="card-body">
                    
                    <!-- Logo Image -->
                    <router-link to="/">
                        <img class="img-fluid float-right mt-n5" style="height:40px" src="../assets/icone-lecdt.svg" alt="Logo Wizoom">
                    </router-link>
                    
                    <!-- Main title -->
                    <div class="text-center text-white mt-4 mb-4">
                        <h5>Teste dos</h5>
                        <h1 class="mt-n2 fontMaster">Mestres</h1>
                    </div>

                    <!-- Slots here -->
                    <slot></slot>
                    
                </div>
            </div>                    
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    computed: {
        colSize() {
            return this.$store.state.colSize
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: fontTitle;
    src: url(../assets/fonts/cc-monster-master.woff);
}

.fontMaster {
    font-family: fontTitle;
}

.backGradient {
    background-image: linear-gradient(to right, #3c5b9e, #27478b, #1c315f);
    border-radius: 20px;
}
</style>