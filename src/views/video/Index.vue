<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(v, index) in videos" :key="index" style="margin-bottom: 20px">
                <router-link :to="`/video/${v.hash_id}`">
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="`https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png`" class="image">
                        <!--                    <img :src="v.poster">-->
                        <div style="padding: 14px;white-space: nowrap; line-height: 1.5; overflow: hidden; text-overflow: ellipsis;">
                            <el-tooltip placement="top">
                                <div slot="content">{{ v.title }}</div>
                                <span>{{ v.title }}</span>
                            </el-tooltip>
                        </div>
                        <el-row :gutter="20" style="padding-bottom: 20px" justify="space-around" type="flex">
                            <el-col :span="12"><i class="el-icon-view"></i>{{ v.view }}</el-col>
                            <el-col :span="12"><i class="el-icon-star-off"></i>{{ v.star }}</el-col>
                        </el-row>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="paginate.perPage"
                @current-change="fresh"
                :total="paginate.total">
        </el-pagination>
    </div>
</template>

<script>
    import {index} from "../../api/video";

    export default {
        data() {
            return {
                paginate: {
                    page: 1,
                    perPage: 12,
                    total: 0
                },
                videos: []
            }
        },
        mounted() {
            this.fresh(this.paginate.page, this.paginate.perPage)
        },
        methods: {
            fresh(page, perPage = this.paginate.perPage) {
                console.log(page);
                index(page, perPage).then(res => {
                    console.log(res.data);
                    this.videos = res.data
                    this.paginate.total = res.meta.total
                })
            }
        }
    }
</script>
