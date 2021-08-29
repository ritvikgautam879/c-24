class BouncyBall{
	constructor(x,y,r)
	{
		 var options={
			'density':1.5,
			'friction': 1.0,
			'restitution':0.5
		 }

		
		


		this.x=x;
		this.y=y;
		this.r=r
		
		 this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		 World.add(world, this.body);

		
	}
	display()
	{
		    var bouncyBallPos=this.body.position;		
		    push()
		    translate(bouncyBallPos.x, bouncyBallPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
			ellipse(0,0,this.r, this.r);
		
			pop()
	}

}