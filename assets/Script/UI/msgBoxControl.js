cc.Class({
    extends: cc.Component,

    properties: {
       labelText: {
           default: null,
           type: cc.Label
       },
       message: {
           default: null,
           type: cc.Button
       }
    },

    // use this for initialization
    onLoad: function () {
        this.move_out()
        this.message.interactable = false
        this.animation = this.message.getComponent("cc.Animation")
        this.message.node.on(cc.Node.EventType.TOUCH_START, this.hide, this)
    },

    alert: function(type, msg) {
        this.move_in()
        this.animation = this.message.getComponent("cc.Animation")
        this.animation.play('msgbox_split_in')
        this.labelText.string = msg
    },

    hide: function() {
        var self = this
        this.animation.play('msgbox_split_out')
        this.scheduleOnce(this.move_out, 0.5);
    },

    move_out: function() {
        this.node.opacity = 0
        this.origin_y = this.node.y
        this.node.y = 10000
    },

    move_in: function() {
        this.node.opacity = 255
        this.node.y = this.origin_y
        this.message.interactable = true
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
