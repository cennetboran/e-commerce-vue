<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card width="400">
            <v-img
              height="200px"
              src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            >
              <v-app-bar flat color="rgba(0, 0, 0, 0)"> </v-app-bar>
            </v-img>

            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">Today</div>

              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="message in messages"
                  :key="message.time"
                  :color="message.color"
                  small
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong>{{ message.from }}</strong> @{{ message.time }}
                    </div>
                    <div>{{ message.message }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-for="n in 1" :key="n">
          <v-card width="850">
            <v-img height="300px" src="https://imgyukle.com/f/2022/08/01/VfuIHI.jpg">
              <v-app-bar flat color="rgba(0, 0, 0, 0)"> </v-app-bar>
            </v-img>

            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">Today</div>

              <v-timeline align-top dense>
                <v-timeline-item v-for="text in texts" :key="text.time" :color="text.color" small>
                  <div>
                    <div class="font-weight-normal">
                      <strong>{{ text.from }}</strong> @{{ text.time }}
                    </div>
                    <div>{{ text.message }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row> </v-row>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  data: () => ({
    messages: [
      {
        from: 'Joe',
        message: `Beatiful.`,
        time: '10:42am',
        color: 'deep-purple lighten-1',
      },
      {
        from: 'John Doe',
        message: 'Amazing',
        time: '10:37am',
        color: 'green',
      },
      {
        from: 'Joe',
        message: 'Cool!',
        time: '9:47am',
        color: 'deep-purple lighten-1',
      },
    ],
    texts: [
      {
        time: 'One day',
        from: 'Bıdı bıdı',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  }),
  components: {},
  mounted() {},
};
</script>
<style></style>
