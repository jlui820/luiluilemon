# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Product.destroy_all

demo_user = User.create!({email: 'tucker@gmail.com', password:'123456', first_name: 'tucker', last_name: 'roo'})

#shorts
product1 = Product.create!(itemtype: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'S', details: 'Designed for Training', price: 68, color: 'Gravel Dust Alpine White Multi')
photo1 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/theshortwhiSC.png')
product1.photo.attach(io: photo1, filename:'theshortwhiSC.png')

product2 = Product.create!(itemtype: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'M', details: 'Designed for Training', price: 68, color: 'Black')
photo2 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/theshortblkSC.png')
product2.photo.attach(io: photo2, filename:'theshortblkSC.png')

product3 = Product.create!(itemtype: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'S', details: 'Designed for Training', price: 68, color: 'Variegated Mesh Camo Black')
photo3 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/paceBrkCamoSC.png')
product3.photo.attach(io: photo3, filename:'paceBrkCamoSC.png')

product4 = Product.create!(itemtype: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'M', details: 'Designed for Training', price: 68, color: 'Carbon Dust')
photo4 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/pacBreakerCarbSC.png')
product4.photo.attach(io: photo4, filename:'pacBreakerCarbSC.png')

product5 = Product.create!(itemtype: 'shirts', name: "Metal Vent Breathe Short Sleeve", description: "We designed this lightweight and breathable top to keep the air flowing when you're pounding the pavement.", size: 'S', details: 'Designed for Training', price: 68, color: 'Holy Camo/Black/Graphite Grey')
photo5 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/metalCamoSC.png')
product5.photo.attach(io: photo5, filename:'metalCamoSC.png')

product6 = Product.create!(itemtype: 'shirts', name: "Metal Vent Breathe Short Sleeve", description: "We designed this lightweight and breathable top to keep the air flowing when you're pounding the pavement.", size: 'M', details: 'Designed for Training', price: 68, color: 'Ceramic/White')
photo6 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/metalVentWhiteSC.png')
product6.photo.attach(io: photo6, filename:'metalVentWhiteSC.png')

product7 = Product.create!(itemtype: 'shirts', name: "Metal Vent Tech Short Sleeve 2.0", description: 'Meet the ultimate technical training top. Breathable and built with anti-stink technology, it was born to perform sweat after sweat.', size: 'S', details: 'Designed for Running and Training', price: 88, color: 'Mineral Blue/True Navy')
photo7 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/MVBlueSC.png')
product7.photo.attach(io: photo7, filename: 'MVBlueSC.png')

product8 = Product.create!(itemtype: 'shirts', name: "Metal Vent Tech Short Sleeve 2.0", description: 'Meet the ultimate technical training top. Breathable and built with anti-stink technology, it was born to perform sweat after sweat.', size: 'M', details: 'Designed for Running and Training', price: 88, color: 'Slate/White')
photo8 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/MVWhiteSC.png')
product8.photo.attach(io: photo8, filename:'MVWhiteSC.png')

product9 = Product.create!(itemtype: 'pants', name: "ABC Jogger 30'", description: 'Never experienced ABC (anti-ball crushing) technology? It’s like moving from a cramped studio apartment to a house with a yard.', size: 'S', details: 'Designed for Office Travel Commute', price: 128, color: 'True Navy')
photo9 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/abcJogNvySC.png')
product9.photo.attach(io: photo9, filename:'abcJogNvySC.png')

product10 = Product.create!(itemtype: 'pants', name: "ABC Jogger 30'", description: 'Never experienced ABC (anti-ball crushing) technology? It’s like moving from a cramped studio apartment to a house with a yard.', size: 'M', details: 'Designed for Office Travel Commute', price: 128, color: 'Black')
photo10 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/abcJoggerBlkSC.png')
product10.photo.attach(io: photo10, filename:'abcJoggerBlkSC.png')


product11 = Product.create!(itemtype: 'pants', name: "City Sweat Jogger French Terry 29'", description: 'Workout, hang out, whatever. These soft, versatile French Terry fabric joggers let you do it all in peak comfort.', size: 'S', details: 'Designed for Office Travel Commute', price: 118, color: 'Lunar Rock')
photo11 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/citySweatLunarSC.png')
product11.photo.attach(io: photo11, filename:'citySweatLunarSC.png')

