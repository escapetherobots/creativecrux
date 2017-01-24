User.create!([
  {email: "escapetherobots@gmail.com", encrypted_password: "$2a$11$V8kEdr4xQYxpwI3keh7A4eXhZiEqfiFq0xaaJCSsxU9dFdrbVvIvS", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 6, current_sign_in_at: "2017-01-24 16:26:41", last_sign_in_at: "2017-01-23 21:56:44", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", admin: true}
])
Category.create!([
  {name: "Design"},
  {name: "Illustration"},
  {name: "UX"},
  {name: "Branding"}
])
Project.create!([
  {title: "Awesome Design", description: "awesome description1", designer: "Zach", user_id: 1, category_id: 1},
  {title: "Weird Design", description: "weird description2", designer: "ZT", user_id: 1, category_id: 2},
  {title: "Cool Design", description: "Cool description3", designer: "r2z2", user_id: 1, category_id: nil},
  {title: "Super Design", description: "Super description444444", designer: "Zmo", user_id: 1, category_id: 1},
  {title: "My New New Proj", description: "My New New Proj My New New Proj My New New ProjMy New New ProjMy New New ProjMy New New Proj My New New Proj My New New ProjMy New New Proj", designer: "zt", user_id: 1, category_id: 2},
  {title: "UXUXUX UX", description: "some awesome ux projects that will blow people away!", designer: "ztest", user_id: 1, category_id: nil},
  {title: "KRS", description: "krs description", designer: "r2z2", user_id: 1, category_id: 1},
  {title: "UX Man", description: "a super hero comes to the rescue", designer: "zt", user_id: 1, category_id: 3},
  {title: "Super Stacey Project", description: "asdfjklhasdfkjsa asdlfkhsadkfjlhsadf sldjfhkjasd salkjsdk aklawlkjaf a;lkas ska asklfsadlkfas fasldfkjs", designer: "zt", user_id: 1, category_id: 3},
  {title: "Super Duper Project", description: "An h1 header\r\n============\r\n\r\n# New Header\r\n\r\n## New Sub Header 2\r\n\r\n### New Header 3\r\n\r\n*This text will be italic*\r\n\r\nParagraphs are separated by a blank line.\r\n\r\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\r\nlook like:\r\n\r\n  * this one\r\n  * that one\r\n  * the other one\r\n\r\nNote that --- not considering the asterisk --- the actual text\r\ncontent starts at 4-columns in.\r\n\r\n> Block quotes are\r\n> written like so.\r\n>\r\n> They can span multiple paragraphs,\r\n> if you like.\r\n\r\nUse 3 dashes for an em-dash. Use 2 dashes for ranges (ex., \"it's all\r\nin chapters 12--14\"). Three dots ... will be converted to an ellipsis.\r\nUnicode is supported. ☺\r\n\r\n\r\n``` ruby\r\ndef test\r\n  @answer = 6*9\r\n  if @answer != 42  # this should never happen\r\n    raise \"Oh no, not again.\"\r\n  else\r\n    print \"Don't panic.\"\r\nend\r\n```\r\n\r\nhttp://github.com - automatic!\r\n[GitHub](http://github.com)\r\n<a href=\"http://example.com/\" target=\"_blank\">Hello, world!</a>", designer: "Zach Thompson", user_id: 1, category_id: 1}
])
ProjectImage.create!([
  {name: "awesome image1", urlpath: "http://webdesignsurvivalist.com/wp-content/uploads/2011/11/modern-propaganda-poster-21.jpeg", project_id: 1},
  {name: "weird image1", urlpath: "https://s-media-cache-ak0.pinimg.com/564x/54/49/9c/54499cc9181b5b4feacf3e935c1a9d73.jpg", project_id: 2},
  {name: "Cool image1", urlpath: "http://www.topdesignmag.com/wp-content/uploads/2011/01/propoganda_political_poster24.jpg", project_id: 3},
  {name: "Super 3435", urlpath: "https://i1.wp.com/www.casualoptimist.com/wp-content/uploads/2016/04/How-Propaganda-Works-design-Chris-Ferrante.jpg?fit=800%2C1218", project_id: 2},
  {name: "DangerDesign", urlpath: "https://c1.staticflickr.com/3/2037/1894294455_b5b9f715e6_b.jpg", project_id: 7},
  {name: "PropagandaZ5123", urlpath: "http://riverbankoftruth.com/wp-content/uploads/2013/12/Media_Propaganda_by_Trosious-414x640.jpg", project_id: 4},
  {name: "super hero image", urlpath: "https://img0.etsystatic.com/035/0/9275466/il_570xN.576678684_ham8.jpg", project_id: 8},
  {name: "Another Ux Spiderman", urlpath: "https://s-media-cache-ak0.pinimg.com/736x/c0/87/da/c087dab0a701c34bd55ac080a6f8661d.jpg", project_id: 6},
  {name: "daredevil ux", urlpath: "https://img0.etsystatic.com/030/3/8692605/il_570xN.615231010_4ks7.jpg", project_id: 6},
  {name: "super stacey01", urlpath: "http://bumbumbum.me/wp-content/uploads/2010/03/super_hero_dad_by_FernandoLucas-e1268342957768.jpg", project_id: 9},
  {name: "super stacey02", urlpath: "http://orig03.deviantart.net/6316/f/2012/100/5/7/weapon_x_by_thelincdesign-d4vn6su.jpg", project_id: 9},
  {name: "super stacey 03", urlpath: "https://cdn.shopify.com/s/files/1/1207/2972/products/il_fullxfull.908622814_tpq1_grande.jpeg?v=1458211925", project_id: 9},
  {name: "Bike Site Test", urlpath: "http://creativecrux.s3.amazonaws.com/images/_fullsize/bike-site-03.jpg", project_id: 10}
])
