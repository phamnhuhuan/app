<template>
    <div class=" max-w-[1230px] mx-auto px-[15px]">
        <p class=" text-center text-primary font-medium md:text-lg mb-2 uppercase">Cẩm nang du lịch cho bạn</p>
         <div v-if="loading">
            <div class="loader">
                <div>
                    <img src="../../assets/image/loading.gif" alt="">
                </div>
            </div>
        </div> 
        <div class=" flex justify-between flex-wrap" v-else>
            <div class=" w-full md:w-[24%] bg-white shadow-2xl rounded-md cursor-pointer mb-3 overflow-hidden"
                v-for="(news_render) in news">
                <RouterLink :to="{ name: 'detailnew', params: { id: news_render.id_news } }">
                    <div class=" overflow-hidden"
                    data-aos="fade-left">
                        <img :src="getimage(news_render.img_news)" alt="" class="rounded-md hover:scale-125 transition-all">
                    </div>
                    <div class=" p-3">
                        <div data-aos="fade-right">
                            <p class="text-primary hover:text-hover-primary transition-all font-medium  ">{{
                                news_render.name_news }}</p>
                        </div>
                        <div v-html="news_render.content_news.substring(0, 128) + ' ...'" data-aos="fade-right"></div>
                    </div>

                </RouterLink>

            </div>

        </div>

    </div>
</template>
<script>
import useNews from '../../store/news/getnews'
import useImage from '../../store/LinkImage/getimage'
import { RouterLink } from 'vue-router';
export default {
    setup() {
        const { news, getnews ,loading} = useNews()
        const { getimage } = useImage()
        getnews()
        return {
            loading,
            news,
            getimage
        };
    },

}
</script>