<template>
    <div>
        <com-header></com-header>
        <router-view/>
        <com-footer></com-footer>
    </div>
</template>
<script>
import ComHeader from '@/components/Header'
import ComFooter from '@/components/Footer'
export default {
    components:{
        ComHeader,
        ComFooter,
    },
    data() {
        return { }
    }
}
</script>
<style lang="less" scoped>
// /deep/ .nav-item {
//     display: none;
// }
</style>