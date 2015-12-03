var ProjectFacade = {

    config: {
        "svgElement/Duration": 300, //for chromosomes
        "elementDescription/Duration" : 300,
        "elementDescription/Delay" :300,
        svgSelector : "#vis",
        arrow:{
            left: ".left_arrow",
            right: ".right_arrow"
        },
        svgElement : ".svgElement",
    },

    registerModules: [],

    data: {
        '.element-1': {
            title: [{ "text": "Chromosome 1", "title":1 ,"x": 370, "y": -90, "font-family":"sans-serif", "fill": "#7D7C7D", "font-size":"35px", "font-weight": "normal" }],
            circle: [{"x_axis": 450, "y_axis": 80, "radius":140, "color": "#F7F8FB" }],
            text: [{"x": 370, "y": 40, "font-family":"'sans-serif'", "fill": "#3595DA", "font-size":"70px", "text":"LCT", "font-weight": "900" },
            	   {"x": 370, "y": 90, "font-family":"sans-serif", "fill": "#3595DA", "font-size":"35px", "text":"Lactose", "font-weight": "bold" },
            	   {"x": 370, "y": 130, "font-family":"sans-serif", "fill": "#3595DA", "font-size":"35px", "text":"Intolerance", "font-weight": "bold" },
            	   ],            
        },
        '.element-2': {
            title: [{"x": 520, "y": -90, "font-family":"sans-serif", "fill": "#7D7C7D", "font-size":"35px", "text": "Chromosome 2", "font-weight": "normal" }], //NA in facade -> Just of NameSpace
            circle: [{"x_axis": 590, "y_axis": 80, "radius":140, "color": "#F7F8FB" },
            		 ],
            text: [{"x": 520, "y": 40, "font-family":"'sans-serif'", "fill": "#3595DA", "font-size":"70px", "text":"LCT", "font-weight": "900" },
            	   {"x": 520, "y": 90, "font-family":"sans-serif", "fill": "#3595DA", "font-size":"35px", "text":"Lactose", "font-weight": "bold" },
            	   {"x": 520, "y": 130, "font-family":"sans-serif", "fill": "#3595DA", "font-size":"35px", "text":"Intolerance", "font-weight": "bold" },
            	   
            	   ],            
        },
        '.element-3': {
            title: [{"x": 620, "y": -90, "font-family":"sans-serif", "fill": "#7D7C7D", "font-size":"35px", "text": "Chromosome 3", "font-weight": "normal" }],
            circle: [{"x_axis": 450, "y_axis": 80, "radius":140, "color": "#F7F8FB" },
            		 {"x_axis": 690, "y_axis": 180, "radius":140, "color": "#F7F8FB" }],
            text: [{"x": 370, "y": 40, "font-family":"'sans-serif'", "fill": "#3595DA", "font-size":"70px", "text":"LCT", "font-weight": "900" },
            	   {"x": 370, "y": 90, "font-family":"sans-serif", "fill": "#3595DA", "font-size":"35px", "text":"Lactose", "font-weight": "bold" },
            	   {"x": 370, "y": 130, "font-family":"sans-serif", "fill": "#3595DA", "font-size":"35px", "text":"Intolerance", "font-weight": "bold" },
            	   
            	   ],            
        },
    }

};