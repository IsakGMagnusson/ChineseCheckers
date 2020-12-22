const HOLE_NO_COLOR = "none";
const HOLE_GREEN_COLOR = "green";
const HOLE_RED_COLOR = "red";

var stringified = JSON.stringify({
    "Holes": [
         {
			"id": 0,
            "color": HOLE_NO_COLOR,
            "jumpable":[[1,3], [2,5]], 
            "isSelected": true
        },
		 {
			"id": 1,
            "color": HOLE_NO_COLOR,
            "jumpable":[[0,null], [2,null], [3,6], [4,8]], 
            "isSelected": false
        },
		 {
			"id": 2,
            "color": HOLE_NO_COLOR,
            "jumpable":[[0,null], [1,null], [4,7], [5,9]], 
            "isSelected": false
        },
		 {
			"id": 3,
            "color": HOLE_NO_COLOR,
            "jumpable":[[1,0], [4,5], [6,14], [7,16]], 
            "isSelected": false
        },
		 {
			"id": 4,
            "color": HOLE_NO_COLOR,
            "jumpable":[[1,null], [2,null], [3,null], [5,null], [7,15], [8,17]], 
            "isSelected": false
        },
        {
           "id": 5,
           "color": HOLE_NO_COLOR,
           "jumpable":[[2, 0], [4, 3], [8, 16], [9, 18]], 
           "isSelected": false
       },
       {
            "id": 6,
            "color": HOLE_NO_COLOR,
            "jumpable":[[3,1], [7,8], [14,26], [15, 28]], 
            "isSelected": false
        },
        {
            "id": 7,
            "color": HOLE_NO_COLOR,
            "jumpable":[[3, null], [4,2], [6,null], [8,9], [15,27], [16,29]], 
            "isSelected": false
        },
        {
            "id": 8,
            "color": HOLE_NO_COLOR,
            "jumpable":[[4,1], [5,null], [7,6], [9,null], [16,28], [17,30]], 
            "isSelected": false
        },
        {
            "id": 9,
            "color": HOLE_NO_COLOR,
            "jumpable":[[5,2], [8,7], [17,29], [18,31]], 
            "isSelected": false,
        },
        {
            "id": 10,
            "color": HOLE_NO_COLOR,
            "jumpable":[[11,12], [23,35]], 
            "isSelected": false,
        },
        {
            "id": 11,
            "color": HOLE_NO_COLOR,
            "jumpable":[[10,null], [12,13], [23,null], [24,36]], 
            "isSelected": false,
        },
        {
            "id": 12,
            "color": HOLE_NO_COLOR,
            "jumpable":[[11,12], [13,14], [24,35], [25,37]], 
            "isSelected": false,
        },
        {
            "id": 13,
            "color": HOLE_NO_COLOR,
            "jumpable":[[12,11], [14,15], [25,36], [26,38]], 
            "isSelected": false,
        },
        {
            "id": 14,
            "color": HOLE_NO_COLOR,
            "jumpable":[[6,3], [13,12], [15,16], [26,37], [27,39]], 
            "isSelected": false,
        },
        {
            "id": 15,
            "color": HOLE_NO_COLOR,
            "jumpable":[[6,null], [7,4], [14,13], [16,17], [27,38], [28,40]], 
            "isSelected": false,
        },
        {
            "id": 16,
            "color": HOLE_NO_COLOR,
            "jumpable":[[7,3], [8,5], [15,14], [17,18], [28,39], [29,41]], 
            "isSelected": false,
        },
        {
            "id": 17,
            "color": HOLE_NO_COLOR,
            "jumpable":[[8,4], [9,null], [16,15], [18,19], [29,40], [30,42]], 
            "isSelected": false,
        },
        {
            "id": 18,
            "color": HOLE_NO_COLOR,
            "jumpable":[[9,null], [17,16], [19,20], [30,41], [31,43]], 
            "isSelected": false,
        },
        {
            "id": 19,
            "color": HOLE_NO_COLOR,
            "jumpable":[[18,17], [20,21], [31,42], [32,44]], 
            "isSelected": false,
        },
        {
            "id": 20,
            "color": HOLE_NO_COLOR,
            "jumpable":[[19,18], [21,22], [32,43], [33,45]], 
            "isSelected": false,
        },
        {
            "id": 21,
            "color": HOLE_NO_COLOR,
            "jumpable":[[20,19], [22,null], [33,44], [45,null]], 
            "isSelected": false,
        },
        {
            "id": 22,
            "color": HOLE_NO_COLOR,
            "jumpable":[[21,20], [34,45]], 
            "isSelected": false,
        },
        {
            "id": 23,
            "color": HOLE_NO_COLOR,
            "jumpable":[[10,null], [11,null], [24,25], [35,46]], 
            "isSelected": false,
        },
        {
            "id": 24,
            "color": HOLE_NO_COLOR,
            "jumpable":[[11,null], [12, null], [23,null], [25,26], [35,null], [36,47]], 
            "isSelected": false,
        },
        {
            "id": 25,
            "color": HOLE_NO_COLOR,
            "jumpable":[[12,null], [13,null], [24, 23], [26,27], [36,46], [37,48]], 
            "isSelected": false,
        },
        {
            "id": 26,
            "color": HOLE_NO_COLOR,
            "jumpable":[[13,null], [14,6], [25,24], [27,28], [37,47], [38,49]], 
            "isSelected": false,
        },
        {
            "id": 27,
            "color": HOLE_NO_COLOR,
            "jumpable":[[14, null], [15,7], [26,25], [28,29], [38,48], [39,50]], 
            "isSelected": false,
        },
        {
            "id": 28,
            "color": HOLE_NO_COLOR,
            "jumpable":[[15,6], [16,8], [27,26], [29,30], [39,49], [40,51]], 
            "isSelected": false,
        },
        {
            "id": 29,
            "color": HOLE_NO_COLOR,
            "jumpable":[[16,7], [17,9], [28,27], [30,31], [40,50], [41,52]], 
            "isSelected": false,
        },
        {
            "id": 30,
            "color": HOLE_NO_COLOR,
            "jumpable":[[17,8], [18,null], [29,28], [31,32], [41,51], [42,53]], 
            "isSelected": false,
        },
        {
            "id": 31,
            "color": HOLE_NO_COLOR,
            "jumpable":[[18,9], [19,null], [30,29], [32,33], [42,52], [43,54]], 
            "isSelected": false,
        },
        {
            "id": 32,
            "color": HOLE_NO_COLOR,
            "jumpable":[[19,null], [20,null], [31,30], [33,34], [43,53], [44,55]], 
            "isSelected": false,
        },
        {
            "id": 33,
            "color": HOLE_NO_COLOR,
            "jumpable":[[20,null], [21,null], [32,31], [34,null], [44,54], [45,null]], 
            "isSelected": false,
        },
        {
            "id": 34,
            "color": HOLE_NO_COLOR,
            "jumpable":[[21,null], [22,null], [33,32], [45,null]], 
            "isSelected": false,
        },
        {
            "id": 35,
            "color": HOLE_NO_COLOR,
            "jumpable":[[23,10], [24,12], [36,37], [46,56]], 
            "isSelected": false,
        },
        {
            "id": 36,
            "color": HOLE_NO_COLOR,
            "jumpable":[[24,11], [25,13], [35,null], [37,38], [46,null], [47,57]], 
            "isSelected": false,
        },
        {
            "id": 37,
            "color": HOLE_NO_COLOR,
            "jumpable":[[25,12], [26,14], [36,35], [38,39], [47,56], [48,58]], 
            "isSelected": false,
        },
        {
            "id": 38,
            "color": HOLE_NO_COLOR,
            "jumpable":[[26,13], [27,15], [37,36], [39,40], [48,57], [49,59]], 
            "isSelected": false,
        },
        {
            "id": 39,
            "color": HOLE_NO_COLOR,
            "jumpable":[[27,14], [28,16], [38,37], [40,41], [49,58], [50,60]], 
            "isSelected": false,
        },
        {
            "id": 40,
            "color": HOLE_NO_COLOR,
            "jumpable":[[28,15], [29,17], [39,38], [41,42], [50,59], [51,61]], 
            "isSelected": false,
        },
        {
            "id": 41,
            "color": HOLE_NO_COLOR,
            "jumpable":[[29,16], [30,18], [39,40], [42,43], [51,60], [52,62]], 
            "isSelected": false,
        },
        {
            "id": 42,
            "color": HOLE_NO_COLOR,
            "jumpable":[[30,17], [31,19], [40,41], [43,44], [52,61], [53,63]], 
            "isSelected": false,
        },
        {
            "id": 43,
            "color": HOLE_NO_COLOR,
            "jumpable":[[31,18], [32,20], [42,41], [44,45], [53,62], [63,64]], 
            "isSelected": false,
        },
        {
            "id": 44,
            "color": HOLE_NO_COLOR,
            "jumpable":[[32,19], [33,21], [43,42], [45,null], [54,63], [64,null]], 
            "isSelected": false,
        },
        {
            "id": 45,
            "color": HOLE_NO_COLOR,
            "jumpable":[[33,20], [34,22], [44,43], [55,64]], 
            "isSelected": false,
        },
        {
            "id": 46,
            "color": HOLE_NO_COLOR,
            "jumpable":[[35,23], [36,25], [47,48], [56,66]], 
            "isSelected": false,
        },
        {
            "id": 47,
            "color": HOLE_NO_COLOR,
            "jumpable":[[36,24], [37,26], [46, null], [48,49], [56,65], [57,67]], 
            "isSelected": false,
        },
        {
            "id": 48,
            "color": HOLE_NO_COLOR,
            "jumpable":[[37,25], [38,27], [47,46], [49,50], [57,66], [58,68]], 
            "isSelected": false,
        },
        {
            "id": 49,
            "color": HOLE_NO_COLOR,
            "jumpable":[[38,26], [39,28], [48,47], [50,51], [58,67], [59,69]], 
            "isSelected": false,
        },
        {
            "id": 50,
            "color": HOLE_NO_COLOR,
            "jumpable":[[39,27], [40,29], [49,48], [51,52], [59,68], [60,70]], 
            "isSelected": false,
        },
        {
            "id": 51,
            "color": HOLE_NO_COLOR,
            "jumpable":[[40,28], [41,30], [50,49], [52,53], [60,69], [61,71]], 
            "isSelected": false,
        },
        {
            "id": 52,
            "color": HOLE_NO_COLOR,
            "jumpable":[[41,29], [42,31], [51,50], [53,54], [61,70], [62,72]], 
            "isSelected": false,
        },
        {
            "id": 53,
            "color": HOLE_NO_COLOR,
            "jumpable":[[42,30], [43,32], [52,51], [54,55], [62,71], [63,73]], 
            "isSelected": false,
        },
        {
            "id": 54,
            "color": HOLE_NO_COLOR,
            "jumpable":[[43,31], [44,33], [53,52], [55,null], [63,72], [64,74]], 
            "isSelected": false,
        },
        {
            "id": 55,
            "color": HOLE_NO_COLOR,
            "jumpable":[[44,32], [45,34], [54,53], [64,73]], 
            "isSelected": false,
        },
        {
            "id": 56,
            "color": HOLE_NO_COLOR,
            "jumpable":[[46,35], [47,37], [57,58], [65,75], [66,77]], 
            "isSelected": false,
        },
        {
            "id": 57,
            "color": HOLE_NO_COLOR,
            "jumpable":[[47,36], [48,38], [56,null], [58,59], [66,76], [67,78]], 
            "isSelected": false,
        },
        {
            "id": 58,
            "color": HOLE_NO_COLOR,
            "jumpable":[[48,37], [49,39], [57,56], [59,60], [67,77], [68,79]], 
            "isSelected": false,
        },
        {
            "id": 59,
            "color": HOLE_NO_COLOR,
            "jumpable":[[49,38], [50,40], [58,57], [60,61], [68,78], [69,80]], 
            "isSelected": false,
        },
        {
            "id": 60,
            "color": HOLE_NO_COLOR,
            "jumpable":[[50,39], [51,41], [59,58], [61,62], [69,79], [70,81]], 
            "isSelected": false,
        },
        {
            "id": 61,
            "color": HOLE_NO_COLOR,
            "jumpable":[[51,40], [52,42], [60,59], [62,63], [70,80], [71,82]], 
            "isSelected": false,
        },
        {
            "id": 62,
            "color": HOLE_NO_COLOR,
            "jumpable":[[52,41], [53,43], [61,60], [63,64], [71,81], [72,83]], 
            "isSelected": false,
        },
        {
            "id": 63,
            "color": HOLE_NO_COLOR,
            "jumpable":[[53,42], [54,44], [62,61], [64,null], [72,82], [73,84]], 
            "isSelected": false,
        },
        {
            "id": 64,
            "color": HOLE_NO_COLOR,
            "jumpable":[[54,43], [55,45], [63,62], [73,83], [74,85]], 
            "isSelected": false,
        },
        {
            "id": 65,
            "color": HOLE_NO_COLOR,
            "jumpable":[[56,47], [66,67], [75,86], [76,88]], 
            "isSelected": false,
        },
        {
            "id": 66,
            "color": HOLE_NO_COLOR,
            "jumpable":[[56,46], [57,48], [65,null], [67,68], [76,87], [77,89]], 
            "isSelected": false,
        },
        {
            "id": 67,
            "color": HOLE_NO_COLOR,
            "jumpable":[[57,47], [58,49], [66,65], [68,69], [77,88], [78,90]], 
            "isSelected": false,
        },
        {
            "id": 68,
            "color": HOLE_NO_COLOR,
            "jumpable":[[58,48], [59,50], [67,66], [69,70], [78,89], [79,91]], 
            "isSelected": false,
        },
        {
            "id": 69,
            "color": HOLE_NO_COLOR,
            "jumpable":[[59,49], [60,51], [68,67], [70,71], [79,90], [80,92]], 
            "isSelected": false,
        },
        {
            "id": 70,
            "color": HOLE_NO_COLOR,
            "jumpable":[[60,50], [61,52], [69,68], [71,72], [80,91], [81,93]], 
            "isSelected": false,
        },
        {
            "id": 71,
            "color": HOLE_NO_COLOR,
            "jumpable":[[61,51], [62,53], [70,69], [72,73], [81,92], [82,94]], 
            "isSelected": false,
        },
        {
            "id": 72,
            "color": HOLE_NO_COLOR,
            "jumpable":[[62,52], [63,54], [71,70], [73,74], [82,93], [83,95]], 
            "isSelected": false,
        },
        {
            "id": 73,
            "color": HOLE_NO_COLOR,
            "jumpable":[[63,53], [64,55], [72,71], [74,null], [83,94], [84,96]], 
            "isSelected": false,
        },
        {
            "id": 74,
            "color": HOLE_NO_COLOR,
            "jumpable":[[64,54], [65,56], [73,72], [84,95], [85,97]], 
            "isSelected": false,
        },
        {
            "id": 75,
            "color": HOLE_NO_COLOR,
            "jumpable":[[65,56], [76,77], [86,98], [87,100]], 
            "isSelected": false,
        },
        {
            "id": 76,
            "color": HOLE_NO_COLOR,
            "jumpable":[[65,null], [66,57], [75,null], [77,78], [87,99], [88,101]], 
            "isSelected": false,
        },
        {
            "id": 77,
            "color": HOLE_NO_COLOR,
            "jumpable":[[66,56], [67,58], [76,75], [78,79], [88,100], [89,101]], 
            "isSelected": false,
        },
        {
            "id": 78,
            "color": HOLE_NO_COLOR,
            "jumpable":[[67,57], [68,59], [77,76], [79,80], [89,101], [90,103]], 
            "isSelected": false,
        },
        {
            "id": 79,
            "color": HOLE_NO_COLOR,
            "jumpable":[[68,58], [69,60], [78,77], [80,81], [90,102], [91,104]], 
            "isSelected": false,
        },
        {
            "id": 80,
            "color": HOLE_NO_COLOR,
            "jumpable":[[69,59], [70,61], [79,78], [81,82], [91,103], [92,105]], 
            "isSelected": false,
        },
        {
            "id": 81,
            "color": HOLE_NO_COLOR,
            "jumpable":[[70,60], [71,62], [80,79], [82,83], [92,104], [93,106]], 
            "isSelected": false,
        },
        {
            "id": 82,
            "color": HOLE_NO_COLOR,
            "jumpable":[[71,61], [72,63], [81,80], [83,84], [93,105], [94,107]], 
            "isSelected": false,
        },
        {
            "id": 83,
            "color": HOLE_NO_COLOR,
            "jumpable":[[72,62], [73,64], [82,81], [84,85], [94,106], [95,108]], 
            "isSelected": false,
        },
        {
            "id": 84,
            "color": HOLE_NO_COLOR,
            "jumpable":[[73,63], [74,65], [83,82], [85,null], [95,107], [96,109]], 
            "isSelected": false,
        },
        {
            "id": 85,
            "color": HOLE_NO_COLOR,
            "jumpable":[[74,64], [75,66], [84,83], [96,108], [97,110]], 
            "isSelected": false,
        },
        {
            "id": 86,
            "color": HOLE_NO_COLOR,
            "jumpable":[[75,65], [87,88], [98,null], [99,null]], 
            "isSelected": false,
        },
        {
            "id": 87,
            "color": HOLE_NO_COLOR,
            "jumpable":[[75,null], [76,66], [86,null], [88,89], [99,null], [100,null]], 
            "isSelected": false,
        },
        {
            "id": 88,
            "color": HOLE_NO_COLOR,
            "jumpable":[[76,65], [77,67], [87,86], [89,90], [100,null], [101,null]], 
            "isSelected": false,
        },
        {
            "id": 89,
            "color": HOLE_NO_COLOR,
            "jumpable":[[77,66], [78,68], [88,87], [90,91], [101,null], [102,111]], 
            "isSelected": false,
        },
        {
            "id": 90,
            "color": HOLE_NO_COLOR,
            "jumpable":[[78,67], [79,69], [89,88], [91,92], [102,null], [103,112]], 
            "isSelected": false,
        },
        {
            "id": 91,
            "color": HOLE_NO_COLOR,
            "jumpable":[[79,68], [80,70], [90,89], [92,93], [103,111], [104,113]], 
            "isSelected": false,
        },
        {
            "id": 92,
            "color": HOLE_NO_COLOR,
            "jumpable":[[80,69], [81,71], [91,90], [93,94], [104,112], [105,114]], 
            "isSelected": false,
        },
        {
            "id": 93,
            "color": HOLE_NO_COLOR,
            "jumpable":[[81,70], [82,72], [92,91], [94,95], [105,113], [106,null]], 
            "isSelected": false,
        },
        {
            "id": 94,
            "color": HOLE_NO_COLOR,
            "jumpable":[[82,71], [83,73], [93,92], [95,96], [106,114], [107,null]], 
            "isSelected": false,
        },
        {
            "id": 95,
            "color": HOLE_NO_COLOR,
            "jumpable":[[83,72], [84,74], [94,93], [96,97], [107,null], [108,null]], 
            "isSelected": false,
        },
        {
            "id": 96,
            "color": HOLE_NO_COLOR,
            "jumpable":[[84,73], [85,null], [95,94], [96,null], [108,null], [109,null]], 
            "isSelected": false,
        },
        {
            "id": 97,
            "color": HOLE_NO_COLOR,
            "jumpable":[[85,74], [96,95], [109,null], [110,null]], 
            "isSelected": false,
        },
        {
            "id": 98,
            "color": HOLE_NO_COLOR,
            "jumpable":[[86,75], [99,100]], 
            "isSelected": false,
        },
        {
            "id": 99,
            "color": HOLE_NO_COLOR,
            "jumpable":[[86,null], [87,76], [98,null], [100,101]], 
            "isSelected": false,
        },
        {
            "id": 100,
            "color": HOLE_NO_COLOR,
            "jumpable":[[87,75], [88,77], [99,98], [101,102]], 
            "isSelected": false,
        },
        {
            "id": 101,
            "color": HOLE_NO_COLOR,
            "jumpable":[[88,76], [89,79], [100,99], [102,103]], 
            "isSelected": false,
        },
        {
            "id": 102,
            "color": HOLE_NO_COLOR,
            "jumpable":[[89,77], [90,79], [101,100], [103,104], [111,115]], 
            "isSelected": false,
        },
        {
            "id": 103,
            "color": HOLE_NO_COLOR,
            "jumpable":[[90,78], [91,80], [102,101], [104,105], [111,null], [112,116]], 
            "isSelected": false,
        },
        {
            "id": 104,
            "color": HOLE_NO_COLOR,
            "jumpable":[[91,79], [92,81], [103,102], [105,106], [112,115], [113,117]], 
            "isSelected": false,
        },
        {
            "id": 105,
            "color": HOLE_NO_COLOR,
            "jumpable":[[92,80], [93,82], [104,103], [106,107], [113,116], [114,null]], 
            "isSelected": false,
        },
        {
            "id": 106,
            "color": HOLE_NO_COLOR,
            "jumpable":[[93,81], [94,83], [105,104], [107,108], [114,117]], 
            "isSelected": false,
        },
        {
            "id": 107,
            "color": HOLE_NO_COLOR,
            "jumpable":[[94,82], [95,84], [106,105], [108,109]], 
            "isSelected": false,
        },
        {
            "id": 108,
            "color": HOLE_NO_COLOR,
            "jumpable":[[95,83], [96,85], [107,106], [109,110]], 
            "isSelected": false,
        },
        {
            "id": 109,
            "color": HOLE_NO_COLOR,
            "jumpable":[[96,84], [97,null], [108,107], [110,null]], 
            "isSelected": false,
        },
        {
            "id": 110,
            "color": HOLE_NO_COLOR,
            "jumpable":[[97,98], [109,108]], 
            "isSelected": false,
        },
        {
            "id": 111,
            "color": HOLE_NO_COLOR,
            "jumpable":[[102,89], [103,91], [112, 113], [115,118]], 
            "isSelected": false,
        },
        {
            "id": 112,
            "color": HOLE_NO_COLOR,
            "jumpable":[[103, 90], [104,92], [111,null], [113,114], [115,null], [116,119]], 
            "isSelected": false,
        },
        {
            "id": 113,
            "color": HOLE_NO_COLOR,
            "jumpable":[[104,91], [105,93], [112,111], [114,null], [116,118], [117,null]], 
            "isSelected": false,
        },
        {
            "id": 114,
            "color": HOLE_NO_COLOR,
            "jumpable":[[105,92], [106,94], [113,112], [117,119]], 
            "isSelected": false,
        },
        {
            "id": 115,
            "color": HOLE_NO_COLOR,
            "jumpable":[[111,102], [112,104], [116,117], [118,120]], 
            "isSelected": false,
        },
        {
            "id": 116,
            "color": HOLE_NO_COLOR,
            "jumpable":[[112,103], [113,105], [117,null], [115,null], [118,null], [119,null]], 
            "isSelected": false,
        },
        {
            "id": 117,
            "color": HOLE_NO_COLOR,
            "jumpable":[[113,104], [114,106], [116,115], [119,120]], 
            "isSelected": false,
        },
        {
            "id": 118,
            "color": HOLE_NO_COLOR,
            "jumpable":[[115,111], [116,113], [119,null], [120,null]], 
            "isSelected": false,
        },
        {
            "id": 119,
            "color": HOLE_NO_COLOR,
            "jumpable":[[116,112], [117,115], [118,null], [120,null]], 
            "isSelected": false,
        },
        {
            "id": 120,
            "color": HOLE_NO_COLOR,
            "jumpable":[[118,115], [119,117]], 
            "isSelected": false,
        } 
    ]
});

