User.create!([
  {email: "digitalreyz@gmail.com", encrypted_password: "$2a$11$P69NpVNT54nSMQrsFlY5g.lQjOVxc6cAXAPJ8Us3hLh5WgMZwzWlO", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2017-01-21 18:12:28", last_sign_in_at: "2017-01-12 20:49:01", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
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
  {title: "KRS", description: "krs description", designer: "r2z2", user_id: 1, category_id: nil},
  {title: "UX Man", description: "a super hero comes to the rescue", designer: "zt", user_id: 1, category_id: 3},
  {title: "Super Stacey Project", description: "asdfjklhasdfkjsa asdlfkhsadkfjlhsadf sldjfhkjasd salkjsdk aklawlkjaf a;lkas ska asklfsadlkfas fasldfkjs", designer: "zt", user_id: 1, category_id: 3}
])
ProjectImage.create!([
  {name: "awesome image1", urlpath: "http://webdesignsurvivalist.com/wp-content/uploads/2011/11/modern-propaganda-poster-21.jpeg", project_id: 1},
  {name: "weird image1", urlpath: "https://s-media-cache-ak0.pinimg.com/564x/54/49/9c/54499cc9181b5b4feacf3e935c1a9d73.jpg", project_id: 2},
  {name: "Cool image1", urlpath: "http://www.topdesignmag.com/wp-content/uploads/2011/01/propoganda_political_poster24.jpg", project_id: 3},
  {name: "Super 3435", urlpath: "https://i1.wp.com/www.casualoptimist.com/wp-content/uploads/2016/04/How-Propaganda-Works-design-Chris-Ferrante.jpg?fit=800%2C1218", project_id: 2},
  {name: "DangerDesign", urlpath: "https://c1.staticflickr.com/3/2037/1894294455_b5b9f715e6_b.jpg", project_id: 7},
  {name: "PropagandaZ5123", urlpath: "http://riverbankoftruth.com/wp-content/uploads/2013/12/Media_Propaganda_by_Trosious-414x640.jpg", project_id: 4},
  {name: "Mr. T", urlpath: "https://s-media-cache-ak0.pinimg.com/736x/93/6d/05/936d05480f91aa0ff5dbffa087c091c0.jpg", project_id: 7},
  {name: "super hero image", urlpath: "https://img0.etsystatic.com/035/0/9275466/il_570xN.576678684_ham8.jpg", project_id: 8},
  {name: "Another Ux Spiderman", urlpath: "https://s-media-cache-ak0.pinimg.com/736x/c0/87/da/c087dab0a701c34bd55ac080a6f8661d.jpg", project_id: 6},
  {name: "daredevil ux", urlpath: "https://img0.etsystatic.com/030/3/8692605/il_570xN.615231010_4ks7.jpg", project_id: 6},
  {name: "super stacey01", urlpath: "http://bumbumbum.me/wp-content/uploads/2010/03/super_hero_dad_by_FernandoLucas-e1268342957768.jpg", project_id: 9},
  {name: "super stacey02", urlpath: "http://orig03.deviantart.net/6316/f/2012/100/5/7/weapon_x_by_thelincdesign-d4vn6su.jpg", project_id: 9},
  {name: "super stacey 03", urlpath: "https://cdn.shopify.com/s/files/1/1207/2972/products/il_fullxfull.908622814_tpq1_grande.jpeg?v=1458211925", project_id: 9}
])
