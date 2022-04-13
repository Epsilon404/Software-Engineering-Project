<template>
    <div class="manage">
        <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
            <common-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form">
            </common-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">+ 新增</el-button>
            <common-form :formLabel="formLabel" :form="searchFrom" :inline="true" ref="form">
            <el-button type="primary" @click="getList(searchFrom.keyword)">搜索</el-button>
            </common-form>
           
        </div>
        <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList()" @edit="editUser" @delete="deleteUser">
        </common-table>
    </div>
</template>

<script>
import CommonForm from '../../src/components/CommonForm.vue'
import CommonTable from '../../src/components/CommonTable.vue'
import { getUser } from '../../api/data'
export default{
    name:'UserPage',  
    components: {
        CommonForm,
        CommonTable
    },
    data(){
        return{
            operateType: 'add',
            isShow:false,
            operateFormLabel:[{
                model:'name',
                label:'ID',
                type:'input'
            },
            {
                model:'account',
                label:'账号',
                type:'input'
            },
            {
                model:'password',
                label:'密码',
                type:'input'
            }
            //可能还得加傻逼头像
            ],
            operateForm:{
                name:'',
                account:'',
                password:''
            },
            formLabel:[ 
                {
                model:"keyword",
                label:'',
                type:'input'
                },
            ],
            searchFrom:{
                keyword:''
            },
            tableData:[],
            tableLabel:[
                {
                    prop: "name",
                    label: "ID"
                },
                {
                    prop: "account",
                    label: "账号",
                    width: 320
                },
                {
                    prop: "password",
                    label: "密码",
                    width: 320
                },
            ],
            config:{
                page: 1,
                total: 30
            }
        }

    },
    methods:{
        confirm(){
            if(this.operateType === 'edit'){
                this.$http.post('/UserPage/edit', this.operateForm). then(res =>{
                    console.log(res)
                    this.isShow=false
                    this.getList()
                })
            }else{
                this.$http.post('/UserPage/add', this.operateForm). then(res =>{
                    console.log(res)
                    this.isShow=false
                    this.getList()
                })
            }
        },
        addUser(){
            this.isShow = true
            this.operateType = 'add'
            this.operateForm = {
                name:'',
                account:'',
                password:''
            }
        },
        editUser(row){
            this.operateType = 'edit'
            this.isShow= true
            this.operateForm = {...row}
        },
        deleteUser(row){
            this.$confirm("确定要删除该用户吗？", "提示", {confitmButtonText: "确认", cancelButtonText: "取消", type: "warning"}).then(
                ()=>{const id= row.id 
                this.$http.post("/UserPage/delete", 
                {params:{ id }
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    this.getList()
                })
                
            })

        },
        getList( name = ''){
            this.config.loading = true
            name ? (this.config.page = 1) : ''
            getUser({page: this.config.page, name}).then(res =>{
                console.log(res, 'res')
                this.tableData = res.list.map(item =>{return item})
                this.config.total=res.count
                this.config.loading=false
            })
        },
    },
    created(){
        this.getList()
    }

}

</script>
<style lang="less" scoped>
.manage-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>