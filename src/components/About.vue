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
              font-size: 24px;
              text-align: left;
            ">
              I am a NAATI-approved professional translator and a member of
              AUSIT (from Portuguese into English).<br><br>
              I have been developing learning solutions for over 20 years, in
              areas such as Language/Linguistics, Translation and
              Teaching/Training.<br><br>
              I work with texts and documents, subtitling and speech writing
              in technical, financial, legal, educational, marketing &amp;
              advertising, and corporate areas.<br><br>
              I also develop, translate and adapt resumes and cover letters.<br><br>
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
