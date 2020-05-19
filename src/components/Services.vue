<template>
  <v-container fluid style="background-image: linear-gradient(white, darkgreen);">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-3 font-weight-bold mb-3" style="text-shadow: 2px 2px 5px">
          MY SERVICES
        </h1>
        <v-row justify="center">
            <v-col cols="6" >
            <p style="
              font-family: 'Old Standard TT', serif;
              font-size: 24px;
              font-weight: bold;
            ">
                <v-row style="text-align: left;">
                    <v-col align="center" justify="center">
                        <v-img src="../../public/img/techwriting.jpeg" style="border-radius: 1000px; max-width:1000px; max-height: 200px;"/>
                    </v-col>
                    <v-col>
                        TRANSLATION
                        <hr>
                        <p style="
                            font-family: 'Old Standard TT', serif;
                            font-size: 16px;
                            text-align: left;
                        ">
                        <v-row>
                        
                            <v-col>
                            Official documents:
                            <ul>
                                <li>driver's licence</li>
                                <li>birth certificate</li>
                                <li>marriage certificate</li>
                                <li>diplomas & degrees</li>
                                <li>police clearance</li>
                            </ul>
                            </v-col>
                            <v-col>
                            Non-official documents:
                            <ul>
                                <li>contracts</li>
                                <li>brochures</li>
                                <li>websites</li>
                                <li>scripts (tv & Cinema)</li>
                            </ul>
                            </v-col>
                        </v-row>
                        </p>
                    </v-col>
                    <v-col>
                        DRAFTING
                        <hr>
                        <p style="
                            font-family: 'Old Standard TT', serif;
                            font-size: 16px;
                            text-align: left;
                        ">
                        <ul>
                            <li>Corporate</li>
                            <li>Government</li>
                            <li>Education</li>
                            <li>Advertising</li>
                            <li>Marketing</li>
                            <li>Script-writing</li>
                            <li>Technical</li>
                        </ul>
                        </p>
                    </v-col>
                    <v-col>
                        RESUME
                        <hr>
                        <p style="
                            font-family: 'Old Standard TT', serif;
                            font-size: 16px;
                            text-align: left;
                        ">
                            <ul>
                                <li>Translation</li>
                                <li>Development</li>
                                <li>Adaptation</li>
                                <li>Cover Letters</li>
                            </ul>
                        </p>
                    </v-col>
                </v-row>
            </p>
          </v-col>
        
          
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'Services',

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