let holes = JSON.parse(stringified).Holes;

    //holes in triangles
const greenHome = holes.slice(0, 10);
const redHome = holes.slice(111, 121);

    //keep track where the hole moved to and from
let movedHole;
let holeMovedFrom;

let isSingleHopAllowed = true;
let isDoubleHopAllowed = true;

    //array to keep track of jumps made
let recordHops = [];

function setStartingHoles(){
    if(playersInMatch.length >= 1) greenHome.forEach(hole => hole.color = HOLE_GREEN_COLOR)
    if(playersInMatch.length >= 2) redHome.forEach(hole => hole.color = HOLE_RED_COLOR)
    
    holes.forEach(hole => colorHole(hole));
}

function selectHole(event){
    const clickedHole = holes.find(hole=>hole.id==event.target.id);

    if(clickedHole.color === HOLE_NO_COLOR && isHopPossible(getSelectedHole(), clickedHole)) 
        jump(getSelectedHole(), clickedHole);
    
    else if(getPlayerTurn().color == clickedHole.color && 
            getPlayerTurn().id == clientId             && 
            movedHole == null){
            
        if(holes.some(hole => hole.isSelected)) 
            getSelectedHole().isSelected = false;
       
        recordHops = [];
        recordHops.push(clickedHole);

        holeMovedFrom = clickedHole;
        clickedHole.isSelected = true;
    }
}

