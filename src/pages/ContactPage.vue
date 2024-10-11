<template>
  <form
  name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit">
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{% raw %}{{ panelist }}{% endraw %}</span>
    </label>
  </form>
</template>
<script>
export default {
  name: "QAForm",
  data () {
    return {
      form: {
        askPerson: ""
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      );
    }
  }
}
</script>