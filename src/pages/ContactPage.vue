<script>
export default {
    name: "ContactPage",
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

        <section class="contact-form mt-3">
            <div class="row">
                <div class="col-12 col-lg-8 col-md-12">
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit="submit">
                    <input name="bot-field" class="d-none">
                    <div class="form-row">
                        <div class="form-group col-md-6 mt-3">
                            <label for="name">Your Name</label>
                            <input type="text" class="form-control" id="name" name="name">
                        </div>
                        <div class="form-group col-md-6 mt-3">
                            <label for="inputEmail">Your Email</label>
                            <input type="email" class="form-control" id="inputEmail" name="email">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Send</button>
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