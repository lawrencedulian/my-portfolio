<template>
    <div class="container">
        <section class="contact row">
            <div class="col-6 d-flex align-items-center justify-content-end">
                <div class="bar">
                    <div class="progress"></div>
                </div>
            </div>
            <div class="col-6">
                <h2 class="title">Contact</h2>
            </div>
        </section>

        <section class="contact-form mt-3">
            <form name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
                <p>
                    <label>Your Name: <input type="text" name="name" required /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" required /></label>
                </p>
                <p>
                    <label>Your Role: 
                        <select name="role[]" multiple>
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>Message: <textarea name="message" required></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
                <p v-if="successMessage" class="success">{{ successMessage }}</p>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: "ContactPage",
    data() {
        return {
            successMessage: '',
            errorMessage: '',
        };
    },
    methods: {
        handleSubmit(event) {
            const myForm = event.target;
            const formData = new FormData(myForm);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then((response) => {
                    if (response.ok) {
                        this.successMessage = "Form successfully submitted!";
                        this.errorMessage = '';
                        myForm.reset(); // Resetta il modulo dopo l'invio
                    } else {
                        throw new Error("Something went wrong.");
                    }
                })
                .catch((error) => {
                    this.errorMessage = "Error: " + error.message;
                    this.successMessage = '';
                });
        },
    },
};
</script>

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
}

.success {
    color: green;
}

.error {
    color: red;
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
