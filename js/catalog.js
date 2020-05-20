'use strict';

var allRecipes = [];

function Recipe(name,webpage,picpage,ingredients){
  this.name = name;
  this.webpage = webpage;
  this.picpage = picpage;
  this.ingredients = ingredients;

  allRecipes.push(this);

}

new Recipe ('Baked Potato','https://www.bonappetit.com/recipe/perfect-baked-potato','https://assets.bonappetit.com/photos/57adbcc353e63daf11a4de2e/16:9/w_2560,c_limit/perfect-baked-potato.jpg',['olive oil','salt','black pepper','butter','vegetable/canola oil','chives'])
new Recipe ('Boiled Potato','https://www.foodnetwork.com/recipes/food-network-kitchen/boiled-potatoes-with-butter-recipe-1944015','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/8/0/fnk_buttered-boiled-potatoes_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383819323924.jpeg',['garlic','bay leaf','peppercorns','salt','butter','black pepper'])
new Recipe ('French fries','https://www.allrecipes.com/recipe/219634/chef-johns-french-fries/','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3867045.jpg&w=596&h=596&c=sc&poi=face&q=85',['vegetable/canola oil','salt'])
new Recipe ('Cheesy mashed potatoes','https://www.tasteofhome.com/recipes/cheesy-mashed-potatoes/','https://www.tasteofhome.com/wp-content/uploads/2018/01/Cheesy-Mashed-Potatoes_EXPS_HPBZ16_17094_D05_25_4b-696x696.jpg',['cream cheese','cheddar cheese','sour cream','onion','eggs','salt','black pepper'])
new Recipe ('Hashbrowns','https://cookieandkate.com/crispy-hash-browns-recipe/','https://cookieandkate.com/images/2018/02/crispy-hash-browns-recipe-1-1-550x824.jpg',['salt','garlic powder','onion powder','olive oil'])
new Recipe ('Grilled potatoes','https://www.delish.com/cooking/recipe-ideas/a20164811/best-grilled-potatoes-recipe/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-grilled-potatoes-jpg-1526061594.jpg?crop=1.00xw:0.847xh;0,0.125xh&resize=768:*',['salt','black pepper','garlic powder','olive oil','fresh herbs'])
new Recipe ('Hasselback potatoes','https://www.goodhousekeeping.com/food-recipes/easy/a36268/cheesy-hasselbacks/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/52/3200x1600/landscape-1450730272-ghk-0116-cheesy-hasselbacks.jpg?resize=768:*',['olive oil','salt','cheddar cheese','sour cream','chives','bacon'])
new Recipe ('Potato cakes','https://www.allrecipes.com/recipe/223597/old-fashioned-potato-cakes/','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F874657.jpg&w=596&h=399&c=sc&poi=face&q=85',['flour','onion','eggs','black pepper','salt','vegetable/canola oil'])
new Recipe ('Potato chips','https://www.tasteofhome.com/recipes/homemade-potato-chips/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXQhbr864sfgGNASXnDM8VvvMkvkg-1yIwuFOlY9HP6iWeZxwf&usqp=CAU',['salt','garlic powder','celery salt','black pepper','vegetable/canola oil'])
new Recipe ('Potato salad','https://www.goodhousekeeping.com/food-recipes/a45219/creamy-potato-salad-recipe/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/1500909052-potato-salad.jpg?crop=1xw:0.99975xh;center,top&resize=768:*',['mayonnaise','milk','white vinegar','Sugar','celery','parsley','chives'])
new Recipe ('Potato skins','https://www.goodhousekeeping.com/food-recipes/a10462/potato-skins-recipe-ghk1010/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsHmh19WlszGTNq_VEQzV_dOv6LwSD2Nn2L8YMUdv8UPQ1USd7&usqp=CAU',['bacon','olive oil','salt','black pepper','sour cream','romano cheese','tomato','chives'])
new Recipe ('Potato soup','https://www.tasteofhome.com/recipes/best-ever-potato-soup/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmFnElrpgZpV6-ZzSLooGcuitlf-U3qji8gwX3Owiyxy8Axcxx&usqp=CAU',['bacon','carrot','onion','parsley','salt','black pepper','celery seed','chicken broth','flour','milk','Velveeta Cheese','green onion'])
new Recipe ('Potatoes au gratin','https://www.onceuponachef.com/recipes/potatoes-au-gratin.html','https://www.onceuponachef.com/images/2014/12/Potatoes-au-Gratin-760x959.jpg',['butter','salt','black pepper','parmesan cheese','heavy cream','thyme'])
new Recipe ('Roasted potatoes','https://www.delish.com/cooking/recipe-ideas/a22865719/herb-roasted-potatoes-recipe/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-roasted-potatoes-vertical-1-1540492242.jpg?resize=768:*',['olive oil','garlic','rosemary','parsley','thyme','salt','black pepper','red pepper flakes'])
new Recipe ('Scalloped potatoes','https://www.spendwithpennies.com/scalloped-potatoes-recipe/','https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Scalloped-Potatoes-25.jpg',['butter','onion','garlic','flour','milk','chicken broth','salt','black pepper'])
new Recipe ('Sweet potato fries','https://www.foodnetwork.com/recipes/paula-deen/baked-sweet-potato-fries-recipe-2013040','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/4/0/IP0311_Baked_Sweet_Potato_Fires.jpg.rend.hgtvcom.826.620.suffix/1371585705338.jpeg',['olive oil','vegetable/canola oil','salt','black pepper','garlic powder','paprika'])
new Recipe ('Sweet potato chips','https://www.marthastewart.com/317420/baked-sweet-potato-chips','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd15%2Fmla102889chips1%2Fmla102889chips1_horiz.jpg%3Fitok%3DU7TbVOqj',['olive oil','salt','lime'])
new Recipe ('Tater tots','https://damndelicious.net/2015/04/10/homemade-tater-tots/','https://s23209.pcdn.co/wp-content/uploads/2015/04/Homemade-Tater-Tots-1.jpg',['flour','garlic powder','onion powder','oregano','dill','salt','black pepper','vegetable/canola oil','parsley'])
new Recipe ('Twice baked potato','https://allrecipes.com/recipe/24332/ultimate-twice-baked-potatoes/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS46Eg0a0QOMWa9rM2oAEpgi5bfv7b-kf9LxFe-SFEUizm6JCA&usqp=CAU',['bacon','sour cream','milk','butter','salt','black pepper','cheddar cheese','green onion'])
new Recipe ('Tater tot caserole','https://www.bunsinmyoven.com/tater-tot-casserole/','https://www.bunsinmyoven.com/wp-content/uploads/2019/10/tater-tot-casserole-recipe-2.jpg',['ground beef','onion','garlic','mixed vegetables','cream of chicken','worcestershire sauce','hot sauce','cheddar cheese','tater tots'])
new Recipe ('Baked mashed potato','https://www.allrecipes.com/recipe/24291/baked-mashed-potatoes/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7UT1ZdySccjYY5WZkhW1115FKL0yYqSRnT226vo2IBj2mGLNk&usqp=CAU',['butter','milk','mozzarella','vegetable/canola oil','black pepper','bread crumbs'])
new Recipe ('Bombay potatoes','https://www.bbcgoodfood.com/recipes/bombay-potatoes','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/06/bombay-potato.jpg?itok=bDjy0bZr',['ginger','garlic','tomato','vegetable/canola oil','onion','green chillies','mustard seeds','coriander','turmeric','cumin','masala'])
new Recipe ('Gnocchi','https://www.allrecipes.com/recipe/18465/gnocchi-i/','https://images.media-allrecipes.com/userphotos/720x405/1070416.jpg',['flour','eggs'])
new Recipe ('Fried mashed potato balls','https://www.delish.com/cooking/recipe-ideas/a22566735/fried-mashed-potato-balls-recipe/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk8M7byh0oPTJKPcMuIQhE3EgqbnZh4OMCqFMUjN1j__U9eafZ&usqp=CAU',['bacon','cheddar cheese','chives','garlic powder','salt','black pepper','eggs','bread crumbs','oil'])
new Recipe ('Sweet mashed potatoes','https://cookieandkate.com/savory-mashed-sweet-potatoes/','https://cookieandkate.com/images/2017/12/savory-mashed-sweet-potatoes-recipe-1-550x824.jpg',['salt','green onion','parsley','garlic','sour cream','butter','black pepper','olive oil'])
new Recipe ('Charred sweet potatotes with hot honey butter and lime','https://www.bonappetit.com/recipe/charred-sweet-potatoes-with-hot-honey-butter-and-lime','https://assets.bonappetit.com/photos/5da0f356e01fbd000819240d/16:9/w_2560,c_limit/1119-Sides-Charred-Sweet-Potatoes.jpg',['olive oil','salt','butter','honey','hot sauce','pumpkin seeds','coriander','salt','lime'])
new Recipe ('Garlic butter potatoes','https://www.delish.com/cooking/recipe-ideas/recipes/a55051/garlic-butter-potatoes-recipe/','https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/640x958/gallery-1504289153-delish-cheesy-garlic-butter-potatoes-pinterest-still003.jpg?resize=768:*',['butter','garlic','black pepper','salt','olive oil','mozzarella','Parmesan Cheese','parsley'])
new Recipe ('Garlic roasted potatoes','https://www.foodnetwork.com/recipes/ina-garten/garlic-roasted-potatoes-recipe-1913067','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsejJG4DdW5U5et91OLMQvBxDhaTxTt2WNYi4vwhHvjrc3QCRG&usqp=CAU',['parsley','garlic','black pepper','salt','olive oil'])
new Recipe ('Crispy ginger Scallion Latkes','https://www.goodhousekeeping.com/food-recipes/a35790/crispy-ginger-scallion-latkes/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/46/1600x800/landscape-1447440665-1215-ghk-crispy-ginger-scallion-latkes.jpg?resize=768:*',['matzo meal','eggs','ginger','green onion','vegetable/canola oil'])
new Recipe ('Herbed mashed potatoes','https://www.goodhousekeeping.com/food-recipes/a14963/garlicky-herb-mashed-potatoes-recipe-ghk0313/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/herbed-mashed-potatoes-ghk-1119-1570722397.jpg?crop=0.961xw:0.961xh;0.0221xw,0.0386xh&resize=768:*',['Salt','Heavy Cream','butter','thyme','parsley','bay leaf','peppercorns','nutmeg'])
new Recipe ('Potato Leek Soup','https://www.goodhousekeeping.com/food-recipes/easy/a29428925/potato-leek-soup-recipe/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/potato-leek-soup-ghk-1119-1570729560.jpg?crop=1.00xw:0.867xh;0,0.107xh&resize=768:*',['Olive oil','leeks','garlic','fennel','celery','salt','black pepper','chicken broth','thyme','bay leaf','lemon juice'])
new Recipe ('Potato Tacos','https://leitesculinaria.com/274538/recipes-crispy-mashed-potato-tacos.html','https://s23991.pcdn.co/wp-content/uploads/2020/01/crispy-mashed-potato-tacos-1.jpg',['vegetable/canola oil','corn tortillas','sour cream','cilantro','lime','red cabbage','salsa'])
new Recipe ('Sour Cream Mashed potatoes','https://www.goodhousekeeping.com/food-recipes/a46617/sour-cream-mashed-potatoes-recipe/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sour-cream-mashed-potatoes-ghk-1119-1570726110.jpg?crop=0.863xw:0.864xh;0.137xw,0.136xh&resize=768:*',['salt','black pepper','sour cream','milk','butter','white cheddar'])
new Recipe ('Creamy Basil Potato Salad','https://www.goodhousekeeping.com/food-recipes/a21753032/creamy-basil-potato-salad-recipe/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-basil-potato-salad-ghk-1529602903.jpg?crop=0.9998000399920016xw:1xh;center,top&resize=768:*',['salt','black pepper','crème fraich','dijon mustard','lemon juice','scallions','basil'])
new Recipe ('Creamy one-pot Garlic Mashed potatoes','https://www.goodhousekeeping.com/food-recipes/a46616/creamy-one-pot-garlic-mashed-potatoes-recipe/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/43/1508955420-creamy-one-pot-garlic-mash-1117.jpg?crop=0.9997143673236218xw:1xh;center,top&resize=768:*',['rosemary','garlic','heavy cream','milk','butter','salt','black pepper'])
new Recipe ('Chorizo Potato Skins','https://www.goodhousekeeping.com/food-recipes/a47660/chorizo-queso-potato-skins-recipe/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/03/2048x3071/gallery-1516289833-chorizo-queso-potato-skins-ghk-0218.jpg?resize=768:*',['white cheddar','monterrey jack cheese','flour','chorizo','scallions','jalapeno','salt','beer','pico de gallo','olive oil'])
new Recipe ('Easy Potato Latkes','https://www.goodhousekeeping.com/food-recipes/easy/a46929/easy-potato-latkes-recipe/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/46/1510946408-latkes-ghk-1217.jpg?crop=0.9992862241256246xw:1xh;center,top&resize=768:*',['eggs','salt','black pepper','onion','matzo meal','olive oil'])
new Recipe ('German Potato Salad','https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=25','https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/20/2048x3074/gallery-1494967383-ghk060117bobrecipes02.jpg?resize=980:*',['bacon','rosemary','beer','onion','garlic','caraway seeds','green onion','vinegar','mustard','parsley','sugar'])
new Recipe ('Loaded Sweet potatoes','https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=31','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gallery-1476413531-ghk090116yk-supercarb-loaded-sweet-potatoes-1571240474.jpg?crop=0.447xw:1.00xh;0.355xw,0&resize=980:*',['black beans','feta','red peppers','olive oil','parsley','salt'])
new Recipe ('Grilled potato salad with blue cheese vinaigrette','https://www.goodhousekeeping.com/food-recipes/a13638/grilled-potato-salad-blue-cheese-vinaigrette-recipe-ghk0712/','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gallery-1476413531-ghk090116yk-supercarb-loaded-sweet-potatoes-1571240474.jpg?crop=0.447xw:1.00xh;0.355xw,0&resize=980:*',['salt','black pepper','vinegar','shallot','dijon mustard','blue cheese','olive oil','watercress','green onion'])
new Recipe ('Stuffed parmesan potatoes','https://www.goodhousekeeping.com/food-recipes/a15129/stuffed-parmesan-potatoes-recipe-ghk1212/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/06/1518119309-stuffed-potatoes-philip-friedman.jpg?crop=0.9989583333333334xw:1xh;center,top&resize=980:*',['sour cream','parmesan cheese','basil','thyme','salt','black pepper'])
new Recipe ('Accordion potatoes','https://www.goodhousekeeping.com/food-recipes/a6976/accordion-potatoes-ghk1207/','https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/06/1518119275-grilled-salad-kate-mathis.jpg?crop=0.9989583333333334xw:1xh;center,top&resize=980:*',['olive oil','salt','black pepper','parsley','thyme'])
new Recipe ('Loaded slowcooked potatoes','https://www.delish.com/cooking/recipe-ideas/recipes/a50007/slow-cooker-loaded-potatoes/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSohj-zRTRd63qjfB8edzbcxuj2AjDHGUyA8P-AlgpJ0ruo902l&usqp=CAU',['cooking spray','cheddar cheese','garlic','bacon','green onion','paprika','salt','black pepper','sour cream'])
new Recipe ('Potato skin burgers','https://www.delish.com/cooking/recipe-ideas/recipes/a53815/potato-skin-burgers-recipe/','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRzQRFPN3tMi1IKRao7C1Z5H4EwJ16lCFYcKxtjWewRzZsYwv5&usqp=CAU',['salt','black pepper','olive oil','ground beef','bacon','cheddar cheese','sour cream','chives'])
new Recipe ('Lemon and Parsley Skillet-Roasted Fingerling Potatoes','https://www.bonappetit.com/recipe/lemon-and-parsley-skillet-roasted-fingerling-potatoes','https://assets.bonappetit.com/photos/57acd77053e63daf11a4da93/16:9/w_2560,c_limit/lemon-and-parsley-skillet-roasted-fingerling-potatoes.jpg',['lemon juice','salt','butter','parsley','salt'])

function createElement(element, content, parent){
  var newElement = document.createElement(element);
  newElement.textContent = content;
  parent.appendChild(newElement);
  return newElement;
}
