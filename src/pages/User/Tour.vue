<template>
   <div v-if="loading">
      <div class="loader">
         <div>
            <img src="../../assets/image/loading.gif" alt="">
         </div>
      </div>
   </div>
   <div class=" w-full bg-list py-2 sm:py-3" v-else>
      <div class=" max-w-[1230px] m-auto px-[15px]">
         <div class=" text-primary font-medium sm:text-[24px] mb-2"><span class=" mr-2"><i
                  class="fa-solid fa-person-hiking"></i></span>Tour du lịch {{ title.name_cate }}</div>
         <div class=" flex justify-between flex-wrap">
            <div data-aos="fade-up"
               class=" w-[48%] lg:w-[24%] bg-white rounded-md cursor-pointer mb-4 overflow-hidden shadow-2xl"
               v-for="(render_tour) in tour">
               <router-link :to="{ name: 'detailtour', params: { id: render_tour.id_tour } }">
                  <div class=" overflow-hidden">
                     <img :src="getimage(render_tour.img_tour)" alt="" class="rounded-md hover:scale-125 transition-all">
                  </div>
                  <div class=" p-3">
                     <div>
                        <p class=" hover:text-primary transition-all font-medium  ">{{ render_tour.name_tour }}</p>
                     </div>
                     <div class=" flex flex-wrap justify-between sm:my-2">
                        <div>
                           <span class=" text-star pr-2"><i class="fa-solid fa-star"></i></span>
                           <span class=" text-star pr-2"><i class="fa-solid fa-star"></i></span>
                           <span class=" text-star pr-2"><i class="fa-solid fa-star"></i></span>
                           <span class=" text-star"><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class=" my-1 border text-[14px] border-primary text-center text-primary rounded-lg px-3">
                           <span class=" mr-1"><i class="fa-solid fa-person-walking-luggage"></i></span><span>{{
                              render_tour.cate.name_cate }}</span>
                        </div>
                     </div>
                     <div class="font-medium text-primary">
                        <span>{{ render_tour.price.toLocaleString() }} VNĐ</span>
                     </div>
                  </div>
               </router-link>

            </div>
         </div>
      </div>
   </div>
</template>
<script>
import useImage from '../../store/LinkImage/getimage'
import { ref ,watch} from 'vue'
import { useRoute } from "vue-router";
export default {
   setup() {
      const { getimage } = useImage()
      const tour = ref([])
      const title = ref('')
      const loading = ref(true)
      const route = useRoute()
      const id_change = ref(route.params.id)
      const id = route.params.id
      watch(route, (to, from) => {
         id_change.value = to.params.id
         axios.get(`https://huanapi.000webhostapp.com/api/cate/${id_change.value}`)
            .then((response) => {
               tour.value = response.data.tour
            }).catch((err) => {
               console.log(err);
            });
            axios.get(`https://huanapi.000webhostapp.com/api/cate/title/${id_change.value}`)
            .then((response) => {
               title.value = response.data.cate
            }).catch((err) => {
               console.log(err);
            });
      })

      // get id
      const gettour = () => {
         axios.get(`https://huanapi.000webhostapp.com/api/cate/${id}`)
            .then((response) => {
               setTimeout(() => {
                  loading.value = false
               }, 1000);
               tour.value = response.data.tour
            }).catch((err) => {
               console.log(err);
            });
      }
      gettour()
      const getcate = () => {
         axios.get(`https://huanapi.000webhostapp.com/api/cate/title/${id}`)
            .then((response) => {
               title.value = response.data.cate

            }).catch((err) => {
               console.log(err);
            });
      }
      getcate()
      return {
         id,
         id_change,
         loading,
         title,
         tour,
         route,
         getimage,
      }
   }
}
</script>