<template>
    <el-container style="height: 700px; border: 1px solid #eee">
        <el-header style="background-color:aquamarine; height: 50px ;font-size:35px">Student System</el-header>
        <el-container>
            <el-aside width="200px"> <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>Student Info</template>
                        <el-menu-item index="1-1">Class Management</el-menu-item>
                        <el-menu-item index="1-2">Student Management</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- form -->
                <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                    <el-form-item label="Name">
                        <el-input v-model="searchForm.name" placeholder="Please enter name"></el-input>
                    </el-form-item>
                    <el-form-item label="Gender">
                        <el-select v-model="searchForm.gender" placeholder="Please Select">
                            <el-option label="Male" value="0"></el-option>
                            <el-option label="Female" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-date-picker v-model="searchForm.date" type="daterange" range-separator="to" start-placeholder="Start Date"
                        end-placeholder="End Date">
                    </el-date-picker>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Search</el-button>
                    </el-form-item>
                </el-form>
                <el-divider></el-divider>
                <!-- table -->
                <el-table :data="searchForm" style="width: 100%">
                    <el-table-column prop="name" label="Name" width="180">
                    </el-table-column>
                    <el-table-column prop="image" label="Photo" width="180">
                        <template slot-scope="scope">
                            <img :src="scope.row.image" style="width: 100px; height: 100px" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="gender" label="Gender" width="180">
                        <template slot-scope="scope">
                        {{  scope.row.gender === 0 ? "male":"female"}} 
                        </template>
                    </el-table-column>
                    <el-table-column prop="position" label="Position" width="180">
                    </el-table-column>
                    <el-table-column prop="doj" label="Joined Date">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchForm: {
                name: '',
                gender: '',
                position: '',
                doj: '',
                date: [],
                doe: ''
            }
        }

    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    },
    mounted() {
        axios.get("https://raw.githubusercontent.com/burgger/htmlStudy/main/Heima/Vue/vue-project/public/data.json").then(res => {
            this.searchForm = res.data.data;
        })
    }
}
</script>

<style></style>