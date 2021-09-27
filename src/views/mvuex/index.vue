<template>
        <div>
          <div class="home">
            <span>
              我的vuex学习
            </span>
          </div>
          <mwy-button @click="deleteitem" :throttle="true" :times="5000">vuex的删除</mwy-button>
        </div>
      </template>
      
      <script>
        import MwyButton from '@/components/button/MwyButton.vue'
        export default {
          name: 'MVuex',
          components: {
            MwyButton
          },
          data() {
            return {
            }
          },
          computed: {
            catalogues() {
              return this.$store.getters.catalogues
            }
          },
          mounted() {
            this.setCatalogue();
            console.log(this.catalogues)
          },
          methods: {
            deleteitem() {
              var item = {
                id: '2', name: "2"
              };
              this.$store.commit('CatalogueTree/DeleteCatalogues', item);
              console.log(this.catalogues)
            },
            setCatalogue() {
              var Catalogue = [
                {
                  id: '1', name: "1", children: [
                    {
                      id: '1-1',
                      name: '1-1'
                    }
                  ]
                },
                {
                  id: '2', name: "2"
                },
                {
                  id: '3', name: "3", children: [
                    {
                      id: '3-1',
                      name: '3-1',
                      children: [
                        {
                          id: '3-1-1',
                          name: '3-1-1'
                        }
                      ]
                    }
                  ]
                }
              ];
              this.$store.commit('CatalogueTree/SetCatalogues', Catalogue);
            }
          },
        }
      </script>