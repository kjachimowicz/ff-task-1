/* Karolina Jachimowicz - First stage task - 02.05.2018 */

/* Testing user objects */
var user1 = {email_address: "a10000@gmail.com", language_final: "EN", country_final: "US", gender: "m", gender_confidence_level: 0.85, language_api: "en_US", Tier: "YES", Tier_level: "BRONZE", Benefits_End_Date: "2/14/2018"};
var user2 = {email_address: "d10003@gmail.com", language_final: "DE", country_final: "DE", gender: "m", gender_confidence_level: 0.62, language_api: "de_DE", Tier: "YES", Tier_level: "PRIVATE CLIENT", Benefits_End_Date: "4/5/2018"};
var user3 = {email_address: "y10050@qq.com", language_final: "RU", country_final: "UK", gender: "", gender_confidence_level: 0.58, language_api: "ru_GB", Tier: "YES", Tier_level: "PRIVATE CLIENT", Benefits_End_Date: "5/29/2018"};

var user = user1;

console.log(user.email_address);

/* 1. Create a script that identifies a user's language */

var user_language;
/* The script assign language_fianl value to user_language variable, if the language_final field is empty, it takes the first two characters from the languacge_api to specify the user's language. */
if (user.language_final == "") {
	user_language = (user.language_api.substring(0,2)).toUpperCase();
} else {
	user_language = user.language_final;
}
console.log("1. User's language: " + user_language);
/* 1b. Depending on a user_language the header_title value is changed, if the user's language is equal to one from the list the specific value is assigned, otherwise the default EN header title will be used.  */
var header_title;
if (user_language == "ES") {
	header_title = "Spanish title";
}
else if (user_language == "IT") {
	header_title = "Italian title";
}
else if (user_language == "RU") {
	header_title = "Russian title";
}
else if (user_language == "ZH") {
	header_title = "Chinese title";
}

else if (user_language == "KO") {
	header_title = "Korean title";
}

else if (user_language == "JP") {
	header_title = "Japanese title";
}

else if (user_language == "DE") {
	header_title = "German title";
}

else if (user_language == "FR") {
	header_title = "French title";
}
else {
	header_title = "English title";
}

console.log("1b. Header title: " + header_title);

/* 2. Create a script that identifies a user's country */

var user_country;
/* The value of country_final is set as user_country, if there is no country specified the US is set as a default.*/
if(user.country_final){
	user_country = user.country_final;
}
else {
	user_country = "US";
}
console.log("2. User's country: " + user_country);
/* 2a, 2b. By checking if the user_country equals CH, RU or US, the function identifies if the free shipping banner should be displayed. */
function free_shipping(){
	if(user_country == "CH" || user_country == "RU" || user_country == "US"){
		return "Display a free shipping banner";
	}
	else {
		return "No free shipping banner";
	}
};

console.log("2b. Free shipping: " + free_shipping());

/* 3. Create a script that identifies a user's gender */

var user_gender = user.gender;
/* 3a, 3b. The user gender is saved as user_gender variable, the if statement checks if the value is either blank or null and set the varaible to unisex */
if (user_gender == "" || user_gender == null){
	user_gender = "unisex";
}
console.log("3. User's gender: " + user_gender);
/* 3c. email_content function change the content of the email depending on th user's gender. By checking the gender_confidence_level, the function returns the content for each value, if the score is lower than 0.8 the unisex content will be displayed.  */
function email_content(){
	if(user.gender_confidence_level > 0.8){
		if(user_gender == "f"){
			return "Display female content";
		}
		else if (user_gender == "m") {
			return "Display male content";
		}
		else if (user_gender == "unisex") {
			return "Display unisex content";
		}
	}
	else {
		return "Display unisex content";
	}
};

console.log("3c. Email content: " + email_content());

/* 4. Create a script that identifies the loyalty programme */
/* Testing objects for Tier-Gifts tab */
var tier_gift1 = {Currency: "EUR", Tier: "PRIVATE CLIENT", Discount: 600, Threshold: 2500, Symbol: "€", Placement: "AFTER"};

