# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
		projects = Project.create([
					{title: 'Awesome Design', description: 'awesome description1', designer: 'Zach', user_id: 1, category_id: 1},
					{title: 'Weird Design', description: 'weird description2', designer: 'ZT', user_id: 1, category_id: 2},
					{title: 'Cool Design', description: 'Cool description3', designer: 'r2z2', user_id: 1, category_id: 3},
					{title: 'Super Design', description: 'Super description4', designer: 'Zmo', user_id: 1, category_id: 1}
				])

		categories = Category.create([{name: 'Design'}, {name: 'Illustration'}, {name: 'UX'}])