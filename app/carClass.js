module.exports = Car;
function Car(name, model, type) {
    this.name = name;
    this.type = type;
    this.model = model;
    this.numOfWheels = 4;
    this.isSaloon = true;
    this.speed = "0 km/h";
    
    if (this.name===undefined){
        this.name = "General";
    }
    
    if (this.model === undefined){
        this.model = "GM";
    }
    
    if ((this.name ==="Porshe") || (this.name ==="Koenigsegg")){
            this.numOfDoors = 2;
        }
    else this.numOfDoors = 4;
    
    if (this.type === "trailer"){
        this.numOfWheels = 8;
        this.isSaloon = false;
    }
    this.drive = function (gear) {
        if(gear === 5){
            this.speed = "250 km/h";
        }
        if(gear === 7){
            this.speed = "77 km/h";
        }
    }
}
