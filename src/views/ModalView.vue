<script setup lang="ts">
import ContactInfoModal from '../components/ContactInfoModal.vue';
import { useModalStore } from '../stores/clientinfomodal';
import { useCardInfoStore } from '../stores/cardinfo';
import CardInfoModal from '../components/CardInfoModal.vue';
import SpecialProgramModal from '../components/SpecialModal.vue'
import { useSpecialModalStore } from '../stores/specialmodal'
import MoreInfoModal from '../components/MoreInfoModal.vue';
import { useMoreInfoStore } from '../stores/moreinfomodal';
import ClinicianInfoModal from '../components/ClinicianInfoModal.vue';
import { useClinicianInfoStore } from '../stores/clinicianinfo';

const infoModal = useModalStore();
const cardInfoModal = useCardInfoStore();
const specialModal = useSpecialModalStore();
const moreInfoModal = useMoreInfoStore();
const clinicianInfo = useClinicianInfoStore();

</script>

<template>
    <ClinicianInfoModal v-if="clinicianInfo.isVisible" />
    <MoreInfoModal v-if="moreInfoModal.isVisible" />
    <SpecialProgramModal v-if="specialModal.isVisible" />
    <CardInfoModal v-if="cardInfoModal.isVisible" />
    <ContactInfoModal v-if="infoModal.isVisible" />
</template>