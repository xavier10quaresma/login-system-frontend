<template>
    <div>
        <card-component>

            <div class="text-center">
                <h1 class="">Rota não encontrada !!! 😭😭</h1>
                <hr>
                <h5 class="text-info">Click no Logo acima. 🥳🙌 </h5>
            </div>

        </card-component>
    </div>
</template>

<script>
import cardComponent from '../components/cardComponent.vue'
export default {
    components: { cardComponent },
    created() {
        this.$store.state.colSize = 'col-6'
    },
}
</script>