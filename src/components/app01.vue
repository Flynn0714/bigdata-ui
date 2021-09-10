<template>
    <div>
        <el-alert>情迷</el-alert>
        <button @click.prevent="handleLink" value="HelloWorld" />
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        handleLink() {
            this.$router.push(redirect)
        }
    }
}
</script>