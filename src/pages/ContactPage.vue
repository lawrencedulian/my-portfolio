<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitting: false,
      isSubmitted: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.isSubmitting = true;

      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "contact",
            ...this.form,
          }),
        });

        if (response.ok) {
          // Reset form
          this.form = { name: "", email: "", message: "" };
          this.isSubmitted = true;
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
        this.isSubmitted = false;
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <section class="contact row">
      <div class="col-6 d-flex align-items-center justify-content-end">
        <div class="bar">
          <div class="progress"></div>
        </div>
      </div>
      <div class="col-6">
        <h2 class="title">contact</h2>
      </div>
    </section>

    <section class="contact-form mt-3 mb-5">
      <div class="row">
        <div class="col-12 col-lg-8 col-md-12">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit="handleSubmit"
          >
            <!-- Hidden input for form name -->
            <input type="hidden" name="form-name" value="contact" />

            <!-- Honeypot field for spam protection -->
            <p class="d-none">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <!-- NAME AND EMAIL-->
            <div class="mb-3 row row-cols-1 row-cols-lg-2 row-cols-md-1">
              <div class="col">
                <label for="name"></label>
                <input
                  type="text"
                  class="my-form-control"
                  id="name"
                  name="name"
                  v-model="form.name"
                  placeholder="Name"
                  required
                  aria-label="Name"
                />
              </div>
              <div class="col">
                <label for="email"></label>
                <input
                  type="email"
                  class="my-form-control"
                  id="email"
                  name="email"
                  v-model="form.email"
                  placeholder="Email"
                  required
                  aria-label="Email"
                />
              </div>
            </div>

            <!-- TEXTAREA -->
            <div class="mb-3 row">
              <div class="col">
                <label for="message"></label>
                <textarea
                  class="message p-3"
                  id="message"
                  name="message"
                  v-model="form.message"
                  rows="15"
                  placeholder="Your message goes over here."
                  required
                ></textarea>

                <div class="d-flex justify-content-start mt-3">
                  <button
                    type="submit"
                    class="my-btn p-0"
                    :disabled="isSubmitting || isSubmitted"
                  >
                    {{
                      isSubmitting
                        ? "SENDING..."
                        : isSubmitted
                        ? "MESSAGE SENT!"
                        : "SEND MESSAGE"
                    }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 5rem;
}

.my-form-control {
  width: 100%;
  border: 0;
  outline: none;
  background-color: transparent;
  color: var(--text-color);
  border-bottom: 2px solid var(--text-color);
}

::placeholder {
  color: var(--text-color);
  font-weight: 400;
}

textarea {
  width: 100%;
  background: none;
  color: var(--text-color);
  border-radius: 10px;
}

:focus {
  outline: 0;
  outline-color: transparent;
  outline-style: none;
}

.message {
  border: 2px solid var(--text-color);
}

.my-btn {
  background: none;
  border: none;
  text-decoration: none !important;
  color: var(--text-color);
  border-bottom: 2px solid var(--text-color);
  transition: opacity 0.3s ease;
}

.my-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media screen and (max-width: 991px) {
  .title {
    font-size: 3rem;
  }

  #email {
    margin-top: 1rem;
  }
}
</style>