function isHopPossible(holeToJump, jumpToHole){
        //single hop
    if(holeToJump.jumpable.some(tuple => tuple[0] === jumpToHole.id && isSingleHopAllowed))
        return true;
        
        //double hop
     else if(holeToJump.jumpable.some(tuple => tuple[1] === jumpToHole.id && 
             getHoleFromId(tuple[0]).color != HOLE_NO_COLOR               && 
             isDoubleHopAllowed))
        return true;
                
        //no hop possible
     else
        return false;
}

function jump(holeToJump, jumpToHole){
    moveToEmptyHole(holeToJump, jumpToHole);
    swapSelect(holeToJump, jumpToHole);
    limitHops(holeToJump, jumpToHole);

    movedHole = jumpToHole;

    recordHops.push(jumpToHole);
    
    addComponent("undoBtn");
    addComponent("nextTurnBtn");

    if(movedHole.id == holeMovedFrom.id){
        resetMovementRestrictions();
        removeComponent("undoBtn");
        removeComponent("nextTurnBtn");
    }
}

function moveToEmptyHole(fromHole, toHole){
    toHole.color = fromHole.color;
    fromHole.color = HOLE_NO_COLOR;
    holes.forEach(hole => colorHole(hole));
}

function swapSelect(removeSelect, newSelect){
    removeSelect.isSelected = false;
    newSelect.isSelected = true;
}

