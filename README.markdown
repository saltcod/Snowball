Can't read the light text on [Daring Fireball's](http://daringfireball.net/) dark background? Me either. And now you don't have to. 

This simple bookmarklet tries to lighten the mood a little. It works best on Daring Fireball, but also works anywhere else on the web. Basically, it makes the text dark and the background light. Easy as that. 

The list of selectors is incomplete, but I'll be adding to them as I go. If you come across a site that Snowball doesn't work on, just send me a note (or, better, a pull request) and I'll add it in. When I make a change, you won't need to do anything. The selector will be ready to use next time you need it. 
 
### Isn't this just like Readability though? 

Sort of, but not exactly. Readability only works well on articles. It doesn't work in forums, homepages, or anywhere else where content isn't neatly stored in article form.  Plus, while I love Readability, I don't always want the website completely reformatted—I just want to make it more readable. 


##Alright already. How do I use this thing? 

Isn't this just like Readability though? [Snowball](javascript:(function(){document.body.appendChild(document.createElement("script")).src="https://raw.github.com/saltcod/Fireball/master/snowball.js";document.body.appendChild(document.createElement("script")).src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"})())