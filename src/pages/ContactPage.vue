<script>
export default {
    name: "ContactPage",

}
</script>

<template>
    <div class="container">
        <section class="contact row">
            <div class="col">
                <div class="title-container">
                    <h2 class="title">contact</h2>
                </div>
                <form name="contact" method="POST" data-netlify="true">
                    <!-- NAME AND EMAIL-->
                    <div class="mb-3 row">
                        <div class="col">
                            <label for="name"></label>
                            <input type="text" class="my-form-control" id="name" name="name" placeholder="Name" required
                                aria-label="Name">

                            <label for="email"></label>
                            <input type="email" class="my-form-control ms-5" id="email" name="email" placeholder="Email"
                                required aria-label="Email" value>
                        </div>

                    </div>

                    <!-- TEXTAREA -->
                    <div class="mb-3 row">
                        <div class="col-12">
                            <label for="message"></label>
                            <textarea class="message" id="message" name="message" rows="15"
                                placeholder="Your message goes over here."></textarea>

                            <div class="d-flex justify-content-end">
                                <button type="submit" class="ms-btn ms-btn-orange">Send</button>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
            <!-- SEND btn -->
        </section>
    </div>
</template>

<style lang="scss" scoped>
.my-form-control {
    border: 0;
    outline: none;
    background-color: transparent;
    color: var(--text-color);
    border-bottom: 2px solid var(--text-color);
}

.message {
    border: 2px solid var(--text-color);
}

/* styles.css or your component's style section */
.sticky-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>