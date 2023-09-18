var biryaniLocations = ['Naaz Biryani', 'Al Rehman Biryani', 'Naseeb Biryani']
biryaniLocations.push('Ghousia Nalli Biryani')
biryaniLocations.shift()

biryaniLocations.unshift('Naaz Biryani')
biryaniLocations.pop()


biryaniLocations.splice(1, 1)
biryaniLocations.splice(3, 2)

biryaniLocations.splice(3, 2, 'Chanda Biryani', 'Allahwala Biryani', 'Wow Biryani')



var biryaniNotLike = prompt("Enter your unfavorite Biryani Location.")
var index = biryaniLocations.indexOf(biryaniNotLike)
biryaniLocations.splice(index, 1)

biryaniLocations[1] = 'Qadri Nalli Biryani'
// ---

var colors = ['red', 'blue', 'yellow', 'gray']

var colorIndex = prompt('At which you want to add a color?')
var colorName = prompt('Which color do you want to add?')

colors.splice(colorIndex, 0, colorName)

// ----
var colorIndex = prompt('At which index you want to remove a color?')
var colorQuantity = prompt('How many colors you want to remove from ' + colorIndex + ' index?')

colors.splice(colorIndex, colorQuantity)