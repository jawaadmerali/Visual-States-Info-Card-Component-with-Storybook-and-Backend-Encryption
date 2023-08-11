import { mapGetters } from 'vuex';
import InfoCard from '../../../sell/components/sellcard/info-card.presentational.vue';

export default {
    name: 'helpCard',
    components: {
        InfoCard,
    },
    inject: ['$eventBus'],
    computed: {
        ...mapGetters('glb', ['viewport', 'glb']),
        ...mapGetters('home', ['home']),
    },
};
