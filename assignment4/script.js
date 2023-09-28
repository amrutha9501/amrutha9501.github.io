var names=new Array();
names[0]="Yaakov";
names[1]="Ravi";
names[2]="jAnagha";
names[3]="Jsundar";
names[4]="paul";
names[5]="Ram";
names[6]="Adithya";
names[7]="paula";
names[8]="Janani";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}