# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




user1 = User.create!({email: 'jeff@gmail.com', password:'123456', first_name: 'jeff1', last_name: 'lui'})


#shorts
product1 = Product.create!(type: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'S', details: 'Designed for Training', price: 68 color: 'Gravel Dust Alpine White Multi')
product2 = Product.create!(type: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'M', details: 'Designed for Training', price: 68 color: 'Black')
product3 = Product.create!(type: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'L', details: 'Designed for Training', price: 68 color: 'Heather Allover Iron Blue True Navy')
product4 = Product.create!(type: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'XL', details: 'Designed for Training', price: 68 color: 'Heather Allover Sea Salt Light Cast')

product5 = Product.create!(type: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'S', details: 'Designed for Training', price: 68 color: 'Variegated Mesh Camo Black')
product6  Product.create!(type: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'M', details: 'Designed for Training', price: 68 color: 'Carbon Dust')
product7 = Product.create!(type: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'L', details: 'Designed for Training', price: 68 color: 'Heather Allover Deep Coal Black')
product8 = Product.create!(type: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'XL', details: 'Designed for Training', price: 68 color: 'Heather Allover Iron Blue True Navy')


product9 = Product.create!(type: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'S', details: 'Designed for Running', price: 68 color: 'Heather Allover Sea Salt Light Cast')
product10 = Product.create!(type: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'M', details: 'Designed for Running', price: 68 color: 'Black')
product11 = Product.create!(type: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'L', details: 'Designed for Running', price: 68 color: 'Heather Allover Deep Coal Black')
product12 = Product.create!(type: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'XL', details: 'Designed for Running', price: 68 color: 'Heather Allover Iron Blue True Navy')


product13 = Product.create!(type: 'shorts', name: "Pulse Motivation Short Sleeve", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'S', details: 'Designed for Training', price: 68 color: 'Heathered Smoky Red/Black')
product14  Product.create!(type: 'shorts', name: "Pulse Motivation Short Sleeve", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'M', details: 'Designed for Training', price: 68 color: 'Heathered Melody Light Grey/Black')
product15 = Product.create!(type: 'shorts', name: "Pulse Motivation Short Sleeve", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'L', details: 'Designed for Training', price: 68 color: 'Heathered Black/Black')

#shirts
product16 = Product.create!(type: 'shirts', name: "Pulse Motivation Short Sleeve", description: 'When the workout gets tough, this abrasion-resistant short sleeve gets tougher—built with mesh fabric for ultimate breathability.', size: 'S', details: 'Designed for Training', price: 78 color: 'Vapor/Vapor')
product17  Product.create!(type: 'shirts', name: "Pulse Motivation Short Sleeve", description: 'When the workout gets tough, this abrasion-resistant short sleeve gets tougher—built with mesh fabric for ultimate breathability.', size: 'M', details: 'Designed for Training', price: 78 color: 'Brick/Brick')
product18 = Product.create!(type: 'shirts', name: "Pulse Motivation Short Sleeve", description: 'When the workout gets tough, this abrasion-resistant short sleeve gets tougher—built with mesh fabric for ultimate breathability.', size: 'L', details: 'Designed for Training', price: 78 color: 'Graphite Grey')


product19 = Product.create!(type: 'shirts', name: "Metal Vent Tech Long Sleeve 2.0", description: 'Meet the ultimate technical training top. Breathable and built with anti-stink technology, it was born to perform sweat after sweat.', size: 'S', details: 'Designed for Running and Training', price: 88 color: 'Sea Water/Tidewater Teal')
product20  Product.create!(type: 'shirts', name: "Metal Vent Tech Long Sleeve 2.0", description: 'Meet the ultimate technical training top. Breathable and built with anti-stink technology, it was born to perform sweat after sweat.', size: 'M', details: 'Designed for Running and Training', price: 88 color: 'Slate/White')
product21 = Product.create!(type: 'shirts', name: "Metal Vent Tech Long Sleeve 2.0", description: 'Meet the ultimate technical training top. Breathable and built with anti-stink technology, it was born to perform sweat after sweat.', size: 'L', details: 'Designed for Running and Training', price: 88 color: 'Deep Coal/Black')

product22 = Product.create!(type: 'pants', name: "ABC Jogger 30'", description: 'Never experienced ABC (anti-ball crushing) technology? It’s like moving from a cramped studio apartment to a house with a yard.', size: 'S', details: 'Designed for Office Travel Commute', price: 128 color: 'True Navy')
product23  Product.create!(type: 'pants', name: "ABC Jogger 30'", description: 'Never experienced ABC (anti-ball crushing) technology? It’s like moving from a cramped studio apartment to a house with a yard.', size: 'M', details: 'Designed for Office Travel Commute', price: 128 color: 'Black')
product24 = Product.create!(type: 'pants', name: "ABC Jogger 30'", description: 'Never experienced ABC (anti-ball crushing) technology? It’s like moving from a cramped studio apartment to a house with a yard.', size: 'L', details: 'Designed for Office Travel Commute', price: 128 color: 'Obsidian')

product25 = Product.create!(type: 'pants', name: "City Sweat Jogger French Terry 29'", description: 'Workout, hang out, whatever. These soft, versatile French Terry fabric joggers let you do it all in peak comfort.', size: 'S', details: 'Designed for Office Travel Commute', price: 128 color: 'Lunar Rock')
product26  Product.create!(type: 'pants', name: "City Sweat Jogger French Terry 29'", description: 'Workout, hang out, whatever. These soft, versatile French Terry fabric joggers let you do it all in peak comfort.', size: 'M', details: 'Designed for Office Travel Commute', price: 128 color: 'Heathered Ultra Light Grey/Sea Salt')
product27 = Product.create!(type: 'pants', name: "City Sweat Jogger French Terry 29'", description: 'Workout, hang out, whatever. These soft, versatile French Terry fabric joggers let you do it all in peak comfort.', size: 'L', details: 'Designed for Office Travel Commute', price: 128 color: 'Heathered Ultra Light Grey')

