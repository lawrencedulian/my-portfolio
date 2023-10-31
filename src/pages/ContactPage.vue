<script>
export default {
    name: "ContactPage",
};
</script>


<template>
    <div class="container">
        <section class="contact row">
            <div class="col-6"></div>
            <div class="col-6">
                <h2 class="title">contact</h2>
            </div>
        </section>

        <section class="contact-form mt-3">
            <div class="row">
                <div class="col-12 col-lg-8 col-md-12">
                    <form name="contact" method="POST" netlify>
                        <!-- NAME AND EMAIL-->
                        <div class="mb-3 row row-cols-1 row-cols-lg-2 row-cols-md-1">
                            <div class="col">
                                <label for="name"></label>
                                <input type="text" class="my-form-control" id="name" name="name" placeholder="Name" required
                                    aria-label="Name">
                            </div>
                            <div class="col">
                                <label for="email"></label>
                                <input type="email" class="my-form-control" id="email" name="email" placeholder="Email"
                                    required aria-label="Email" value>
                            </div>
                        </div>

                        <!-- TEXTAREA -->
                        <div class="mb-3 row">
                            <div class="col">
                                <label for="message"></label>
                                <textarea class="message p-3" id="message" name="message" rows="15"
                                    placeholder="Your message goes over here."></textarea>

                                <div class="d-flex justify-content-start mt-3">
                                    <button type="submit" class="my-btn p-0">SEND MESSAGE</button>
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