
var RandomQuoteMachine = function(){
	//matching quotes and author values have the same index
	 var quotes = [" Today's scientists have substituted mathematics for experiments, and they wander off through equation after equation, and eventually build a structurewhich has no relation to reality.", 
	" Do not, for one repulse, forego the purpose that you resolved to effect.",
	" Reason has always existed, but not always in a reasonable form.",
	" I stand in awe of my body.",
	" He who can, does. He who cannot, teaches.",
	" Humor is always based on a modicum of truth. Have you ever heard a joke about a father-in-law?",
	" Camping is nature's way of promoting the motel business.",
	" A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go but where they ought to be.",
	" They can conquer who believe they can.",
	" Money frees you from doing things you dislike. Since I dislike doing nearly everything, money is handy.",
	" One should as a rule respect public opinion in so far as is necessary to avoid starvation and to keep out of prison, but anything that goes beyond this is voluntary submission to an unnecessary tyranny, and is likely to interfere with happiness in all kinds of ways.",
	" Just because something doesn't do what you planned it to do doesn't mean it's useless.",
	" Order is the shape upon which beauty depends.",
	" In a few minutes a computer can make a mistake so great that it would have taken many men many months to equal it.",
	" I was thinking about the universe wanting to be noticed, and how I had to notice it as best I could. I felt that I owed a debt to the universe that only my attention could repay, and also that I owed a debt to everybody who didn’t get to be a person anymore and everyone who hadn’t gotten to be a person yet.",
	" You've got to take the bitter with the sour.",
	" California is a fine place to live--if you happen to be an orange.",
	" Disobedience, in the eyes of anyone who has read history, is man's original virtue. It is through disobedience and rebellion that progress has been made.",
	" Depend not on fortune, but on conduct."];

	var authors = ["Nikola Tesla (1857 - 1943)", "William Shakespeare (1564 - 1616)", 
	"Karl Marx (1818 - 1883)", "Henry David Thoreau (1817 - 1862)", 
	"George Bernard Shaw (1856 - 1950)", "Dick Clark", "Dave Barry (1947 - )", 
	"Rosalynn Carter (1927 - )", "Virgil (70 BC - 19 BC)", "Groucho Marx (1890 - 1977)", 
	"Bertrand Russell (1872 - 1970)", "Thomas A. Edison (1847 - 1931)", 
	"Pearl Buck (1892 - 1973)", "Unknown", "John Green, The Fault in Our Stars, 2012", 
	"Samuel Goldwyn (1882 - 1974)", "Fred Allen (1894 - 1956)", "Oscar Wilde (1854 - 1900)", 
	"The Soul of Man Under Socialism", "Publilius Syrus (~100 BC)"];

	var colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	var quote = "";
	var quoteText = document.querySelector(".quote-txt");
	var author = document.querySelector(".author");
	var quoteBtn = document.querySelector(".new-quote");
	var quoteTheme = document.querySelectorAll(".quote-theme");
	var tweetBtn = document.querySelector(".tweet-btn");

	//Add event listeners and using this function, only test once which method to use
	var addEventListener = function(element, event, handler){
		if(element.addEventListener){
		element.addEventListener(event, handler, false);
		} 
		//for IE < 9
		else if(element.attachEvent){
			element.attachEvent('on' + event, handler);
		}
	}

	//addEventListeners to same quote button, handlers get random quote and change background colour
	addEventListener(quoteBtn, 'click', getRandomQuote);
	addEventListener(quoteBtn, 'click', applyRandomThemeColor)

	function getRandomQuote(){
		//get random number representing a quote from the quotes array
		var randomNum = Math.floor(Math.random() * quotes.length);
		//textContent often has better performance than innerHTML because text not parsed as HTML
		//Also can prevent XSS attacks
		quoteText.textContent = quotes[randomNum];
		author.textContent = authors[randomNum];
		//to be used in tweetQuote
		quote = quotes[randomNum] + " - " + authors[randomNum];
	}

	function applyRandomThemeColor(){
		//get random color
		var randomColorsNum = Math.floor(Math.random() * colors.length);
		var themeColor = colors[randomColorsNum];

		//applies theme colour to buttons and background
		for(var i = 0; i < quoteTheme.length; i++){
			quoteTheme[i].style.backgroundColor = themeColor;
		}

		//applies themecolor to text
		quoteText.style.color = themeColor;
		author.style.color = themeColor;
	}	

	addEventListener(tweetBtn, 'click', tweetQuote);

	//provides a tweet window with quote and author populated
	function tweetQuote(){
		tweetBtn.setAttribute("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent(quote));
	}

	//Initialisation for quote text and theme color
	function init(){
		getRandomQuote();
		applyRandomThemeColor();
		tweetQuote();
	}

	return{
		init: init
	}

 }();

 window.onload = function(){
	RandomQuoteMachine.init();
}