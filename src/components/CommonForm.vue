<template>
    <el-form ref="form" label-width="100px" :model="form" :inline="inline">
        <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
            <el-input :placeholder="'请输入' + item.label" v-model="localForm[item.model]"> </el-input>
        </el-form-item>
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>

<script>
export default{
    name:'CommonForm',
    props:{
        formLabel: Array,
        form: Object,
        inline: Boolean 
    },
    data(){
        return{
            localForm: this.form,
        }
        
    },
    watch:{
        form:{
            handler(val){
                this.localForm = val
            },
            immediate:true,
            deep:true,
        },
    },
}
</script>
