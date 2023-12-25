<script>
export default {
    name: 'notFound',
}
</script>

<template>
    <div class="container">
        <iframe src="https://giphy.com/embed/3ohs4qw8hkPShGeanS" frameBorder="0"
            class="giphy-embed position-relative"></iframe>
        <div class="text text-center text-white position-absolute">
            <h2>Yeah… Something went wrong.</h2>
            <p>I have no idea how you got here. But it ain’t good.</p>
            <span>Error code: 404</span>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.container {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .giphy-embed {
        width: 800px;
        height: 800px;
        pointer-events: none;
    }
}

@media screen and (max-width: 991px) {
    .container {
        .giphy-embed {
            width: 600px;
            height: 600px;
        }
    }
}

@media screen and (max-width: 768px) {
    .container {
        .giphy-embed {
            width: 500px;
            height: 500px;
        }

        h2 {
            font-size: 1.8rem;
        }

        p {
            font-size: .8rem;
        }

        span {
            font-size: .7rem;
        }
    }
}

@media screen and (max-width: 932px) {
    .container {

        h2 {
            font-size: 1.3rem;
        }

        p {
            font-size: .7rem;
        }

        span {
            font-size: .6rem;
        }
    }
}

@media screen and (max-width: 430px) {
    .container {
        .giphy-embed {
            width: 350px;
            height: 350px;
        }

        h2 {
            font-size: 1.3rem;
        }

        p {
            font-size: .7rem;
        }

        span {
            font-size: .6rem;
        }
    }
}
</style>
  