/**
 * grid.js

 * Symbol library 1.0
 * Michael Kuegeler 12/2013
 * 
 * * Copyright 2013/2014 Michael Kuegeler
 * 
 * 
 */
///////////////////////////////////////////////////////////////////////////////
function Grid ()
{
	
	
	this.xmlns = "http://www.w3.org/2000/svg";
	this.xlinkNS = "http://www.w3.org/1999/xlink"; 	

	this.id = Math.random().toString();
	
	// the parent node of all symbols
	this.layer = document.getElementsByTagName("defs").item(0).id;
	
	// offset used for boundary box position
	this.offset = 0.25;
	
	// grid array
	this.grid = new Array();
	
}
///////////////////////////////////////////////////////////////////////////////
// Global functions used in symbol libraries
///////////////////////////////////////////////////////////////////////////////

Grid.prototype.setNS = function(value)
{
            this.xmlns = value;
}
Grid.prototype.getNS = function()
{
            return this.xmlns;
} 
///////////////////////////////////////////////////////////////////////////////

Grid.prototype.setxlinkNS = function(value)
{
            this.xlinkNS = value;
}
Grid.prototype.getxlinkNS = function()
{
            return this.xlinkNS;
}

///////////////////////////////////////////////////////////////////////////////

Grid.prototype.setID = function(value)
{
            this.id = value;
}
Grid.prototype.getID = function()
{
            return this.id;
}

///////////////////////////////////////////////////////////////////////////////

Grid.prototype.setLayer = function(value)
{
            this.layer = value;
}
Grid.prototype.getLayer = function()
{
            return this.layer;
}
///////////////////////////////////////////////////////////////////////////////

Grid.prototype.setOffset = function(value)
{
            this.offset = value;

}
Grid.prototype.getOffset = function()
{
            return this.offset;
}
///////////////////////////////////////////////////////////////////////////////
// creates a list of abstract grid points (horizontal and vertical)
// returns a hash array with two coordinates: Start and end of a line

Grid.prototype.setGrid = function(value)
{
            
	this.grid = value;

}
///////////////////////////////////////////////////////////////////////////////
Grid.prototype.getGrid = function()
{
            return this.grid;
}

///////////////////////////////////////////////////////////////////////////////
// SUPPORT functions
///////////////////////////////////////////////////////////////////////////////
// Create a "Use" element
///////////////////////////////////////////////////////////////////////////////

Grid.prototype.use = function(href,transform)
{
	
	var use = document.getElementById(href);	
	
	var use = document.createElementNS(this.getNS(),"use"); 
	    
	    use.setAttributeNS(this.getxlinkNS(),"xlink:href","#"+href); 	    
	    
	    use.setAttribute("transform",transform);	    
					
        document.getElementById(document.getElementsByTagName("svg").item(0).id).appendChild(use);
     
}

///////////////////////////////////////////////////////////////////////////////
// MAIN: Start
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Support function: Abstract Grid
///////////////////////////////////////////////////////////////////////////////

Grid.prototype.abstract = function(x,y,width,height,AmountX,AmountY)
{

var i,j,x1,y1,x2,y2;
var all = 0;

// Vertical
for (i=0;i <= (AmountY) ;i++) {

x1 = (x+((width/AmountY)*i));
y1 = y;

x2 = x1;
y2 = (y+height);

this.grid[all] = {x1: x1,y1: y1,x2: x2,y2: y2};
all++; 
}

// Horizontal
for (i=0;i <= (AmountX) ;i++) {


x1 = x;
y1 = (y+((height/AmountX)*i));

x2 = (x+width);
y2 = y1;

this.grid[all] = {x1: x1,y1: y1,x2: x2,y2: y2};
all++;
}

// previous version
/////////////////////////////////////////

// Vertical
// for (i=0;i <= (AmountY) ;i++) {

// x1 = (x+((width/AmountX)*i));
// y1 = y;

// x2 = (x+((width/AmountX)*i));
// y2 = (y+height);

// this.grid[all] = {x1: x1,y1: y1,x2: x2,y2: y2};
// all++; 
// }

// offset = 1;

// Horizontal
// for (i=0;i <= (AmountX) ;i++) {


// x1 = x;
// y1 = (y+((height/AmountY)*i));

// x2 = (x+width);
// y2 = ((y+height/AmountY)*i);

// this.grid[all] = {x1: x1,y1: y1,x2: x2,y2: y2};
// all++;
// }

}


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//Create the object: Grid
///////////////////////////////////////////////////////////////////////////////

Grid.prototype.define = function(id,x,y,height,width,AmountX,AmountY,style)
{

    var symbol = document.createElementNS(this.getNS(),"symbol"); 
	    symbol.setAttribute("id",id);	
    
    var group = document.createElementNS(this.getNS(),"g");
    
    var lines = new Array();
   
        this.abstract(x,y,height,width,AmountX,AmountY);


 
    for (i=0; i<this.getGrid().length;i++) {
    	
    	
    	lines[i] = document.createElementNS(this.getNS(),"line");
    	
    	lines[i].setAttribute("x1",this.getGrid()[i].x1); 
        lines[i].setAttribute("y1",this.getGrid()[i].y1); 
        
        lines[i].setAttribute("x2",this.getGrid()[i].x2); 
        lines[i].setAttribute("y2",this.getGrid()[i].y2); 
        
        lines[i].setAttribute("style",style);		
 	
	    group.appendChild(lines[i]);	

	
	}
	
	symbol.appendChild(group);
	    			
        document.getElementById(this.getLayer()).appendChild(symbol);
    	

        
}   
///////////////////////////////////////////////////////////////////////////////
// MAIN: End
///////////////////////////////////////////////////////////////////////////////
// initialize the library in SVG file
// get parameters and create initial objects
// init can be called in svg root node: onload="new Grid().init(evt)"
// currently, init() is defined in the svg file directly.
///////////////////////////////////////////////////////////////////////////////
Grid.prototype.init = function()
{

// example:
// new Grid().grid("grid_1",0,0, 480,640,5,5 "stroke:#000000;stroke-width:1px");


}
///////////////////////////////////////////////////////////////////////////////
