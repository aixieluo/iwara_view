<template>
    <div>
        <el-row :gutter="10" style="margin-bottom: 30px">
            <el-col :offset="2" :span="4">
                <el-button round @click="init">刷新</el-button>
            </el-col>
            <el-col :offset="3" :span="6">
                <el-alert
                        title="纯粹娱乐，请勿当真"
                        show-icon
                        type="warning">
                </el-alert>
            </el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :offset="2" :span="4">
                <div class="bg">
                    <div class="item-wrap">
                        <div class="item" v-for="(v, index) in gs" :key="index" @click="activeGs(index)">
                            <img v-if="v.active" :src="v.src">
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <el-row :gutter="10">
                    <el-col :span="1" v-for="v in history" :key="v">
                        <img class="item" :src="list[v]">
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="10" style="margin-top: 30px">
            <el-col :span="1" v-for="(v, index) in list" :key="index">
                <div>
                    <div v-if="rate[index]">
                        <!--                        <span>{{ index }} | </span>-->
                        {{ (rate[index].val/max*100).toFixed(3)+'%' }}
                    </div>
                    <img class="item" :src="v">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .bg {
        position: relative;
        width: 284px;
        height: 406px;
        background-image: url("http://game-a.granbluefantasy.jp/assets/img_low/sp/campaign/scratch/card/202103/scratch_base_39.jpg");
        background-repeat: no-repeat;
    }

    .item-wrap {
        position: absolute;
        top: 129px;
        left: 42px;
        right: 42px;
        bottom: 100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .item {
        padding: 3px;
        width: 46px;
        height: 46px;
    }

    .item img {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    export default {
        data() {
            return {
                list: [
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/30041.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/evolution/s/20014.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/evolution/s/20004.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/evolution/s/20005.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040094000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040100000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040084000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040098000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040080000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040090000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040185000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040225000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040205000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040261000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040056000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040003000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040306000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040311000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040203000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040202000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040330000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040327000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/summon/s/2040347000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040004600.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040502500.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040404300.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040105400.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040504300.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040108200.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040910000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040708700.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040809100.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040911500.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040112500.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040811800.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040612700.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040312900.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040418600.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040008700.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040207000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040108700.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040906400.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040410000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040309000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040014300.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040110600.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040211600.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040709000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040212700.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040213400.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040311600.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040812000.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040215300.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040020900.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/weapon/s/1040605900.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/normal/s/gem.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/203.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/11.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/12.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/13.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/14.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/15.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/16.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/3.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/2.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/npcaugment/s/1.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/30033.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/30032.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/30031.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/107.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/evolution/s/20403.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/evolution/s/20013.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/evolution/s/20003.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/138.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/79.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/59.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/article/s/2003.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/normal/s/2.jpg",
                    "http://game-a1.granbluefantasy.jp/assets/img_low/sp/assets/item/normal/s/5.jpg"
                ],
                gs: [],
                rate: [],
                max: 0,
                win: {},
                history: [],
            }
        },
        mounted() {
            let rs = [];
            for (let i = 0; i <= 78; i++) {
                if (i === 0) {
                    rs.push(3)
                } else if (i >= 1 && i <= 3) {
                    rs.push(5)
                } else if (i >= 4 && i <= 54) {
                    rs.push(10)
                } else if (i >= 55 && i <= 56) {
                    rs.push(30)
                } else if (i >= 57 && i <= 65) {
                    rs.push(50)
                } else if (i >= 66 && i <= 68) {
                    rs.push(40)
                } else if (i >= 69 && i <= 76) {
                    rs.push(100)
                } else if (i >= 77 && i <= 78) {
                    rs.push(500)
                }
            }
            this.max = eval(rs.join("+"))
            let carry = 0
            let _this = this
            rs.forEach(function (v) {
                _this.rate.push({
                    val: v,
                    min: carry + 1,
                    max: carry + v
                })
                carry += v
            });
            this.init();
        },
        methods: {
            init() {
                this.gs = [];
                for (let i = 1; i <= 9; i++) {
                    this.gs.push({src: null, active: false})
                }
                this.win = [];
                setTimeout(() => {
                    let win = this.gacha()
                    let other = this.other(win)
                    let arr = [win, win, win]
                    arr.push(...other)
                    arr.push(...other)
                    console.log(arr);
                    for (let i = 1; i < arr.length; i++) {
                        const random = Math.floor(Math.random() * (i + 1));
                        [arr[i], arr[random]] = [arr[random], arr[i]];
                    }
                    arr.forEach((v, index) => {
                        this.gs[index].src = this.list[v];
                        this.gs[index].index = v;
                    });
                }, 0)
            },
            gacha() {
                let random = Math.random() * this.max;
                let i = 0;
                this.rate.forEach(function (val, index) {
                    if (val.min <= random && val.max >= random) {
                        return i = index
                    }
                });
                return i
            },
            other(win) {
                let os = [this.gacha(), this.gacha(), this.gacha()];
                if (4 === (new Set([...os, win])).size) {
                    return os
                }
                return this.other(win);
            },
            activeGs(index) {
                if (this.gs[index].active) {
                    return
                }
                this.gs[index].active = true;
                let i = this.gs[index].index;
                if (!this.win[i]) {
                    this.win[i] = 1
                } else {
                    this.win[i]++
                }
                if (this.win[i] >= 3) {
                    this.gs.forEach(v => {
                        v.active = true
                    })
                    this.history.push(i)
                }
            }
        }
    }
</script>
