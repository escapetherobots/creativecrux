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

		project_images = ProjectImage.create([
				{name: 'awesome image1', urlpath: 'http://webdesignsurvivalist.com/wp-content/uploads/2011/11/modern-propaganda-poster-21.jpeg', project_id: 1},
				{name: 'weird image1', urlpath: 'https://s-media-cache-ak0.pinimg.com/564x/54/49/9c/54499cc9181b5b4feacf3e935c1a9d73.jpg', project_id: 2},
				{name: 'Cool image1', urlpath: 'http://www.topdesignmag.com/wp-content/uploads/2011/01/propoganda_political_poster24.jpg', project_id: 3},
				{name: 'super image1', urlpath: 'http://previews.123rf.com/images/tribalium123/tribalium1231208/tribalium123120800405/14974426-worker-holding-a-hammer-poster-for-labor-day-male-worker-with-hammer-workers-design-Stock-Vector.jpg', project_id: 4}
			])