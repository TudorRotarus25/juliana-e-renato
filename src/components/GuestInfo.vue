<template>
  <div class="guestInfo">
    <h2 class="guestInfo__title">
      Confirme sua presença
    </h2>
    <div class="guestInfo__container">
      <div class="guestsDropDown">
        <sui-dropdown
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
        <sui-form>
          <sui-form-fields inline>
            <sui-form-field>
              <sui-checkbox
                label="Sim"
                radio
                value="yes"
                v-model="rsvp"
              />
            </sui-form-field>
            <sui-form-field>
              <sui-checkbox
                label="No"
                radio
                value="no"
                v-model="rsvp"
              />
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
