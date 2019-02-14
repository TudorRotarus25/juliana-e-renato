<template>
  <div class="rsvp">
    <h2 class="rsvp__title bordered-title">
      CONFIRMAÇÃO DE PRESENÇA
    </h2>
    <div class="rsvp__container">
      <div class="instructions">
        <p>
          O nosso casamento não será o mesmo sem você. Por isso é muito importante que confirme a
          sua presença.
        </p>
        <p>
          Selecione seu nome (e/ou familia) na lista abaixo e confirme sua presença na
          cerimônia. Caso alguém de sua familia não possa comparecer, por favor nos informe na caixa
          de observações.
        </p>
      </div>
      <div class="guestsDropDown">
        <form @submit="onSubmit">
          <v-select
            v-model="currentGuest"
            :options="guests"
            fluid
            placeholder="Selecione seu nome e/ou família"
            search
            selection
          />
          <div class="input-group rsvp-radios">
            <input
              v-model="rsvp"
              id="rsvp-yes"
              name="rsvp"
              type="radio"
              :value="true"
            >
            <label for="rsvp-yes">
              Sim, estarei lá
            </label>
            <input
              v-model="rsvp"
              id="rsvp-no"
              name="rsvp"
              type="radio"
              :value="false"
            >
            <label for="rsvp-no">
              Não, não irei
            </label>
          </div>
          <textarea
            v-model="comments"
            class="form-control"
            name="comments"
            placeholder="Observações"
          />
          <button
            class="btn btn-primary submit-button"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueSelect from 'vue-select/src/components/Select.vue';

export default {
  components: {
    'v-select': VueSelect,
  },
  name: 'Rsvp',
  data() {
    return {
      rsvp: null,
      currentGuest: null,
      comments: '',
      guests: [],
    };
  },
  mounted() {
    this.populateGuests();
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const data = {
        guestId: this.currentGuest.id,
        rsvp: this.rsvp,
        comments: this.comments,
      };

      axios.post('/guests', data).then((response) => {
        if (response.status === 200) {
          alert('Submitted data');
          this.populateGuests();
        }
      });
    },
    populateGuests() {
      axios.get('/guests').then((response) => {
        if (response.status === 200 && response.data && response.data.guests) {
          this.guests = response.data.guests.map(guest => ({
            ...guest,
            rsvp: guest.rsvp === null ? null : !!guest.rsvp,
            label: guest.name,
            value: guest.id,
          }));
        }
      });
    },
  },
  watch: {
    currentGuest(guest) {
      if (guest) {
        this.rsvp = guest.rsvp;
        this.comments = guest.comments;
      } else {
        this.rsvp = null;
        this.comments = '';
      }
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
  @import '../styling/variables';

  .rsvp {
    text-align: center;

    &__title {
      margin: 20px 0;
    }

    .rsvp-radios {
      margin: 20px 0;

      label {
        margin-right: 15px;
      }

      input {
        height: 16px;
      }
    }

    .instructions {
      max-width: 850px;
      margin: 10px auto 50px;

      p {
        margin: 20px 0;
      }
    }
  }

  .guestsDropDown {
    width: 500px;
    margin: auto;

    /deep/.dropdown-toggle {
      color: $primary;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid lighten($primary, 10%);

      &::placeholder {
        color: lighten(#495057, 40%);
      }
    }
  }

  .submit-button {
    display: block;
    width: 100%;
    margin-top: 20px;
  }
</style>
