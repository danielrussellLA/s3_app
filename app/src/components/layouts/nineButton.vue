<template>
<div class="wrapper arial-theme">
    <h1 class="title">{{ content_info.title }}</h1>
    <p class="description">{{ content_info.description}}</p>
    <span class="sa">Sponsored Ads</span>
    <ul class="ad-list">
        <li  v-for="(ad, i) in content_info.keywords" v-if="i < 4">
            <div class="list-box">
                <a class="btn" target="_blank" :href="ad.url">
                    <span class="keyword-title">{{ ad.title }}</span>
                </a>
            </div>
        </li>
    </ul>
    <img class="heroImage" :src="content_info.hero_image" />
    <div v-html="content_info ? content_info.simple_article[0].richText : '...'"></div>
    <span class="sa">Sponsored Ads</span>
    <ul class="ad-list">
        <li  v-for="(ad, i) in content_info.keywords" v-if="i > 4">
            <div class="list-box">
                <a class="btn" target="_blank" :href="ad.url">
                    <span class="keyword-title">{{ ad.title }}</span>
                </a>
            </div>
        </li>
    </ul>
    <a class="search-ads-btn" target="_blank" :href="content_info.keywords[0].url">Search Ads Now!</a>
    <span class="disclaimer">ADVERTISEMENT</span>
</div>
</template>

<script>

export default {
  name: 'nineButton',
  props: ['content_info'],
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {

}
.arial-theme {
    font-family: Arial, sans-serif;
}
.title {
    border-bottom: 4px solid #f5a623;
    font-size: 30px;
    padding-bottom: 10px;
}
.description {
    font-weight: 500;
    font-family: Arial;
    line-height: 1.5;
}
.heroImage {
    margin: 20px 0;
    width: 100%;
}

ul {
   list-style: none;
   margin: 0;
   padding: 0;
}

li {
  display: list-item;
  width: 100%;
}

.sa {
    text-align: right;
    display: block;
    font-size: 16px;
    color: #959594;
    font-weight: 700;
}

.ad-list {
    margin: 10px 0;
    font-family: 'Source Sans Pro', sans-serif;
}

.btn {
    -ms-flex-align: center;
    align-items: center;
    background: linear-gradient(0deg,#2989d8 0,#1e5799 4%,#207cca 94%,#207cca 0,#7db9e8);
    border-radius: 32px;
    border: 1px #fff;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,.5);
    color: #fff;
    cursor: pointer;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 20px;
    font-weight: 900;
    height: 60px;
    margin: 3px .5%;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 1px 0 rgba(0,0,0,.5);
    width: 100%;
}

.keyword-title {
    text-align: center;
    width: 100%;
}

.search-ads-btn {
    background: linear-gradient(0deg,#ef3a3a 0,#b30f0f 4%,#d71212 94%,#d71212 0,#f58585);
    border-radius: 10px;
    clear: both;
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    height: 60px;
    line-height: 60px;
    margin: 20px auto 0;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 1px 0 rgba(0,0,0,.5);
    width: 100%;
}

.disclaimer {
    color: #d2d2d2;
    display: block;
    font-size: 11px;
    margin-top: 10px;
    text-align: center;
    font-weight: 700;
    height: 8em;
}

@media (min-width: 992px) {
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    .ad-list li {
        width: 50%;
        text-align: -webkit-match-parent;
    }
    .ad-list li .list-box {
        padding: 0 10px;
    }
    
    .search-ads-btn {
        font-size: 30px;
        height: 100px;
        line-height: 100px;
        width: 66%;
    }
    
    .disclaimer {
        font-size: 14px;
    }
}
</style>