product12 = Product.create!(itemtype: 'pants', name: "City Sweat Jogger French Terry 29'", description: 'Workout, hang out, whatever. These soft, versatile French Terry fabric joggers let you do it all in peak comfort.', size: 'M', details: 'Designed for Office Travel Commute', price: 118, color: 'Heathered Ultra Light Grey/Sea Salt')
photo12 = open('https://luiluilemon-seeds.s3-us-west-1.amazonaws.com/citySweatGreysc.png')
product12.photo.attach(io: photo12, filename: 'citySweatGreysc.png')

# product21 = Product.create!(itemtype: 'shirts', name: "Metal Vent Tech Long Sleeve 2.0", description: 'Meet the ultimate technical training top. Breathable and built with anti-stink technology, it was born to perform sweat after sweat.', size: 'L', details: 'Designed for Running and Training', price: 88, color: 'Deep Coal/Black')
# product3 = Product.create!(itemtype: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'L', details: 'Designed for Training', price: 68, color: 'Heather Allover Iron Blue True Navy')
# product4 = Product.create!(itemtype: 'shorts', name: "T.H.E Short Linerless 7'", description: 'Train hard. Every day. We engineered these lightweight shorts with a split hem and smooth waistband for agility.', size: 'XL', details: 'Designed for Training', price: 68, color: 'Heather Allover Sea Salt Light Cast')
# product15 = Product.create!(itemtype: 'shorts', name: "Pulse Motivation Short Sleeve", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'L', details: 'Designed for Training', price: 68, color: 'Heathered Black/Black')

#shirts
# product16 = Product.create!(itemtype: 'shirts', name: "Pulse Motivation Short Sleeve", description: 'When the workout gets tough, this abrasion-resistant short sleeve gets tougher—built with mesh fabric for ultimate breathability.', size: 'S', details: 'Designed for Training', price: 78, color: 'Vapor/Vapor')
# product17 = Product.create!(itemtype: 'shirts', name: "Pulse Motivation Short Sleeve", description: 'When the workout gets tough, this abrasion-resistant short sleeve gets tougher—built with mesh fabric for ultimate breathability.', size: 'M', details: 'Designed for Training', price: 78, color: 'Brick/Brick')
# product18 = Product.create!(itemtype: 'shirts', name: "Pulse Motivation Short Sleeve", description: 'When the workout gets tough, this abrasion-resistant short sleeve gets tougher—built with mesh fabric for ultimate breathability.', size: 'L', details: 'Designed for Training', price: 78, color: 'Graphite Grey')
# product24 = Product.create!(itemtype: 'pants', name: "ABC Jogger 30'", description: 'Never experienced ABC (anti-ball crushing) technology? It’s like moving from a cramped studio apartment to a house with a yard.', size: 'L', details: 'Designed for Office Travel Commute', price: 128, color: 'Obsidian')
# product27 = Product.create!(itemtype: 'pants', name: "City Sweat Jogger French Terry 29'", description: 'Workout, hang out, whatever. These soft, versatile French Terry fabric joggers let you do it all in peak comfort.', size: 'L', details: 'Designed for Office Travel Commute', price: 118, color: 'Heathered Ultra Light Grey')
# product7 = Product.create!(itemtype: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'L', details: 'Designed for Training', price: 68, color: 'Heather Allover Deep Coal Black')
# product8 = Product.create!(itemtype: 'shorts', name: "Pace Breaker Short 7' Linerless", description: 'Run, train or flow. Wear this lightweight, multi-sport short for pretty much everything.', size: 'XL', details: 'Designed for Training', price: 68, color: 'Heather Allover Iron Blue True Navy')


# product9 = Product.create!(itemtype: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'S', details: 'Designed for Running', price: 68, color: 'Heather Allover Sea Salt Light Cast')
# product10 = Product.create!(itemtype: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'M', details: 'Designed for Running', price: 68, color: 'Black')
# product11 = Product.create!(itemtype: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'L', details: 'Designed for Running', price: 68, color: 'Heather Allover Deep Coal Black')
# product12 = Product.create!(itemtype: 'shorts', name: "Surge Short 4' Liner", description: 'One short to run them all. Four-way stretch, sweat-wicking, lightweight, and packed with details, you won’t want to run in anything else.', size: 'XL', details: 'Designed for Running', price: 68, color: 'Heather Allover Iron Blue True Navy')
