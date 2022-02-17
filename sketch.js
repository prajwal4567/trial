var block1,block2;
class attaraction{
    constructor(a,b,f,g){
        //a is x position of object 1.b is y position of object 1 
        this.a=a;
        this.b=b;
       
        //f is x position of object 2.g is y position of object 2 
        this.f=f;
        this.g=g;
        
    }

    attaract(){
       //c is x distance between them
       this.block_1=rect(this.a,this.b,20,20);
       this.c=this.a-this.f;
       //l is y distance between them
       this.l=this.b-this.g;
       //d is energy in x
       this.d=100-this.c;
       //m is energy in y
       this.m=100-this.l;
       //this code is to attarct on x cordinate
       this.a=this.a-this.d;
       //this code is to attarct on y cordinate
       this.b=this.b-this.m;
    
    }
 
        repail()
    {
        //c is x distance between them
        this.block_2=rect(this.f,this.g,20,20);
        this.c=this.a-this.f;
       //l is y distance between them
       this.l=this.b-this.g;
       //d is energy in x
       this.d=100-this.c;
       //m is energy in y
       this.m=100-this.l;
       //this code is to attarct on x cordinate
       this.a=this.a+this.d;
       //this code is to attarct on y cordinate
       this.b=this.b+this.m;
     
    }

}
function setup(){
    createCanvas(600,600);
   block1= new attaraction(10,10,40,10);
   block2= new attaraction(40,40,40,40);
}
function draw(){
    block1.repail();
    block2.repail();
    drawSprites();
}