var tier_gift2 = {Currency: "GBP", Tier: "PRIVATE CLIENT", Discount: 500, Threshold: 2000, Symbol: "\u00A3",	Placement: "BEFORE"};

var tier_gift3 = {Currency: "USD", Tier: "PRIVATE CLIENT", Discount: 700, Threshold: 3000, Symbol: "USD $",	Placement: "BEFORE"};
var tier_gifts = [tier_gift1, tier_gift2, tier_gift3];

var loyalty_programme;
var isEligible;
var tier_programme;

/* 4a. by checking if the value of Tier is set to Yes, the loyalty_programme value is set to true or false. */
if(user.Tier == "YES"){
	loyalty_programme = true;
	console.log("4a. User is in a loyalty programme");
	/* 4b. If the user is in a loyalty programme, the tier is checked and saved in tier_programme variable. */
	tier_programme = user.Tier_level;
	console.log("4b. Tier: " + tier_programme);
	/* 4c. Only user with PRIVATE CLIENT tier can receive a Tier-Gift, the if statment checks if the user is in that tier and set the isEligible variable to true or false. */
	if(tier_programme == "PRIVATE CLIENT"){
		console.log("4c. User is eligible for a gift");
		isEligible = true;
	} else {
		console.log("4c. User is NOT eligible for a gift");
		isEligible = false;
	}	
}
else {
	console.log("4a. User is NOT in a loyalty programme");
	loyalty_programme = false;
}
/* 4d. By taking the Benefits_End_Date and current date, the period of the gift validation is calculated */
var end_date = new Date(user.Benefits_End_Date);
var today_date = new Date();

var months = (end_date.getDate() - today_date.getDate()) / 30 + end_date.getMonth() - today_date.getMonth() + (12 * (end_date.getFullYear() - today_date.getFullYear()));
months = Math.floor(months);
/* If the value of the months is lower than zero the gift is no longer valid, otherwise the number of months left is displayed. */
if(months < 0) {
	console.log("4d. The Benefits have expired.");
}
else if(months == 0) {
	console.log("4d. You have left less than a month");	
}
else if(months == 1) {
	console.log("4d. You have left " + months + " month");	
}
else {
	console.log("4d. You have left " + months + " months");	
}
/* 5. Create a script that identifies the correct currency and value of the gift */

/* Testing objects and array to identify user's currency depending on countryCode. (Currency Tab) */
var currency1 = {countryCode: "UK",	languageCulture: "en_GB", currencyCode: "GBP"};
var currency2 = {countryCode: "DE",	languageCulture: "de_DE", currencyCode: "EUR"};
var currency3 = {countryCode: "US",	languageCulture: "en_US", currencyCode: "USD"};

var currencies = [currency1, currency2, currency3];

var user_currency;
/* 5a. Using the currency array, the script checks the user's country and assign the currecyCode to the user_currency viariable. */
if(user.country_final){
	for (var i=0; i<currencies.length; i++){
		if(user.country_final == currencies[i].countryCode){
			user_currency = currencies[i].currencyCode;
		}
	}
}
console.log("5a. User's currency: " + user_currency);

var tier_value = 0;
/* 5b. To specify if the user id eligible for a Tier-Gift, the script checks if the isEligible variable is set to true and using a user_currency variable the corresponding gift value is assign to the tier_value. */
if(isEligible && months >= 0) {
	
	for (var i=0; i<tier_gifts.length; i++){
		if(user_currency == tier_gifts[i].Currency){
			/* Specyfing the correct gift value by looking up the Tier-Gift table and comparing the currency */
			tier_value = tier_gifts[i].Discount;
			/* 5c. By checking the Placement variable, script displays the Symbol before or after the the Discount value */
			if(tier_gifts[i].Placement == "BEFORE"){
				console.log("5c. Display symbol " + tier_gifts[i].Placement + ": " + tier_gifts[i].Symbol + tier_gifts[i].Discount);
			}
			else {
				console.log();("5c. Display symbol " + tier_gifts[i].Placement + ": " + tier_gifts[i].Discount + " " + tier_gifts[i].Symbol);
			}
		}
	}
}
else {
	console.log("5b. Not Eligible for a gift");
}
	
	