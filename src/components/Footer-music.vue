<template>
    <div id="footer-music">
        <div class="content">
            <div class="enterIcon">
                <div v-for="item in enterIconData" :key="item.id">
                    <span class="icon"></span>
                    <p>{{ item.val }}</p>
                </div>
            </div>
            <div class="service">
                <a v-for="item in service" :key="item.id" href="item.src">{{
                    item.val
                }}</a>
            </div>
            <div class="detalis">
                <p v-for="item in details" :key="item.id">
                    <template v-for="detail in item.temps">
                        <a
                            href="item.src"
                            v-if="detail.type == 'a'"
                            :key="detail.index"
                            >{{ detail.val }}</a
                        >
                        <span v-if="detail.type == 'span'" :key="detail.id">{{
                            detail.val
                        }}</span>
                    </template>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enterIconData: [
                { id: 1, val: "音乐开放平台" },
                { id: 2, val: "云村交易所" },
                { id: 3, val: "Amped Studio" },
                { id: 4, val: "用户认证" },
                { id: 5, val: "音乐交易平台" },
                { id: 6, val: "赞赏" },
                { id: 7, val: "视频激励" },
            ],
            service: [
                {
                    id: 1,
                    src: "https://st.music.163.com/official-terms/service",
                    val: "服务条款",
                },
                {
                    id: 2,
                    src: "https://st.music.163.com/official-terms/privacy",
                    val: "隐私政策",
                },
                {
                    id: 3,
                    src: "https://st.music.163.com/official-terms/children",
                    val: "儿童隐私政策",
                },
                {
                    id: 4,
                    src: "https://music.163.com/st/staticdeal/complaints.html",
                    val: "版权投诉",
                },
                { id: 5, src: "http://ir.music.163.com/", val: "投资者关系" },
                {
                    id: 6,
                    src: "https://music.163.com/ui/resource",
                    val: "广告合作",
                },
                {
                    id: 7,
                    src: "https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station",
                    val: "联系我们",
                },
            ],
            details: [
                {
                    id: 1,
                    temps: [
                        {
                            id: 1,
                            type: "a",
                            val: "廉正举报",
                            src: "https://jubao.163.com/",
                        },
                        {
                            id: 2,
                            type: "span",
                            val: "不良信息举报邮箱: 51jubao@service.netease.com",
                        },
                        { id: 3, type: "span", val: "客服热线：95163298" },
                    ],
                },
                {
                    id: 2,
                    temps: [
                        {
                            id: 1,
                            type: "span",
                            val: "互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198",
                        },
                        {
                            id: 2,
                            type: "a",
                            val: "粤B2-20090191-18  工业和信息化部备案管理系统网站",
                            src: "https://beian.miit.gov.cn/",
                        },
                    ],
                },
                {
                    id: 3,
                    temps: [
                        {
                            id: 1,
                            type: "sapn",
                            val: "网易公司版权所有©1997-2023",
                        },
                        {
                            id: 2,
                            type: "sapn",
                            val: "杭州乐读科技有限公司运营：",
                        },
                        {
                            id: 3,
                            type: "a",
                            val: "浙网文[2021] 1186-054号",
                            src: "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24498695788/9de7/9e78/fc8d/35d33543c69c9f4c5ac8aeb937217597.png",
                        },
                        {
                            id: 4,
                            type: "a",
                            val: " 浙公网安备 33010902002564号",
                            src: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
#footer-music {
    width: 100%;
    background: var(--footerBgc);
    display: flex;
    justify-content: center;
    .content {
        width: 1024px;
        height: 325px;
        .enterIcon {
            width: 100%;
            padding-top: 30px;
            display: flex;
            justify-content: space-around;
            height: 70px;
            text-align: center;
            p {
                font-size: 12px;
                margin-top: 5px;
            }
            span {
                display: inline-block;
                width: 45px;
                height: 45px;
                background-image: url(../assets/imgs/foot_enter.png);
                background-size: 220px;
                cursor: pointer;
            }
            & > div:nth-child(1) span {
                background-position: -170px -5px;
                &:hover {
                    background-position: -5px -115px;
                }
            }
            & > div:nth-child(2) span {
                background-position: -5px -170px;
                &:hover {
                    background-position: -60px -170px;
                }
            }
            & > div:nth-child(3) span {
                background-position: -5px -60px;
                &:hover {
                    background-position: -60px -5px;
                }
            }
            & > div:nth-child(4) span {
                background-position: -60px -60px;
                &:hover {
                    background-position: -115px -5px;
                }
            }
            & > div:nth-child(5) span {
                background-position: -115px -115px;
                &:hover {
                    background-position: -5px -5px;
                }
            }
            & > div:nth-child(6) span {
                background-position: -170px -115px;
                &:hover {
                    background-position: -60px -115px;
                }
            }
            & > div:nth-child(7) span {
                background-position: -170px -60px;
                &:hover {
                    background-position: -115px -60px;
                }
            }
        }
        .service {
            height: 24px;
            line-height: 24px;
            margin-top: 60px;
            display: flex;
            justify-content: center;
            font-size: 13px;
            a {
                position: relative;
                padding: 0 10px;
                &:not(:last-child):after {
                    position: absolute;
                    right: 0;
                    content: "|";
                }
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .detalis {
            text-align: center;
            font-size: 12px;
            p {
                height: 24px;
                line-height: 24px;
                span,a{
                    padding: 0 5px;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>