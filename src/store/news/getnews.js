import {ref } from 'vue'
export default ()=>{
    const news = ref([]);
    const loading = ref(true)
    const getnews = () => {
        axios.get('https://huanapi.000webhostapp.com/api/new')
            .then((response) => {
                if (response) {
                    setTimeout(() => {
                        loading.value = false
                    }, 1000);
                    news.value = response.data.news;
                }

            }).catch((err) => {

            });
    };
    return {
        loading,
        news,
        getnews
    };
}
