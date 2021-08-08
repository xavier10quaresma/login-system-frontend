<template>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong> <slot></slot> </strong>
        <button type="button" @click="closeAlert" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    
</template>

<script>
export default {
    name: 'AlertComponent',
    methods: {
        closeAlert() {
            this.$store.commit('setErrorExist', false)
        }
    }
}
</script>