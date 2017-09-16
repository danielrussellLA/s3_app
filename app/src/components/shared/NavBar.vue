<template>
    <div id="navContainer">
        <a href="#/" class="nationLogo">
            <img src="../../assets/nation-logo.svg" />
        </a>
        <div class="hamburgerButton" @click="toggleDropdown">&#8801;</div>
        <div class="dropdownMenu" v-if="showDropdown" @click="toggleDropdown">
            <router-link v-for="link in links" :key="link.path" :to="link.path" active-class="active" exact>{{ link.name }}</router-link>
        </div>
        <div class="links">
            <router-link v-for="link in links" :key="link.path" :to="link.path" active-class="active" exact>{{ link.name }}</router-link>
        </div>
    </div>
</template>

<script>
    // import nationLogo from '../../assets/nation-logo.svg';
    export default {
        name: 'navbar',
        data() {
            return {
                showDropdown: false,
                links: [
                    {
                        name: 'Home',
                        path: '/'
                    },
                    {
                        name: 'Auto',
                        path: '/auto'
                    },
                    {
                        name: 'Tech',
                        path: '/tech'
                    },
                    {
                        name: 'Travel',
                        path: '/travel'
                    },
                    {
                        name: 'Health',
                        path: '/health'
                    },
                    {
                        name: 'Finance',
                        path: '/finance'
                    }
                ]
            }
        },
        methods: {
            toggleDropdown (e) {
                if(e.target.className !== 'dropdownMenu') {
                    this.showDropdown = !this.showDropdown
                }
            }
        }
    }
</script>

<style scoped>
    #navContainer {
        position: relative;
        margin: auto;
        max-width: 1140px;
        padding: 20px 0px;
        height: 100px;
        border-bottom: 1px solid #efefef;
    }
    .navInnerWrapper {
        padding: 20px 0px;
        
        position: relative;
        height: 100%;
    }
    .nationLogo {
        position: absolute;
        left: 10px;
        top: 50%;
        margin-top: -20px;
    }
    .hamburgerButton {
        position: absolute;
        right: 0;
        font-size: 3em;
        margin-right: 10px;
        color: #95989B;
    }
    .hamburgerButton:hover {
        cursor: pointer;
    }
    .dropdownMenu {
        position: absolute;
        top: 70px;
        right: 10px;
        border: 1px solid #cecece;
        background: #f7f7f7;
        padding: 10px 0;
        width: 210px;
        border-radius: 10px;
        z-index: 2;
    }
    .dropdownMenu a {
        display: block;
        text-align: center;
        margin: 5px 0px;
        text-decoration: none;
        text-decoration: 900;
        color: #95989A;
    }
    .links {
        position: absolute;
        right: 0px;
        top: 50%;
        margin-top: -5px;
        display: none;
    }
    .links a {
        color:  #95989A;
        font-weight: bold;
        text-decoration: none;
        border-right: 1px solid #95989A;
        padding: 0 5px;
        font-size: 13px;
    }
    .links a:nth-last-child(1) {
        border-right: none;
    }
    .links a:hover,
    .dropdownMenu a:hover {
        color: #f5a623;
        font-weight: bolder;
        text-decoration: underline;
    }
    @media (min-width: 750px) {
        .nationLogo {
            left: 0;
        }
        .hamburgerButton, .dropdownMenu {
            display: none;
        }
        .links {
            display: block;
        }
    }
</style>