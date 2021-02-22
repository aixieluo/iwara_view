<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="18">
                <video-player v-if="videoOptions.sources.length > 0" ref="video" :options="videoOptions"></video-player>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {show} from "../../api/video";
    import VideoPlayer from "../../components/Video.vue"

    export default {
        components: {
          VideoPlayer
        },
        data() {
            return {
                videoOptions: {
                    controls: true,
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    fluid: true,
                    preload: 'auto',
                    width: 900,
                    sources: []
                }
            };
        },
        mounted() {
            this.getVideo()
        },
        methods: {
            getVideo() {
                show(this.$route.params.hash).then(res => {
                    this.videoOptions.sources = res.data.map((item => {
                        return {
                            src: `https:${item.uri}`,
                            type: item.mime
                        }
                    }))
                })
            }
        }
    }
</script>
