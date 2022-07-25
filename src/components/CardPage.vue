<template>
<div>
  <v-row>
  <v-card
    class="card-1"
    max-width="344"
    v-for="item in items"
    :key="item.id"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <v-card-title>
<h3 class="headline mb-0" v-text="item.itemName"></h3>
    </v-card-title> <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-row>
<!-- <v-content>
      <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex v-for="item in items" :key="item.id" >
                            <v-card >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                            
                                           ></v-img>                                
                                           <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0" v-text="item.itemName"></h3>
                                       
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat color="orange" class="body-1">Inquire Item</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
    </v-content> -->


</div>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      items:[
          { id: 1, itemName: "asdsa" },
                    { id: 2, itemName: "asdsa" },
                    { id: 3, itemName: "asdsa" },
                    { id: 4, itemName: "asdsa" },
                    { id: 5, itemName: "asdsa" },
                    { id: 6, itemName: "asdsa" },
                    { id: 7, itemName: "asdsa" },
                    { id: 8, itemName: "asdsa" },
                    { id: 9, itemName: "asdsa" },
                    { id: 10, itemName: "asdsa" },

      ]
    }),
  }
</script>
<style>
.card-1{
left: 144px;
}
.card-1:hover{
  transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>