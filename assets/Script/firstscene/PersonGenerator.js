var companypath=require('global').companyPath;
cc.Class({
    extends: cc.Component,

    properties: {
        persons_:{   
            default:[],
            type:[cc.Prefab]
        },
    },

    showPersons: function() {
        return this.persons_;
    },

    removePerson: function(person) {
        if(cc.find(companypath).getComponent("Company").hire(person)){
            for(let i=0;i<this.currentNum_;i++){
                if(this.persons_[i]===oldperson){
                    this.persons_.splice(i,1);
                    return true;
                }
            }
        }
    },

    addPerson: function(person){
        if(cc.find(companypath).getComponent("Company").fire(person)){
            this.persons_.push(person);
        }
    },
    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