function limitHops(movedFrom, movedTo){
    if(movedFrom.jumpable.some(tuple => tuple[0] === movedTo.id)){
        isDoubleHopAllowed = false;
        isSingleHopAllowed = false;
    } else{
        isSingleHopAllowed = false;
    }
}

function showHopsMadeInTurn(savedHops){
    //reset movement made during turn for player who moved
    if(getPlayerTurn().id == clientId)
        moveToEmptyHole(movedHole, holeMovedFrom) 

    //time between each jump
    const jumpDelay = 700;
    
    let i = 0;
    //loop with timeout.  
    function loop() {         
        setTimeout(function() {  
    
                //get object from string of object
            const savedHopMovingFrom = holes.find(hole => hole.id == savedHops[i].id);
            const savedHopMovingTo = holes.find(hole => hole.id == savedHops[i+1].id);

                //make the jump
            moveToEmptyHole(savedHopMovingFrom, savedHopMovingTo);
        
            i++;           
            
            //Recursively call the loop function again         
            if (i < savedHops.length-1) {          
                loop(); 
            
                //go next turn when done 
            } else{
                //check if a player won
                checkWin();

                goNextPlayer();
                resetMovementRestrictions();
            }
        }, jumpDelay)
    }
        //start the loop
    loop();  
}

function resetMovementRestrictions(){
    movedHole.isSelected = false;
    holeMovedFrom.isSelected = false;
    movedHole = null;
    holeMovedFrom = null;
    isSingleHopAllowed = true;
    isDoubleHopAllowed = true;
}

function checkWin(){
        //if redHome full of green pebbles
    if(redHome.every(hole => hole.color === HOLE_GREEN_COLOR)){ 
        addPlayerWon(getGreenPlayer());
    }
    
        //if greenHome full of red pebbles
    if(greenHome.every(hole => hole.color === HOLE_RED_COLOR)){
        addPlayerWon(getRedPlayer());
    }
}

function undo(){
    moveToEmptyHole(movedHole, holeMovedFrom);
    resetMovementRestrictions();
}

function reset(){
    holes.forEach(hole => hole.color = HOLE_NO_COLOR);
    setStartingHoles();
    holes.forEach(hole => colorHole(hole));
}

function getHoleFromId(id){
    return holes.find(hole => hole.id == id);
}

function getSelectedHole(){
    return holes.find(hole=>hole.isSelected); 
}