<template>
  <v-container fluid style="background-image: linear-gradient(white, brown);" >
    <v-row class="text-center" justify="center">
        <v-col>
          <h1 class="display-3 font-weight-bold mb-3" style="text-shadow: 2px 2px 5px">
              CONTACT ME
          </h1>  
        </v-col>
    </v-row>
        <v-row class="text-center" justify="center">
          <v-col cols="9">
            <p><b>MOBILE/WHATSAPP:</b> +61 0410 391 913</p>
            <v-form
                ref="form"
            >
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="name"
                            label="Name"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="email"
                            label="Email"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="subject"
                            label="Subject"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea
                            v-model="message"
                            label="Message"
                            required
                        >

                        </v-textarea>
                    </v-col>
                </v-row>
            </v-form>
            <v-btn v-on:click="sendEmail">
                Send now!
            </v-btn>
          </v-col>
        
        </v-row>
        
  </v-container>
</template>
<script>
  export default {
    name: 'Contact',

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
    methods: {
      sendEmail(){
        this.name === undefined
          ? alert("Your name is required.")
          : this.email === undefined
            ? alert("Your email is required.")
            : this.subject === undefined
              ? alert("Subject is required.")
              : this.message === undefined
                ? alert("A message is required.")
                : window.open(`mailto:proftony2010@gmail.com?Subject=WEB CONTACT:${this.subject}&body=${this.message}%0A%0A${this.name}%0A${this.email}`);
      }
    }
  }
</script>
