<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
    import videojs from 'video.js';
    import "video.js/dist/video-js.min.css"

    export default {
        name: "VideoPlayer",
        props: {
            options: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                player: null
            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        },
        methods: {
            init() {
                this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                    console.log('onPlayerReady', this);
                })
            }
        }
    }
</script>
