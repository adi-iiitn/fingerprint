let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart data from localStorage
let foodItems = [
 // { name: "Chocolate Pastry", restaurant: "Mansi Restaurent", price: 50, image: "choco.jpeg" },
  //{ name: "Burger", restaurant: "Burger King", price: 150, image: "rpyal.png" },
  //{ name: "Pasta", restaurant: "Pasta House", price: 250, image: "food3.jpg" },
  //{ name: "Sushi", restaurant: "Sushi World", price: 500, image: "food4.jpg" },

  
    // Pastry Section
    { name: "Chocolate Pastry", restaurant: "Mansi Restaurant", price: 50, image: "choco.jpeg" },
    { name: "Pineapple Pastry", restaurant: "Mansi Restaurant", price: 50, image: "pipastry.jpeg" },
    { name: "Butterscotch Pastry", restaurant: "Mansi Restaurant", price: 50, image: "butterscotch.jpeg" },
    { name: "Black Forest Pastry", restaurant: "Mansi Restaurant", price: 50, image: "blackforest.jpeg" },
    { name: "Red Velvet Pastry", restaurant: "Mansi Restaurant", price: 70, image: "redvelvet.jpeg" },
  
    // Pizza Section
    { name: "Veg Pizza", restaurant: "Mansi Restaurant", price: 160, image: "vegpizza.jpeg" },
    { name: "Onion Pizza", restaurant: "Mansi Restaurant", price: 150, image: "onionpizza.jpeg" },
    { name: "Onion Tomato Pizza", restaurant: "Mansi Restaurant", price: 150, image: "oniontomatopizza.jpeg" },
    { name: "Capsicum Pizza", restaurant: "Mansi Restaurant", price: 150, image: "capsicumpizza.jpeg" },
    { name: "Cheese Corn Pizza", restaurant: "Mansi Restaurant", price: 170, image: "cheesecornpizza.jpeg" },
    { name: "Babycorn Mushroom Pizza", restaurant: "Mansi Restaurant", price: 180, image: "babycorn.jpeg" },
    { name: "Margherita Pizza", restaurant: "Mansi Restaurant", price: 150, image: "margheritapizza.jpeg" },
    { name: "Paneer Tikka Pizza", restaurant: "Mansi Restaurant", price: 190, image: "paneertikkapizza.jpeg" },
    { name: "Italian Pizza", restaurant: "Mansi Restaurant", price: 190, image: "italianpizza.jpeg" },
    { name: "Mansi Special Pizza", restaurant: "Mansi Restaurant", price: 200, image: "mansispecialpizza.jpeg" },
    { name: "Chilly Paneer Pizza", restaurant: "Mansi Restaurant", price: 190, image: "chillypaneerpizza.jpeg" },
  
    // Burger Section
    { name: "Veg Burger", restaurant: "Mansi Restaurant", price: 70, image: "vegburger.jpeg" },
    { name: "Cheese Burger", restaurant: "Mansi Restaurant", price: 80, image: "cheeseburger.jpeg" },
    { name: "Paneer Cheese Burger", restaurant: "Mansi Restaurant", price: 100, image: "paneercheeseburger.jpeg" },
    { name: "Grilled Cheese Burger", restaurant: "Mansi Restaurant", price: 90, image: "grilledcheeseburger.jpeg" },


   
    
        // Pastry Section (already included in previous code)
        // Pizza Section (already included in previous code)
        // Burger Section (already included in previous code)
      
        // Sandwich Section
        { name: "Veg Sandwich", restaurant: "Mansi Restaurant", price: 70, image: "vegsandwich.jpeg" },
        { name: "Cheese Sandwich", restaurant: "Mansi Restaurant", price: 100, image: "cheesesandwich.jpeg" },
        { name: "Veg Cheese Sandwich", restaurant: "Mansi Restaurant", price: 110, image: "vegcheesesandwich.jpeg" },
        { name: "Garlic Bread", restaurant: "Mansi Restaurant", price: 100, image: "garlicbread.jpeg" },
        { name: "Cheese Toast", restaurant: "Mansi Restaurant", price: 100, image: "cheesetoast.jpeg" },
        { name: "Paneer Sandwich", restaurant: "Mansi Restaurant", price: 120, image: "paneersandwich.jpeg" },
        { name: "Tomato Cheese Sandwich", restaurant: "Mansi Restaurant", price: 110, image: "tomatocheesesandwich.jpeg" },
      
        // Chinese Starter Section
        { name: "Veg Noodle", restaurant: "Mansi Restaurant", price: 100, image: "vegnoodle.jpeg" },
        { name: "Veg Hakka Noodle", restaurant: "Mansi Restaurant", price: 120, image: "veghakkanoodle.jpeg" },
        { name: "Hot Garlic Noodle", restaurant: "Mansi Restaurant", price: 150, image: "hotgarlicnoodle.jpeg" },
        { name: "Schezwan Noodle", restaurant: "Mansi Restaurant", price: 160, image: "schezwannoodle.jpeg" },
        { name: "Hot Chilly Noodle", restaurant: "Mansi Restaurant", price: 140, image: "hotchillynoodle.jpeg" },
        { name: "Singapuri Noodle", restaurant: "Mansi Restaurant", price: 170, image: "singapurinoodle.jpeg" },
        { name: "Veg Manchurian Dry", restaurant: "Mansi Restaurant", price: 140, image: "vegmanchuriandry.jpeg" },
        { name: "Veg Manchurian Gravy", restaurant: "Mansi Restaurant", price: 160, image: "vegmanchuriangravy.jpeg" },
        { name: "Honey Chilly Potato", restaurant: "Mansi Restaurant", price: 140, image: "honeychillypotato.jpeg" },
      
        // Chinese Main Course Section
        { name: "Chilly Paneer Dry", restaurant: "Mansi Restaurant", price: 180, image: "chillypaneerdry.jpeg" },
        { name: "Chilly Paneer Gravy", restaurant: "Mansi Restaurant", price: 200, image: "chillypaneergravy.jpeg" },
        { name: "Paneer 65", restaurant: "Mansi Restaurant", price: 170, image: "paneer65.jpeg" },
        { name: "Veg Spring Roll", restaurant: "Mansi Restaurant", price: 120, image: "vegsprinroll.jpeg" },
        { name: "Paneer Spring Roll", restaurant: "Mansi Restaurant", price: 140, image: "paneerspringroll.jpeg" },
        { name: "Crispy Corn", restaurant: "Mansi Restaurant", price: 150, image: "crispycorn.jpeg" },
        { name: "Chilly Mushroom", restaurant: "Mansi Restaurant", price: 200, image: "chillymushroom.jpeg" },
        { name: "Crispy Veg", restaurant: "Mansi Restaurant", price: 170, image: "crispyveg.jpeg" },
        { name: "Corn Chaat", restaurant: "Mansi Restaurant", price: 100, image: "cornchaat.jpeg" },
      
        // South Indian Section
        { name: "Paper Dosa", restaurant: "Mansi Restaurant", price: 60, image: "paperdosa.jpeg" },
        { name: "Masala Dosa", restaurant: "Mansi Restaurant", price: 80, image: "masaladosa.jpeg" },
        { name: "Butter Masala Dosa", restaurant: "Mansi Restaurant", price: 90, image: "buttermasaladosa.jpeg" },
        { name: "Paneer Butter Masala Dosa", restaurant: "Mansi Restaurant", price: 100, image: "paneerbuttermasaladosa.jpeg" },
        { name: "Onion Dosa", restaurant: "Mansi Restaurant", price: 80, image: "oniondosa.jpeg" },
        { name: "Mansi Special Dosa", restaurant: "Mansi Restaurant", price: 150, image: "mansispecialdosa.jpeg" },
        { name: "Onion Uttapam", restaurant: "Mansi Restaurant", price: 90, image: "onionuttapam.jpeg" },
        { name: "Tomato Uttapam", restaurant: "Mansi Restaurant", price: 90, image: "tomatouttapam.jpeg" },
        { name: "Mix Veg Uttapam", restaurant: "Mansi Restaurant", price: 100, image: "mixveguuttapam.jpeg" },
        { name: "Kadhi Rice", restaurant: "Mansi Restaurant", price: 100, image: "kadhirice.jpeg" },
      
        // Soup Section
        { name: "Cream of Tomato Soup", restaurant: "Mansi Restaurant", price: 70, image: "creamoftomatosoup.jpeg" },
        { name: "Veg Soup", restaurant: "Mansi Restaurant", price: 70, image: "vegsoup.jpeg" },
        { name: "Sweet Corn Soup", restaurant: "Mansi Restaurant", price: 80, image: "sweetcornsoup.jpeg" },
        { name: "Veg Manchow Soup", restaurant: "Mansi Restaurant", price: 70, image: "vegmanchowsoup.jpeg" },
        { name: "Hot & Sour Soup", restaurant: "Mansi Restaurant", price: 80, image: "hotandsoursoup.jpeg" },
      
        // Salad Section
        { name: "Green Salad", restaurant: "Mansi Restaurant", price: 60, image: "greensalad.jpeg" },
        { name: "Onion Salad", restaurant: "Mansi Restaurant", price: 50, image: "onionsalad.jpeg" },
        { name: "Cucumber Salad", restaurant: "Mansi Restaurant", price: 60, image: "cucumbersalad.jpeg" },
        { name: "Kachumber Salad", restaurant: "Mansi Restaurant", price: 70, image: "kachumbersalad.jpeg" },
        { name: "Masala Papad", restaurant: "Mansi Restaurant", price: 60, image: "masalapapad.jpeg" },
        { name: "Fry Papad", restaurant: "Mansi Restaurant", price: 20, image: "frypapad.jpeg" },
        { name: "Roasted Papad", restaurant: "Mansi Restaurant", price: 20, image: "roastedpapad.jpeg" },
        { name: "Fruit Salad", restaurant: "Mansi Restaurant", price: 100, image: "fruitsalad.jpeg" },




        
            // Pastry Section (already included in previous code)
            // Pizza Section (already included in previous code)
            // Burger Section (already included in previous code)
            // Sandwich Section (already included in previous code)
            // Chinese Starter Section (already included in previous code)
            // Chinese Main Course Section (already included in previous code)
            // South Indian Section (already included in previous code)
            // Soup Section (already included in previous code)
            // Salad Section (already included in previous code)
          
            // Chinese Rice Starter Section
            { name: "Veg Fried Rice", restaurant: "Mansi Restaurant", price: 110, image: "vegfriedrice.jpeg" },
            { name: "Manchurian Fried Rice", restaurant: "Mansi Restaurant", price: 150, image: "manchurianfriedrice.jpeg" },
            { name: "Schezwan Fried Rice", restaurant: "Mansi Restaurant", price: 150, image: "schezwanfriedrice.jpeg" },
            { name: "Paneer Fried Rice", restaurant: "Mansi Restaurant", price: 160, image: "paneerfriedrice.jpeg" },
            { name: "Hot Chilly Fried Rice", restaurant: "Mansi Restaurant", price: 170, image: "hotchillyfriedrice.jpeg" },
          
            // Snacks & Starter Section
            { name: "Paneer Pakoda", restaurant: "Mansi Restaurant", price: 100, image: "paneerpakoda.jpeg" },
            { name: "Onion Pakoda", restaurant: "Mansi Restaurant", price: 70, image: "onionpakoda.jpeg" },
            { name: "Veg Pakoda", restaurant: "Mansi Restaurant", price: 90, image: "vegpakoda.jpeg" },
            { name: "Potato Pakoda", restaurant: "Mansi Restaurant", price: 70, image: "potatopakoda.jpeg" },
            { name: "Peanut Masala", restaurant: "Mansi Restaurant", price: 90, image: "peanutmasala.jpeg" },
            { name: "Finger Chips", restaurant: "Mansi Restaurant", price: 90, image: "fingerchips.jpeg" },
            { name: "Paneer Finger Fry", restaurant: "Mansi Restaurant", price: 100, image: "paneerfingerfry.jpeg" },
            { name: "Chole Bhature", restaurant: "Mansi Restaurant", price: 100, image: "cholebhature.jpeg" },
            { name: "Pao Bhaji", restaurant: "Mansi Restaurant", price: 90, image: "paobhaji.jpeg" },
          
            // Italian Special Section
            { name: "Masala Maggi", restaurant: "Mansi Restaurant", price: 60, image: "masalamaggi.jpeg" },
            { name: "Veg Maggi", restaurant: "Mansi Restaurant", price: 80, image: "vegmaggi.jpeg" },
            { name: "Onion Maggi", restaurant: "Mansi Restaurant", price: 70, image: "onionmaggi.jpeg" },
            { name: "Red Cheese Pasta", restaurant: "Mansi Restaurant", price: 160, image: "redcheesepasta.jpeg" },
            { name: "White Cheese Pasta", restaurant: "Mansi Restaurant", price: 180, image: "whitecheesepasta.jpeg" },
          
            // Raita Section
            { name: "Plain Raita", restaurant: "Mansi Restaurant", price: 50, image: "plainraita.jpeg" },
            { name: "Boondi Raita", restaurant: "Mansi Restaurant", price: 60, image: "boondiraita.jpeg" },
            { name: "Veg Raita", restaurant: "Mansi Restaurant", price: 70, image: "vegraita.jpeg" },
            { name: "Cucumber Raita", restaurant: "Mansi Restaurant", price: 60, image: "cucumberraita.jpeg" },
            { name: "Onion Raita", restaurant: "Mansi Restaurant", price: 60, image: "onionraita.jpeg" },
            { name: "Buttermilk", restaurant: "Mansi Restaurant", price: 40, image: "buttermilk.jpeg" },
            { name: "Fruit Raita", restaurant: "Mansi Restaurant", price: 100, image: "fruitraita.jpeg" },
          
            // Soya Chaap Special Section
            { name: "Malai Chaap", restaurant: "Mansi Restaurant", price: 250, image: "malaichaap.jpeg" },
            { name: "Mushroom Masala", restaurant: "Mansi Restaurant", price: 200, image: "mushroommasala.jpeg" },
            { name: "Chaap Curry", restaurant: "Mansi Restaurant", price: 220, image: "chaapcurry.jpeg" },
            { name: "Matar Mushroom", restaurant: "Mansi Restaurant", price: 190, image: "matarmushroom.jpeg" },
            { name: "Chaap Masala", restaurant: "Mansi Restaurant", price: 230, image: "chaapmasala.jpeg" },
            { name: "Kadhai Mushroom", restaurant: "Mansi Restaurant", price: 200, image: "kadahimushroom.jpeg" },
            { name: "Kadhai Soya Chaap", restaurant: "Mansi Restaurant", price: 250, image: "kadhisoyachaap.jpeg" },
            { name: "Mushroom Do Pyaza", restaurant: "Mansi Restaurant", price: 220, image: "mushroomdopyaza.jpeg" },




            
                // Pastry Section (already included in previous code)
                // Pizza Section (already included in previous code)
                // Burger Section (already included in previous code)
                // Sandwich Section (already included in previous code)
                // Chinese Starter Section (already included in previous code)
                // Chinese Main Course Section (already included in previous code)
                // South Indian Section (already included in previous code)
                // Soup Section (already included in previous code)
                // Salad Section (already included in previous code)
                // Chinese Rice Starter Section (already included in previous code)
                // Snacks & Starter Section (already included in previous code)
                // Italian Special Section (already included in previous code)
                // Raita Section (already included in previous code)
                // Soya Chaap Special Section (already included in previous code)
              
                // Indian Main Course Section
                { name: "Chana Masala", restaurant: "Mansi Restaurant", price: 140, image: "chanamasala.jpeg" },
                { name: "Dum Aloo Kashmiri", restaurant: "Mansi Restaurant", price: 190, image: "dumalookashmiri.jpeg" },
                { name: "Pindi Chana Masala", restaurant: "Mansi Restaurant", price: 150, image: "pindichanamasala.jpeg" },
                { name: "Aloo Gobhi", restaurant: "Mansi Restaurant", price: 120, image: "aloogobhi.jpeg" },
                { name: "Aloo Tamatar Matar", restaurant: "Mansi Restaurant", price: 120, image: "alootamatarmatar.jpeg" },
                { name: "Mix Veg", restaurant: "Mansi Restaurant", price: 170, image: "mixveg.jpeg" },
                { name: "Sev Tomato", restaurant: "Mansi Restaurant", price: 160, image: "sevtomato.jpeg" },
                { name: "Methi Malai Matar", restaurant: "Mansi Restaurant", price: 190, image: "methimalaimatar.jpeg" },
                { name: "Veg Kofta", restaurant: "Mansi Restaurant", price: 170, image: "vegkofta.jpeg" },
                { name: "Malai Kofta", restaurant: "Mansi Restaurant", price: 210, image: "malaikofta.jpeg" },
                { name: "Rajma Masala", restaurant: "Mansi Restaurant", price: 180, image: "rajmamasala.jpeg" },
                { name: "Baigan Bharta", restaurant: "Mansi Restaurant", price: 140, image: "baiganbharta.jpeg" },
                { name: "Bhindi Masala", restaurant: "Mansi Restaurant", price: 150, image: "bhindimasala.jpeg" },
              
                // Paneer Special Section
                { name: "Matar Paneer", restaurant: "Mansi Restaurant", price: 190, image: "matarpaneer.jpeg" },
                { name: "Shahi Paneer", restaurant: "Mansi Restaurant", price: 200, image: "shahipaneer.jpeg" },
                { name: "Paneer Butter Masala", restaurant: "Mansi Restaurant", price: 220, image: "paneerbuttermasala.jpeg" },
                { name: "Palak Paneer", restaurant: "Mansi Restaurant", price: 200, image: "palakpaneer.jpeg" },
                { name: "Kadhai Paneer", restaurant: "Mansi Restaurant", price: 200, image: "kadhaipaneer.jpeg" },
                { name: "Paneer Do Pyaza", restaurant: "Mansi Restaurant", price: 200, image: "paneerdopyaza.jpeg" },
                { name: "Kaju Paneer Masala", restaurant: "Mansi Restaurant", price: 230, image: "kajupaneermasala.jpeg" },
                { name: "Punjabi Paneer", restaurant: "Mansi Restaurant", price: 200, image: "punjabipaneer.jpeg" },
                { name: "Paneer Jaipuri", restaurant: "Mansi Restaurant", price: 200, image: "paneerjaipuri.jpeg" },
                { name: "Paneer Dum Handi", restaurant: "Mansi Restaurant", price: 200, image: "paneerdumhandi.jpeg" },
                { name: "Paneer Saagwala", restaurant: "Mansi Restaurant", price: 210, image: "paneersaagwala.jpeg" },
                { name: "Mansi Special Paneer", restaurant: "Mansi Restaurant", price: 250, image: "mansispecialpaneer.jpeg" },
                { name: "Paneer Pulav", restaurant: "Mansi Restaurant", price: 170, image: "paneerpulav.jpeg" },
                { name: "Mansi Tofaani Paneer", restaurant: "Mansi Restaurant", price: 270, image: "mansitofaanipaneer.jpeg" },
                { name: "Paneer Bhurji", restaurant: "Mansi Restaurant", price: 220, image: "paneerbhurji.jpeg" },
                { name: "Paneer Rada", restaurant: "Mansi Restaurant", price: 240, image: "paneerrada.jpeg" },
                { name: "Veg Jalfrezi Paneer", restaurant: "Mansi Restaurant", price: 220, image: "vegjalfrezipaneer.jpeg" },
                { name: "Makhana Paneer", restaurant: "Mansi Restaurant", price: 210, image: "makhanapaneer.jpeg" },
              
                // Rice Section
                { name: "Plain Rice", restaurant: "Mansi Restaurant", price: 80, image: "plainrice.jpeg" },
                { name: "Jeera Rice", restaurant: "Mansi Restaurant", price: 100, image: "jeerarice.jpeg" },
                { name: "Peas Pulao", restaurant: "Mansi Restaurant", price: 110, image: "peaspulao.jpeg" },
                { name: "Veg Pulao", restaurant: "Mansi Restaurant", price: 120, image: "vegpulao.jpeg" },
                { name: "Kashmiri Pulav", restaurant: "Mansi Restaurant", price: 150, image: "kashmiripulav.jpeg" },
                { name: "Butter Rice", restaurant: "Mansi Restaurant", price: 110, image: "butterrice.jpeg" },
              
                // Dal Section
                { name: "Dal Fry", restaurant: "Mansi Restaurant", price: 110, image: "dalfry.jpeg" },
                { name: "Jeera Dal", restaurant: "Mansi Restaurant", price: 100, image: "jeeradal.jpeg" },
                { name: "Butter Dal", restaurant: "Mansi Restaurant", price: 100, image: "butterdal.jpeg" },
                { name: "Dal Tadka", restaurant: "Mansi Restaurant", price: 120, image: "daltadka.jpeg" },
                { name: "Dal Makhni", restaurant: "Mansi Restaurant", price: 170, image: "dalmakhni.jpeg" },
                { name: "Mix Veg Dal", restaurant: "Mansi Restaurant", price: 160, image: "mixvegdal.jpeg" },
                { name: "Dal Bhukhara", restaurant: "Mansi Restaurant", price: 180, image: "dalbhukhara.jpeg" },





                
                    // Pastry Section (already included in previous code)
                    // Pizza Section (already included in previous code)
                    // Burger Section (already included in previous code)
                    // Sandwich Section (already included in previous code)
                    // Chinese Starter Section (already included in previous code)
                    // Chinese Main Course Section (already included in previous code)
                    // South Indian Section (already included in previous code)
                    // Soup Section (already included in previous code)
                    // Salad Section (already included in previous code)
                    // Chinese Rice Starter Section (already included in previous code)
                    // Snacks & Starter Section (already included in previous code)
                    // Italian Special Section (already included in previous code)
                    // Raita Section (already included in previous code)
                    // Soya Chaap Special Section (already included in previous code)
                    // Indian Main Course Section (already included in previous code)
                    // Paneer Special Section (already included in previous code)
                    // Rice Section (already included in previous code)
                    // Dal Section (already included in previous code)
                  
                    // Breads Section
                    { name: "Chapati", restaurant: "Mansi Restaurant", price: 12, image: "chapati.jpeg" },
                    { name: "Plain Roti", restaurant: "Mansi Restaurant", price: 10, image: "plainroti.jpeg" },
                    { name: "Butter Roti", restaurant: "Mansi Restaurant", price: 12, image: "butterroti.jpeg" },
                    { name: "Missi Roti", restaurant: "Mansi Restaurant", price: 35, image: "missiroti.jpeg" },
                    { name: "Plain Naan", restaurant: "Mansi Restaurant", price: 30, image: "plainnaan.jpeg" },
                    { name: "Butter Naan", restaurant: "Mansi Restaurant", price: 40, image: "butternaan.jpeg" },
                    { name: "Garlic Naan", restaurant: "Mansi Restaurant", price: 50, image: "garlicnaan.jpeg" },
                    { name: "Ginger Naan", restaurant: "Mansi Restaurant", price: 50, image: "gingernaan.jpeg" },
                    { name: "Cheese Naan", restaurant: "Mansi Restaurant", price: 70, image: "cheesenaan.jpeg" },
                  
                    // Biryani Section
                    { name: "Veg Biryani", restaurant: "Mansi Restaurant", price: 140, image: "vegbiryani.jpeg" },
                    { name: "Veg Achari Biryani", restaurant: "Mansi Restaurant", price: 160, image: "vegacharibiryani.jpeg" },
                    { name: "Hyderabadi Biryani", restaurant: "Mansi Restaurant", price: 170, image: "hyderabadiibiryani.jpeg" },
                    { name: "Veg Paneer Biryani", restaurant: "Mansi Restaurant", price: 180, image: "vegpaneerbiryani.jpeg" },
                    { name: "Mansi Special Biryani", restaurant: "Mansi Restaurant", price: 190, image: "mansispecialbiryani.jpeg" },
                  
                    // Paratha Section
                    { name: "Plain Paratha", restaurant: "Mansi Restaurant", price: 30, image: "plainparatha.jpeg" },
                    { name: "Aloo Paratha", restaurant: "Mansi Restaurant", price: 50, image: "alooparatha.jpeg" },
                    { name: "Onion Paratha", restaurant: "Mansi Restaurant", price: 40, image: "onionparatha.jpeg" },
                    { name: "Mix Veg Paratha", restaurant: "Mansi Restaurant", price: 60, image: "mixvegparatha.jpeg" },
                    { name: "Paneer Paratha", restaurant: "Mansi Restaurant", price: 80, image: "paneerparatha.jpeg" },
                    { name: "Stuffed Kulcha", restaurant: "Mansi Restaurant", price: 70, image: "stuffedkulcha.jpeg" },
                    { name: "Mix Kulcha", restaurant: "Mansi Restaurant", price: 80, image: "mixkulcha.jpeg" },
                  
                    // Tandoor Special Section
                    { name: "Paneer Tikka", restaurant: "Mansi Restaurant", price: 230, image: "paneertikka.jpeg" },
                    { name: "Paneer Achari Tikka", restaurant: "Mansi Restaurant", price: 240, image: "paneeracharittikka.jpeg" },
                    { name: "Hara Bhara Kebab", restaurant: "Mansi Restaurant", price: 150, image: "harabharakebab.jpeg" },
                    { name: "Kothi Roll", restaurant: "Mansi Restaurant", price: 120, image: "kothiroll.jpeg" },
                    { name: "Bharwa Aloo", restaurant: "Mansi Restaurant", price: 150, image: "bharwaaloo.jpeg" },
                  
                    // Shakes & Beverages Section
                    { name: "Banana Shake", restaurant: "Mansi Restaurant", price: 60, image: "bananashake.jpeg" },
                    { name: "Pineapple Shake", restaurant: "Mansi Restaurant", price: 90, image: "pineappleshake.jpeg" },
                    { name: "Chocolate Shake", restaurant: "Mansi Restaurant", price: 100, image: "chocolateshake.jpeg" },
                    { name: "Butterscotch Shake", restaurant: "Mansi Restaurant", price: 90, image: "butterscotchshake.jpeg" },
                    { name: "Strawberry Shake", restaurant: "Mansi Restaurant", price: 90, image: "strawberryshake.jpeg" },
                    { name: "Mango Shake", restaurant: "Mansi Restaurant", price: 80, image: "mangoshake.jpeg" },
                    { name: "Oreo Shake", restaurant: "Mansi Restaurant", price: 100, image: "oreoshake.jpeg" },
                    { name: "Badam Shake", restaurant: "Mansi Restaurant", price: 110, image: "badamshake.jpeg" },
                    { name: "Dry Fruit Shake", restaurant: "Mansi Restaurant", price: 110, image: "dryfruitshake.jpeg" },
                    { name: "Masala Tea", restaurant: "Mansi Restaurant", price: 30, image: "masalatea.jpeg" },
                    { name: "Lemon Tea", restaurant: "Mansi Restaurant", price: 40, image: "lemontea.jpeg" },
                    { name: "Hot Coffee", restaurant: "Mansi Restaurant", price: 50, image: "hotcoffee.jpeg" },
                    { name: "Black Coffee", restaurant: "Mansi Restaurant", price: 30, image: "blackcoffee.jpeg" },
                    { name: "Lemon Soda", restaurant: "Mansi Restaurant", price: 50, image: "lemonsoda.jpeg" },
                    { name: "Cold Drink", restaurant: "Mansi Restaurant", price: 30, image: "colddrink.jpeg" },
                    { name: "Lassi", restaurant: "Mansi Restaurant", price: 50, image: "lassi.jpeg" },
                    { name: "Cold Coffee", restaurant: "Mansi Restaurant", price: 100, image: "coldcoffee.jpeg" },
                  
                    // Mocktail Section
                    { name: "Blue Lagoon", restaurant: "Mansi Restaurant", price: 100, image: "bluelagoon.jpeg" },
                    { name: "Water Melon", restaurant: "Mansi Restaurant", price: 100, image: "watermelon.jpeg" },
                    { name: "Kiwi Mojito", restaurant: "Mansi Restaurant", price: 100, image: "kiwimojito.jpeg" },
                    { name: "Mint Mojito", restaurant: "Mansi Restaurant", price: 100, image: "mintmojito.jpeg" },
                  
                    // Sweets Section
                    { name: "Gulab Jamun", restaurant: "Mansi Restaurant", price: 50, image: "gulabjamun.jpeg" },
                    { name: "White Rasgulla", restaurant: "Mansi Restaurant", price: 50, image: "whiterasgulla.jpeg" },
                    { name: "Gajar Ka Halwa", restaurant: "Mansi Restaurant", price: 70, image: "gajarkahalwa.jpeg" },
                    { name: "Shahi Kheer", restaurant: "Mansi Restaurant", price: 100, image: "shahikheer.jpeg" },
                  
                    // Ice Cream Section
                    { name: "Vanilla Ice Cream", restaurant: "Mansi Restaurant", price: 50, image: "vanillaicecream.jpeg" },
                    { name: "Chocolate Ice Cream", restaurant: "Mansi Restaurant", price: 60, image: "chocolateicecream.jpeg" },
                    { name: "Strawberry Ice Cream", restaurant: "Mansi Restaurant", price: 60, image: "strawberryicecream.jpeg" },
                    { name: "Butterscotch Ice Cream", restaurant: "Mansi Restaurant", price: 60, image: "butterscotchicecream.jpeg" },
                  
                    // Bakery Special Section
                    { name: "Donut", restaurant: "Mansi Restaurant", price: 50, image: "donut.jpeg" },
                    { name: "Muffins", restaurant: "Mansi Restaurant", price: 40, image: "muffins.jpeg" },
                    { name: "Paneer Tikka Roll", restaurant: "Mansi Restaurant", price: 90, image: "paneertikkaroll.jpeg" },
                    { name: "Hot Dog", restaurant: "Mansi Restaurant", price: 100, image: "hotdog.jpeg" },
                    { name: "Pudding", restaurant: "Mansi Restaurant", price: 30, image: "pudding.jpeg" },


                  //COUNTRY BITE RESTAURENT


                  
                    { name: "Fresh Lime Soda", restaurant: "The Country Bite Restaurant", price: 79, image: "fresh_lime_soda.jpeg" },
                    { name: "Cold Coffee", restaurant: "The Country Bite Restaurant", price: 119, image: "cold_coffee.jpeg" },
                    { name: "Cold Coffee with Ice Cream", restaurant: "The Country Bite Restaurant", price: 139, image: "cold_coffee_icecream.jpeg" },
                    { name: "Chocolate Shake", restaurant: "The Country Bite Restaurant", price: 119, image: "chocolate_shake.jpeg" },
                    { name: "Chocolate Shake with Ice Cream", restaurant: "The Country Bite Restaurant", price: 139, image: "chocolate_shake_icecream.jpeg" },
                    { name: "Strawberry Shake", restaurant: "The Country Bite Restaurant", price: 119, image: "strawberry_shake.jpeg" },
                    { name: "Strawberry Shake with Ice Cream", restaurant: "The Country Bite Restaurant", price: 139, image: "strawberry_shake_icecream.jpeg" },
                    { name: "Vanilla Shake", restaurant: "The Country Bite Restaurant", price: 119, image: "vanilla_shake.jpeg" },
                    { name: "Vanilla Shake with Ice Cream", restaurant: "The Country Bite Restaurant", price: 139, image: "vanilla_shake_icecream.jpeg" },
                    { name: "Oreo Shake", restaurant: "The Country Bite Restaurant", price: 119, image: "oreo_shake.jpeg" },
                    { name: "Oreo Shake with Ice Cream", restaurant: "The Country Bite Restaurant", price: 139, image: "oreo_shake_icecream.jpeg" },
                    { name: "Milk Shake with Ice Cream", restaurant: "The Country Bite Restaurant", price: 129, image: "milk_shake_icecream.jpeg" },
                    { name: "Butter Scotch Shake", restaurant: "The Country Bite Restaurant", price: 119, image: "butter_scotch_shake.jpeg" },
                    { name: "Butter Scotch with Ice Cream", restaurant: "The Country Bite Restaurant", price: 139, image: "butter_scotch_icecream.jpeg" },
                    { name: "Mint Mojito", restaurant: "The Country Bite Restaurant", price: 129, image: "mint_mojito.jpeg" },
                    { name: "Blue Angel", restaurant: "The Country Bite Restaurant", price: 129, image: "blue_angel.jpeg" },
                    { name: "Blue Ocean", restaurant: "The Country Bite Restaurant", price: 129, image: "blue_ocean.jpeg" },
                    { name: "Blue Lagoon", restaurant: "The Country Bite Restaurant", price: 129, image: "blue_lagoon.jpeg" },
                    { name: "Cold Drink", restaurant: "The Country Bite Restaurant", price: 39, image: "cold_drink.jpeg" },
                    { name: "Masala Cold Drink", restaurant: "The Country Bite Restaurant", price: 49, image: "masala_cold_drink.jpeg" },
                    { name: "The Country Bite Drink", restaurant: "The Country Bite Restaurant", price: 29, image: "country_bite_drink.jpeg" },
                    { name: "Tea", restaurant: "The Country Bite Restaurant", price: 25, image: "tea.jpeg" },
                    { name: "Masala/Ginger Tea", restaurant: "The Country Bite Restaurant", price: 35, image: "masala_ginger_tea.jpeg" },
                    { name: "Hot Coffee", restaurant: "The Country Bite Restaurant", price: 45, image: "hot_coffee.jpeg" },
                    { name: "Lassi Sweet/Salted", restaurant: "The Country Bite Restaurant", price: 75, image: "lassi.jpeg" },
                    { name: "Mineral Water", restaurant: "The Country Bite Restaurant", price: "As per MRP", image: "mineral_water.jpeg" },
                    { name: "Tomato Soup", restaurant: "The Country Bite Restaurant", price: 135, image: "tomato_soup.jpeg" },
                    { name: "Vegetable Soup", restaurant: "The Country Bite Restaurant", price: 119, image: "vegetable_soup.jpeg" },
                    { name: "Veg Hot & Sour Soup", restaurant: "The Country Bite Restaurant", price: 135, image: "veg_hot_sour_soup.jpeg" },
                    { name: "Man Chow Soup", restaurant: "The Country Bite Restaurant", price: 135, image: "man_chow_soup.jpeg" },
                    { name: "Sweet Corn Soup", restaurant: "The Country Bite Restaurant", price: 135, image: "sweet_corn_soup.jpeg" },
                    { name: "French Fry", restaurant: "The Country Bite Restaurant", price: 119, image: "french_fry.jpeg" },
                    { name: "Peri-Peri French Fry", restaurant: "The Country Bite Restaurant", price: 139, image: "peri_peri_french_fry.jpeg" },
                    { name: "Crispy Sweet Corn", restaurant: "The Country Bite Restaurant", price: 119, image: "crispy_sweet_corn.jpeg" },
                    { name: "Crispy Corn", restaurant: "The Country Bite Restaurant", price: 129, image: "crispy_corn.jpeg" },
                    { name: "Chilly Baby Corn", restaurant: "The Country Bite Restaurant", price: 139, image: "chilly_baby_corn.jpeg" },
                    { name: "Veg Momos F/S", restaurant: "The Country Bite Restaurant", price: "169/179", image: "veg_momos.jpeg" },
                    { name: "Honey Chilly Potato", restaurant: "The Country Bite Restaurant", price: 149, image: "honey_chilly_potato.jpeg" },
                    { name: "Chilly Potato", restaurant: "The Country Bite Restaurant", price: 139, image: "chilly_potato.jpeg" },
                    { name: "Spring Roll", restaurant: "The Country Bite Restaurant", price: 139, image: "spring_roll.jpeg" },
                    { name: "Plain Maggi", restaurant: "The Country Bite Restaurant", price: 109, image: "plain_maggi.jpeg" },
                    { name: "Masala Maggi", restaurant: "The Country Bite Restaurant", price: 129, image: "masala_maggi.jpeg" },
                    { name: "Chilli Paneer-Dry/Gravy", restaurant: "The Country Bite Restaurant", price: 179, image: "chilli_paneer.jpeg" },
                    { name: "Veg Manchurian-Dry/Gravy", restaurant: "The Country Bite Restaurant", price: 159, image: "veg_manchurian.jpeg" },
                    { name: "Chilly Mushroom", restaurant: "The Country Bite Restaurant", price: 179, image: "chilly_mushroom.jpeg" },
                    { name: "Veg Burger", restaurant: "The Country Bite Restaurant", price: 109, image: "veg_burger.jpeg" },
                    { name: "Cheese Burger", restaurant: "The Country Bite Restaurant", price: 119, image: "cheese_burger.jpeg" },
                    { name: "Paneer Burger", restaurant: "The Country Bite Restaurant", price: 129, image: "paneer_burger.jpeg" },
                    { name: "Green Sandwich", restaurant: "The Country Bite Restaurant", price: 99, image: "green_sandwich.jpeg" },
                    { name: "Veg Sandwich", restaurant: "The Country Bite Restaurant", price: 109, image: "veg_sandwich.jpeg" },
                    { name: "Cheese Sandwich", restaurant: "The Country Bite Restaurant", price: 109, image: "cheese_sandwich.jpeg" },
                    { name: "Veg Grill Sandwich", restaurant: "The Country Bite Restaurant", price: 119, image: "veg_grill_sandwich.jpeg" },
                    { name: "Spicy Paneer Grill Sandwich", restaurant: "The Country Bite Restaurant", price: 129, image: "spicy_paneer_grill_sandwich.jpeg" },
                    { name: "Veg Pakoda", restaurant: "The Country Bite Restaurant", price: 129, image: "veg_pakoda.jpeg" },
                    { name: "Paneer Pakoda", restaurant: "The Country Bite Restaurant", price: 139, image: "paneer_pakoda.jpeg" },
                    { name: "Veg Cutlet", restaurant: "The Country Bite Restaurant", price: 109, image: "veg_cutlet.jpeg" },
                    { name: "Chhola Bhatura", restaurant: "The Country Bite Restaurant", price: 129, image: "chhola_bhatura.jpeg" },
                    { name: "Pav Bhaji", restaurant: "The Country Bite Restaurant", price: 129, image: "pav_bhaji.jpeg" },
                    { name: "Cheese Boll", restaurant: "The Country Bite Restaurant", price: 129, image: "cheese_boll.jpeg" },
                    { name: "Hara Bhara Kabab", restaurant: "The Country Bite Restaurant", price: 129, image: "hara_bhara_kabab.jpeg" },
                    { name: "Dahi Kabab", restaurant: "The Country Bite Restaurant", price: 149, image: "dahi_kabab.jpeg" },
                    { name: "Veg Seek Kabab", restaurant: "The Country Bite Restaurant", price: 199, image: "veg_seek_kabab.jpeg" },
                    { name: "Paneer Tikka", restaurant: "The Country Bite Restaurant", price: 199, image: "paneer_tikka.jpeg" },
                    { name: "Paneer Afgani Tikka", restaurant: "The Country Bite Restaurant", price: 209, image: "paneer_afgani_tikka.jpeg" },
                    { name: "Paneer Malai Tikka", restaurant: "The Country Bite Restaurant", price: 199, image: "paneer_malai_tikka.jpeg" },
                    { name: "Soya Malai Chaap", restaurant: "The Country Bite Restaurant", price: 209, image: "soya_malai_chaap.jpeg" },
                    { name: "Soya Chaap Tandoor", restaurant: "The Country Bite Restaurant", price: 209, image: "soya_chaap_tandoor.jpeg" },
                    { name: "The Country Bite Burger", restaurant: "The Country Bite Restaurant", price: 49, image: "country_bite_burger.jpeg" },
                    { name: "The Country Bite Momos", restaurant: "The Country Bite Restaurant", price: 49, image: "country_bite_momos.jpeg" },
                   



        
                  ];
              

          





      





  



