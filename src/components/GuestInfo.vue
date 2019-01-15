<template>
  <div class="guestInfo">
    <h2 class="guestInfo__title">
      Confirme sua presença
    </h2>
    <div class="guestInfo__container">
      <div class="guestsDropDown">
        <v-select
          v-model="currentGuest"
          :options="guests"
          fluid
          placeholder="Selecione seu nome e/ou família"
          search
          selection
        />
      </div>
      <div
        v-show="currentGuest"
        class="guestInfo__rsvp"
      >

      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from 'vue-select/src/components/Select.vue';

export default {
  components: {
    'v-select': VueSelect,
  },
  name: 'GuestInfo',
  data() {
    return {
      rsvp: null,
      currentGuest: null,
      guests: [
        {
          value: 'Mariana & Tudor',
          text: 'Mariana & Tudor',
        },
        {
          value: 'Julio & Iara',
          text: 'Julio & Iara',
        },
      ],
    };
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .guestInfo {
    text-align: center;

    &__title {
      margin: 20px 0;
    }
  }

  .guestsDropDown {
    width: 500px;
    margin: auto;
  }
</style>
