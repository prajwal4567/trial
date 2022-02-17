class attaraction{
    constructor(a,b){
        //a is x position of object 1.b is y position of object 1 
        this.a;
        this.b;
        //f is x position of object 2.g is y position of object 2 
        this.f;
        this.g;
    }
    attaract(){
       this.object_1=createSprite(this.a,this.b,10,10);
       //c is x distance between them
       this.c=this.a-this.f;
       //l is y distance between them
       this.l=this.b-this.g;
       //d is energy in x
       this.d=100-this.c;
       //m is energy in y
       this.m=100-this.l;
       //this code is to attarct on x cordinate
       this.object_1.x=this.object_1.x-this.d;
       //this code is to attarct on y cordinate
       this.object_1.y=this.object_1.y-this.m;
    }
    repail()
    {
        this.object_1=createSprite(this.f,this.g,10,10);
        //c is x distance between them
        this.c=this.a-this.f;
        //l is y distance between them
        this.l=this.b-this.g;
         //d is energy in x
        this.d=100-this.c;
        //m is energy in y
        this.m=100-this.l;
        //this code is to attarct on x cordinate
        this.object_1.x=this.object_1.x+this.d;
        //this code is to attarct on y cordinate
        this.object_1.y=this.object_1.y+this.m;
    }
}

function setup(){
    createCanvas(600,600);
    block1= new attaraction(1,1);
    block2= new attaraction(600,600);
}
function draw(){
    background("red");
    block1.attaract();
    block2.repail();
    drawSprites();
}