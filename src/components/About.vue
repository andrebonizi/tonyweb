<template>
  <v-container fluid style="background-image: linear-gradient(white, steelblue);">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-3 font-weight-bold mb-3" style="text-shadow: 2px 2px 5px">
          ABOUT ME
        </h1>
        <v-row>
          <v-col>
            <v-img src="../../public/img/typewriter.jpg" style="border-radius: 1000px; width: 500px; margin: auto;"/>
            <p style="
              font-size: 24px;
              text-align: left;
              padding: 30px 100px;
            ">
              With over 20 years’ experience in Copywriting & Communications, Stakeholder Engagement,
              Training/Education, and Translation, I provide all of these services remotely.
              <br><br>
              My skills include the following:
              <br><br>
              <strong>
                Communications, Marketing, Copywriting, Stakeholder Engagement, Technical
                Writing:
              </strong>
              <ul>
                <li>
                  Developing online and print Communications/Marketing materials
                </li>
                <li>
                  Managing Stakeholder Engagement mapping, follow-up and lessons learned
                </li>
                <li>
                  Drafting and editing copy for heavy industry, B2B, retail, advertising and social media
                </li>
                <li>
                  Subtitling for video, speech writing, CV/Resume development
                </li>  
              </ul>
              <br>
              <strong>
                L&D/Training/Education:
              </strong>
              <ul>
                <li>
                  Designing, developing curricula, programs and syllabuses
                </li>
                <li>
                  Teacher training, professional development, team building and management
                </li>
                <li>
                  Designing and producing learning materials (video, digital, print), assessment tools
                </li>
                <li>
                  Experience in topics: Ethics, Cross-culture, Managing a Team, Leadership, Written
                  Communication, Branding, Teaulching Methodologies, Classroom Management,
                  Processes and Procedures.
                </li>
              </ul>
              <br>
              <strong>
                Translation/Interpreting:
              </strong>
              <ul>
                <li>
                  Accredited NAATI professional translator (Portuguese&gt;English)
                </li>
                <li>
                  Twenty-five years’ experience translating from Portuguese into English, in finance,
              law, business, advertising/marketing, education, official documentation, and
              entertainment/arts.
                </li>
                <li>
                  Ten years’ experience translating from English into Portuguese.
                </li>
              </ul>
                          
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
