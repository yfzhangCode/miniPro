//Component Object
Component({
  properties: {
    bannerList:{
      type: Array,
      value: [],
      observer: function(){}
    },
    styleIsoFlag: {
      type: Boolean,
      value: false
    }
  },
  options: {
    styleIsolation: "apply-shared"
  },
  data: {
  },
  methods: {
  },
  created: function(){
    console.log(this)
  },
  attached: function(){

  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
});