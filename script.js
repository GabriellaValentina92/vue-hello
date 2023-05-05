const helloVue = Vue.createApp({
    data() {
        return {
            titlePreVue: 'La vita prima di Vue Js:',
            titleStyle: 'title',
            image_src: 'img/HelloVueimg.jpg',
            imageStyle: 'image',
            titlePostVue: ' La vita dopo Vue Js:',
            imageSrc: 'img/Festaaaa.webp',
            alert: 'mo ndo stà la fregatura?',
            danger: 'pStyle',
            imgSrc: 'img/trainers.jpg' 
        }
    }
});

helloVue.mount('#newVue')