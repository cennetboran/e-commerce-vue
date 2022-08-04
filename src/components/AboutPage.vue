<template>
  <div>
    <p>test</p>

    <v-container>
      <v-row justify="space-around">
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card width="400">
            <v-img
              height="200px"
              src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            >
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                <v-toolbar-title class="text-h6 white--text pl-0"> Messages </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn color="white" icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-app-bar>

              <v-card-title class="white--text mt-8">
                <v-avatar size="56">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <p class="ml-3">John Doe</p>
              </v-card-title>
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

          <v-expansion-panels class="item">
            <v-expansion-panel v-for="(item, i) in 2" :key="i">
              <v-expansion-panel-header> Item </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
  mounted() {
    console.log('dhfjfh');
  },
};
</script>
<style>
.item {
  width: 600px;
}
</style>
