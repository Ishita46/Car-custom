AFRAME.registerComponent("car-model", {
    schema: {
        modelRef: {type: "string", default: "assets/scene.gltf"},
        clickCounter: {type: "number", default: 0},
    },

    init: function(){
        //Do something when component first attached
            this.el.setAttribute("gltf-model", this.data.modelRef);
                const position = {x: -10, y: 5, x: 20};
                const rotation = {x: 0, y: -10, x: 0};
                this.el.setAttribute("postion", position);
                this.el.setAttribute("rotation", rotation);
            }
        });