<template>
  <v-container fluid style="background-image: linear-gradient(white, steelblue);">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-3 font-weight-bold mb-3" style="text-shadow: 2px 2px 5px">
          ABOUT ME
        </h1>
        <v-row>
          <v-col>
            <v-img src="../../public/img/typewriter.jpg" style="border-radius: 1000px;"/>
          </v-col>
          <v-col>
            <p style="
              font-family: 'Old Standard TT', serif;
              font-size: 24px;
              text-align: left;
            ">
              I am a naati-approved professional translator and a member of ausit (from portuguese INTO ENGLISH).<br>
              <br>I have been teaching and training for over 20 years, in areas such as Language/Linguistics, Trasnlation and Teaching/Training. <br>
              <br>I work with texts, subtitling and speech-writing in technical, financial, legal, marketing & advertising, and corporate areas.<br>
              <br>I also develop, translate and adapt resumes and cover letters.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'About',

    data: () => ({
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