// Function to add items to the cart
function addToCart(itemName, itemPrice, itemImage, restaurantName) {
  if (cart[itemName]) {
    cart[itemName].quantity += 1; // If item exists, increase quantity
  } else {
    cart[itemName] = { price: itemPrice, quantity: 1, image: itemImage, restaurant: restaurantName }; // Add new item to cart
  }

  updateCartCount(); // Update the cart count
  saveCartToLocalStorage(); // Save cart to localStorage
}

// Function to update the cart count displayed on the cart icon
function updateCartCount() {
  let totalItems = 0;
  for (let item in cart) {
    totalItems += cart[item].quantity; // Add the quantity of each item
  }

  // Update the cart count in the DOM
  document.getElementById("cart-count").textContent = totalItems;
}

// Function to handle search functionality
function searchFood() {
  const searchQuery = document.getElementById("search").value.toLowerCase(); // Get the search input
  let filteredItems = foodItems.filter(item => {
    return item.name.toLowerCase().includes(searchQuery) || item.restaurant.toLowerCase().includes(searchQuery);
  });

  displayFoodItems(filteredItems); // Display only filtered items
}

// Function to display food items dynamically
function displayFoodItems(items) {
  const foodMenu = document.getElementById("food-menu");
  foodMenu.innerHTML = ''; // Clear current food menu

  items.forEach(item => {
    const foodItemElement = createFoodItemElement(item);
    foodMenu.appendChild(foodItemElement); // Append each food item to the menu
  });
}

// Function to create a food item element
function createFoodItemElement(item) {
  const div = document.createElement('div');
  div.classList.add('food-item');
  div.setAttribute('data-name', item.name);
  div.setAttribute('data-restaurant', item.restaurant);

  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p class="restaurant-name">${item.restaurant}</p>
    <p>₹ ${item.price}</p>
    <button onclick="addToCart('${item.name}', ${item.price}, '${item.image}', '${item.restaurant}')">Add to Cart</button>
  `;

  return div;
}

// Function to save cart data to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Initial display of all food items and update cart count
document.addEventListener("DOMContentLoaded", function() {
  displayFoodItems(foodItems); // Initially display all food items when the page loads
  updateCartCount(); // Update the cart count when the page loads
});