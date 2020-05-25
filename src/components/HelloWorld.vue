<template>
  <v-container fluid style="background-image: linear-gradient(white, rgba(0,0,0,0.87));">
    <v-row class="text-center">
      <v-col class="mb-4" cols="12">
        <v-img
          :src="require('../../public/img/transparent.png')"
          class="my-3"
          contain
          height="200"
          style="
            -webkit-filter: drop-shadow(2px 2px 5px #222);
            filter: drop-shadow(2px 2px 5px #222);
          "

        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          
        </h1>
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item 
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet style="border-radius: 150px;"
              :color="colors[i]"
              height="60%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">{{ slide.text }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      
      
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
      ],
      slides: [
        {
          text:'Professor',
          img: '../../public/img/transparent.png'
        },
        {
          text:'NAATI Translator',
          img: '../../public/img/logo.png'
        },
        {
          text: 'Copywriter',
          img: '../../public/img/logo.png'
        },
      ]
    }),
  }
</script>
