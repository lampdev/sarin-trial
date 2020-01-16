<template>
  <input
    :type="type"
    :value="value"
    class="vue-form__input"
    :placeholder="placeholder"
    @input="e => $emit('input', e.target.value)"
    ref="field"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Type your answer here..."
    },
    value: String
  },
  watch: {
    value() {
      this.focusInput();
    }
  },
  methods: {
    focusInput() {
      this.$refs.field.focus();
    }
  },
  mounted() {
    this.focusInput();
  }
};
</script>

<style lang="scss" scoped>
.vue-form__input {
  color: #ff5a5f;

  font-size: 2rem;
  padding: 0 0 8px;
  background: none;
  border: none;

  -webkit-appearance: none;
  border-bottom: 1px solid #ff5a5f;

  &::placeholder {
    color: #ffefef;
  }

  &:focus {
    outline: none;
  }
}
</style>
